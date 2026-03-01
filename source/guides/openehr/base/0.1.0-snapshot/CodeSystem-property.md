# Property - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Property**

## CodeSystem: Property 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-property | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:property |

 
Type of quantity being measured 

 This Code system is referenced in the content logical definition of the following value sets: 

* [property](ValueSet-property.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "property",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-property",
  "version" : "0.1.0-snapshot",
  "name" : "property",
  "title" : "Property",
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
  "description" : "Type of quantity being measured",
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
  "count" : 86,
  "concept" : [
    {
      "code" : "339",
      "display" : "Acceleration",
      "designation" : [
        {
          "language" : "es",
          "value" : "Aceleración"
        },
        {
          "language" : "ja",
          "value" : "加速度"
        },
        {
          "language" : "pt",
          "value" : "Aceleração"
        },
        {
          "language" : "zh",
          "value" : "加速度"
        }
      ]
    },
    {
      "code" : "342",
      "display" : "Acceleration, angular",
      "designation" : [
        {
          "language" : "es",
          "value" : "Aceleración, angular"
        },
        {
          "language" : "ja",
          "value" : "角加速度"
        },
        {
          "language" : "pt",
          "value" : "Aceleração, angular"
        },
        {
          "language" : "zh",
          "value" : "加速度, 角"
        }
      ]
    },
    {
      "code" : "381",
      "display" : "Amount (Eq)",
      "designation" : [
        {
          "language" : "es",
          "value" : "Cantidad (equivalente)"
        },
        {
          "language" : "ja",
          "value" : "量 (Eq)"
        },
        {
          "language" : "pt",
          "value" : "Quantidade (Eq)"
        },
        {
          "language" : "zh",
          "value" : "物质的量 (当量)"
        }
      ]
    },
    {
      "code" : "384",
      "display" : "Amount (mole)",
      "designation" : [
        {
          "language" : "es",
          "value" : "Cantidad (mol)"
        },
        {
          "language" : "ja",
          "value" : "量 (mole)"
        },
        {
          "language" : "pt",
          "value" : "Quantidade (mol)"
        },
        {
          "language" : "zh",
          "value" : "物质的量 (摩尔)"
        }
      ]
    },
    {
      "code" : "497",
      "display" : "Angle, plane",
      "designation" : [
        {
          "language" : "es",
          "value" : "Ángulo, plano"
        },
        {
          "language" : "ja",
          "value" : "平面角"
        },
        {
          "language" : "pt",
          "value" : "Ângulo, plano"
        },
        {
          "language" : "zh",
          "value" : "角度, 平面"
        }
      ]
    },
    {
      "code" : "500",
      "display" : "Angle, solid",
      "designation" : [
        {
          "language" : "es",
          "value" : "Ángulo, sólido"
        },
        {
          "language" : "ja",
          "value" : "立体角"
        },
        {
          "language" : "pt",
          "value" : "Ângulo, sólido"
        },
        {
          "language" : "zh",
          "value" : "角度, 立体"
        }
      ]
    },
    {
      "code" : "335",
      "display" : "Area",
      "designation" : [
        {
          "language" : "es",
          "value" : "Área"
        },
        {
          "language" : "ja",
          "value" : "面積"
        },
        {
          "language" : "pt",
          "value" : "Área"
        },
        {
          "language" : "zh",
          "value" : "面积"
        }
      ]
    },
    {
      "code" : "119",
      "display" : "Concentration",
      "designation" : [
        {
          "language" : "es",
          "value" : "Concentración"
        },
        {
          "language" : "ja",
          "value" : "濃度"
        },
        {
          "language" : "pt",
          "value" : "Concentração"
        },
        {
          "language" : "zh",
          "value" : "浓度"
        }
      ]
    },
    {
      "code" : "350",
      "display" : "Density",
      "designation" : [
        {
          "language" : "es",
          "value" : "Densidad"
        },
        {
          "language" : "ja",
          "value" : "密度"
        },
        {
          "language" : "pt",
          "value" : "Densidade"
        },
        {
          "language" : "zh",
          "value" : "密度"
        }
      ]
    },
    {
      "code" : "362",
      "display" : "Diffusion coefficient",
      "designation" : [
        {
          "language" : "es",
          "value" : "Coeficiente de difusión"
        },
        {
          "language" : "ja",
          "value" : "拡散係数"
        },
        {
          "language" : "pt",
          "value" : "Coeficiente de difusão"
        },
        {
          "language" : "zh",
          "value" : "扩散系数"
        }
      ]
    },
    {
      "code" : "501",
      "display" : "Electric capacitance",
      "designation" : [
        {
          "language" : "es",
          "value" : "Capacidad eléctrica"
        },
        {
          "language" : "ja",
          "value" : "電気容量"
        },
        {
          "language" : "pt",
          "value" : "Capacitância elétrica"
        },
        {
          "language" : "zh",
          "value" : "电容"
        }
      ]
    },
    {
      "code" : "498",
      "display" : "Electric charge",
      "designation" : [
        {
          "language" : "es",
          "value" : "Carga eléctrica"
        },
        {
          "language" : "ja",
          "value" : "電荷"
        },
        {
          "language" : "pt",
          "value" : "Carga elétrica"
        },
        {
          "language" : "zh",
          "value" : "电荷"
        }
      ]
    },
    {
      "code" : "502",
      "display" : "Electric conductance",
      "designation" : [
        {
          "language" : "es",
          "value" : "Conductancia eléctrica"
        },
        {
          "language" : "ja",
          "value" : "電気伝導度"
        },
        {
          "language" : "pt",
          "value" : "Condutância elétrica"
        },
        {
          "language" : "zh",
          "value" : "电导"
        }
      ]
    },
    {
      "code" : "334",
      "display" : "Electric current",
      "designation" : [
        {
          "language" : "es",
          "value" : "Corriente eléctrica"
        },
        {
          "language" : "ja",
          "value" : "電流"
        },
        {
          "language" : "pt",
          "value" : "Corrente elétrica"
        },
        {
          "language" : "zh",
          "value" : "电流"
        }
      ]
    },
    {
      "code" : "377",
      "display" : "Electric field strength",
      "designation" : [
        {
          "language" : "es",
          "value" : "Intensidad del campo eléctrico"
        },
        {
          "language" : "ja",
          "value" : "電界強度"
        },
        {
          "language" : "pt",
          "value" : "Intensidade do campo elétrico"
        },
        {
          "language" : "zh",
          "value" : "电场强度"
        }
      ]
    },
    {
      "code" : "655",
      "display" : "Electric potential time",
      "designation" : [
        {
          "language" : "es",
          "value" : "Potencial eléctrico"
        },
        {
          "language" : "ja",
          "value" : "電位時間"
        },
        {
          "language" : "pt",
          "value" : "Energia potencial elétrica"
        },
        {
          "language" : "zh",
          "value" : "电势时间"
        }
      ]
    },
    {
      "code" : "121",
      "display" : "Energy",
      "designation" : [
        {
          "language" : "es",
          "value" : "Energía"
        },
        {
          "language" : "ja",
          "value" : "エネルギー"
        },
        {
          "language" : "pt",
          "value" : "Energia"
        },
        {
          "language" : "zh",
          "value" : "能量"
        }
      ]
    },
    {
      "code" : "366",
      "display" : "Energy density",
      "designation" : [
        {
          "language" : "es",
          "value" : "Densidad de energía"
        },
        {
          "language" : "ja",
          "value" : "エネルギー密度"
        },
        {
          "language" : "pt",
          "value" : "Densidade de energia"
        },
        {
          "language" : "zh",
          "value" : "能量密度"
        }
      ]
    },
    {
      "code" : "508",
      "display" : "Energy dose",
      "designation" : [
        {
          "language" : "es",
          "value" : "Dosis de energía"
        },
        {
          "language" : "ja",
          "value" : "エネルギー量"
        },
        {
          "language" : "pt",
          "value" : "Dose de energia"
        },
        {
          "language" : "zh",
          "value" : "能量剂量"
        }
      ]
    },
    {
      "code" : "365",
      "display" : "Energy per area",
      "designation" : [
        {
          "language" : "es",
          "value" : "Energía por área"
        },
        {
          "language" : "ja",
          "value" : "面積あたりエネルギー"
        },
        {
          "language" : "pt",
          "value" : "Energia por área"
        },
        {
          "language" : "zh",
          "value" : "能量单位面积"
        }
      ]
    },
    {
      "code" : "364",
      "display" : "Energy, linear",
      "designation" : [
        {
          "language" : "es",
          "value" : "Energía, lineal"
        },
        {
          "language" : "ja",
          "value" : "線エネルギー"
        },
        {
          "language" : "pt",
          "value" : "Energia, linear"
        },
        {
          "language" : "zh",
          "value" : "能量, 线性"
        }
      ]
    },
    {
      "code" : "347",
      "display" : "Flow rate, mass",
      "designation" : [
        {
          "language" : "es",
          "value" : "Caudal, masa"
        },
        {
          "language" : "ja",
          "value" : "質量流量"
        },
        {
          "language" : "pt",
          "value" : "Taxa de fluxo, massa"
        },
        {
          "language" : "zh",
          "value" : "流速, 质量"
        }
      ]
    },
    {
      "code" : "352",
      "display" : "Flow rate, mass/force",
      "designation" : [
        {
          "language" : "es",
          "value" : "Caudal, masa/fuerza"
        },
        {
          "language" : "ja",
          "value" : "質量/力流量"
        },
        {
          "language" : "pt",
          "value" : "Taxa de fluxo, massa/força"
        },
        {
          "language" : "zh",
          "value" : "流速, 质量/力"
        }
      ]
    },
    {
      "code" : "351",
      "display" : "Flow rate, mass/volume",
      "designation" : [
        {
          "language" : "es",
          "value" : "Caudal, amsa/volumen"
        },
        {
          "language" : "ja",
          "value" : "質量/体積流量"
        },
        {
          "language" : "pt",
          "value" : "Taxa de fluxo, massa/volume"
        },
        {
          "language" : "zh",
          "value" : "流速, 质量/体积"
        }
      ]
    },
    {
      "code" : "126",
      "display" : "Flow rate, volume",
      "designation" : [
        {
          "language" : "es",
          "value" : "Caudal, volumen"
        },
        {
          "language" : "ja",
          "value" : "体積流量"
        },
        {
          "language" : "pt",
          "value" : "Taxa de fluxo, volume"
        },
        {
          "language" : "zh",
          "value" : "流速, 体积"
        }
      ]
    },
    {
      "code" : "348",
      "display" : "Flux, mass",
      "designation" : [
        {
          "language" : "es",
          "value" : "Flujo, masa"
        },
        {
          "language" : "ja",
          "value" : "質量流束"
        },
        {
          "language" : "pt",
          "value" : "Fluxo, massa"
        },
        {
          "language" : "zh",
          "value" : "通量, 质量"
        }
      ]
    },
    {
      "code" : "355",
      "display" : "Force",
      "designation" : [
        {
          "language" : "es",
          "value" : "Fuerza"
        },
        {
          "language" : "ja",
          "value" : "力"
        },
        {
          "language" : "pt",
          "value" : "Força"
        },
        {
          "language" : "zh",
          "value" : "力"
        }
      ]
    },
    {
      "code" : "358",
      "display" : "Force per mass",
      "designation" : [
        {
          "language" : "es",
          "value" : "Fuerza por masa"
        },
        {
          "language" : "ja",
          "value" : "質量あたりの力"
        },
        {
          "language" : "pt",
          "value" : "Força por massa"
        },
        {
          "language" : "zh",
          "value" : "力单位质量"
        }
      ]
    },
    {
      "code" : "357",
      "display" : "Force, body",
      "designation" : [
        {
          "language" : "es",
          "value" : "Fuerza, cuerpo"
        },
        {
          "language" : "ja",
          "value" : "体積力"
        },
        {
          "language" : "pt",
          "value" : "Força, corpo"
        },
        {
          "language" : "zh",
          "value" : "力, 彻体"
        }
      ]
    },
    {
      "code" : "382",
      "display" : "Frequency",
      "designation" : [
        {
          "language" : "es",
          "value" : "Frecuencia"
        },
        {
          "language" : "ja",
          "value" : "頻度"
        },
        {
          "language" : "pt",
          "value" : "Frequência"
        },
        {
          "language" : "zh",
          "value" : "频率"
        }
      ]
    },
    {
      "code" : "586",
      "display" : "Glomerular filtration rate",
      "designation" : [
        {
          "language" : "es",
          "value" : "Tasa de filtración glomerular"
        },
        {
          "language" : "ja",
          "value" : "糸球体濾過量"
        },
        {
          "language" : "pt",
          "value" : "Taxa de filtração glomerular"
        },
        {
          "language" : "zh",
          "value" : "肾小球滤过率"
        }
      ]
    },
    {
      "code" : "373",
      "display" : "Heat transfer coefficient",
      "designation" : [
        {
          "language" : "es",
          "value" : "Coeficiente de transferencia de calor"
        },
        {
          "language" : "ja",
          "value" : "熱伝導係数"
        },
        {
          "language" : "pt",
          "value" : "Coeficiente de transferência de calor"
        },
        {
          "language" : "zh",
          "value" : "传热系数"
        }
      ]
    },
    {
      "code" : "505",
      "display" : "Illuminance",
      "designation" : [
        {
          "language" : "es",
          "value" : "Iluminancia"
        },
        {
          "language" : "ja",
          "value" : "照度"
        },
        {
          "language" : "pt",
          "value" : "Iluminância"
        },
        {
          "language" : "zh",
          "value" : "照度"
        }
      ]
    },
    {
      "code" : "379",
      "display" : "Inductance",
      "designation" : [
        {
          "language" : "es",
          "value" : "Inductancia"
        },
        {
          "language" : "ja",
          "value" : "インダクタンス"
        },
        {
          "language" : "pt",
          "value" : "Indutância"
        },
        {
          "language" : "zh",
          "value" : "电感"
        }
      ]
    },
    {
      "code" : "122",
      "display" : "Length",
      "designation" : [
        {
          "language" : "es",
          "value" : "Longitud"
        },
        {
          "language" : "ja",
          "value" : "長さ"
        },
        {
          "language" : "pt",
          "value" : "Comprimento"
        },
        {
          "language" : "zh",
          "value" : "程度"
        }
      ]
    },
    {
      "code" : "499",
      "display" : "Light intensity",
      "designation" : [
        {
          "language" : "es",
          "value" : "Intensidad de luz"
        },
        {
          "language" : "ja",
          "value" : "光強度"
        },
        {
          "language" : "pt",
          "value" : "Intensidade luminosa"
        },
        {
          "language" : "zh",
          "value" : "光强"
        }
      ]
    },
    {
      "code" : "123",
      "display" : "Loudness",
      "designation" : [
        {
          "language" : "es",
          "value" : "Volumen sonoro"
        },
        {
          "language" : "ja",
          "value" : "音圧"
        },
        {
          "language" : "pt",
          "value" : "Intensidade sonora"
        },
        {
          "language" : "zh",
          "value" : "响度"
        }
      ]
    },
    {
      "code" : "504",
      "display" : "Luminous flux",
      "designation" : [
        {
          "language" : "es",
          "value" : "Flujo luminoso"
        },
        {
          "language" : "ja",
          "value" : "光束"
        },
        {
          "language" : "pt",
          "value" : "Fluxo luminoso"
        },
        {
          "language" : "zh",
          "value" : "光通量"
        }
      ]
    },
    {
      "code" : "378",
      "display" : "Magnetic flux",
      "designation" : [
        {
          "language" : "es",
          "value" : "Flujo magnético"
        },
        {
          "language" : "ja",
          "value" : "磁束"
        },
        {
          "language" : "pt",
          "value" : "Fluxo magnético"
        },
        {
          "language" : "zh",
          "value" : "磁通量"
        }
      ]
    },
    {
      "code" : "503",
      "display" : "Magnetic flux density",
      "designation" : [
        {
          "language" : "es",
          "value" : "Densidad de flujo magnético"
        },
        {
          "language" : "ja",
          "value" : "磁束密度"
        },
        {
          "language" : "pt",
          "value" : "Densidade de fluxo magnético"
        },
        {
          "language" : "zh",
          "value" : "磁通量密度"
        }
      ]
    },
    {
      "code" : "124",
      "display" : "Mass",
      "designation" : [
        {
          "language" : "es",
          "value" : "Masa"
        },
        {
          "language" : "ja",
          "value" : "質量"
        },
        {
          "language" : "pt",
          "value" : "Massa"
        },
        {
          "language" : "zh",
          "value" : "质量"
        }
      ]
    },
    {
      "code" : "385",
      "display" : "Mass (IU)",
      "designation" : [
        {
          "language" : "es",
          "value" : "Masa (IU)"
        },
        {
          "language" : "ja",
          "value" : "質量 (IU)"
        },
        {
          "language" : "pt",
          "value" : "Massa (UI)"
        },
        {
          "language" : "zh",
          "value" : "质量 (国际单位)"
        }
      ]
    },
    {
      "code" : "445",
      "display" : "Mass (Units)",
      "designation" : [
        {
          "language" : "es",
          "value" : "Masa (Unidades)"
        },
        {
          "language" : "ja",
          "value" : "質量 (Units)"
        },
        {
          "language" : "pt",
          "value" : "Massa (unidades)"
        },
        {
          "language" : "zh",
          "value" : "质量 (单位)"
        }
      ]
    },
    {
      "code" : "349",
      "display" : "Mass per area",
      "designation" : [
        {
          "language" : "es",
          "value" : "Masa por área"
        },
        {
          "language" : "ja",
          "value" : "面積あたり質量"
        },
        {
          "language" : "pt",
          "value" : "Massa por área"
        },
        {
          "language" : "zh",
          "value" : "质量单位面积"
        }
      ]
    },
    {
      "code" : "344",
      "display" : "Moment inertia, area",
      "designation" : [
        {
          "language" : "es",
          "value" : "Momento de inercia, área"
        },
        {
          "language" : "ja",
          "value" : "断面二次モーメント"
        },
        {
          "language" : "pt",
          "value" : "Momento de inércia, área"
        },
        {
          "language" : "zh",
          "value" : "转动惯量, 面积"
        }
      ]
    },
    {
      "code" : "345",
      "display" : "Moment inertia, mass",
      "designation" : [
        {
          "language" : "es",
          "value" : "Momento de inercia, masa"
        },
        {
          "language" : "ja",
          "value" : "質量慣性モーメント"
        },
        {
          "language" : "pt",
          "value" : "Momento de inércia, massa"
        },
        {
          "language" : "zh",
          "value" : "转动惯量, 质量"
        }
      ]
    },
    {
      "code" : "340",
      "display" : "Momentum",
      "designation" : [
        {
          "language" : "es",
          "value" : "Impulso"
        },
        {
          "language" : "ja",
          "value" : "モーメント"
        },
        {
          "language" : "pt",
          "value" : "Momento"
        },
        {
          "language" : "zh",
          "value" : "动量"
        }
      ]
    },
    {
      "code" : "346",
      "display" : "Momentum flow rate",
      "designation" : [
        {
          "language" : "es",
          "value" : "Impulso, caudal"
        },
        {
          "language" : "ja",
          "value" : "流量モーメント"
        },
        {
          "language" : "pt",
          "value" : "Momento, taxa de fluxo"
        },
        {
          "language" : "zh",
          "value" : "动量 流速"
        }
      ]
    },
    {
      "code" : "343",
      "display" : "Momentum, angular",
      "designation" : [
        {
          "language" : "es",
          "value" : "Impulso, angular"
        },
        {
          "language" : "ja",
          "value" : "角モーメント"
        },
        {
          "language" : "pt",
          "value" : "Momento, angular"
        },
        {
          "language" : "zh",
          "value" : "动量, 角"
        }
      ]
    },
    {
      "code" : "363",
      "display" : "Power",
      "designation" : [
        {
          "language" : "es",
          "value" : "Potencia"
        },
        {
          "language" : "ja",
          "value" : "電力"
        },
        {
          "language" : "pt",
          "value" : "Potência"
        },
        {
          "language" : "zh",
          "value" : "功率"
        }
      ]
    },
    {
      "code" : "369",
      "display" : "Power density",
      "designation" : [
        {
          "language" : "es",
          "value" : "Densidad de potencia"
        },
        {
          "language" : "ja",
          "value" : "電力密度"
        },
        {
          "language" : "pt",
          "value" : "Densidade de potência"
        },
        {
          "language" : "zh",
          "value" : "功率密度"
        }
      ]
    },
    {
      "code" : "368",
      "display" : "Power flux",
      "designation" : [
        {
          "language" : "es",
          "value" : "Flujo de potencia"
        },
        {
          "language" : "ja",
          "value" : "電力束"
        },
        {
          "language" : "pt",
          "value" : "Fluxo de potência"
        },
        {
          "language" : "zh",
          "value" : "功率通量"
        }
      ]
    },
    {
      "code" : "367",
      "display" : "Power, linear",
      "designation" : [
        {
          "language" : "es",
          "value" : "Potencia, lineal"
        },
        {
          "language" : "ja",
          "value" : "線形電力"
        },
        {
          "language" : "pt",
          "value" : "Potência, linear"
        },
        {
          "language" : "zh",
          "value" : "功率, 线性"
        }
      ]
    },
    {
      "code" : "125",
      "display" : "Pressure",
      "designation" : [
        {
          "language" : "es",
          "value" : "Presión"
        },
        {
          "language" : "ja",
          "value" : "圧力"
        },
        {
          "language" : "pt",
          "value" : "Pressão"
        },
        {
          "language" : "zh",
          "value" : "压强"
        }
      ]
    },
    {
      "code" : "507",
      "display" : "Proportion",
      "designation" : [
        {
          "language" : "es",
          "value" : "Proporción"
        },
        {
          "language" : "ja",
          "value" : "比率"
        },
        {
          "language" : "pt",
          "value" : "Proporção"
        },
        {
          "language" : "zh",
          "value" : "比例"
        }
      ]
    },
    {
      "code" : "380",
      "display" : "Qualified real",
      "designation" : [
        {
          "language" : "es",
          "value" : "Real calificado"
        },
        {
          "language" : "ja",
          "value" : "制限付き実数"
        },
        {
          "language" : "pt",
          "value" : "Real qualificado"
        },
        {
          "language" : "zh",
          "value" : "带有量词限定的实数"
        }
      ]
    },
    {
      "code" : "506",
      "display" : "Radioactivity",
      "designation" : [
        {
          "language" : "es",
          "value" : "Radioactividad"
        },
        {
          "language" : "ja",
          "value" : "放射能"
        },
        {
          "language" : "pt",
          "value" : "Radioactividade"
        },
        {
          "language" : "zh",
          "value" : "放射性活度"
        }
      ]
    },
    {
      "code" : "375",
      "display" : "Resistance",
      "designation" : [
        {
          "language" : "es",
          "value" : "Resistencia"
        },
        {
          "language" : "ja",
          "value" : "抵抗"
        },
        {
          "language" : "pt",
          "value" : "Resistência"
        },
        {
          "language" : "zh",
          "value" : "电阻"
        }
      ]
    },
    {
      "code" : "370",
      "display" : "Specific energy",
      "designation" : [
        {
          "language" : "es",
          "value" : "Energía específica"
        },
        {
          "language" : "ja",
          "value" : "比エネルギー"
        },
        {
          "language" : "pt",
          "value" : "Energia específica"
        },
        {
          "language" : "zh",
          "value" : "比能"
        }
      ]
    },
    {
      "code" : "371",
      "display" : "Specific heat, gas constant",
      "designation" : [
        {
          "language" : "es",
          "value" : "Calor específico, constante de gas"
        },
        {
          "language" : "ja",
          "value" : "比熱、気体定数"
        },
        {
          "language" : "pt",
          "value" : "Calor específico, gás constante"
        },
        {
          "language" : "zh",
          "value" : "比热, 气体常数"
        }
      ]
    },
    {
      "code" : "337",
      "display" : "Specific surface",
      "designation" : [
        {
          "language" : "es",
          "value" : "Superficie específica"
        },
        {
          "language" : "ja",
          "value" : "比表面"
        },
        {
          "language" : "pt",
          "value" : "Superfície específica"
        },
        {
          "language" : "zh",
          "value" : "比表面积"
        }
      ]
    },
    {
      "code" : "336",
      "display" : "Specific volume",
      "designation" : [
        {
          "language" : "es",
          "value" : "Volumen específico"
        },
        {
          "language" : "ja",
          "value" : "比容Specific volume"
        },
        {
          "language" : "pt",
          "value" : "Volume específico"
        },
        {
          "language" : "zh",
          "value" : "比容"
        }
      ]
    },
    {
      "code" : "354",
      "display" : "Specific weight",
      "designation" : [
        {
          "language" : "es",
          "value" : "Peso específico"
        },
        {
          "language" : "ja",
          "value" : "比重Specific weight"
        },
        {
          "language" : "pt",
          "value" : "Peso específico"
        },
        {
          "language" : "zh",
          "value" : "比重"
        }
      ]
    },
    {
      "code" : "356",
      "display" : "Surface tension",
      "designation" : [
        {
          "language" : "es",
          "value" : "Tensión superficial"
        },
        {
          "language" : "ja",
          "value" : "表面張力Surface tension"
        },
        {
          "language" : "pt",
          "value" : "Tensão superficial"
        },
        {
          "language" : "zh",
          "value" : "表面张力"
        }
      ]
    },
    {
      "code" : "127",
      "display" : "Temperature",
      "designation" : [
        {
          "language" : "es",
          "value" : "Temperatura"
        },
        {
          "language" : "ja",
          "value" : "温度"
        },
        {
          "language" : "pt",
          "value" : "Temperatura"
        },
        {
          "language" : "zh",
          "value" : "温度"
        }
      ]
    },
    {
      "code" : "372",
      "display" : "Thermal conductivity",
      "designation" : [
        {
          "language" : "es",
          "value" : "Conductividad térmica"
        },
        {
          "language" : "ja",
          "value" : "熱伝導度"
        },
        {
          "language" : "pt",
          "value" : "Condutividade térmica"
        },
        {
          "language" : "zh",
          "value" : "热导率"
        }
      ]
    },
    {
      "code" : "128",
      "display" : "Time",
      "designation" : [
        {
          "language" : "es",
          "value" : "Tiempo"
        },
        {
          "language" : "ja",
          "value" : "時間"
        },
        {
          "language" : "pt",
          "value" : "Tempo"
        },
        {
          "language" : "zh",
          "value" : "时间"
        }
      ]
    },
    {
      "code" : "359",
      "display" : "Torque",
      "designation" : [
        {
          "language" : "es",
          "value" : "Torque"
        },
        {
          "language" : "ja",
          "value" : "トルク"
        },
        {
          "language" : "pt",
          "value" : "Torque"
        },
        {
          "language" : "zh",
          "value" : "扭矩"
        }
      ]
    },
    {
      "code" : "338",
      "display" : "Velocity",
      "designation" : [
        {
          "language" : "es",
          "value" : "Velocidad"
        },
        {
          "language" : "ja",
          "value" : "速度"
        },
        {
          "language" : "pt",
          "value" : "Velocidade"
        },
        {
          "language" : "zh",
          "value" : "速度"
        }
      ]
    },
    {
      "code" : "341",
      "display" : "Velocity, angular",
      "designation" : [
        {
          "language" : "es",
          "value" : "Velocidad, angular"
        },
        {
          "language" : "ja",
          "value" : "角速度"
        },
        {
          "language" : "pt",
          "value" : "Velocidade, angular"
        },
        {
          "language" : "zh",
          "value" : "速度, 角"
        }
      ]
    },
    {
      "code" : "360",
      "display" : "Viscosity, dynamic",
      "designation" : [
        {
          "language" : "es",
          "value" : "Viscosidad, dinámica"
        },
        {
          "language" : "ja",
          "value" : "Viscosity, dynamic (en)"
        },
        {
          "language" : "pt",
          "value" : "Viscosidade, dinâmica"
        },
        {
          "language" : "zh",
          "value" : "黏度, 动力"
        }
      ]
    },
    {
      "code" : "361",
      "display" : "Viscosity, kinematic",
      "designation" : [
        {
          "language" : "es",
          "value" : "Viscosity, cinemática"
        },
        {
          "language" : "ja",
          "value" : "Viscosity, kinematic (en)"
        },
        {
          "language" : "pt",
          "value" : "Viscosidade, cinemática"
        },
        {
          "language" : "zh",
          "value" : "黏度, 运动"
        }
      ]
    },
    {
      "code" : "374",
      "display" : "Electric potential",
      "designation" : [
        {
          "language" : "es",
          "value" : "Voltaje, eléctrico"
        },
        {
          "language" : "ja",
          "value" : "電圧"
        },
        {
          "language" : "pt",
          "value" : "Potencial eléctrico"
        },
        {
          "language" : "zh",
          "value" : "电势"
        }
      ]
    },
    {
      "code" : "129",
      "display" : "Volume",
      "designation" : [
        {
          "language" : "es",
          "value" : "Volumen"
        },
        {
          "language" : "ja",
          "value" : "容積"
        },
        {
          "language" : "pt",
          "value" : "volume"
        },
        {
          "language" : "zh",
          "value" : "体积"
        }
      ]
    },
    {
      "code" : "130",
      "display" : "Work",
      "designation" : [
        {
          "language" : "es",
          "value" : "Trabajo"
        },
        {
          "language" : "ja",
          "value" : "仕事量"
        },
        {
          "language" : "pt",
          "value" : "Trabalho"
        },
        {
          "language" : "zh",
          "value" : "功"
        }
      ]
    },
    {
      "code" : "685",
      "display" : "Refractive power",
      "designation" : [
        {
          "language" : "es",
          "value" : "Poder refractivo"
        },
        {
          "language" : "ja",
          "value" : "屈折力"
        },
        {
          "language" : "pt",
          "value" : "Poder de refracção"
        },
        {
          "language" : "zh",
          "value" : "屈光力"
        }
      ]
    },
    {
      "code" : "118",
      "display" : "<not set>",
      "designation" : [
        {
          "language" : "es",
          "value" : "<no asignado>"
        },
        {
          "language" : "ja",
          "value" : "<not set> (en)"
        },
        {
          "language" : "pt",
          "value" : "Não definido"
        },
        {
          "language" : "zh",
          "value" : "<未设置>"
        }
      ]
    },
    {
      "code" : "709",
      "display" : "Time fraction",
      "designation" : [
        {
          "language" : "es",
          "value" : "Fracción de tiempo"
        },
        {
          "language" : "ja",
          "value" : "Time fraction (en)"
        },
        {
          "language" : "pt",
          "value" : "Fracção de tempo"
        },
        {
          "language" : "zh",
          "value" : "时间分数"
        }
      ]
    },
    {
      "code" : "708",
      "display" : "Rate of change, pressure",
      "designation" : [
        {
          "language" : "es",
          "value" : "Tasa de variación, presión"
        },
        {
          "language" : "ja",
          "value" : "Rate of change, pressure (en)"
        },
        {
          "language" : "pt",
          "value" : "Taxa de variação, pressão"
        },
        {
          "language" : "zh",
          "value" : "变化速率, 压强"
        }
      ]
    },
    {
      "code" : "754",
      "display" : "Rate of change, frequency",
      "designation" : [
        {
          "language" : "es",
          "value" : "Tasa de variación, frecuencia"
        },
        {
          "language" : "ja",
          "value" : "Rate of change, frequency (en)"
        },
        {
          "language" : "pt",
          "value" : "Taxa de variação, frequência"
        },
        {
          "language" : "zh",
          "value" : "变化速率, 频率"
        }
      ]
    },
    {
      "code" : "755",
      "display" : "Arbitrary",
      "designation" : [
        {
          "language" : "es",
          "value" : "Arbitrario"
        },
        {
          "language" : "ja",
          "value" : "Arbitrary (en)"
        },
        {
          "language" : "pt",
          "value" : "Arbitrário"
        },
        {
          "language" : "zh",
          "value" : "任意"
        }
      ]
    },
    {
      "code" : "756",
      "display" : "Medication dose rate",
      "designation" : [
        {
          "language" : "es",
          "value" : "Dosis de medicación"
        },
        {
          "language" : "ja",
          "value" : "Medication dose rate (en)"
        },
        {
          "language" : "pt",
          "value" : "Taxa de dose de medicação"
        },
        {
          "language" : "zh",
          "value" : "药物剂量速率"
        }
      ]
    },
    {
      "code" : "757",
      "display" : "Spectral power",
      "designation" : [
        {
          "language" : "es",
          "value" : "Potencia espectral"
        },
        {
          "language" : "ja",
          "value" : "Spectral power (en)"
        },
        {
          "language" : "pt",
          "value" : "Potência espectral"
        },
        {
          "language" : "zh",
          "value" : "谱功率"
        }
      ]
    },
    {
      "code" : "758",
      "display" : "Spectral power density",
      "designation" : [
        {
          "language" : "es",
          "value" : "Densidad espectral de potencia"
        },
        {
          "language" : "ja",
          "value" : "Spectral power density (en)"
        },
        {
          "language" : "pt",
          "value" : "Densidade de potência espectral"
        },
        {
          "language" : "zh",
          "value" : "功率谱密度"
        }
      ]
    },
    {
      "code" : "759",
      "display" : "Pace",
      "designation" : [
        {
          "language" : "es",
          "value" : "Ritmo"
        },
        {
          "language" : "ja",
          "value" : "Pace (en)"
        },
        {
          "language" : "pt",
          "value" : "Ritmo"
        },
        {
          "language" : "zh",
          "value" : "步速"
        }
      ]
    },
    {
      "code" : "760",
      "display" : "Enzyme activity",
      "designation" : [
        {
          "language" : "es",
          "value" : "Actividad enzimática"
        },
        {
          "language" : "ja",
          "value" : "Enzyme activity (en)"
        },
        {
          "language" : "pt",
          "value" : "Actividade enzimática"
        },
        {
          "language" : "zh",
          "value" : "酶活性"
        }
      ]
    }
  ]
}

```
