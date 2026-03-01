# ISM_TRANSITION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ISM_TRANSITION**

## Logical Model: ISM_TRANSITION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ISM-TRANSITION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ISM_TRANSITION |

 
Model of a transition in the Instruction State Machine, caused by a careflow step. The attributes document the careflow step as well as the ISM transition. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_ism_transition_class)

**Usages:**

* Use this Logical Model: [ACTION](StructureDefinition-ACTION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ISM-TRANSITION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ISM-TRANSITION.csv), [Excel](StructureDefinition-ISM-TRANSITION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ISM-TRANSITION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_ism_transition_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ISM-TRANSITION",
  "version" : "0.1.0-snapshot",
  "name" : "ISM_TRANSITION",
  "title" : "ISM_TRANSITION",
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
  "description" : "Model of a transition in the Instruction State Machine, caused by a careflow step. The attributes document the careflow step as well as the ISM transition. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ISM_TRANSITION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ISM_TRANSITION",
        "path" : "ISM_TRANSITION",
        "short" : "Model of a transition in the Instruction State Machine, caused by a careflow step.",
        "definition" : "Model of a transition in the Instruction State Machine, caused by a careflow step. The attributes document the careflow step as well as the ISM transition. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Current_state_valid",
            "severity" : "error",
            "human" : "Current state valid",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Transition_valid",
            "severity" : "error",
            "human" : "Transition valid must be present",
            "expression" : "transition.exists() implies terminology (Terminology_id_openehr).\\nhas_code_for_group_id (Group_id_instruction_transitions, transition.defining_code)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ISM_TRANSITION.current-state",
        "path" : "ISM_TRANSITION.current_state",
        "short" : "The ISM current state.",
        "definition" : "The ISM current state. Coded by openEHR terminology group Instruction states.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ISM_TRANSITION.transition",
        "path" : "ISM_TRANSITION.transition",
        "short" : "The ISM transition which occurred to arrive in the current_state.",
        "definition" : "The ISM transition which occurred to arrive in the current_state. Coded by openEHR terminology group  Instruction transitions.",
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
        "id" : "ISM_TRANSITION.careflow-step",
        "path" : "ISM_TRANSITION.careflow_step",
        "short" : "The step in the careflow process which occurred as part of generating this action, e.",
        "definition" : "The step in the careflow process which occurred as part of generating this action, e.g.  dispense ,  start_administration. This attribute represents the clinical  label for the activity, as  opposed to current_state which represents  the state machine (ISM)  computable form. Defined in archetype.",
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
        "id" : "ISM_TRANSITION.reason",
        "path" : "ISM_TRANSITION.reason",
        "short" : "Optional possibility of adding one or more reasons for this careflow step having been taken.",
        "definition" : "Optional possibility of adding one or more reasons for this careflow step having been taken. Multiple reasons may occur in medication management for example.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
