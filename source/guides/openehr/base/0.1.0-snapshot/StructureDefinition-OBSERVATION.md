# OBSERVATION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **OBSERVATION**

## Logical Model: OBSERVATION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/OBSERVATION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:OBSERVATION |

 
Entry subtype for all clinical data in the past or present, i.e. which (by the time it is recorded) has already occurred.`OBSERVATION`data is expressed using the class`HISTORY<T>`, which guarantees that it is situated in time.`OBSERVATION`is used for all notionally objective (i.e. measured in some way) observations of phenomena, and patient-reported phenomena, e.g. pain. 
Not to be used for recording opinion or future statements of any kind, including instructions, intentions, plans etc. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_observation_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/OBSERVATION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-OBSERVATION.csv), [Excel](StructureDefinition-OBSERVATION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "OBSERVATION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_observation_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-ready"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#subject_is_self"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-replace-cardinality"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 3,
      "_valueInteger" : {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom",
            "valueCanonical" : "http://openehr.org/fhir/ImplementationGuide/openehr.base"
          }
        ]
      }
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "informative",
      "_valueCode" : {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom",
            "valueCanonical" : "http://openehr.org/fhir/ImplementationGuide/openehr.base"
          }
        ]
      }
    }
  ],
  "url" : "http://openehr.org/fhir/StructureDefinition/OBSERVATION",
  "version" : "0.1.0-snapshot",
  "name" : "OBSERVATION",
  "title" : "OBSERVATION",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-09-06T15:35:39+10:00",
  "publisher" : "openEHR + HL7",
  "contact" : [
    {
      "telecom" : [
        {
          "system" : "url",
          "value" : "http://www.openehr.org"
        }
      ]
    }
  ],
  "description" : "Entry subtype for all clinical data in the past or present, i.e. which (by the time it is recorded) has already occurred. `OBSERVATION` data is expressed using the class `HISTORY<T>`, which guarantees that it is situated in time. `OBSERVATION` is used for all notionally objective (i.e. measured in some way) observations of phenomena, and patient-reported phenomena, e.g. pain. \n\nNot to be used for recording opinion or future statements of any kind, including instructions, intentions, plans etc.",
  "jurisdiction" : [
    {
      "coding" : [
        {
          "system" : "http://unstats.un.org/unsd/methods/m49/m49.htm",
          "code" : "001"
        }
      ]
    }
  ],
  "fhirVersion" : "5.0.0",
  "mapping" : [
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }
  ],
  "kind" : "logical",
  "abstract" : false,
  "type" : "http://openehr.org/fhir/StructureDefinition/OBSERVATION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/CARE-ENTRY",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "OBSERVATION",
        "path" : "OBSERVATION",
        "short" : "Entry subtype for all clinical data in the past or present, i.",
        "definition" : "Entry subtype for all clinical data in the past or present, i.e. which (by the time it is recorded) has already occurred. `OBSERVATION` data is expressed using the class `HISTORY<T>`, which guarantees that it is situated in time. `OBSERVATION` is used for all notionally objective (i.e. measured in some way) observations of phenomena, and patient-reported phenomena, e.g. pain. \n\nNot to be used for recording opinion or future statements of any kind, including instructions, intentions, plans etc.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "OBSERVATION.data",
        "path" : "OBSERVATION.data",
        "short" : "The data of this observation, in the form of a history of values which may be of any complexity.",
        "definition" : "The data of this observation, in the form of a history of values which may be of any complexity.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/HISTORY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "OBSERVATION.state",
        "extension" : [
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-group"
              },
              {
                "url" : "value",
                "valueString" : "State"
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          },
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-order"
              },
              {
                "url" : "value",
                "valueInteger" : 8
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          }
        ],
        "path" : "OBSERVATION.state",
        "short" : "Optional recording of the state of subject of this observation during the observation process, in the form of a separate history of values which may be of any complexity.",
        "definition" : "Optional recording of the state of subject of this observation during the observation process, in the form of a separate history of values which may be of any complexity. State may also be recorded within the History of the data attribute. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/HISTORY"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
