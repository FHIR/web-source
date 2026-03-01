# Item ProportionType CodeSystem - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Item ProportionType CodeSystem**

## CodeSystem: Item ProportionType CodeSystem 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-item-proportiontype | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ItemProportionTypeCS |

 
Item ProportionType CodeSystem 

 This Code system is referenced in the content logical definition of the following value sets: 

* [ItemProportionTypeVS](ValueSet-item-proportiontype.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "item-proportiontype",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-item-proportiontype",
  "version" : "0.1.0-snapshot",
  "name" : "ItemProportionTypeCS",
  "title" : "Item ProportionType CodeSystem",
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
  "description" : "Item ProportionType CodeSystem",
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
      "code" : "fraction",
      "display" : "fraction"
    },
    {
      "code" : "integer_fraction",
      "display" : "integer_fraction"
    },
    {
      "code" : "percent",
      "display" : "percent"
    },
    {
      "code" : "ratio",
      "display" : "ratio"
    },
    {
      "code" : "unitary",
      "display" : "unitary"
    }
  ]
}

```
