# Version Lifecycle State - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Version Lifecycle State**

## CodeSystem: Version Lifecycle State 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-version_lifecycle_state | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:version_lifecycle_state |

 
Version Lifecycle State 

 This Code system is referenced in the content logical definition of the following value sets: 

* [version_lifecycle_state](ValueSet-version-lifecycle-state.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "version-lifecycle-state",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-version_lifecycle_state",
  "version" : "0.1.0-snapshot",
  "name" : "version_lifecycle_state",
  "title" : "Version Lifecycle State",
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
  "description" : "Version Lifecycle State",
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
  "count" : 5,
  "concept" : [
    {
      "code" : "532",
      "display" : "complete",
      "designation" : [
        {
          "language" : "es",
          "value" : "completo"
        },
        {
          "language" : "ja",
          "value" : "完了"
        },
        {
          "language" : "pt",
          "value" : "completo"
        },
        {
          "language" : "zh",
          "value" : "完整"
        }
      ]
    },
    {
      "code" : "553",
      "display" : "incomplete",
      "designation" : [
        {
          "language" : "es",
          "value" : "incompleto"
        },
        {
          "language" : "ja",
          "value" : "未完"
        },
        {
          "language" : "pt",
          "value" : "incompleto"
        },
        {
          "language" : "zh",
          "value" : "不完整"
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
          "value" : "削除済み"
        },
        {
          "language" : "pt",
          "value" : "eliminado"
        },
        {
          "language" : "zh",
          "value" : "已删除"
        }
      ]
    },
    {
      "code" : "800",
      "display" : "inactive",
      "designation" : [
        {
          "language" : "es",
          "value" : "inactivo"
        },
        {
          "language" : "ja",
          "value" : "非アクティブ"
        },
        {
          "language" : "pt",
          "value" : "inativo"
        },
        {
          "language" : "zh",
          "value" : "无效"
        }
      ]
    },
    {
      "code" : "801",
      "display" : "abandoned",
      "designation" : [
        {
          "language" : "es",
          "value" : "abandonado"
        },
        {
          "language" : "ja",
          "value" : "破棄"
        },
        {
          "language" : "pt",
          "value" : "abandonado"
        },
        {
          "language" : "zh",
          "value" : "已废弃"
        }
      ]
    }
  ]
}

```
