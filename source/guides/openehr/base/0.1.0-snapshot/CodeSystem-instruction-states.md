# Instruction States - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Instruction States**

## CodeSystem: Instruction States 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-instruction_states | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:instruction_states |

 
Instruction States 

 This Code system is referenced in the content logical definition of the following value sets: 

* [instruction_states](ValueSet-instruction-states.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "instruction-states",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-instruction_states",
  "version" : "0.1.0-snapshot",
  "name" : "instruction_states",
  "title" : "Instruction States",
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
  "description" : "Instruction States",
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
  "count" : 10,
  "concept" : [
    {
      "code" : "524",
      "display" : "initial",
      "designation" : [
        {
          "language" : "es",
          "value" : "inicial"
        },
        {
          "language" : "ja",
          "value" : "最初"
        },
        {
          "language" : "pt",
          "value" : "inicial"
        },
        {
          "language" : "zh",
          "value" : "初始"
        }
      ]
    },
    {
      "code" : "526",
      "display" : "planned",
      "designation" : [
        {
          "language" : "es",
          "value" : "planificado"
        },
        {
          "language" : "ja",
          "value" : "予定されている"
        },
        {
          "language" : "pt",
          "value" : "planeado"
        },
        {
          "language" : "zh",
          "value" : "已计划"
        }
      ]
    },
    {
      "code" : "527",
      "display" : "postponed",
      "designation" : [
        {
          "language" : "es",
          "value" : "postpuesto"
        },
        {
          "language" : "ja",
          "value" : "延期された"
        },
        {
          "language" : "pt",
          "value" : "adiado"
        },
        {
          "language" : "zh",
          "value" : "已推迟"
        }
      ]
    },
    {
      "code" : "528",
      "display" : "cancelled",
      "designation" : [
        {
          "language" : "es",
          "value" : "cancelado"
        },
        {
          "language" : "ja",
          "value" : "キャンセルされた"
        },
        {
          "language" : "pt",
          "value" : "cancelado"
        },
        {
          "language" : "zh",
          "value" : "已取消"
        }
      ]
    },
    {
      "code" : "529",
      "display" : "scheduled",
      "designation" : [
        {
          "language" : "es",
          "value" : "coordinado"
        },
        {
          "language" : "ja",
          "value" : "計画された"
        },
        {
          "language" : "pt",
          "value" : "agendado"
        },
        {
          "language" : "zh",
          "value" : "已排程"
        }
      ]
    },
    {
      "code" : "245",
      "display" : "active",
      "designation" : [
        {
          "language" : "es",
          "value" : "activo"
        },
        {
          "language" : "ja",
          "value" : "実施中"
        },
        {
          "language" : "pt",
          "value" : "activo"
        },
        {
          "language" : "zh",
          "value" : "现行有效"
        }
      ]
    },
    {
      "code" : "530",
      "display" : "suspended",
      "designation" : [
        {
          "language" : "es",
          "value" : "suspendido"
        },
        {
          "language" : "ja",
          "value" : "一時停止中"
        },
        {
          "language" : "pt",
          "value" : "suspenso"
        },
        {
          "language" : "zh",
          "value" : "已暂停"
        }
      ]
    },
    {
      "code" : "531",
      "display" : "aborted",
      "designation" : [
        {
          "language" : "es",
          "value" : "abortado"
        },
        {
          "language" : "ja",
          "value" : "中断された"
        },
        {
          "language" : "pt",
          "value" : "abortado"
        },
        {
          "language" : "zh",
          "value" : "已中止"
        }
      ]
    },
    {
      "code" : "532",
      "display" : "completed",
      "designation" : [
        {
          "language" : "es",
          "value" : "completado"
        },
        {
          "language" : "ja",
          "value" : "完了"
        },
        {
          "language" : "pt",
          "value" : "concluído"
        },
        {
          "language" : "zh",
          "value" : "已完成"
        }
      ]
    },
    {
      "code" : "533",
      "display" : "expired",
      "designation" : [
        {
          "language" : "es",
          "value" : "expirado"
        },
        {
          "language" : "ja",
          "value" : "期限切れ"
        },
        {
          "language" : "pt",
          "value" : "expirado"
        },
        {
          "language" : "zh",
          "value" : "已过期"
        }
      ]
    }
  ]
}

```
