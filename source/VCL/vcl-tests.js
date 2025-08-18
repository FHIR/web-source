/**
 * Comprehensive test suite for VCL (ValueSet Composition Language) Parser
 * Translated from Java VCLParserTest
 * Compatible with Node.js and browser environments
 */

// Helper function to get VCL parser safely
function getVCLParser() {
  if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    return require('./vcl-parser');
  } else {
    // Browser - get from window object
    if (typeof window !== 'undefined' && window.VCLParser) {
      return window.VCLParser;
    } else {
      throw new Error('VCLParser not found. Make sure vcl-parser.js is loaded before vcl-tests.js');
    }
  }
}

// Simple test framework
class TestSuite {
  constructor(name) {
    this.name = name;
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
    this.errors = [];
  }

  addTest(name, testFunction) {
    this.tests.push({ name, fn: testFunction });
  }

  assertEquals(expected, actual, message) {
    if (expected !== actual) {
      throw new Error(`${message || 'Assertion failed'}: expected "${expected}", got "${actual}"`);
    }
  }

  assertTrue(condition, message) {
    if (!condition) {
      throw new Error(message || 'Expected true, got false');
    }
  }

  assertNotNull(value, message) {
    if (value == null) {
      throw new Error(message || 'Expected non-null value');
    }
  }

  assertThrows(fn, expectedErrorType, message) {
    try {
      fn();
      throw new Error(`${message || 'Expected exception'}: no exception was thrown`);
    } catch (e) {
      if (expectedErrorType && !(e instanceof expectedErrorType)) {
        throw new Error(`${message || 'Wrong exception type'}: expected ${expectedErrorType.name}, got ${e.constructor.name}`);
      }
      // Expected exception was thrown
    }
  }

  checkConceptSet(conceptSet, systemUri, conceptCount) {
    if (systemUri) {
      this.assertEquals(systemUri, conceptSet.system, 'System URI mismatch');
    }
    this.assertEquals(conceptCount, conceptSet.concept ? conceptSet.concept.length : 0, 'Concept count mismatch');
  }

  checkFilter(conceptSet, filterIndex, propertyName, op, value) {
    this.assertTrue(filterIndex < conceptSet.filter.length, 'Filter index out of range');
    const filter = conceptSet.filter[filterIndex];
    this.assertEquals(propertyName, filter.property, 'Filter property mismatch');
    this.assertEquals(op, filter.op, 'Filter operator mismatch');
    this.assertEquals(value, filter.value, 'Filter value mismatch');
  }

  printValueSetStructure(valueSet) {
    console.log('ValueSet structure:');
    console.log(`  Includes: ${valueSet.compose.include.length}`);
    valueSet.compose.include.forEach((include, i) => {
      console.log(`    Include ${i}: system=${include.system || ''}, concepts=${include.concept ? include.concept.length : 0}, filters=${include.filter ? include.filter.length : 0}, valueSets=${include.valueSet ? include.valueSet.length : 0}`);
    });
    console.log(`  Excludes: ${valueSet.compose.exclude.length}`);
    valueSet.compose.exclude.forEach((exclude, i) => {
      console.log(`    Exclude ${i}: system=${exclude.system || ''}, concepts=${exclude.concept ? exclude.concept.length : 0}, filters=${exclude.filter ? exclude.filter.length : 0}, valueSets=${exclude.valueSet ? exclude.valueSet.length : 0}`);
    });
  }

  async run() {
    console.log(`\n=== Running ${this.name} ===`);
    
    for (const test of this.tests) {
      try {
        await test.fn.call(this);
        this.passed++;
        console.log(`✓ ${test.name}`);
      } catch (error) {
        this.failed++;
        this.errors.push({ test: test.name, error: error.message });
        console.log(`✗ ${test.name}: ${error.message}`);
      }
    }

    console.log(`\n=== Results ===`);
    console.log(`Passed: ${this.passed}`);
    console.log(`Failed: ${this.failed}`);
    console.log(`Total: ${this.tests.length}`);

    if (this.errors.length > 0) {
      console.log('\n=== Errors ===');
      this.errors.forEach(err => {
        console.log(`${err.test}: ${err.error}`);
      });
    }

    return this.failed === 0;
  }
}

// Create test suite
const testSuite = new TestSuite('VCL Parser Tests');

