# Attestation Reason - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Attestation Reason**

## CodeSystem: Attestation Reason 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-attestation_reason | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:attestation_reason |

 
Attestation Reason 

 This Code system is referenced in the content logical definition of the following value sets: 

* [attestation_reason](ValueSet-attestation-reason.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "attestation-reason",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-attestation_reason",
  "version" : "0.1.0-snapshot",
  "name" : "attestation_reason",
  "title" : "Attestation Reason",
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
  "description" : "Attestation Reason",
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
  "count" : 2,
  "concept" : [
    {
      "code" : "240",
      "display" : "signed",
      "designation" : [
        {
          "language" : "es",
          "value" : "firmado"
        },
        {
          "language" : "ja",
          "value" : "署名"
        },
        {
          "language" : "pt",
          "value" : "assinado"
        },
        {
          "language" : "zh",
          "value" : "已签署"
        }
      ]
    },
    {
      "code" : "648",
      "display" : "witnessed",
      "designation" : [
        {
          "language" : "es",
          "value" : "testigo"
        },
        {
          "language" : "ja",
          "value" : "証言"
        },
        {
          "language" : "pt",
          "value" : "testemunhado"
        },
        {
          "language" : "zh",
          "value" : "已见证"
        }
      ]
    }
  ]
}

```
