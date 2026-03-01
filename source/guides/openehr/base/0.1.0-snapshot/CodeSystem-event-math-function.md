# Event Math Function - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Event Math Function**

## CodeSystem: Event Math Function 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-event_math_function | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:event_math_function |

 
Event Math Function 

 This Code system is referenced in the content logical definition of the following value sets: 

* [event_math_function](ValueSet-event-math-function.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "event-math-function",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-event_math_function",
  "version" : "0.1.0-snapshot",
  "name" : "event_math_function",
  "title" : "Event Math Function",
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
  "description" : "Event Math Function",
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
  "count" : 11,
  "concept" : [
    {
      "code" : "145",
      "display" : "minimum",
      "designation" : [
        {
          "language" : "es",
          "value" : "mínimo"
        },
        {
          "language" : "ja",
          "value" : "最小"
        },
        {
          "language" : "pt",
          "value" : "mínimo"
        },
        {
          "language" : "zh",
          "value" : "最小值"
        }
      ]
    },
    {
      "code" : "144",
      "display" : "maximum",
      "designation" : [
        {
          "language" : "es",
          "value" : "máximo"
        },
        {
          "language" : "ja",
          "value" : "最大"
        },
        {
          "language" : "pt",
          "value" : "máximo"
        },
        {
          "language" : "zh",
          "value" : "最大值"
        }
      ]
    },
    {
      "code" : "267",
      "display" : "mode",
      "designation" : [
        {
          "language" : "es",
          "value" : "modo"
        },
        {
          "language" : "ja",
          "value" : "最頻値"
        },
        {
          "language" : "pt",
          "value" : "moda"
        },
        {
          "language" : "zh",
          "value" : "众数"
        }
      ]
    },
    {
      "code" : "268",
      "display" : "median",
      "designation" : [
        {
          "language" : "es",
          "value" : "mediana"
        },
        {
          "language" : "ja",
          "value" : "中央値"
        },
        {
          "language" : "pt",
          "value" : "mediana"
        },
        {
          "language" : "zh",
          "value" : "中位数"
        }
      ]
    },
    {
      "code" : "146",
      "display" : "mean",
      "designation" : [
        {
          "language" : "es",
          "value" : "media"
        },
        {
          "language" : "ja",
          "value" : "平均値"
        },
        {
          "language" : "pt",
          "value" : "média"
        },
        {
          "language" : "zh",
          "value" : "均值"
        }
      ]
    },
    {
      "code" : "147",
      "display" : "change",
      "designation" : [
        {
          "language" : "es",
          "value" : "cambio"
        },
        {
          "language" : "ja",
          "value" : "変化"
        },
        {
          "language" : "pt",
          "value" : "alteração"
        },
        {
          "language" : "zh",
          "value" : "变化"
        }
      ]
    },
    {
      "code" : "148",
      "display" : "total",
      "designation" : [
        {
          "language" : "es",
          "value" : "total"
        },
        {
          "language" : "ja",
          "value" : "合計値"
        },
        {
          "language" : "pt",
          "value" : "total"
        },
        {
          "language" : "zh",
          "value" : "总计"
        }
      ]
    },
    {
      "code" : "149",
      "display" : "variation",
      "designation" : [
        {
          "language" : "es",
          "value" : "variación"
        },
        {
          "language" : "ja",
          "value" : "偏差"
        },
        {
          "language" : "pt",
          "value" : "variação"
        },
        {
          "language" : "zh",
          "value" : "变异"
        }
      ]
    },
    {
      "code" : "521",
      "display" : "decrease",
      "designation" : [
        {
          "language" : "es",
          "value" : "disminución"
        },
        {
          "language" : "ja",
          "value" : "減少"
        },
        {
          "language" : "pt",
          "value" : "decréscimo"
        },
        {
          "language" : "zh",
          "value" : "降低"
        }
      ]
    },
    {
      "code" : "522",
      "display" : "increase",
      "designation" : [
        {
          "language" : "es",
          "value" : "incremento"
        },
        {
          "language" : "ja",
          "value" : "増加"
        },
        {
          "language" : "pt",
          "value" : "acréscimo"
        },
        {
          "language" : "zh",
          "value" : "升高"
        }
      ]
    },
    {
      "code" : "640",
      "display" : "actual",
      "designation" : [
        {
          "language" : "es",
          "value" : "real"
        },
        {
          "language" : "ja",
          "value" : "実際の"
        },
        {
          "language" : "pt",
          "value" : "real"
        },
        {
          "language" : "zh",
          "value" : "实际值"
        }
      ]
    }
  ]
}

```