// Test: Simple codes with disjunction
testSuite.addTest('Simple codes with disjunction', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(subscriber;provider)');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  const include = vs.compose.include[0];
  this.assertEquals(2, include.concept.length, 'Should have 2 concepts');
  this.assertEquals('subscriber', include.concept[0].code, 'First concept mismatch');
  this.assertEquals('provider', include.concept[1].code, 'Second concept mismatch');
});

// Test: Multiple systems with multiple codes
testSuite.addTest('Multiple systems with multiple codes', function() {
  const VCLParser = getVCLParser();
  const vcl = '(http://loinc.org)(41995-2;4548-4;4549-2;17855-8;17856-6;62388-4;71875-9;59261-8;86910-7);' +
              '(http://snomed.info/sct)(365845005;165679005;165680008;65681007;451061000124104;451051000124101);' +
              '(http://www.ama-assn.org/go/cpt)(83036;83037;3044F;3046F)';

  const vs = VCLParser.parseVCL(vcl);
  
  this.assertEquals(3, vs.compose.include.length, 'Should have 3 includes');
  
  // Check LOINC system
  this.checkConceptSet(vs.compose.include[0], 'http://loinc.org', 9);
  this.assertEquals('41995-2', vs.compose.include[0].concept[0].code, 'LOINC first concept');
  
  // Check SNOMED system
  this.checkConceptSet(vs.compose.include[1], 'http://snomed.info/sct', 6);
  
  // Check CPT system
  this.checkConceptSet(vs.compose.include[2], 'http://www.ama-assn.org/go/cpt', 4);
});

// Test: Complex expression with filters and exclusion
testSuite.addTest('Complex expression with filters and exclusion', function() {
  const VCLParser = getVCLParser();
  const vcl = '((http://snomed.info/sct)concept<<17311000168105;' +
              '(http://snomed.info/sct)(61796011000036105;923929011000036103);' +
              '(http://loinc.org)ancestor=LP185676-6)-((http://loinc.org)76573-5)';

  const vs = VCLParser.parseVCL(vcl);
  
  this.assertEquals(3, vs.compose.include.length, 'Should have 3 includes');
  this.assertEquals(1, vs.compose.exclude.length, 'Should have 1 exclude');
  
  // Check exclusion
  this.checkConceptSet(vs.compose.exclude[0], 'http://loinc.org', 1);
  this.assertEquals('76573-5', vs.compose.exclude[0].concept[0].code, 'Excluded concept');
});

// Test: Different systems with disjunction
testSuite.addTest('Different systems with disjunction', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(http://hl7.org/fhir/paymentstatus)paid;(http://hl7.org/fhir/payeetype)provider');
  
  this.assertEquals(2, vs.compose.include.length, 'Should have 2 includes');
  
  this.checkConceptSet(vs.compose.include[0], 'http://hl7.org/fhir/paymentstatus', 1);
  this.assertEquals('paid', vs.compose.include[0].concept[0].code, 'First include concept');
  
  this.checkConceptSet(vs.compose.include[1], 'http://hl7.org/fhir/payeetype', 1);
  this.assertEquals('provider', vs.compose.include[1].concept[0].code, 'Second include concept');
});

// Test: Include valueset
testSuite.addTest('Include valueset', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('^(http://hl7.org/fhir/ValueSet/payeetype)');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  const include = vs.compose.include[0];
  this.assertEquals(1, include.valueSet.length, 'Should have 1 valueSet');
  this.assertEquals('http://hl7.org/fhir/ValueSet/payeetype', include.valueSet[0], 'ValueSet URI');
});

// Test: Filter without system
testSuite.addTest('Filter without system', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('ancestor=LP185676-6');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'ancestor', VCLParser.FilterOperator.EQUAL, 'LP185676-6');
});

// Test: Regex filter
testSuite.addTest('Regex filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('COMPONENT/".*Dichloroethane.*"');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'COMPONENT', VCLParser.FilterOperator.REGEX, '.*Dichloroethane.*');
});

// Test: Simple equality filter
testSuite.addTest('Simple equality filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('COMPONENT=LP15653-6');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'COMPONENT', VCLParser.FilterOperator.EQUAL, 'LP15653-6');
});

// Test: Simple codes in parentheses with disjunction
testSuite.addTest('Simple codes in parentheses with disjunction', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(10007-3;10008-1)');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.checkConceptSet(vs.compose.include[0], '', 2);
  this.assertEquals('10007-3', vs.compose.include[0].concept[0].code, 'First concept');
  this.assertEquals('10008-1', vs.compose.include[0].concept[1].code, 'Second concept');
});

