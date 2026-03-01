# EVENT_CONTEXT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EVENT_CONTEXT**

## Logical Model: EVENT_CONTEXT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EVENT-CONTEXT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EVENT_CONTEXT |

 
Documents the context information of a healthcare event involving the subject of care and the health system. The context information recorded here are independent of the attributes recorded in the version audit, which document the system interaction context, i.e. the context of a user interacting with the health record system. Healthcare events include patient contacts, and any other business activity, such as pathology investigations which take place on behalf of the patient. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_event_context_class)

**Usages:**

* Use this Logical Model: [COMPOSITION](StructureDefinition-COMPOSITION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EVENT-CONTEXT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EVENT-CONTEXT.csv), [Excel](StructureDefinition-EVENT-CONTEXT.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EVENT-CONTEXT",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_event_context_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EVENT-CONTEXT",
  "version" : "0.1.0-snapshot",
  "name" : "EVENT_CONTEXT",
  "title" : "EVENT_CONTEXT",
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
  "description" : "Documents the context information of a healthcare event involving the subject of care and the health system. The context information recorded here are independent of the attributes recorded in the version audit, which document the  system interaction  context, i.e. the context of a user interacting with the health record system. Healthcare events include patient contacts, and any other business activity, such as pathology investigations which take place on behalf of the patient. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EVENT_CONTEXT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EVENT_CONTEXT",
        "path" : "EVENT_CONTEXT",
        "short" : "Documents the context information of a healthcare event involving the subject of care and the health system.",
        "definition" : "Documents the context information of a healthcare event involving the subject of care and the health system. The context information recorded here are independent of the attributes recorded in the version audit, which document the  system interaction  context, i.e. the context of a user interacting with the health record system. Healthcare events include patient contacts, and any other business activity, such as pathology investigations which take place on behalf of the patient. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Setting_valid",
            "severity" : "error",
            "human" : "Setting valid",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Participations_validity",
            "severity" : "error",
            "human" : "Participations validity must be present",
            "expression" : "participations.exists() implies participations.empty().not()"
          },
          {
            "key" : "location_valid",
            "severity" : "error",
            "human" : "location valid must be present",
            "expression" : "location.exists() implies location.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.start-time",
        "path" : "EVENT_CONTEXT.start_time",
        "short" : "Start time of the clinical session or other kind of event during which a provider performs a service of any kind for the patient.",
        "definition" : "Start time of the clinical session or other kind of event during which a provider performs a service of any kind for the patient. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.end-time",
        "path" : "EVENT_CONTEXT.end_time",
        "short" : "Optional end time of the clinical session.",
        "definition" : "Optional end time of the clinical session. \n",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.location",
        "path" : "EVENT_CONTEXT.location",
        "short" : "The actual location where the session occurred, e.",
        "definition" : "The actual location where the session occurred, e.g. 'microbiology lab 2', 'home', 'ward A3'  and so on.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.setting",
        "path" : "EVENT_CONTEXT.setting",
        "short" : "The setting in which the clinical session took place.",
        "definition" : "The setting in which the clinical session took place. Coded using the openEHR Terminology,  setting  group. ",
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
        "id" : "EVENT_CONTEXT.other-context",
        "path" : "EVENT_CONTEXT.other_context",
        "short" : "Other optional context which will be archetyped.",
        "definition" : "Other optional context which will be archetyped.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.health-care-facility",
        "path" : "EVENT_CONTEXT.health_care_facility",
        "short" : "The health care facility under whose care the event took place.",
        "definition" : "The health care facility under whose care the event took place. This is the most specific workgroup or delivery unit within a care delivery enterprise that has an official identifier in the health system, and can be used to ensure medico-legal accountability. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTIFIED"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT_CONTEXT.participations",
        "path" : "EVENT_CONTEXT.participations",
        "short" : "Parties involved in the healthcare event.",
        "definition" : "Parties involved in the healthcare event. These would normally include the physician(s) and often the patient (but not the latter if the clinical session is a pathology test for example). ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTICIPATION"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
