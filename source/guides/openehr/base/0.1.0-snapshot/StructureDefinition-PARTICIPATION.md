# PARTICIPATION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTICIPATION**

## Logical Model: PARTICIPATION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTICIPATION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTICIPATION |

 
Model of a participation of a Party (any Actor or Role) in an activity. Used to represent any participation of a Party in some activity, which is not explicitly in the model, e.g. assisting nurse. Can be used to record past or future participations. 
Should not be used in place of more permanent relationships between demographic entities. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_participation_class)

**Usages:**

* Use this Logical Model: [ENTRY](StructureDefinition-ENTRY.md) and [EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTICIPATION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTICIPATION.csv), [Excel](StructureDefinition-PARTICIPATION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTICIPATION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_participation_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTICIPATION",
  "version" : "0.1.0-snapshot",
  "name" : "PARTICIPATION",
  "title" : "PARTICIPATION",
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
  "description" : "Model of a participation of a Party (any Actor or Role) in an activity.  Used to represent any participation of a Party in some activity, which is not  explicitly in the model, e.g. assisting nurse. Can be used to record past or  future participations. \n\nShould not be used in place of more permanent relationships between demographic entities. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTICIPATION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTICIPATION",
        "path" : "PARTICIPATION",
        "short" : "Model of a participation of a Party (any Actor or Role) in an activity.",
        "definition" : "Model of a participation of a Party (any Actor or Role) in an activity.  Used to represent any participation of a Party in some activity, which is not  explicitly in the model, e.g. assisting nurse. Can be used to record past or  future participations. \n\nShould not be used in place of more permanent relationships between demographic entities. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Function_valid",
            "severity" : "error",
            "human" : "Function valid must satisfy conditional constraints",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Mode_valid",
            "severity" : "error",
            "human" : "Mode valid must be present",
            "expression" : "mode.exists() implies terminology (Terminology_id_openehr).has_code_for_group_id (Group_id_participation_mode, mode.defining_code)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTICIPATION.function",
        "path" : "PARTICIPATION.function",
        "short" : "The function of the Party in this participation (note that a given party might participate in more than one way in a particular activity).",
        "definition" : "The function of the Party in this participation (note that a given party might participate in more than one way in a particular activity). This attribute should be coded, but cannot be limited to the HL7v3:ParticipationFunction vocabulary, since it is too limited and hospital-oriented. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTICIPATION.mode",
        "path" : "PARTICIPATION.mode",
        "short" : "Optional field for recording the 'mode' of the performer / activity interaction, e.",
        "definition" : "Optional field for recording the 'mode' of the performer / activity interaction, e.g. present, by telephone, by email etc. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTICIPATION.performer",
        "path" : "PARTICIPATION.performer",
        "short" : "The id and possibly demographic system link of the party participating in the activity.",
        "definition" : "The id and possibly demographic system link of the party participating in the activity. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTICIPATION.time",
        "path" : "PARTICIPATION.time",
        "short" : "The time interval during which the participation took place, if it is used in an observational context (i.",
        "definition" : "The time interval during which the participation took place, if it is used in an observational context (i.e. recording facts about the past); or the intended time interval of the participation when used in future contexts, such as EHR Instructions. ",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-INTERVAL"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
