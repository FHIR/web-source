# Integrity check algorithms - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Integrity check algorithms**

## CodeSystem: Integrity check algorithms 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-integrity_check_algorithms | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:integrity_check_algorithms |

 
Integrity check algorithms 

 This Code system is referenced in the content logical definition of the following value sets: 

* [integrity_check_algorithms](ValueSet-integrity-check-algorithms.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "integrity-check-algorithms",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-integrity_check_algorithms",
  "version" : "0.1.0-snapshot",
  "name" : "integrity_check_algorithms",
  "title" : "Integrity check algorithms",
  "status" : "active",
  "experimental" : false,
  "date" : "2024-04-11",
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
  "description" : "Integrity check algorithms",
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
  "valueSet" : "https://specifications.openehr.org/fhir/valueset-integrity-check-algorithms",
  "content" : "complete",
  "concept" : [
    {
      "code" : "SHA-1",
      "display" : "SHA-1"
    },
    {
      "code" : "SHA-224",
      "display" : "SHA-224"
    },
    {
      "code" : "SHA-256",
      "display" : "SHA-256"
    },
    {
      "code" : "SHA-384",
      "display" : "SHA-384"
    },
    {
      "code" : "SHA-512",
      "display" : "SHA-512"
    },
    {
      "code" : "SHA-512/224",
      "display" : "SHA-512/224"
    },
    {
      "code" : "SHA-512/256",
      "display" : "SHA-512/256"
    }
  ]
}

```
