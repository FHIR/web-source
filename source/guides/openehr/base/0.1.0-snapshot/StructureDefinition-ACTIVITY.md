# ACTIVITY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ACTIVITY**

## Logical Model: ACTIVITY 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ACTIVITY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ACTIVITY |

 
Defines a single activity within an Instruction, such as a medication administration. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_activity_class)

**Usages:**

* Use this Logical Model: [INSTRUCTION](StructureDefinition-INSTRUCTION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ACTIVITY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ACTIVITY.csv), [Excel](StructureDefinition-ACTIVITY.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ACTIVITY",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_activity_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#concept"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ACTIVITY",
  "version" : "0.1.0-snapshot",
  "name" : "ACTIVITY",
  "title" : "ACTIVITY",
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
  "description" : "Defines a single activity within an Instruction, such as a medication administration. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ACTIVITY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ACTIVITY",
        "path" : "ACTIVITY",
        "short" : "Defines a single activity within an Instruction, such as a medication administration.",
        "definition" : "Defines a single activity within an Instruction, such as a medication administration. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Action_archetype_id_valid",
            "severity" : "error",
            "human" : "Action archetype id valid must not be empty",
            "expression" : "action_archetype_id.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ACTIVITY.timing",
        "path" : "ACTIVITY.timing",
        "short" : "Timing of the activity, in the form of a parsable string.",
        "definition" : "Timing of the activity, in the form of a parsable string. If used, the preferred syntax is ISO8601 'R' format, but other formats may be used including HL7 GTS.\n\nMay be omitted if:\n\n* timing is represented structurally in the `_description_` attribute (e.g. via archetyped elements), or\n* unavailable, e.g. imported legacy data; in such cases, the `INSTRUCTION._narrative_` should carry text that indicates the timing of its `_activities_`.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-PARSABLE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ACTIVITY.action-archetype-id",
        "path" : "ACTIVITY.action_archetype_id",
        "short" : "Perl-compliant regular expression pattern, enclosed in  '//' delimiters, indicating the valid identifiers of archetypes for Actions corresponding to this Activity specification.",
        "definition" : "Perl-compliant regular expression pattern, enclosed in  '//' delimiters, indicating the valid identifiers of archetypes for Actions corresponding to this Activity specification. \n\nDefaults to  `/.*/`, meaning any archetype.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ACTIVITY.description",
        "path" : "ACTIVITY.description",
        "short" : "Description of the activity, in the form of an archetyped structure.",
        "definition" : "Description of the activity, in the form of an archetyped structure.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
