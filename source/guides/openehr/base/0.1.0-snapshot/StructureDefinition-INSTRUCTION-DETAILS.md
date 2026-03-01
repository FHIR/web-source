# INSTRUCTION_DETAILS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **INSTRUCTION_DETAILS**

## Logical Model: INSTRUCTION_DETAILS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/INSTRUCTION-DETAILS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:INSTRUCTION_DETAILS |

 
Used to record details of the Instruction causing an Action. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_instruction_details_class)

**Usages:**

* Use this Logical Model: [ACTION](StructureDefinition-ACTION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/INSTRUCTION-DETAILS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-INSTRUCTION-DETAILS.csv), [Excel](StructureDefinition-INSTRUCTION-DETAILS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "INSTRUCTION-DETAILS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_instruction_details_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#parent"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/INSTRUCTION-DETAILS",
  "version" : "0.1.0-snapshot",
  "name" : "INSTRUCTION_DETAILS",
  "title" : "INSTRUCTION_DETAILS",
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
  "description" : "Used to record details of the Instruction causing an Action. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/INSTRUCTION_DETAILS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "INSTRUCTION_DETAILS",
        "path" : "INSTRUCTION_DETAILS",
        "short" : "Used to record details of the Instruction causing an Action.",
        "definition" : "Used to record details of the Instruction causing an Action. \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Activity_path_valid",
            "severity" : "error",
            "human" : "Activity path valid must not be empty",
            "expression" : "activity_id.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "INSTRUCTION_DETAILS.instruction-id",
        "path" : "INSTRUCTION_DETAILS.instruction_id",
        "short" : "Reference to causing Instruction.",
        "definition" : "Reference to causing Instruction.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "INSTRUCTION_DETAILS.activity-id",
        "path" : "INSTRUCTION_DETAILS.activity_id",
        "short" : "Identifier of Activity within Instruction, in the form of its archetype path.",
        "definition" : "Identifier of Activity within Instruction, in the form of its archetype path. ",
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
        "id" : "INSTRUCTION_DETAILS.wf-details",
        "path" : "INSTRUCTION_DETAILS.wf_details",
        "short" : "Various workflow engine state details, potentially including such things as:\n\n* condition that fired to cause this Action to be done (with actual variables substituted); \n* list of notifications which actually occurred (with all variables substituted); \n* other workflow engine state.",
        "definition" : "Various workflow engine state details, potentially including such things as:\n\n* condition that fired to cause this Action to be done (with actual variables substituted); \n* list of notifications which actually occurred (with all variables substituted); \n* other workflow engine state. \n\nThis specification does not currently define the actual structure or semantics of this field. \n",
        "min" : 0,
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
