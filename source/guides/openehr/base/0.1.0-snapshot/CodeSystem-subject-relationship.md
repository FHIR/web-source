# Subject Relationship - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Subject Relationship**

## CodeSystem: Subject Relationship 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-subject_relationship | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:subject_relationship |

 
Subject Relationship 

 This Code system is referenced in the content logical definition of the following value sets: 

* [subject_relationship](ValueSet-subject-relationship.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "subject-relationship",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-subject_relationship",
  "version" : "0.1.0-snapshot",
  "name" : "subject_relationship",
  "title" : "Subject Relationship",
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
  "description" : "Subject Relationship",
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
  "count" : 36,
  "concept" : [
    {
      "code" : "0",
      "display" : "self",
      "designation" : [
        {
          "language" : "es",
          "value" : "sí mismo"
        },
        {
          "language" : "ja",
          "value" : "自己"
        },
        {
          "language" : "pt",
          "value" : "próprio"
        },
        {
          "language" : "zh",
          "value" : "本人"
        }
      ]
    },
    {
      "code" : "3",
      "display" : "foetus",
      "designation" : [
        {
          "language" : "es",
          "value" : "feto"
        },
        {
          "language" : "ja",
          "value" : "胎児"
        },
        {
          "language" : "pt",
          "value" : "feto"
        },
        {
          "language" : "zh",
          "value" : "胎儿"
        }
      ]
    },
    {
      "code" : "10",
      "display" : "mother",
      "designation" : [
        {
          "language" : "es",
          "value" : "madre"
        },
        {
          "language" : "ja",
          "value" : "母"
        },
        {
          "language" : "pt",
          "value" : "mãe"
        },
        {
          "language" : "zh",
          "value" : "母亲"
        }
      ]
    },
    {
      "code" : "9",
      "display" : "father",
      "designation" : [
        {
          "language" : "es",
          "value" : "padre"
        },
        {
          "language" : "ja",
          "value" : "父"
        },
        {
          "language" : "pt",
          "value" : "pai"
        },
        {
          "language" : "zh",
          "value" : "父亲"
        }
      ]
    },
    {
      "code" : "6",
      "display" : "donor",
      "designation" : [
        {
          "language" : "es",
          "value" : "donante"
        },
        {
          "language" : "ja",
          "value" : "ドナー"
        },
        {
          "language" : "pt",
          "value" : "dador"
        },
        {
          "language" : "zh",
          "value" : "供体"
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
      "code" : "261",
      "display" : "adopted daughter",
      "designation" : [
        {
          "language" : "es",
          "value" : "hija adoptiva"
        },
        {
          "language" : "ja",
          "value" : "養女"
        },
        {
          "language" : "pt",
          "value" : "filha adoptiva"
        },
        {
          "language" : "zh",
          "value" : "养女"
        }
      ]
    },
    {
      "code" : "260",
      "display" : "adopted son",
      "designation" : [
        {
          "language" : "es",
          "value" : "hijo adoptivo"
        },
        {
          "language" : "ja",
          "value" : "養子"
        },
        {
          "language" : "pt",
          "value" : "filho adoptivo"
        },
        {
          "language" : "zh",
          "value" : "养子"
        }
      ]
    },
    {
      "code" : "259",
      "display" : "adoptive father",
      "designation" : [
        {
          "language" : "es",
          "value" : "padre adoptivo"
        },
        {
          "language" : "ja",
          "value" : "養父"
        },
        {
          "language" : "pt",
          "value" : "pai adoptivo"
        },
        {
          "language" : "zh",
          "value" : "养父"
        }
      ]
    },
    {
      "code" : "258",
      "display" : "adoptive mother",
      "designation" : [
        {
          "language" : "es",
          "value" : "madre adoptiva"
        },
        {
          "language" : "ja",
          "value" : "養母"
        },
        {
          "language" : "pt",
          "value" : "mãe adoptiva"
        },
        {
          "language" : "zh",
          "value" : "养母"
        }
      ]
    },
    {
      "code" : "256",
      "display" : "biological father",
      "designation" : [
        {
          "language" : "es",
          "value" : "padre biológico"
        },
        {
          "language" : "ja",
          "value" : "生物学上の父"
        },
        {
          "language" : "pt",
          "value" : "pai biológico"
        },
        {
          "language" : "zh",
          "value" : "亲生父亲"
        }
      ]
    },
    {
      "code" : "255",
      "display" : "biological mother",
      "designation" : [
        {
          "language" : "es",
          "value" : "madre biológica"
        },
        {
          "language" : "ja",
          "value" : "生物学上の母"
        },
        {
          "language" : "pt",
          "value" : "mãe biológica"
        },
        {
          "language" : "zh",
          "value" : "亲生母亲"
        }
      ]
    },
    {
      "code" : "23",
      "display" : "brother",
      "designation" : [
        {
          "language" : "es",
          "value" : "hermano"
        },
        {
          "language" : "ja",
          "value" : "兄弟"
        },
        {
          "language" : "pt",
          "value" : "irmão"
        },
        {
          "language" : "zh",
          "value" : "兄弟"
        }
      ]
    },
    {
      "code" : "28",
      "display" : "child",
      "designation" : [
        {
          "language" : "es",
          "value" : "niño"
        },
        {
          "language" : "ja",
          "value" : "子"
        },
        {
          "language" : "pt",
          "value" : "filho"
        },
        {
          "language" : "zh",
          "value" : "孩子"
        }
      ]
    },
    {
      "code" : "265",
      "display" : "cohabitee",
      "designation" : [
        {
          "language" : "es",
          "value" : "cohabitante"
        },
        {
          "language" : "ja",
          "value" : "同居者"
        },
        {
          "language" : "pt",
          "value" : "coabitante"
        },
        {
          "language" : "zh",
          "value" : "同居者"
        }
      ]
    },
    {
      "code" : "257",
      "display" : "cousin",
      "designation" : [
        {
          "language" : "es",
          "value" : "primo"
        },
        {
          "language" : "ja",
          "value" : "従兄弟"
        },
        {
          "language" : "pt",
          "value" : "primo(a)"
        },
        {
          "language" : "zh",
          "value" : "同辈堂表亲戚"
        }
      ]
    },
    {
      "code" : "29",
      "display" : "daughter",
      "designation" : [
        {
          "language" : "es",
          "value" : "hija"
        },
        {
          "language" : "ja",
          "value" : "娘"
        },
        {
          "language" : "pt",
          "value" : "filha"
        },
        {
          "language" : "zh",
          "value" : "女儿"
        }
      ]
    },
    {
      "code" : "264",
      "display" : "guardian",
      "designation" : [
        {
          "language" : "es",
          "value" : "guardián"
        },
        {
          "language" : "ja",
          "value" : "保護者"
        },
        {
          "language" : "pt",
          "value" : "guardião(ã)"
        },
        {
          "language" : "zh",
          "value" : "监护人"
        }
      ]
    },
    {
      "code" : "39",
      "display" : "maternal aunt",
      "designation" : [
        {
          "language" : "es",
          "value" : "tía materna"
        },
        {
          "language" : "ja",
          "value" : "母方の叔母"
        },
        {
          "language" : "pt",
          "value" : "tia materna"
        },
        {
          "language" : "zh",
          "value" : "姨母"
        }
      ]
    },
    {
      "code" : "8",
      "display" : "maternal grandfather",
      "designation" : [
        {
          "language" : "es",
          "value" : "abuelo materno"
        },
        {
          "language" : "ja",
          "value" : "母方"
        },
        {
          "language" : "pt",
          "value" : "avô materno"
        },
        {
          "language" : "zh",
          "value" : "外祖父"
        }
      ]
    },
    {
      "code" : "7",
      "display" : "maternal grandmother",
      "designation" : [
        {
          "language" : "es",
          "value" : "abuela materna"
        },
        {
          "language" : "ja",
          "value" : "母型の"
        },
        {
          "language" : "pt",
          "value" : "avó materna"
        },
        {
          "language" : "zh",
          "value" : "外祖母"
        }
      ]
    },
    {
      "code" : "38",
      "display" : "maternal uncle",
      "designation" : [
        {
          "language" : "es",
          "value" : "tío materno"
        },
        {
          "language" : "ja",
          "value" : "母型の叔父"
        },
        {
          "language" : "pt",
          "value" : "tio materno"
        },
        {
          "language" : "zh",
          "value" : "舅父"
        }
      ]
    },
    {
      "code" : "189",
      "display" : "neonate",
      "designation" : [
        {
          "language" : "es",
          "value" : "neonato"
        },
        {
          "language" : "ja",
          "value" : "新生児"
        },
        {
          "language" : "pt",
          "value" : "recém-nascido"
        },
        {
          "language" : "zh",
          "value" : "新生儿"
        }
      ]
    },
    {
      "code" : "254",
      "display" : "parent",
      "designation" : [
        {
          "language" : "es",
          "value" : "padre"
        },
        {
          "language" : "ja",
          "value" : "親"
        },
        {
          "language" : "pt",
          "value" : "pai/mãe"
        },
        {
          "language" : "zh",
          "value" : "父母"
        }
      ]
    },
    {
      "code" : "22",
      "display" : "partner/spouse",
      "designation" : [
        {
          "language" : "es",
          "value" : "compañero/esposo"
        },
        {
          "language" : "ja",
          "value" : "配偶者"
        },
        {
          "language" : "pt",
          "value" : "companheiro/cônjuge"
        },
        {
          "language" : "zh",
          "value" : "伴侣/配偶"
        }
      ]
    },
    {
      "code" : "41",
      "display" : "paternal aunt",
      "designation" : [
        {
          "language" : "es",
          "value" : "tía paterna"
        },
        {
          "language" : "ja",
          "value" : "父方の叔母"
        },
        {
          "language" : "pt",
          "value" : "tia paterna"
        },
        {
          "language" : "zh",
          "value" : "姑母"
        }
      ]
    },
    {
      "code" : "36",
      "display" : "paternal grandfather",
      "designation" : [
        {
          "language" : "es",
          "value" : "abuelo paterno"
        },
        {
          "language" : "ja",
          "value" : "父方の祖母"
        },
        {
          "language" : "pt",
          "value" : "avô paterno"
        },
        {
          "language" : "zh",
          "value" : "祖父"
        }
      ]
    },
    {
      "code" : "37",
      "display" : "paternal grandmother",
      "designation" : [
        {
          "language" : "es",
          "value" : "abuela paterna"
        },
        {
          "language" : "ja",
          "value" : "父方の祖-"
        },
        {
          "language" : "pt",
          "value" : "avó paterna"
        },
        {
          "language" : "zh",
          "value" : "祖母"
        }
      ]
    },
    {
      "code" : "40",
      "display" : "paternal uncle",
      "designation" : [
        {
          "language" : "es",
          "value" : "tío paterno"
        },
        {
          "language" : "ja",
          "value" : "父方の叔父"
        },
        {
          "language" : "pt",
          "value" : "tio paterno"
        },
        {
          "language" : "zh",
          "value" : "叔伯"
        }
      ]
    },
    {
      "code" : "27",
      "display" : "sibling",
      "designation" : [
        {
          "language" : "es",
          "value" : "hermano"
        },
        {
          "language" : "ja",
          "value" : "同胞"
        },
        {
          "language" : "pt",
          "value" : "irmão(ã)"
        },
        {
          "language" : "zh",
          "value" : "兄弟姐妹"
        }
      ]
    },
    {
      "code" : "24",
      "display" : "sister",
      "designation" : [
        {
          "language" : "es",
          "value" : "hermana"
        },
        {
          "language" : "ja",
          "value" : "姉妹"
        },
        {
          "language" : "pt",
          "value" : "irmã"
        },
        {
          "language" : "zh",
          "value" : "姐妹"
        }
      ]
    },
    {
      "code" : "31",
      "display" : "son",
      "designation" : [
        {
          "language" : "es",
          "value" : "hijo"
        },
        {
          "language" : "ja",
          "value" : "息子"
        },
        {
          "language" : "pt",
          "value" : "filho"
        },
        {
          "language" : "zh",
          "value" : "儿子"
        }
      ]
    },
    {
      "code" : "263",
      "display" : "step father",
      "designation" : [
        {
          "language" : "es",
          "value" : "padrastro"
        },
        {
          "language" : "ja",
          "value" : "義父"
        },
        {
          "language" : "pt",
          "value" : "padrasto"
        },
        {
          "language" : "zh",
          "value" : "继父"
        }
      ]
    },
    {
      "code" : "262",
      "display" : "step mother",
      "designation" : [
        {
          "language" : "es",
          "value" : "madrastra"
        },
        {
          "language" : "ja",
          "value" : "義母"
        },
        {
          "language" : "pt",
          "value" : "madrasta"
        },
        {
          "language" : "zh",
          "value" : "继母"
        }
      ]
    },
    {
      "code" : "25",
      "display" : "step or half brother",
      "designation" : [
        {
          "language" : "es",
          "value" : "hermanastro o medio hermano"
        },
        {
          "language" : "ja",
          "value" : "義理あるいは異父母兄弟"
        },
        {
          "language" : "pt",
          "value" : "meio-irmão"
        },
        {
          "language" : "zh",
          "value" : "继兄弟或同父异母或同母异父兄弟"
        }
      ]
    },
    {
      "code" : "26",
      "display" : "step or half sister",
      "designation" : [
        {
          "language" : "es",
          "value" : "hermanastra o media hermana"
        },
        {
          "language" : "ja",
          "value" : "義理あるいは異父母姉妹"
        },
        {
          "language" : "pt",
          "value" : "meia-irmã"
        },
        {
          "language" : "zh",
          "value" : "继姐妹或同父异母或同母异父姐妹"
        }
      ]
    }
  ]
}

```
