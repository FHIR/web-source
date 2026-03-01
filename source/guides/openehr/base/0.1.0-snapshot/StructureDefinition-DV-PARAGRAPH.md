# DV_PARAGRAPH - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_PARAGRAPH**

## Logical Model: DV_PARAGRAPH 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-PARAGRAPH | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_PARAGRAPH |

 
DEPRECATED: use markdown formatted`DV_TEXT`instead. 
Original definition: 
A logical composite text value consisting of a series of`DV_TEXTs`, i.e. plain text (optionally coded) potentially with simple formatting, to form a larger tract of prose, which may be interpreted for display purposes as a paragraph. 
`DV_PARAGRAPH`is the standard way for constructing longer text items in summaries, reports and so on. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_paragraph_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-PARAGRAPH)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-PARAGRAPH.csv), [Excel](StructureDefinition-DV-PARAGRAPH.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-PARAGRAPH",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_paragraph_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-as-leaf"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-defns-parent"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-replace-cardinality"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-PARAGRAPH",
  "version" : "0.1.0-snapshot",
  "name" : "DV_PARAGRAPH",
  "title" : "DV_PARAGRAPH",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-09-06T15:35:39+10:00",
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
  "description" : "DEPRECATED: use markdown formatted `DV_TEXT` instead.\n\nOriginal definition:\n\nA logical composite text value consisting of a series of `DV_TEXTs`, i.e. plain text (optionally coded) potentially with simple formatting, to form a larger tract of prose, which may be interpreted for display purposes as a paragraph. \n\n`DV_PARAGRAPH` is the standard way for constructing longer text items in summaries, reports and so on. ",
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
  "fhirVersion" : "5.0.0",
  "mapping" : [
    {
      "identity" : "rim",
      "uri" : "http://hl7.org/v3",
      "name" : "RIM Mapping"
    }
  ],
  "kind" : "logical",
  "abstract" : false,
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_PARAGRAPH",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_PARAGRAPH",
        "path" : "DV_PARAGRAPH",
        "short" : "DEPRECATED: use markdown formatted `DV_TEXT` instead.",
        "definition" : "DEPRECATED: use markdown formatted `DV_TEXT` instead.\n\nOriginal definition:\n\nA logical composite text value consisting of a series of `DV_TEXTs`, i.e. plain text (optionally coded) potentially with simple formatting, to form a larger tract of prose, which may be interpreted for display purposes as a paragraph. \n\n`DV_PARAGRAPH` is the standard way for constructing longer text items in summaries, reports and so on. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Items_valid",
            "severity" : "error",
            "human" : "Items valid must not be empty",
            "expression" : "items.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_PARAGRAPH.items",
        "path" : "DV_PARAGRAPH.items",
        "short" : "Items making up the paragraph, each of which is a text item (which may have its own formatting, and/or have hyperlinks).",
        "definition" : "Items making up the paragraph, each of which is a text item (which may have its own formatting, and/or have hyperlinks). ",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
