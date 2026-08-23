# Buprenorphine urine drug screening tests - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Buprenorphine urine drug screening tests**

## ValueSet: Buprenorphine urine drug screening tests 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/buprenorphine-urine-drug-screening-tests | *Version*:2022.1.1 |
| Active as of 2026-04-30 | *Computable Name*:BUPRENORPHINE_URINE_DRUG_SCREENING_TESTS |
| *Other Identifiers:*OID:2.16.840.1.113883.4.642.40.65.48.60 | |
| **Copyright/Legal**: © CDC 2016+. | |

 
Presumed general urine tests for buprenorphine screening. 

 
Identification of urine drug tests where results can be used when considering pain management therapy 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "buprenorphine-urine-drug-screening-tests",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-author",
    "valueContactDetail" : {
      "name" : "MD Partners, Inc.",
      "telecom" : [{
        "system" : "email",
        "value" : "info@mdpartners.com"
      }]
    }
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
    "valueString" : "Presumed general urine tests for buprenorphine."
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-dataelement-scope",
    "valueString" : "Urine test"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-inclusion-criteria",
    "valueString" : "Codes"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-exclusion-criteria",
    "valueString" : "None"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  },
  {
    "extension" : [{
      "url" : "type",
      "valueCode" : "documentation"
    },
    {
      "url" : "text",
      "valueMarkdown" : "Maintenance search expression: `multiaxial_descendantsof:(LP16054-6 OR LP392033-9) AND system:urine`. The compose anchors at two trunk LP codes - LP16054-6 and LP392033-9 - using `concept is-a` filters scoped to SYSTEM=LP7681-2 (urine) and CLASSTYPE=1 (lab test). To regenerate: re-run the search expression as a LOINC hierarchy query, add any newly-discovered trunk LP code as another is-a filter, then re-expand."
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/cqf-artifactComment"
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/buprenorphine-urine-drug-screening-tests",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:2.16.840.1.113883.4.642.40.65.48.60"
  }],
  "version" : "2022.1.1",
  "name" : "BUPRENORPHINE_URINE_DRUG_SCREENING_TESTS",
  "title" : "Buprenorphine urine drug screening tests",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-30T14:44:02-04:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Presumed general urine tests for buprenorphine screening.",
  "purpose" : "Identification of urine drug tests where results can be used when considering pain management therapy",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP16054-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP392033-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      }]
    }]
  }
}

```
