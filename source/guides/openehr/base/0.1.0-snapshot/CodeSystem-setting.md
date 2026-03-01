# Setting - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Setting**

## CodeSystem: Setting 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-setting | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:setting |

 
Setting 

 This Code system is referenced in the content logical definition of the following value sets: 

* [setting](ValueSet-setting.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "setting",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-setting",
  "version" : "0.1.0-snapshot",
  "name" : "setting",
  "title" : "Setting",
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
  "description" : "Setting",
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
  "count" : 14,
  "concept" : [
    {
      "code" : "225",
      "display" : "home",
      "designation" : [
        {
          "language" : "es",
          "value" : "hogar"
        },
        {
          "language" : "ja",
          "value" : "居宅"
        },
        {
          "language" : "pt",
          "value" : "cuidados domiciliários"
        },
        {
          "language" : "zh",
          "value" : "住所"
        }
      ]
    },
    {
      "code" : "227",
      "display" : "emergency care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención de emergencia"
        },
        {
          "language" : "ja",
          "value" : "救急治療"
        },
        {
          "language" : "pt",
          "value" : "cuidados de emergência"
        },
        {
          "language" : "zh",
          "value" : "急救医疗服务"
        }
      ]
    },
    {
      "code" : "228",
      "display" : "primary medical care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención médica primaria"
        },
        {
          "language" : "ja",
          "value" : "プライマリー医療"
        },
        {
          "language" : "pt",
          "value" : "cuidados médicos primários"
        },
        {
          "language" : "zh",
          "value" : "基层医疗服务"
        }
      ]
    },
    {
      "code" : "229",
      "display" : "primary nursing care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención primaria de enfermería"
        },
        {
          "language" : "ja",
          "value" : "プライマリー看護"
        },
        {
          "language" : "pt",
          "value" : "cuidados de enfermagem primários"
        },
        {
          "language" : "zh",
          "value" : "基层护理服务"
        }
      ]
    },
    {
      "code" : "230",
      "display" : "primary allied health care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención primaria de trabajadores de la salud"
        },
        {
          "language" : "ja",
          "value" : "プライマリーで共同した"
        },
        {
          "language" : "pt",
          "value" : "cuidados de saúde primários"
        },
        {
          "language" : "zh",
          "value" : "基层辅助医疗服务"
        }
      ]
    },
    {
      "code" : "231",
      "display" : "midwifery care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención de partera"
        },
        {
          "language" : "ja",
          "value" : "助産師によるケア"
        },
        {
          "language" : "pt",
          "value" : "cuidados de obstetrícia"
        },
        {
          "language" : "zh",
          "value" : "助产服务"
        }
      ]
    },
    {
      "code" : "232",
      "display" : "secondary medical care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención médica secundaria"
        },
        {
          "language" : "ja",
          "value" : "二次医療"
        },
        {
          "language" : "pt",
          "value" : "cuidados médicos secundários"
        },
        {
          "language" : "zh",
          "value" : "二级医疗服务"
        }
      ]
    },
    {
      "code" : "233",
      "display" : "secondary nursing care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención secundaria de enfermería"
        },
        {
          "language" : "ja",
          "value" : "二次看護"
        },
        {
          "language" : "pt",
          "value" : "cuidados de enfermagem secundários"
        },
        {
          "language" : "zh",
          "value" : "二级护理服务"
        }
      ]
    },
    {
      "code" : "234",
      "display" : "secondary allied health care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención secundaria de trabajadores de la salud"
        },
        {
          "language" : "ja",
          "value" : "二次で共同した"
        },
        {
          "language" : "pt",
          "value" : "cuidados de saúde especializada"
        },
        {
          "language" : "zh",
          "value" : "二级辅助医疗服务"
        }
      ]
    },
    {
      "code" : "235",
      "display" : "complementary health care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención complementaria"
        },
        {
          "language" : "ja",
          "value" : "代替医療"
        },
        {
          "language" : "pt",
          "value" : "cuidados de saúde complementares"
        },
        {
          "language" : "zh",
          "value" : "补充性医疗服务"
        }
      ]
    },
    {
      "code" : "236",
      "display" : "dental care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención dental"
        },
        {
          "language" : "ja",
          "value" : "歯科治療"
        },
        {
          "language" : "pt",
          "value" : "cuidados dentários"
        },
        {
          "language" : "zh",
          "value" : "牙科服务"
        }
      ]
    },
    {
      "code" : "237",
      "display" : "nursing home care",
      "designation" : [
        {
          "language" : "es",
          "value" : "atención en casa de salud"
        },
        {
          "language" : "ja",
          "value" : "在宅介護"
        },
        {
          "language" : "pt",
          "value" : "cuidados em lares residenciais"
        },
        {
          "language" : "zh",
          "value" : "护理院服务"
        }
      ]
    },
    {
      "code" : "802",
      "display" : "mental healthcare",
      "designation" : [
        {
          "language" : "es",
          "value" : "salud mental"
        },
        {
          "language" : "ja",
          "value" : "メンタルケア"
        },
        {
          "language" : "pt",
          "value" : "cuidados de saúde mental"
        },
        {
          "language" : "zh",
          "value" : "心理健康服务"
        }
      ]
    },
    {
      "code" : "238",
      "display" : "other care",
      "designation" : [
        {
          "language" : "es",
          "value" : "otros cuidados"
        },
        {
          "language" : "ja",
          "value" : "その他のケア"
        },
        {
          "language" : "pt",
          "value" : "outros cuidados"
        },
        {
          "language" : "zh",
          "value" : "其他照护服务"
        }
      ]
    }
  ]
}

```