// Test: Descendant-of filter
testSuite.addTest('Descendant-of filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('concept<<17311000168105');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.IS_A, '17311000168105');
});

// Test: IS-A filter
testSuite.addTest('IS-A filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('concept<<17311000168105');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.IS_A, '17311000168105');
});

// Test: IS-NOT-A filter
testSuite.addTest('IS-NOT-A filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('concept~<<929360061000036106');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.IS_NOT_A, '929360061000036106');
});

// Test: Simple single code
testSuite.addTest('Simple single code', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('A');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.checkConceptSet(vs.compose.include[0], '', 1);
  this.assertEquals('A', vs.compose.include[0].concept[0].code, 'Single concept');
});

// Test: Conjunction with comma
testSuite.addTest('Conjunction with comma', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('A,B');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.checkConceptSet(vs.compose.include[0], '', 2);
  this.assertEquals('A', vs.compose.include[0].concept[0].code, 'First concept');
  this.assertEquals('B', vs.compose.include[0].concept[1].code, 'Second concept');
});

// Test: Disjunction with semicolon
testSuite.addTest('Disjunction with semicolon', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('A;B');
  
  this.assertEquals(2, vs.compose.include.length, 'Should have 2 includes');
  this.assertEquals('A', vs.compose.include[0].concept[0].code, 'First include');
  this.assertEquals('B', vs.compose.include[1].concept[0].code, 'Second include');
});

// Test: Wildcard with system
testSuite.addTest('Wildcard with system', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(http://snomed.info/sct)*');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.checkConceptSet(vs.compose.include[0], 'http://snomed.info/sct', 0);
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.EXISTS, 'true');
});

// Test: Multiple status codes
testSuite.addTest('Multiple status codes', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(in-progress;aborted;completed;entered-in-error)');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.checkConceptSet(vs.compose.include[0], '', 4);
  this.assertEquals('in-progress', vs.compose.include[0].concept[0].code, 'First status');
  this.assertEquals('aborted', vs.compose.include[0].concept[1].code, 'Second status');
  this.assertEquals('completed', vs.compose.include[0].concept[2].code, 'Third status');
  this.assertEquals('entered-in-error', vs.compose.include[0].concept[3].code, 'Fourth status');
});

// Test: Include and exclude same valueset
testSuite.addTest('Include and exclude same valueset', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(^(http://csiro.au/fhir/ValueSet/selfexclude))-(^(http://csiro.au/fhir/ValueSet/selfexclude))');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.exclude.length, 'Should have 1 exclude');
  
  this.assertEquals('http://csiro.au/fhir/ValueSet/selfexclude', vs.compose.include[0].valueSet[0], 'Include valueSet');
  this.assertEquals('http://csiro.au/fhir/ValueSet/selfexclude', vs.compose.exclude[0].valueSet[0], 'Exclude valueSet');
});

// Test: Include one valueset, exclude another
testSuite.addTest('Include one valueset, exclude another', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(^(http://csiro.au/fhir/ValueSet/selfimport))-(^(http://csiro.au/fhir/ValueSet/selfexcludeA))');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.exclude.length, 'Should have 1 exclude');
  
  this.assertEquals('http://csiro.au/fhir/ValueSet/selfimport', vs.compose.include[0].valueSet[0], 'Include valueSet');
  this.assertEquals('http://csiro.au/fhir/ValueSet/selfexcludeA', vs.compose.exclude[0].valueSet[0], 'Exclude valueSet');
});

// Test: Descendant-of with quoted value
testSuite.addTest('Descendant-of with quoted value', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('concept<<"_ActNoImmunizationReason"');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.IS_A, '_ActNoImmunizationReason');
});

// Test: Equality filter with numeric code
testSuite.addTest('Equality filter with numeric code', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('has_ingredient = 1886');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'has_ingredient', VCLParser.FilterOperator.EQUAL, '1886');
});

// Test: Complex constraint filter (may fail)
testSuite.addTest('Complex constraint filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(constraint="<< 30506011000036107 |australian product|: 700000101000036108 |hasTP| = 17311000168105 |PANADOL|",expression="<< 30506011000036107 |australian product|: 700000101000036108 |hasTP| = 17311000168105 |PANADOL|")');
  
  this.assertNotNull(vs, 'ValueSet should not be null');
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
});

