# Extract Action Type - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Extract Action Type**

## CodeSystem: Extract Action Type 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-extract_action_type | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:extract_action_type |

 
Extract Action Type 

 This Code system is referenced in the content logical definition of the following value sets: 

* [extract_action_type](ValueSet-extract-action-type.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "extract-action-type",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-extract_action_type",
  "version" : "0.1.0-snapshot",
  "name" : "extract_action_type",
  "title" : "Extract Action Type",
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
  "description" : "Extract Action Type",
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
      "code" : "809",
      "display" : "cancel",
      "designation" : [
        {
          "language" : "es",
          "value" : "cancelación"
        },
        {
          "language" : "ja",
          "value" : "キャンセル"
        },
        {
          "language" : "pt",
          "value" : "cancelar"
        },
        {
          "language" : "zh",
          "value" : "取消"
        }
      ]
    },
    {
      "code" : "810",
      "display" : "resend",
      "designation" : [
        {
          "language" : "es",
          "value" : "reenvío"
        },
        {
          "language" : "ja",
          "value" : "再送"
        },
        {
          "language" : "pt",
          "value" : "reenviar"
        },
        {
          "language" : "zh",
          "value" : "重新发送"
        }
      ]
    },
    {
      "code" : "811",
      "display" : "send new",
      "designation" : [
        {
          "language" : "es",
          "value" : "nuevo envío"
        },
        {
          "language" : "ja",
          "value" : "新規送信"
        },
        {
          "language" : "pt",
          "value" : "enviar novo"
        },
        {
          "language" : "zh",
          "value" : "发送新的"
        }
      ]
    }
  ]
}

```
