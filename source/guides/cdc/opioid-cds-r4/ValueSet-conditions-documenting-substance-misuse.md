# Conditions documenting substance misuse - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Conditions documenting substance misuse**

## ValueSet: Conditions documenting substance misuse 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-documenting-substance-misuse | *Version*:2022.1.0 |
| Active as of 2025-04-09 | *Computable Name*:CONDITIONS_DOCUMENTING_SUBSTANCE_ABUSE |
| **Copyright/Legal**: © CDC 2016+. | |

 
Any finding or condition that indicate problematic misuse of a substance other than tobacco or laxatives, including “history of” conditions. 

 
Identification of patients that have a documented substance misuse condition now or in the past when considering opioid therapy. 

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
  "id" : "conditions-documenting-substance-misuse",
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
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "structured"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-author",
    "valueContactDetail" : {
      "name" : "MD Partners, Inc.",
      "telecom" : [{
        "system" : "email",
        "value" : "info@mdpartners.com"
      }]
    }
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-documenting-substance-misuse",
  "version" : "2022.1.0",
  "name" : "CONDITIONS_DOCUMENTING_SUBSTANCE_ABUSE",
  "title" : "Conditions documenting substance misuse",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-04-09T18:37:55-06:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Any finding or condition that indicate problematic misuse of a substance other than tobacco or laxatives, including \"history of\" conditions.",
  "purpose" : "Identification of patients that have a documented substance misuse condition now or in the past when considering opioid therapy.",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "1254812006"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "228366006"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "66214007"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "417284009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "441668002"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "226034001"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "228427002"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "191939002"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "361055000"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "191928000"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "280985006"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "280982009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "231459008"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "280983004"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "110281001"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "719848005"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "191816009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "363101005"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "715431002"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "724713006"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "91388009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "390867000"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "296036006"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "296177007"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "295809003"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "295960003"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "708079007"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "1149408002"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "242253008"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "Z71.4"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "Z71.5"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "descendent-of",
        "value" : "F55"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "Section-F10-F19"
      }]
    }],
    "exclude" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "56294008"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "282100009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "712542001"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "1149223009"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108/version/20250301",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "62014003"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "F17"
      }]
    }]
  }
}

```