// Test: Nested filters (expected to fail)
testSuite.addTest('Nested filters (expected to fail)', function() {
  const VCLParser = getVCLParser();
  this.assertThrows(() => {
    VCLParser.parseVCL('has_ingredient^(has_tradename=2201670)');
  }, VCLParser.VCLParseException, 'Nested filters should fail');
});

// Test: Multiple filters with commas
testSuite.addTest('Multiple filters with commas', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(has_ingredient=1886, has_dose_form=317541)');
  
  this.assertNotNull(vs, 'ValueSet should not be null');
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(2, vs.compose.include[0].filter.length, 'Should have 2 filters');
  
  this.checkFilter(vs.compose.include[0], 0, 'has_ingredient', VCLParser.FilterOperator.EQUAL, '1886');
  this.checkFilter(vs.compose.include[0], 1, 'has_dose_form', VCLParser.FilterOperator.EQUAL, '317541');
});

// Test: Simple codes (parameterized test)
testSuite.addTest('Simple codes (parameterized)', function() {
  const VCLParser = getVCLParser();
  const testCodes = ['A', '123456', 'test-code', '"quoted code"', '*'];
  
  for (const code of testCodes) {
    const vs = VCLParser.parseVCL(code);
    this.assertNotNull(vs, `ValueSet should not be null for: ${code}`);
    this.assertEquals(1, vs.compose.include.length, `Should have 1 include for: ${code}`);
    
    if (code !== '*') {
      if (vs.compose.include[0].concept && vs.compose.include[0].concept.length > 0) {
        const expectedCode = code.startsWith('"') && code.endsWith('"') 
          ? code.substring(1, code.length - 1) 
          : code;
        this.assertEquals(expectedCode, vs.compose.include[0].concept[0].code, `Code mismatch for: ${code}`);
      }
    }
  }
});

// Test: ValueSet includes (parameterized test)
testSuite.addTest('ValueSet includes (parameterized)', function() {
  const VCLParser = getVCLParser();
  const testValueSets = [
    '^(http://hl7.org/fhir/ValueSet/test1)',
    '^(http://hl7.org/fhir/ValueSet/test2)',
    '^(http://example.org/valueset)'
  ];
  
  for (const vcl of testValueSets) {
    const vs = VCLParser.parseVCL(vcl);
    this.assertNotNull(vs, `ValueSet should not be null for: ${vcl}`);
    this.assertEquals(1, vs.compose.include.length, `Should have 1 include for: ${vcl}`);
    this.assertEquals(1, vs.compose.include[0].valueSet.length, `Should have 1 valueSet for: ${vcl}`);
  }
});

// Test: Empty expression should fail
testSuite.addTest('Empty expression should fail', function() {
  const VCLParser = getVCLParser();
  this.assertThrows(() => {
    VCLParser.parseVCL('');
  }, VCLParser.VCLParseException, 'Empty expression should fail');
  
  this.assertThrows(() => {
    VCLParser.parseVCL('   ');
  }, VCLParser.VCLParseException, 'Whitespace-only expression should fail');
  
  this.assertThrows(() => {
    VCLParser.parseVCL(null);
  }, VCLParser.VCLParseException, 'Null expression should fail');
});

// Test: Invalid syntax should fail
testSuite.addTest('Invalid syntax should fail', function() {
  const VCLParser = getVCLParser();
  this.assertThrows(() => {
    VCLParser.parseVCL('((unclosed');
  }, VCLParser.VCLParseException, 'Unclosed parentheses should fail');
  
  this.assertThrows(() => {
    VCLParser.parseVCL('A B C');
  }, VCLParser.VCLParseException, 'Codes without operators should fail');
  
  this.assertThrows(() => {
    VCLParser.parseVCL('=value');
  }, VCLParser.VCLParseException, 'Filter without property should fail');
});

// Test: System with version
testSuite.addTest('System with version', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('(http://snomed.info/sct|20210131)123456789');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals('http://snomed.info/sct', vs.compose.include[0].system, 'System URI');
  this.assertEquals('20210131', vs.compose.include[0].version, 'Version');
  this.assertEquals(1, vs.compose.include[0].concept.length, 'Should have 1 concept');
  this.assertEquals('123456789', vs.compose.include[0].concept[0].code, 'Concept code');
});

