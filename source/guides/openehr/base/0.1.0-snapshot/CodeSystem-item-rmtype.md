# Item rmType CodeSystem - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Item rmType CodeSystem**

## CodeSystem: Item rmType CodeSystem 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-item-rmtype | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ItemRMTypeCS |

 
Item rmType CodeSystem 

 This Code system is referenced in the content logical definition of the following value sets: 

* [ItemRMTypeVS](ValueSet-item-rmtype.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "item-rmtype",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-item-rmtype",
  "version" : "0.1.0-snapshot",
  "name" : "ItemRMTypeCS",
  "title" : "Item rmType CodeSystem",
  "status" : "active",
  "experimental" : false,
  "date" : "2024-08-22",
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
  "description" : "Item rmType CodeSystem",
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
  "caseSensitive" : true,
  "content" : "complete",
  "concept" : [
    {
      "code" : "ACCESS_CONTROL_SETTINGS",
      "display" : "ACCESS_CONTROL_SETTINGS"
    },
    {
      "code" : "ACTION",
      "display" : "ACTION"
    },
    {
      "code" : "ACTIVITY",
      "display" : "ACTIVITY"
    },
    {
      "code" : "ACTOR",
      "display" : "ACTOR"
    },
    {
      "code" : "ADDRESS",
      "display" : "ADDRESS"
    },
    {
      "code" : "ADMIN_ENTRY",
      "display" : "ADMIN_ENTRY"
    },
    {
      "code" : "AGENT",
      "display" : "AGENT"
    },
    {
      "code" : "ARCHETYPED",
      "display" : "ARCHETYPED"
    },
    {
      "code" : "ARCHETYPE_ID",
      "display" : "ARCHETYPE_ID"
    },
    {
      "code" : "ATTESTATION",
      "display" : "ATTESTATION"
    },
    {
      "code" : "AUDIT_DETAILS",
      "display" : "AUDIT_DETAILS"
    },
    {
      "code" : "AUTHORED_RESOURCE",
      "display" : "AUTHORED_RESOURCE"
    },
    {
      "code" : "CAPABILITY",
      "display" : "CAPABILITY"
    },
    {
      "code" : "CARE_ENTRY",
      "display" : "CARE_ENTRY"
    },
    {
      "code" : "CLUSTER",
      "display" : "CLUSTER"
    },
    {
      "code" : "CODE_PHRASE",
      "display" : "CODE_PHRASE"
    },
    {
      "code" : "COMPOSITION",
      "display" : "COMPOSITION"
    },
    {
      "code" : "CONTACT",
      "display" : "CONTACT"
    },
    {
      "code" : "CONTENT_ITEM",
      "display" : "CONTENT_ITEM"
    },
    {
      "code" : "CONTRIBUTION",
      "display" : "CONTRIBUTION"
    },
    {
      "code" : "DATA_STRUCTURE",
      "display" : "DATA_STRUCTURE"
    },
    {
      "code" : "DATA_VALUE",
      "display" : "DATA_VALUE"
    },
    {
      "code" : "DV_ABSOLUTE_QUANTITY",
      "display" : "DV_ABSOLUTE_QUANTITY"
    },
    {
      "code" : "DV_AMOUNT",
      "display" : "DV_AMOUNT"
    },
    {
      "code" : "DV_BOOLEAN",
      "display" : "DV_BOOLEAN"
    },
    {
      "code" : "DV_CODED_TEXT",
      "display" : "DV_CODED_TEXT"
    },
    {
      "code" : "DV_COUNT",
      "display" : "DV_COUNT"
    },
    {
      "code" : "DV_DATE",
      "display" : "DV_DATE"
    },
    {
      "code" : "DV_DATE_TIME",
      "display" : "DV_DATE_TIME"
    },
    {
      "code" : "DV_DURATION",
      "display" : "DV_DURATION"
    },
    {
      "code" : "DV_EHR_URI",
      "display" : "DV_EHR_URI"
    },
    {
      "code" : "DV_ENCAPSULATED",
      "display" : "DV_ENCAPSULATED"
    },
    {
      "code" : "DV_GENERAL_TIME_SPECIFICATION",
      "display" : "DV_GENERAL_TIME_SPECIFICATION"
    },
    {
      "code" : "DV_IDENTIFIER",
      "display" : "DV_IDENTIFIER"
    },
    {
      "code" : "DV_INTERVAL",
      "display" : "DV_INTERVAL"
    },
    {
      "code" : "DV_INTERVAL<DV_DATE_TIME>",
      "display" : "DV_INTERVAL<DV_DATE_TIME>"
    },
    {
      "code" : "DV_MULTIMEDIA",
      "display" : "DV_MULTIMEDIA"
    },
    {
      "code" : "DV_ORDERED",
      "display" : "DV_ORDERED"
    },
    {
      "code" : "DV_ORDINAL",
      "display" : "DV_ORDINAL"
    },
    {
      "code" : "DV_PARAGRAPH",
      "display" : "DV_PARAGRAPH"
    },
    {
      "code" : "DV_PARSABLE",
      "display" : "DV_PARSABLE"
    },
    {
      "code" : "DV_PERIODIC_TIME_SPECIFICATION",
      "display" : "DV_PERIODIC_TIME_SPECIFICATION"
    },
    {
      "code" : "DV_PROPORTION",
      "display" : "DV_PROPORTION"
    },
    {
      "code" : "DV_QUANTIFIED",
      "display" : "DV_QUANTIFIED"
    },
    {
      "code" : "DV_QUANTITY",
      "display" : "DV_QUANTITY"
    },
    {
      "code" : "DV_SCALE",
      "display" : "DV_SCALE"
    },
    {
      "code" : "DV_STATE",
      "display" : "DV_STATE"
    },
    {
      "code" : "DV_TEMPORAL",
      "display" : "DV_TEMPORAL"
    },
    {
      "code" : "DV_TEXT",
      "display" : "DV_TEXT"
    },
    {
      "code" : "DV_TIME",
      "display" : "DV_TIME"
    },
    {
      "code" : "DV_TIME_SPECIFICATION",
      "display" : "DV_TIME_SPECIFICATION"
    },
    {
      "code" : "DV_URI",
      "display" : "DV_URI"
    },
    {
      "code" : "ELEMENT",
      "display" : "ELEMENT"
    },
    {
      "code" : "EVALUATION",
      "display" : "EVALUATION"
    },
    {
      "code" : "EVENT",
      "display" : "EVENT"
    },
    {
      "code" : "EVENT_CONTEXT",
      "display" : "EVENT_CONTEXT"
    },
    {
      "code" : "FEEDER_AUDIT",
      "display" : "FEEDER_AUDIT"
    },
    {
      "code" : "FEEDER_AUDIT_DETAILS",
      "display" : "FEEDER_AUDIT_DETAILS"
    },
    {
      "code" : "GROUP",
      "display" : "GROUP"
    },
    {
      "code" : "HIER_OBJECT_ID",
      "display" : "HIER_OBJECT_ID"
    },
    {
      "code" : "HISTORY",
      "display" : "HISTORY"
    },
    {
      "code" : "IMPORTED_VERSION",
      "display" : "IMPORTED_VERSION"
    },
    {
      "code" : "INSTRUCTION",
      "display" : "INSTRUCTION"
    },
    {
      "code" : "INSTRUCTION_DETAILS",
      "display" : "INSTRUCTION_DETAILS"
    },
    {
      "code" : "INTERVAL_EVENT",
      "display" : "INTERVAL_EVENT"
    },
    {
      "code" : "ISM_TRANSITION",
      "display" : "ISM_TRANSITION"
    },
    {
      "code" : "OBSERVATION",
      "display" : "OBSERVATION"
    },
    {
      "code" : "ORGANISATION",
      "display" : "ORGANISATION"
    },
    {
      "code" : "ORIGINAL_VERSION",
      "display" : "ORIGINAL_VERSION"
    },
    {
      "code" : "PARTICIPATION",
      "display" : "PARTICIPATION"
    },
    {
      "code" : "PARTY",
      "display" : "PARTY"
    },
    {
      "code" : "PARTY_IDENTIFIED",
      "display" : "PARTY_IDENTIFIED"
    },
    {
      "code" : "PARTY_IDENTITY",
      "display" : "PARTY_IDENTITY"
    },
    {
      "code" : "PARTY_PROXY",
      "display" : "PARTY_PROXY"
    },
    {
      "code" : "PARTY_REF",
      "display" : "PARTY_REF"
    },
    {
      "code" : "PARTY_RELATED",
      "display" : "PARTY_RELATED"
    },
    {
      "code" : "PARTY_RELATIONSHIP",
      "display" : "PARTY_RELATIONSHIP"
    },
    {
      "code" : "PARTY_SELF",
      "display" : "PARTY_SELF"
    },
    {
      "code" : "PERSON",
      "display" : "PERSON"
    },
    {
      "code" : "POINT_EVENT",
      "display" : "POINT_EVENT"
    },
    {
      "code" : "REFERENCE_RANGE",
      "display" : "REFERENCE_RANGE"
    },
    {
      "code" : "RESOURCE_DESCRIPTION",
      "display" : "RESOURCE_DESCRIPTION"
    },
    {
      "code" : "RESOURCE_DESCRIPTION_ITEM",
      "display" : "RESOURCE_DESCRIPTION_ITEM"
    },
    {
      "code" : "REVISION_HISTORY",
      "display" : "REVISION_HISTORY"
    },
    {
      "code" : "REVISION_HISTORY_ITEM",
      "display" : "REVISION_HISTORY_ITEM"
    },
    {
      "code" : "ROLE",
      "display" : "ROLE"
    },
    {
      "code" : "SECTION",
      "display" : "SECTION"
    },
    {
      "code" : "STRING",
      "display" : "STRING"
    },
    {
      "code" : "TERM_MAPPING",
      "display" : "TERM_MAPPING"
    },
    {
      "code" : "TRANSLATION_DETAILS",
      "display" : "TRANSLATION_DETAILS"
    }
  ]
}

```
