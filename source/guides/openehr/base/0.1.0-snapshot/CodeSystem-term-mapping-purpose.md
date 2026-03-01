# Term Mapping Purpose - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Term Mapping Purpose**

## CodeSystem: Term Mapping Purpose 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-term_mapping_purpose | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:term_mapping_purpose |

 
Term Mapping Purpose 

 This Code system is referenced in the content logical definition of the following value sets: 

* [term_mapping_purpose](ValueSet-term-mapping-purpose.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "term-mapping-purpose",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-term_mapping_purpose",
  "version" : "0.1.0-snapshot",
  "name" : "term_mapping_purpose",
  "title" : "Term Mapping Purpose",
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
  "description" : "Term Mapping Purpose",
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
  "count" : 3,
  "concept" : [
    {
      "code" : "669",
      "display" : "public health",
      "designation" : [
        {
          "language" : "es",
          "value" : "salud pública"
        },
        {
          "language" : "ja",
          "value" : "公衆衛生"
        },
        {
          "language" : "pt",
          "value" : "saúde pública"
        },
        {
          "language" : "zh",
          "value" : "公共卫生"
        }
      ]
    },
    {
      "code" : "670",
      "display" : "reimbursement",
      "designation" : [
        {
          "language" : "es",
          "value" : "reembolso"
        },
        {
          "language" : "ja",
          "value" : "償還"
        },
        {
          "language" : "pt",
          "value" : "reembolso"
        },
        {
          "language" : "zh",
          "value" : "费用报销"
        }
      ]
    },
    {
      "code" : "671",
      "display" : "research study",
      "designation" : [
        {
          "language" : "es",
          "value" : "investigación"
        },
        {
          "language" : "ja",
          "value" : "研究"
        },
        {
          "language" : "pt",
          "value" : "estudo de investigação"
        },
        {
          "language" : "zh",
          "value" : "研究调查"
        }
      ]
    }
  ]
}

```
