# PROPORTION_KIND - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PROPORTION_KIND**

## CodeSystem: PROPORTION_KIND 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-proportion_kind | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PROPORTION_KIND |

 
Class of enumeration constants defining types of proportion for the DV_PROPORTION class. 

 This Code system is referenced in the content logical definition of the following value sets: 

* [PROPORTION_KIND](ValueSet-proportion-kind.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "proportion-kind",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_proportion_kind_class"
    },
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-proportion_kind",
  "version" : "0.1.0-snapshot",
  "name" : "PROPORTION_KIND",
  "title" : "PROPORTION_KIND",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-06-27T18:45:58+10:00",
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
  "description" : "Class of enumeration constants defining types of proportion for the DV_PROPORTION class.",
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
      "code" : "pk_ratio",
      "display" : "pk_ratio",
      "definition" : "Ratio type. Numerator and denominator may be any value."
    },
    {
      "code" : "pk_unitary",
      "display" : "pk_unitary",
      "definition" : "Denominator must be 1."
    },
    {
      "code" : "pk_percent",
      "display" : "pk_percent",
      "definition" : "Denominator is 100, numerator is understood as a percentage value."
    },
    {
      "code" : "pk_fraction",
      "display" : "pk_fraction",
      "definition" : "Numerator and denominator are integral, and the presentation method uses a slash, e.g. 1/2 ."
    },
    {
      "code" : "pk_integer_fraction",
      "display" : "pk_integer_fraction",
      "definition" : "Numerator and denominator are integral, and the presentation method uses a slash, e.g. 1/2 ; if the numerator is greater than the denominator, e.g. n=3, d=2, the presentation is 1 1/2 ."
    }
  ]
}

```
