# Participation Function - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Participation Function**

## CodeSystem: Participation Function 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-participation_function | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:participation_function |

 
Participation Function 

 This Code system is referenced in the content logical definition of the following value sets: 

* [participation_function](ValueSet-participation-function.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "participation-function",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-participation_function",
  "version" : "0.1.0-snapshot",
  "name" : "participation_function",
  "title" : "Participation Function",
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
  "description" : "Participation Function",
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
  "count" : 1,
  "concept" : [
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
    }
  ]
}

```
