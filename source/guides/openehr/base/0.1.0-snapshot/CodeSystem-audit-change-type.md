# Audit Change Type - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Audit Change Type**

## CodeSystem: Audit Change Type 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-audit_change_type | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:audit_change_type |

 
Audit Change Type 

 This Code system is referenced in the content logical definition of the following value sets: 

* [audit_change_type](ValueSet-audit-change-type.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "audit-change-type",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-audit_change_type",
  "version" : "0.1.0-snapshot",
  "name" : "audit_change_type",
  "title" : "Audit Change Type",
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
  "description" : "Audit Change Type",
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
  "count" : 9,
  "concept" : [
    {
      "code" : "249",
      "display" : "creation",
      "designation" : [
        {
          "language" : "es",
          "value" : "creación"
        },
        {
          "language" : "ja",
          "value" : "作成"
        },
        {
          "language" : "pt",
          "value" : "criação"
        },
        {
          "language" : "zh",
          "value" : "创建"
        }
      ]
    },
    {
      "code" : "250",
      "display" : "amendment",
      "designation" : [
        {
          "language" : "es",
          "value" : "enmienda"
        },
        {
          "language" : "ja",
          "value" : "訂正"
        },
        {
          "language" : "pt",
          "value" : "alteração"
        },
        {
          "language" : "zh",
          "value" : "修正"
        }
      ]
    },
    {
      "code" : "251",
      "display" : "modification",
      "designation" : [
        {
          "language" : "es",
          "value" : "modificación"
        },
        {
          "language" : "ja",
          "value" : "変更"
        },
        {
          "language" : "pt",
          "value" : "modificação"
        },
        {
          "language" : "zh",
          "value" : "修改"
        }
      ]
    },
    {
      "code" : "252",
      "display" : "synthesis",
      "designation" : [
        {
          "language" : "es",
          "value" : "síntesis"
        },
        {
          "language" : "ja",
          "value" : "統合"
        },
        {
          "language" : "pt",
          "value" : "síntese"
        },
        {
          "language" : "zh",
          "value" : "综合"
        }
      ]
    },
    {
      "code" : "523",
      "display" : "deleted",
      "designation" : [
        {
          "language" : "es",
          "value" : "eliminado"
        },
        {
          "language" : "ja",
          "value" : "削除"
        },
        {
          "language" : "pt",
          "value" : "eliminado"
        },
        {
          "language" : "zh",
          "value" : "删除"
        }
      ]
    },
    {
      "code" : "666",
      "display" : "attestation",
      "designation" : [
        {
          "language" : "es",
          "value" : "testimonio"
        },
        {
          "language" : "ja",
          "value" : "認証"
        },
        {
          "language" : "pt",
          "value" : "atestação"
        },
        {
          "language" : "zh",
          "value" : "证实"
        }
      ]
    },
    {
      "code" : "816",
      "display" : "restoration",
      "designation" : [
        {
          "language" : "es",
          "value" : "restaurado"
        },
        {
          "language" : "ja",
          "value" : "*restoration(en)"
        },
        {
          "language" : "pt",
          "value" : "restauração"
        },
        {
          "language" : "zh",
          "value" : "恢复"
        }
      ]
    },
    {
      "code" : "817",
      "display" : "format conversion",
      "designation" : [
        {
          "language" : "es",
          "value" : "conversión de formato"
        },
        {
          "language" : "ja",
          "value" : "*format conversion(en)"
        },
        {
          "language" : "pt",
          "value" : "conversão de formatos"
        },
        {
          "language" : "zh",
          "value" : "格式转换"
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
          "value" : "不明"
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
    }
  ]
}

```
