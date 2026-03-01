# DV_STATE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_STATE**

## Logical Model: DV_STATE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-STATE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_STATE |

 
For representing state values which obey a defined state machine, such as a variable representing the states of an instruction or care process. 
DV_STATE is expressed as a String but its values are driven by archetype-defined state machines. This provides a powerful way of capturing stateful complex processes in simple data. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_state_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-STATE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-STATE.csv), [Excel](StructureDefinition-DV-STATE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-STATE",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_state_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-as-leaf"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-defns-parent"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-STATE",
  "version" : "0.1.0-snapshot",
  "name" : "DV_STATE",
  "title" : "DV_STATE",
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
  "description" : "For representing state values which obey a defined state machine, such as a variable  representing the states of an instruction or care process. \n\nDV_STATE is expressed as a String but its values are driven by archetype-defined  state machines. This provides a powerful way of capturing stateful complex processes  in simple data. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_STATE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_STATE",
        "path" : "DV_STATE",
        "short" : "For representing state values which obey a defined state machine, such as a variable  representing the states of an instruction or care process.",
        "definition" : "For representing state values which obey a defined state machine, such as a variable  representing the states of an instruction or care process. \n\nDV_STATE is expressed as a String but its values are driven by archetype-defined  state machines. This provides a powerful way of capturing stateful complex processes  in simple data. \n",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_STATE.value",
        "path" : "DV_STATE.value",
        "short" : "The state name.",
        "definition" : "The state name. State names are determined by a state/event table defined in archetypes, and coded using openEHR Terminology or local archetype terms, as specified by the archetype. ",
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
        "id" : "DV_STATE.is-terminal",
        "path" : "DV_STATE.is_terminal",
        "short" : "Indicates whether this state is a terminal state, such as  \"aborted\",  \"completed\" etc.",
        "definition" : "Indicates whether this state is a terminal state, such as  \"aborted\",  \"completed\" etc. from which no further transitions are possible.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
