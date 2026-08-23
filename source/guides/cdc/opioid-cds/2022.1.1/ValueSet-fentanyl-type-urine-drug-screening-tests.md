# Fentanyl-type urine drug screening tests - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Fentanyl-type urine drug screening tests**

## ValueSet: Fentanyl-type urine drug screening tests 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/fentanyl-type-urine-drug-screening-tests | *Version*:2022.1.1 |
| Active as of 2026-06-01 | *Computable Name*:FENTANYL_TYPE_URINE_DRUG_SCREENING_TESTS |
| *Other Identifiers:*OID:2.16.840.1.114222.48.15 | |
| **Copyright/Legal**: © CDC 2016+. | |

 
Urine screening tests for fentanyl-type drugs and metabolites 

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
  "id" : "fentanyl-type-urine-drug-screening-tests",
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
      "valueMarkdown" : "Maintenance search expression: `multiaxial_descendantsof:(LP16021-5 OR LP15167-7 OR LP17874-6 OR LP411435-3 OR LP411437-9 OR LP411432-0 OR LP411415-5 OR LP411412-2 OR LP248692-8 OR LP411430-4 OR LP411429-6 OR LP411433-8 OR LP411418-9 OR LP411434-6 OR LP411413-0 OR LP411414-8 OR LP438292-7 OR LP438293-5 OR LP438295-0 OR LP438290-1 OR LP438289-3 OR LP438291-9 OR LP133999-5) AND system:urine`. The compose anchors at 23 trunk LP codes - LP16021-5, LP15167-7, LP17874-6, LP411435-3, LP411437-9, LP411432-0, LP411415-5, LP411412-2, LP248692-8, LP411430-4, LP411429-6, LP411433-8, LP411418-9, LP411434-6, LP411413-0, LP411414-8, LP438292-7, LP438293-5, LP438295-0, LP438290-1, LP438289-3, LP438291-9, and LP133999-5 - using `concept is-a` filters scoped to SYSTEM=LP7681-2 (urine) and CLASSTYPE=1 (lab test). To regenerate: re-run the search expression as a LOINC hierarchy query, add any newly-discovered trunk LP code as another is-a filter, then re-expand."
    }],
    "url" : "http://hl7.org/fhir/StructureDefinition/cqf-artifactComment"
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/fentanyl-type-urine-drug-screening-tests",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:2.16.840.1.114222.48.15"
  }],
  "version" : "2022.1.1",
  "name" : "FENTANYL_TYPE_URINE_DRUG_SCREENING_TESTS",
  "title" : "Fentanyl-type urine drug screening tests",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-06-01T10:52:58-04:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Urine screening tests for fentanyl-type drugs and metabolites",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP16021-5"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP15167-7"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP17874-6"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411435-3"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411437-9"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411432-0"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411415-5"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411412-2"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP248692-8"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411430-4"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411429-6"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411433-8"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411418-9"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411434-6"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411413-0"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP411414-8"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438292-7"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438293-5"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438295-0"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438290-1"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438289-3"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP438291-9"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "LP133999-5"
      },
      {
        "property" : "CLASSTYPE",
        "op" : "=",
        "value" : "1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    }]
  }
}

```
