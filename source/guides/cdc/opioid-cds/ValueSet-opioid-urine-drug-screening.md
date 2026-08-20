# Opioid drug urine screening - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Opioid drug urine screening**

## ValueSet: Opioid drug urine screening 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-urine-drug-screening | *Version*:2022.1.0 |
| Active as of 2023-05-25 | *Computable Name*:OPIOID_URINE_DRUG_SCREENING |
| **Copyright/Legal**: © CDC 2016+. | |

 
Individual tests and panels of tests of urine for opioids 

 
Identification of opioid urine drug tests where results can be used when considering opioid therapy 

 **References** 

* Included into [ALL_URINE_DRUG_SCREENING_TESTS](ValueSet-all-urine-drug-screening-tests.md)

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
  "id" : "opioid-urine-drug-screening",
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
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-urine-drug-screening",
  "version" : "2022.1.0",
  "name" : "OPIOID_URINE_DRUG_SCREENING",
  "title" : "Opioid drug urine screening",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-05-25T18:08:12-06:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Individual tests and panels of tests of urine for opioids",
  "purpose" : "Identification of opioid urine drug tests where results can be used when considering opioid therapy",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP18149-2"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP248581-3"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP266981-2"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP286758-0"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390124-8"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390125-5"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390126-3"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390127-1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390128-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP40335-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411321-5"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411322-3"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411323-1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411324-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411325-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411327-2"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411328-0"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411329-8"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411333-0"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411334-8"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411412-2"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411413-0"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411414-8"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411415-5"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411429-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411430-4"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411432-0"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411433-8"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411434-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411435-3"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411437-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411628-3"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433488-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433489-4"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433494-4"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390086-9"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP392077-6"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP419316-7"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP419317-5"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP417172-6"
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
