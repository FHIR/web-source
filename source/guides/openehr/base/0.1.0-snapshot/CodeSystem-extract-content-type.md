# Extract Content Type - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Extract Content Type**

## CodeSystem: Extract Content Type 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-extract_content_type | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:extract_content_type |

 
Extract Content Type 

 This Code system is referenced in the content logical definition of the following value sets: 

* [extract_content_type](ValueSet-extract-content-type.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "extract-content-type",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-extract_content_type",
  "version" : "0.1.0-snapshot",
  "name" : "extract_content_type",
  "title" : "Extract Content Type",
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
  "description" : "Extract Content Type",
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
  "count" : 6,
  "concept" : [
    {
      "code" : "803",
      "display" : "openEHR EHR",
      "designation" : [
        {
          "language" : "es",
          "value" : "HCE openEHR"
        },
        {
          "language" : "ja",
          "value" : "openEHR EHR"
        },
        {
          "language" : "pt",
          "value" : "registo de saúde electrónico em openEHR"
        },
        {
          "language" : "zh",
          "value" : "openEHR EHR"
        }
      ]
    },
    {
      "code" : "804",
      "display" : "openEHR Demographic",
      "designation" : [
        {
          "language" : "es",
          "value" : "Demográficos openEHR"
        },
        {
          "language" : "ja",
          "value" : "openEHR Demographic"
        },
        {
          "language" : "pt",
          "value" : "openEHR demográfico"
        },
        {
          "language" : "zh",
          "value" : "openEHR 人口统计学信息"
        }
      ]
    },
    {
      "code" : "805",
      "display" : "openEHR synchronisation",
      "designation" : [
        {
          "language" : "es",
          "value" : "Sincronización openEHR"
        },
        {
          "language" : "ja",
          "value" : "openEHR synchronisation"
        },
        {
          "language" : "pt",
          "value" : "Sincronização openEHR"
        },
        {
          "language" : "zh",
          "value" : "openEHR 同步化"
        }
      ]
    },
    {
      "code" : "806",
      "display" : "openEHR generic",
      "designation" : [
        {
          "language" : "es",
          "value" : "Genérico openEHR"
        },
        {
          "language" : "ja",
          "value" : "openEHR generic"
        },
        {
          "language" : "pt",
          "value" : "openEHR genérico"
        },
        {
          "language" : "zh",
          "value" : "openEHR 通用"
        }
      ]
    },
    {
      "code" : "807",
      "display" : "generic EMR",
      "designation" : [
        {
          "language" : "es",
          "value" : "HCE genérica"
        },
        {
          "language" : "ja",
          "value" : "generic EMR"
        },
        {
          "language" : "pt",
          "value" : "Registro electrónico médico genérico"
        },
        {
          "language" : "zh",
          "value" : "通用 EMR"
        }
      ]
    },
    {
      "code" : "808",
      "display" : "other",
      "designation" : [
        {
          "language" : "es",
          "value" : "otro"
        },
        {
          "language" : "ja",
          "value" : "other"
        },
        {
          "language" : "pt",
          "value" : "Outro"
        },
        {
          "language" : "zh",
          "value" : "其他"
        }
      ]
    }
  ]
}

```
