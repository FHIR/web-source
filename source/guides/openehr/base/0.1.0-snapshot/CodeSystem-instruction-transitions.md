# Instruction Transitions - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Instruction Transitions**

## CodeSystem: Instruction Transitions 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-instruction_transitions | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:instruction_transitions |

 
Instruction Transitions 

 This Code system is referenced in the content logical definition of the following value sets: 

* [instruction_transitions](ValueSet-instruction-transitions.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "instruction-transitions",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-instruction_transitions",
  "version" : "0.1.0-snapshot",
  "name" : "instruction_transitions",
  "title" : "Instruction Transitions",
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
  "description" : "Instruction Transitions",
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
  "count" : 20,
  "concept" : [
    {
      "code" : "535",
      "display" : "initiate",
      "designation" : [
        {
          "language" : "es",
          "value" : "iniciar"
        },
        {
          "language" : "ja",
          "value" : "新しく始める"
        },
        {
          "language" : "pt",
          "value" : "iniciar"
        },
        {
          "language" : "zh",
          "value" : "发起"
        }
      ]
    },
    {
      "code" : "536",
      "display" : "plan step",
      "designation" : [
        {
          "language" : "es",
          "value" : "paso del plan"
        },
        {
          "language" : "ja",
          "value" : "ステップを計画する"
        },
        {
          "language" : "pt",
          "value" : "planear etapa"
        },
        {
          "language" : "zh",
          "value" : "计划步骤"
        }
      ]
    },
    {
      "code" : "537",
      "display" : "postpone",
      "designation" : [
        {
          "language" : "es",
          "value" : "postponer"
        },
        {
          "language" : "ja",
          "value" : "延期する"
        },
        {
          "language" : "pt",
          "value" : "adiar"
        },
        {
          "language" : "zh",
          "value" : "推迟"
        }
      ]
    },
    {
      "code" : "538",
      "display" : "restore",
      "designation" : [
        {
          "language" : "es",
          "value" : "restaurar"
        },
        {
          "language" : "ja",
          "value" : "元に戻す"
        },
        {
          "language" : "pt",
          "value" : "restaurar"
        },
        {
          "language" : "zh",
          "value" : "恢复"
        }
      ]
    },
    {
      "code" : "166",
      "display" : "cancel",
      "designation" : [
        {
          "language" : "es",
          "value" : "cancelar"
        },
        {
          "language" : "ja",
          "value" : "キャンセルする"
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
      "code" : "542",
      "display" : "postponed step",
      "designation" : [
        {
          "language" : "es",
          "value" : "paso postpuesto"
        },
        {
          "language" : "ja",
          "value" : "延期されたステップ"
        },
        {
          "language" : "pt",
          "value" : "etapa adiada"
        },
        {
          "language" : "zh",
          "value" : "推迟的步骤"
        }
      ]
    },
    {
      "code" : "539",
      "display" : "schedule",
      "designation" : [
        {
          "language" : "es",
          "value" : "coordinar"
        },
        {
          "language" : "ja",
          "value" : "計画する"
        },
        {
          "language" : "pt",
          "value" : "agendar"
        },
        {
          "language" : "zh",
          "value" : "排程"
        }
      ]
    },
    {
      "code" : "534",
      "display" : "scheduled step",
      "designation" : [
        {
          "language" : "es",
          "value" : "paso coordinado"
        },
        {
          "language" : "ja",
          "value" : "計画されたステップ"
        },
        {
          "language" : "pt",
          "value" : "etapa agendada"
        },
        {
          "language" : "zh",
          "value" : "排程步骤"
        }
      ]
    },
    {
      "code" : "540",
      "display" : "start",
      "designation" : [
        {
          "language" : "es",
          "value" : "comienzar"
        },
        {
          "language" : "ja",
          "value" : "開始する"
        },
        {
          "language" : "pt",
          "value" : "iniciar"
        },
        {
          "language" : "zh",
          "value" : "开始"
        }
      ]
    },
    {
      "code" : "541",
      "display" : "do",
      "designation" : [
        {
          "language" : "es",
          "value" : "realizar"
        },
        {
          "language" : "ja",
          "value" : "実施する"
        },
        {
          "language" : "pt",
          "value" : "executar"
        },
        {
          "language" : "zh",
          "value" : "执行"
        }
      ]
    },
    {
      "code" : "543",
      "display" : "active step",
      "designation" : [
        {
          "language" : "es",
          "value" : "paso activo"
        },
        {
          "language" : "ja",
          "value" : "実行中のステップ"
        },
        {
          "language" : "pt",
          "value" : "etapa activa"
        },
        {
          "language" : "zh",
          "value" : "现行步骤"
        }
      ]
    },
    {
      "code" : "544",
      "display" : "suspend",
      "designation" : [
        {
          "language" : "es",
          "value" : "suspender"
        },
        {
          "language" : "ja",
          "value" : "中断する"
        },
        {
          "language" : "pt",
          "value" : "suspender"
        },
        {
          "language" : "zh",
          "value" : "暂停"
        }
      ]
    },
    {
      "code" : "545",
      "display" : "suspended step",
      "designation" : [
        {
          "language" : "es",
          "value" : "paso suspendido"
        },
        {
          "language" : "ja",
          "value" : "中断されたステップ"
        },
        {
          "language" : "pt",
          "value" : "etapa suspensa"
        },
        {
          "language" : "zh",
          "value" : "暂停步骤"
        }
      ]
    },
    {
      "code" : "546",
      "display" : "resume",
      "designation" : [
        {
          "language" : "es",
          "value" : "reanudar"
        },
        {
          "language" : "ja",
          "value" : "再開する"
        },
        {
          "language" : "pt",
          "value" : "retomar"
        },
        {
          "language" : "zh",
          "value" : "中断后继续"
        }
      ]
    },
    {
      "code" : "547",
      "display" : "abort",
      "designation" : [
        {
          "language" : "es",
          "value" : "abortar"
        },
        {
          "language" : "ja",
          "value" : "中断する"
        },
        {
          "language" : "pt",
          "value" : "abortar"
        },
        {
          "language" : "zh",
          "value" : "中止"
        }
      ]
    },
    {
      "code" : "548",
      "display" : "finish",
      "designation" : [
        {
          "language" : "es",
          "value" : "terminar"
        },
        {
          "language" : "ja",
          "value" : "完了する"
        },
        {
          "language" : "pt",
          "value" : "terminar"
        },
        {
          "language" : "zh",
          "value" : "完成"
        }
      ]
    },
    {
      "code" : "549",
      "display" : "time out",
      "designation" : [
        {
          "language" : "es",
          "value" : "se acabó el tiempo"
        },
        {
          "language" : "ja",
          "value" : "時間切れ"
        },
        {
          "language" : "pt",
          "value" : "tempo esgotado"
        },
        {
          "language" : "zh",
          "value" : "超时"
        }
      ]
    },
    {
      "code" : "550",
      "display" : "notify aborted",
      "designation" : [
        {
          "language" : "es",
          "value" : "notificar abortado"
        },
        {
          "language" : "ja",
          "value" : "中断を知らせる"
        },
        {
          "language" : "pt",
          "value" : "notificação abortada"
        },
        {
          "language" : "zh",
          "value" : "通知已中止"
        }
      ]
    },
    {
      "code" : "551",
      "display" : "notify completed",
      "designation" : [
        {
          "language" : "es",
          "value" : "notificar completado"
        },
        {
          "language" : "ja",
          "value" : "完了を知らせる"
        },
        {
          "language" : "pt",
          "value" : "notificação concluída"
        },
        {
          "language" : "zh",
          "value" : "通知已完成"
        }
      ]
    },
    {
      "code" : "552",
      "display" : "notify cancelled",
      "designation" : [
        {
          "language" : "es",
          "value" : "notificar cancelado"
        },
        {
          "language" : "ja",
          "value" : "キャンセルを知らせる"
        },
        {
          "language" : "pt",
          "value" : "notificação cancelada"
        },
        {
          "language" : "zh",
          "value" : "通知已取消"
        }
      ]
    }
  ]
}

```