// Test: Quoted codes
testSuite.addTest('Quoted codes', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('"code with spaces"');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].concept.length, 'Should have 1 concept');
  this.assertEquals('code with spaces', vs.compose.include[0].concept[0].code, 'Quoted concept code');
});

// Test: Wildcard filter
testSuite.addTest('Wildcard filter', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCL('*');
  
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
  this.assertEquals(1, vs.compose.include[0].filter.length, 'Should have 1 filter');
  this.checkFilter(vs.compose.include[0], 0, 'concept', VCLParser.FilterOperator.EXISTS, 'true');
});

// Test: Validation function
testSuite.addTest('Validation function', function() {
  const VCLParser = getVCLParser();
  this.assertTrue(VCLParser.validateVCLExpression('A'), 'Simple code should be valid');
  this.assertTrue(VCLParser.validateVCLExpression('(http://snomed.info/sct)123456789'), 'System with code should be valid');
  this.assertTrue(VCLParser.validateVCLExpression('concept<<123456789'), 'Filter should be valid');
  
  this.assertTrue(!VCLParser.validateVCLExpression(''), 'Empty expression should be invalid');
  this.assertTrue(!VCLParser.validateVCLExpression('   '), 'Whitespace-only should be invalid');
  this.assertTrue(!VCLParser.validateVCLExpression('((unclosed'), 'Unclosed parentheses should be invalid');
  this.assertTrue(!VCLParser.validateVCLExpression('A B C'), 'Codes without operators should be invalid');
  this.assertTrue(!VCLParser.validateVCLExpression('=value'), 'Filter without property should be invalid');
});

// Test: Utility functions
testSuite.addTest('Utility functions', function() {
  const VCLParser = getVCLParser();
  // Test splitSystemUri
  const result1 = VCLParser.splitSystemUri('http://snomed.info/sct|20210131');
  this.assertEquals('http://snomed.info/sct', result1.system, 'System URI with version - system');
  this.assertEquals('20210131', result1.version, 'System URI with version - version');
  
  const result2 = VCLParser.splitSystemUri('http://snomed.info/sct');
  this.assertEquals('http://snomed.info/sct', result2.system, 'System URI without version - system');
  this.assertEquals('', result2.version, 'System URI without version - version');
  
  // Test createVCLValueSet
  const vs = VCLParser.createVCLValueSet('test-id', 'Test ValueSet', 'A test value set');
  this.assertEquals('test-id', vs.id, 'Created ValueSet ID');
  this.assertEquals('Test ValueSet', vs.name, 'Created ValueSet name');
  this.assertEquals('A test value set', vs.description, 'Created ValueSet description');
  this.assertEquals('draft', vs.status, 'Created ValueSet status');
  this.assertTrue(vs.experimental, 'Created ValueSet experimental flag');
});

// Test: parseVCLAndSetId function
testSuite.addTest('Parse VCL and set ID', function() {
  const VCLParser = getVCLParser();
  const vs = VCLParser.parseVCLAndSetId('(http://snomed.info/sct)123456789');
  
  this.assertNotNull(vs, 'ValueSet should not be null');
  this.assertTrue(vs.url && vs.url.startsWith('cid:'), 'Should have generated URL with cid: prefix');
  this.assertEquals(1, vs.compose.include.length, 'Should have 1 include');
});

// Run the tests
if (typeof module !== 'undefined' && module.exports) {
  // Node.js - export the test suite
  module.exports = testSuite;
  
  // If this file is run directly, execute the tests
  if (require.main === module) {
    testSuite.run().then(success => {
      process.exit(success ? 0 : 1);
    });
  }
} else {
  // Browser - make test suite available globally after page loads
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready to ensure all scripts are loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        window.VCLParserTestSuite = testSuite;
      });
    } else {
      // DOM already loaded
      window.VCLParserTestSuite = testSuite;
    }
    
    // Auto-run tests if there's a #run-tests hash
    if (window.location.hash === '#run-tests') {
      document.addEventListener('DOMContentLoaded', () => {
        if (window.VCLParserTestSuite) {
          window.VCLParserTestSuite.run();
        }
      });
    }
  }
}

// Example usage in browser:
// <script src="vcl-parser.js"></script>
// <script src="vcl-tests.js"></script>
// <script>VCLParserTestSuite.run();</script>

// Example usage in Node.js:
// const testSuite = require('./vcl-tests');
// testSuite.run();