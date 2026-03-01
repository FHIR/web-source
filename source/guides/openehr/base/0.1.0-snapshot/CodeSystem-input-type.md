# Input Type CodeSystem - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Input Type CodeSystem**

## CodeSystem: Input Type CodeSystem 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-input-type | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:InputTypeCS |

 
Input Type CodeSystem 

 This Code system is referenced in the content logical definition of the following value sets: 

* [InputTypeVS](ValueSet-input-type.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "input-type",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-input-type",
  "version" : "0.1.0-snapshot",
  "name" : "InputTypeCS",
  "title" : "Input Type CodeSystem",
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
  "description" : "Input Type CodeSystem",
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
  "concept" : [
    {
      "code" : "DATE",
      "display" : "DATE"
    },
    {
      "code" : "DATETIME",
      "display" : "DATETIME"
    },
    {
      "code" : "CODED_TEXT",
      "display" : "CODED_TEXT"
    },
    {
      "code" : "DECIMAL",
      "display" : "DECIMAL"
    },
    {
      "code" : "TEXT",
      "display" : "TEXT"
    },
    {
      "code" : "TIME",
      "display" : "TIME"
    },
    {
      "code" : "BOOLEAN",
      "display" : "BOOLEAN"
    },
    {
      "code" : "INTEGER",
      "display" : "INTEGER"
    }
  ]
}

```
