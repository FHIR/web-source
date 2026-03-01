# Null Flavours - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Null Flavours**

## CodeSystem: Null Flavours 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-null_flavours | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:null_flavours |

 
Null Flavours 

 This Code system is referenced in the content logical definition of the following value sets: 

* [null_flavours](ValueSet-null-flavours.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "null-flavours",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-null_flavours",
  "version" : "0.1.0-snapshot",
  "name" : "null_flavours",
  "title" : "Null Flavours",
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
  "description" : "Null Flavours",
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
  "count" : 4,
  "concept" : [
    {
      "code" : "271",
      "display" : "no information",
      "designation" : [
        {
          "language" : "es",
          "value" : "sin información"
        },
        {
          "language" : "ja",
          "value" : "不明"
        },
        {
          "language" : "pt",
          "value" : "sem informação"
        },
        {
          "language" : "zh",
          "value" : "无信息"
        }
      ]
    },
    {
      "code" : "253",
      "display" : "unknown",
      "designation" : [
        {
          "language" : "es",
          "value" : "desconocido"
        },
        {
          "language" : "ja",
          "value" : "未知"
        },
        {
          "language" : "pt",
          "value" : "desconhecido"
        },
        {
          "language" : "zh",
          "value" : "未知"
        }
      ]
    },
    {
      "code" : "272",
      "display" : "masked",
      "designation" : [
        {
          "language" : "es",
          "value" : "oculto"
        },
        {
          "language" : "ja",
          "value" : "隠蔽された"
        },
        {
          "language" : "pt",
          "value" : "mascarado"
        },
        {
          "language" : "zh",
          "value" : "已遮蔽"
        }
      ]
    },
    {
      "code" : "273",
      "display" : "not applicable",
      "designation" : [
        {
          "language" : "es",
          "value" : "no aplica"
        },
        {
          "language" : "ja",
          "value" : "該当なし"
        },
        {
          "language" : "pt",
          "value" : "não aplicável"
        },
        {
          "language" : "zh",
          "value" : "不适用"
        }
      ]
    }
  ]
}

```
