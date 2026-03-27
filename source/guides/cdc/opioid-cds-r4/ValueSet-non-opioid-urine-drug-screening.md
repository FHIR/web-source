# Non-opioid drug urine screening - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Non-opioid drug urine screening**

## ValueSet: Non-opioid drug urine screening 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/non-opioid-urine-drug-screening | *Version*:2022.1.0 |
| Active as of 2023-05-25 | *Computable Name*:NON_OPIOID_URINE_DRUG_SCREENING |
| **Copyright/Legal**: © CDC 2016+. | |

 
Individual tests and panels of tests of urine for illicit drugs EXCEPT those for opioids. 

 
Identification of non-opioid urine drug tests where results can be used when considering opioid therapy 

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
  "id" : "non-opioid-urine-drug-screening",
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
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/non-opioid-urine-drug-screening",
  "version" : "2022.1.0",
  "name" : "NON_OPIOID_URINE_DRUG_SCREENING",
  "title" : "Non-opioid drug urine screening",
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
  "description" : "Individual tests and panels of tests of urine for illicit drugs EXCEPT those for opioids.",
  "purpose" : "Identification of non-opioid urine drug tests where results can be used when considering opioid therapy",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP31448-1"
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
        "value" : "LP14546-3"
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
        "value" : "LP100047-2"
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
        "value" : "LP14981-2"
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
        "value" : "LP14985-3"
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
        "value" : "LP15014-1"
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
        "value" : "LP15171-9"
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
        "value" : "LP16016-5"
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
        "value" : "LP16080-1"
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
        "value" : "LP16104-9"
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
        "value" : "LP16176-7"
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
        "value" : "LP16177-5"
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
        "value" : "LP16181-7"
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
        "value" : "LP16187-4"
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
        "value" : "LP16207-0"
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
        "value" : "LP16227-8"
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
        "value" : "LP16316-9"
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
        "value" : "LP17859-7"
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
        "value" : "LP18143-5"
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
        "value" : "LP266153-8"
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
        "value" : "LP391564-4"
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
        "value" : "LP391565-1"
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
        "value" : "LP14145-4"
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
        "value" : "LP14712-1"
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
        "value" : "LP31449-9"
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
        "value" : "LP33234-3"
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
        "value" : "LP388613-4"
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
        "value" : "LP392026-3"
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
        "value" : "LP392030-5"
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
        "value" : "LP392032-1"
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
        "value" : "LP392055-2"
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
        "value" : "LP392064-4"
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
        "value" : "LP392070-1"
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
        "value" : "LP392071-9"
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
        "value" : "LP392087-5"
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
        "value" : "LP392128-7"
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
        "value" : "LP391128-8"
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
        "value" : "LP391129-6"
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
        "value" : "LP391130-4"
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
        "value" : "LP391131-2"
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
        "value" : "LP391150-2"
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
        "value" : "LP392366-3"
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
        "value" : "LP428820-7"
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
        "value" : "LP30810-3"
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
        "value" : "LP390522-3"
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
        "value" : "LP390523-1"
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
        "value" : "LP390524-9"
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
        "value" : "LP390525-6"
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
        "value" : "LP426591-6"
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
        "value" : "LP16276-5"
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
        "value" : "LP18112-0"
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
        "value" : "LP31467-1"
      },
      {
        "property" : "SYSTEM",
        "op" : "=",
        "value" : "LP7681-2"
      }]
    }],
    "exclude" : [{
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP18149-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP248581-3"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP266981-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP286758-0"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390124-8"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390125-5"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390126-3"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390127-1"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP390128-9"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP40335-9"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411321-5"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411322-3"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411323-1"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411324-9"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411325-6"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411327-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411328-0"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411329-8"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411333-0"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411334-8"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411412-2"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411413-0"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411414-8"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411415-5"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411429-6"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411430-4"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411432-0"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411433-8"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411434-6"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411435-3"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411437-9"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP411628-3"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433488-6"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433489-4"
      }]
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "filter" : [{
        "property" : "parent",
        "op" : "=",
        "value" : "LP433494-4"
      }]
    }]
  }
}

```
