# Extract Update Trigger Event Type - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Extract Update Trigger Event Type**

## CodeSystem: Extract Update Trigger Event Type 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-extract_update_trigger_event_type | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:extract_update_trigger_event_type |

 
Extract Update Trigger Event Type 

 This Code system is referenced in the content logical definition of the following value sets: 

* [extract_update_trigger_event_type](ValueSet-extract-update-trigger-event-type.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "extract-update-trigger-event-type",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-extract_update_trigger_event_type",
  "version" : "0.1.0-snapshot",
  "name" : "extract_update_trigger_event_type",
  "title" : "Extract Update Trigger Event Type",
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
  "description" : "Extract Update Trigger Event Type",
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
  "count" : 3,
  "concept" : [
    {
      "code" : "812",
      "display" : "any change",
      "designation" : [
        {
          "language" : "es",
          "value" : "cualquier cambio"
        },
        {
          "language" : "ja",
          "value" : "変更"
        },
        {
          "language" : "pt",
          "value" : "qualquer alteração"
        },
        {
          "language" : "zh",
          "value" : "任何变更"
        }
      ]
    },
    {
      "code" : "813",
      "display" : "correction",
      "designation" : [
        {
          "language" : "es",
          "value" : "corrección"
        },
        {
          "language" : "ja",
          "value" : "訂正"
        },
        {
          "language" : "pt",
          "value" : "correcção"
        },
        {
          "language" : "zh",
          "value" : "修正"
        }
      ]
    },
    {
      "code" : "814",
      "display" : "update",
      "designation" : [
        {
          "language" : "es",
          "value" : "actualización"
        },
        {
          "language" : "ja",
          "value" : "更新"
        },
        {
          "language" : "pt",
          "value" : "actualização"
        },
        {
          "language" : "zh",
          "value" : "更新"
        }
      ]
    }
  ]
}

```
