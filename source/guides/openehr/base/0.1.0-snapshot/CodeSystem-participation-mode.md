# Participation Mode - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Participation Mode**

## CodeSystem: Participation Mode 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-participation_mode | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:participation_mode |

 
Participation Mode 

 This Code system is referenced in the content logical definition of the following value sets: 

* [participation_mode](ValueSet-participation-mode.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "participation-mode",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-participation_mode",
  "version" : "0.1.0-snapshot",
  "name" : "participation_mode",
  "title" : "Participation Mode",
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
  "description" : "Participation Mode",
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
  "count" : 32,
  "concept" : [
    {
      "code" : "193",
      "display" : "not specified",
      "designation" : [
        {
          "language" : "es",
          "value" : "no especificado"
        },
        {
          "language" : "ja",
          "value" : "指定なし"
        },
        {
          "language" : "pt",
          "value" : "não especificado"
        },
        {
          "language" : "zh",
          "value" : "未明确说明"
        }
      ]
    },
    {
      "code" : "216",
      "display" : "face-to-face communication",
      "designation" : [
        {
          "language" : "es",
          "value" : "comunicación cara a cara"
        },
        {
          "language" : "ja",
          "value" : "対面コミュニケーション"
        },
        {
          "language" : "pt",
          "value" : "comunicação cara-a-cara"
        },
        {
          "language" : "zh",
          "value" : "面对面沟通"
        }
      ]
    },
    {
      "code" : "223",
      "display" : "interpreted face-to-face communication",
      "designation" : [
        {
          "language" : "es",
          "value" : "comunicación cara a cara interpretada"
        },
        {
          "language" : "ja",
          "value" : "通訳された対面コミュニケーション"
        },
        {
          "language" : "pt",
          "value" : "comunicação interpretada cara-a-cara"
        },
        {
          "language" : "zh",
          "value" : "配备口译的面对面沟通"
        }
      ]
    },
    {
      "code" : "217",
      "display" : "signing (face-to-face)",
      "designation" : [
        {
          "language" : "es",
          "value" : "firma (cara a cara)"
        },
        {
          "language" : "ja",
          "value" : "身振り(対面での)"
        },
        {
          "language" : "pt",
          "value" : "assinatura (cara-a-cara)"
        },
        {
          "language" : "zh",
          "value" : "签名 (面对面)"
        }
      ]
    },
    {
      "code" : "195",
      "display" : "live audiovisual; videoconference; videophone",
      "designation" : [
        {
          "language" : "es",
          "value" : "audiovisuales en vivo; video conferencia; video llamada"
        },
        {
          "language" : "ja",
          "value" : "生のオーディオビジュアル; ビデオカンファレンス; テレビ電話"
        },
        {
          "language" : "pt",
          "value" : "audiovisual ao vivo; videoconferência; videofone"
        },
        {
          "language" : "zh",
          "value" : "现场视听、视频会议、视频电话"
        }
      ]
    },
    {
      "code" : "198",
      "display" : "videoconferencing",
      "designation" : [
        {
          "language" : "es",
          "value" : "video conferencia"
        },
        {
          "language" : "ja",
          "value" : "ビデオカンファレンス"
        },
        {
          "language" : "pt",
          "value" : "videoconferência"
        },
        {
          "language" : "zh",
          "value" : "视频会议"
        }
      ]
    },
    {
      "code" : "197",
      "display" : "videophone",
      "designation" : [
        {
          "language" : "es",
          "value" : "video llamada"
        },
        {
          "language" : "ja",
          "value" : "テレビ電話"
        },
        {
          "language" : "pt",
          "value" : "videofone"
        },
        {
          "language" : "zh",
          "value" : "可视电话"
        }
      ]
    },
    {
      "code" : "218",
      "display" : "signing over video",
      "designation" : [
        {
          "language" : "es",
          "value" : "firma sobre video"
        },
        {
          "language" : "ja",
          "value" : "テレビを通じた身振り"
        },
        {
          "language" : "pt",
          "value" : "assinatura por vídeo"
        },
        {
          "language" : "zh",
          "value" : "视频签名"
        }
      ]
    },
    {
      "code" : "224",
      "display" : "interpreted video communication",
      "designation" : [
        {
          "language" : "es",
          "value" : "comunicación por video interpretada"
        },
        {
          "language" : "ja",
          "value" : "通訳されたビデオコミュニケーション"
        },
        {
          "language" : "pt",
          "value" : "comunicação interpretada por vídeo"
        },
        {
          "language" : "zh",
          "value" : "配备口译的视频沟通"
        }
      ]
    },
    {
      "code" : "194",
      "display" : "asynchronous audiovisual; recorded video",
      "designation" : [
        {
          "language" : "es",
          "value" : "audiovisual asíncrona; video grabado"
        },
        {
          "language" : "ja",
          "value" : "非同期のオーディオビジュアル; 録画されたビデオ"
        },
        {
          "language" : "pt",
          "value" : "audiovisual assíncrono; vídeo gravado"
        },
        {
          "language" : "zh",
          "value" : "异步视听、录制的视频"
        }
      ]
    },
    {
      "code" : "196",
      "display" : "recorded video",
      "designation" : [
        {
          "language" : "es",
          "value" : "video grabado"
        },
        {
          "language" : "ja",
          "value" : "録画されたビデオ"
        },
        {
          "language" : "pt",
          "value" : "vídeo gravado"
        },
        {
          "language" : "zh",
          "value" : "录制的视频"
        }
      ]
    },
    {
      "code" : "202",
      "display" : "live audio-only; telephone; internet phone; teleconference",
      "designation" : [
        {
          "language" : "es",
          "value" : "sólo audio en vivo; teléfono; teléfono de internet; tele-conferencia"
        },
        {
          "language" : "ja",
          "value" : "生の音声; 電話; インターネット電話; 電話会議"
        },
        {
          "language" : "pt",
          "value" : "apenas áudio em directo; telefone; telefone por internet; teleconferência"
        },
        {
          "language" : "zh",
          "value" : "纯现场音频、电话、互联网电话、电话会议"
        }
      ]
    },
    {
      "code" : "204",
      "display" : "telephone",
      "designation" : [
        {
          "language" : "es",
          "value" : "teléfono"
        },
        {
          "language" : "ja",
          "value" : "電話"
        },
        {
          "language" : "pt",
          "value" : "telefone"
        },
        {
          "language" : "zh",
          "value" : "电话"
        }
      ]
    },
    {
      "code" : "203",
      "display" : "teleconference",
      "designation" : [
        {
          "language" : "es",
          "value" : "tele-conferencia"
        },
        {
          "language" : "ja",
          "value" : "電話会議"
        },
        {
          "language" : "pt",
          "value" : "teleconferência"
        },
        {
          "language" : "zh",
          "value" : "电话会议"
        }
      ]
    },
    {
      "code" : "205",
      "display" : "internet telephone",
      "designation" : [
        {
          "language" : "es",
          "value" : "teléfono de internet"
        },
        {
          "language" : "ja",
          "value" : "インターネット電話"
        },
        {
          "language" : "pt",
          "value" : "telefone por internet"
        },
        {
          "language" : "zh",
          "value" : "互联网电话"
        }
      ]
    },
    {
      "code" : "222",
      "display" : "interpreted audio-only",
      "designation" : [
        {
          "language" : "es",
          "value" : "sólo audio interpretado"
        },
        {
          "language" : "ja",
          "value" : "通訳された音声"
        },
        {
          "language" : "pt",
          "value" : "áudio interpretado"
        },
        {
          "language" : "zh",
          "value" : "配备口译的纯音频"
        }
      ]
    },
    {
      "code" : "199",
      "display" : "asynchronous audio-only; dictated; voice mail",
      "designation" : [
        {
          "language" : "es",
          "value" : "sólo audio asíncrono; dictado; correo de voz"
        },
        {
          "language" : "ja",
          "value" : "非同期の音声; 口述; ボイスメール"
        },
        {
          "language" : "pt",
          "value" : "áudio assíncrono; ditado; correio de voz"
        },
        {
          "language" : "zh",
          "value" : "异步纯音频、口述、语音邮件"
        }
      ]
    },
    {
      "code" : "200",
      "display" : "dictated",
      "designation" : [
        {
          "language" : "es",
          "value" : "dictado"
        },
        {
          "language" : "ja",
          "value" : "口述"
        },
        {
          "language" : "pt",
          "value" : "ditado"
        },
        {
          "language" : "zh",
          "value" : "口述"
        }
      ]
    },
    {
      "code" : "201",
      "display" : "voice-mail",
      "designation" : [
        {
          "language" : "es",
          "value" : "correo de voz"
        },
        {
          "language" : "ja",
          "value" : "ボイスメール"
        },
        {
          "language" : "pt",
          "value" : "correio de voz"
        },
        {
          "language" : "zh",
          "value" : "语音邮件"
        }
      ]
    },
    {
      "code" : "212",
      "display" : "live text-only; internet chat; SMS chat; interactive written note",
      "designation" : [
        {
          "language" : "es",
          "value" : "sólo texto en vivo; charla de texto por internet; charla por SMS; nota escrita interactiva"
        },
        {
          "language" : "ja",
          "value" : "生の文字通信; インターネットチャット SMSチャット; 相互に書き込めるノート"
        },
        {
          "language" : "pt",
          "value" : "apenas texto em directo; chat na Internet; chat por SMS; nota escrita interactiva"
        },
        {
          "language" : "zh",
          "value" : "纯实时文本、互联网聊天、短信聊天、交互式书面笔记"
        }
      ]
    },
    {
      "code" : "213",
      "display" : "internet chat",
      "designation" : [
        {
          "language" : "es",
          "value" : "charla (texto) por internet"
        },
        {
          "language" : "ja",
          "value" : "インターネットチャット"
        },
        {
          "language" : "pt",
          "value" : "chat por internet"
        },
        {
          "language" : "zh",
          "value" : "互联网聊天"
        }
      ]
    },
    {
      "code" : "214",
      "display" : "SMS chat",
      "designation" : [
        {
          "language" : "es",
          "value" : "charla por SMS"
        },
        {
          "language" : "ja",
          "value" : "SMSチャット"
        },
        {
          "language" : "pt",
          "value" : "chat por SMS"
        },
        {
          "language" : "zh",
          "value" : "短信聊天"
        }
      ]
    },
    {
      "code" : "215",
      "display" : "interactive written note",
      "designation" : [
        {
          "language" : "es",
          "value" : "nota escrita interactiva"
        },
        {
          "language" : "ja",
          "value" : "相互に書き込めるノート"
        },
        {
          "language" : "pt",
          "value" : "nota escrita interactiva"
        },
        {
          "language" : "zh",
          "value" : "交互式书面笔记"
        }
      ]
    },
    {
      "code" : "206",
      "display" : "asynchronous text; email; fax; letter; handwritten note; SMS message",
      "designation" : [
        {
          "language" : "es",
          "value" : "texto asíncrono; correo electrónico; fax; carta; nota manuscrita; mensaje SMS"
        },
        {
          "language" : "ja",
          "value" : "非同期の文字通信; email; fax; 手紙; 手書きのノート; SMSメッセージ"
        },
        {
          "language" : "pt",
          "value" : "texto assíncrono; correio electrónico; fax; carta; nota manuscrita; mensagem SMS"
        },
        {
          "language" : "zh",
          "value" : "异步文本、电子邮件、传真、信件、手写笔记、短信"
        }
      ]
    },
    {
      "code" : "211",
      "display" : "handwritten note",
      "designation" : [
        {
          "language" : "es",
          "value" : "nota manuscrita"
        },
        {
          "language" : "ja",
          "value" : "手書きのノート"
        },
        {
          "language" : "pt",
          "value" : "nota manuscrita"
        },
        {
          "language" : "zh",
          "value" : "手写笔记"
        }
      ]
    },
    {
      "code" : "210",
      "display" : "printed/typed letter",
      "designation" : [
        {
          "language" : "es",
          "value" : "carta impresa/escrita"
        },
        {
          "language" : "ja",
          "value" : "印刷された（タイプされた）手紙"
        },
        {
          "language" : "pt",
          "value" : "carta impressa/datilografada"
        },
        {
          "language" : "zh",
          "value" : "打印/打字形成的信件"
        }
      ]
    },
    {
      "code" : "207",
      "display" : "email",
      "designation" : [
        {
          "language" : "es",
          "value" : "correo electrónico"
        },
        {
          "language" : "ja",
          "value" : "email"
        },
        {
          "language" : "pt",
          "value" : "email"
        },
        {
          "language" : "zh",
          "value" : "电子邮件"
        }
      ]
    },
    {
      "code" : "208",
      "display" : "facsimile/telefax",
      "designation" : [
        {
          "language" : "es",
          "value" : "facsímil/telefax"
        },
        {
          "language" : "ja",
          "value" : "FAX/telefax"
        },
        {
          "language" : "pt",
          "value" : "fax/telefax"
        },
        {
          "language" : "zh",
          "value" : "传真/电传"
        }
      ]
    },
    {
      "code" : "221",
      "display" : "translated text",
      "designation" : [
        {
          "language" : "es",
          "value" : "texto traducido"
        },
        {
          "language" : "ja",
          "value" : "翻訳された文書"
        },
        {
          "language" : "pt",
          "value" : "texto traduzido"
        },
        {
          "language" : "zh",
          "value" : "经过翻译的文本"
        }
      ]
    },
    {
      "code" : "209",
      "display" : "SMS message",
      "designation" : [
        {
          "language" : "es",
          "value" : "mensajería SMS"
        },
        {
          "language" : "ja",
          "value" : "SMSメッセージ"
        },
        {
          "language" : "pt",
          "value" : "mensagem SMS"
        },
        {
          "language" : "zh",
          "value" : "短信"
        }
      ]
    },
    {
      "code" : "219",
      "display" : "physically present",
      "designation" : [
        {
          "language" : "es",
          "value" : "físicamente presente"
        },
        {
          "language" : "ja",
          "value" : "出席"
        },
        {
          "language" : "pt",
          "value" : "fisicamente presente"
        },
        {
          "language" : "zh",
          "value" : "亲自到场"
        }
      ]
    },
    {
      "code" : "220",
      "display" : "physically remote",
      "designation" : [
        {
          "language" : "es",
          "value" : "físicamente remoto"
        },
        {
          "language" : "ja",
          "value" : "遠隔での参加"
        },
        {
          "language" : "pt",
          "value" : "fisicamente remoto"
        },
        {
          "language" : "zh",
          "value" : "亲自远程"
        }
      ]
    }
  ]
}

```
