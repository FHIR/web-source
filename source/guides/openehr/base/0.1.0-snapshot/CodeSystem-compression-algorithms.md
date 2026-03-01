# Compression algorithms - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Compression algorithms**

## CodeSystem: Compression algorithms 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-compression_algorithms | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:compression_algorithms |

 
Compression algorithms 

 This Code system is referenced in the content logical definition of the following value sets: 

* [compression_algorithms](ValueSet-compression-algorithms.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "compression-algorithms",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-compression_algorithms",
  "version" : "0.1.0-snapshot",
  "name" : "compression_algorithms",
  "title" : "Compression algorithms",
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
  "description" : "Compression algorithms",
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
  "valueSet" : "https://specifications.openehr.org/fhir/valueset-compression_algorithms",
  "content" : "complete",
  "concept" : [
    {
      "code" : "compress",
      "display" : "compress"
    },
    {
      "code" : "deflate",
      "display" : "deflate"
    },
    {
      "code" : "gzip",
      "display" : "gzip"
    },
    {
      "code" : "zlib",
      "display" : "zlib"
    },
    {
      "code" : "other",
      "display" : "other"
    }
  ]
}

```
