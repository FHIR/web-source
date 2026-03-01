# EXTRACT_UPDATE_SPEC - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_UPDATE_SPEC**

## Logical Model: EXTRACT_UPDATE_SPEC 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-UPDATE-SPEC | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_UPDATE_SPEC |

 
Specification of the how the request should be processed by server. The request can be persisted in the server, meaning that a) it can be re-activated by the requesting system simply by indicating Request id, and b) that a changes-only pattern of Extract updates can be set up. To achieve this, the server has to remember what was sent in the previous response. 
The update mode may be event-driven and periodic update or a mixture of both. The candidate items to be sent each time are the result of re-evaluating the content and versioning parts of the specification; what is actually sent is determined by the`_send_changes_only_`flag. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [EXTRACT_REQUEST](StructureDefinition-EXTRACT-REQUEST.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-UPDATE-SPEC)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-UPDATE-SPEC.csv), [Excel](StructureDefinition-EXTRACT-UPDATE-SPEC.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-UPDATE-SPEC",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-UPDATE-SPEC",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_UPDATE_SPEC",
  "title" : "EXTRACT_UPDATE_SPEC",
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
  "description" : "Specification of the how the request should be processed by server. The request can be persisted in the server, meaning that a) it can be re-activated by the requesting system simply by indicating Request id, and b) that a changes-only pattern of Extract updates can be set up. To achieve this, the server has to remember what was sent in the previous response.\n\nThe update mode may be event-driven and periodic update or a mixture of both. The candidate items to be sent each time are the result of re-evaluating the content and versioning parts of the specification; what is actually sent is determined by the `_send_changes_only_` flag.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_UPDATE_SPEC",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_UPDATE_SPEC",
        "path" : "EXTRACT_UPDATE_SPEC",
        "short" : "Specification of the how the request should be processed by server.",
        "definition" : "Specification of the how the request should be processed by server. The request can be persisted in the server, meaning that a) it can be re-activated by the requesting system simply by indicating Request id, and b) that a changes-only pattern of Extract updates can be set up. To achieve this, the server has to remember what was sent in the previous response.\n\nThe update mode may be event-driven and periodic update or a mixture of both. The candidate items to be sent each time are the result of re-evaluating the content and versioning parts of the specification; what is actually sent is determined by the `_send_changes_only_` flag.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Overall_validity",
            "severity" : "error",
            "human" : "Overall validity must be present",
            "expression" : "repeat_period.exists() or trigger_events.exists()"
          },
          {
            "key" : "Trigger_events_validity",
            "severity" : "error",
            "human" : "Trigger events validity must be present",
            "expression" : "trigger_events.exists() implies trigger_events.empty().not()"
          },
          {
            "key" : "Send_changes_only_validity",
            "severity" : "error",
            "human" : "Send changes only validity must satisfy conditional constraints",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_UPDATE_SPEC.persist-in-server",
        "path" : "EXTRACT_UPDATE_SPEC.persist_in_server",
        "short" : "If True, this Request is persisted in the server until further notice.",
        "definition" : "If True, this Request is persisted in the server until further notice.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_UPDATE_SPEC.repeat-period",
        "path" : "EXTRACT_UPDATE_SPEC.repeat_period",
        "short" : "Period for resending update Extracts in response to original Request.",
        "definition" : "Period for resending update Extracts in response to original Request.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DURATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_UPDATE_SPEC.trigger-events",
        "path" : "EXTRACT_UPDATE_SPEC.trigger_events",
        "short" : "Set of Event names that will cause sending of update Extracts.",
        "definition" : "Set of Event names that will cause sending of update Extracts. Event types include:   \n\n* `|any_change|` - any change in content items matched by content specification, e.g. new versions of persistent compositions. If the content list allows matching of any, or a wide range of archetypes, this event type will match any additions to the record.\n* `|correction|` - match error corrections only, including deletions.\n* `|update|` - match updates (i.e. new versions) of included content items.\n\nCoded by openEHR Terminology group 'extract update trigger event type'.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_UPDATE_SPEC.update-method",
        "path" : "EXTRACT_UPDATE_SPEC.update_method",
        "short" : "Indicate mode of update.",
        "definition" : "Indicate mode of update. Can be: send only items that are changed (including logical deletions) or new since last send. For `_persist_in_server_` Requests only.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
