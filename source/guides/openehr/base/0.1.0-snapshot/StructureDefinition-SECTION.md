# SECTION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **SECTION**

## Logical Model: SECTION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/SECTION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:SECTION |

 
Represents a heading in a heading structure, or section tree. Created according to archetyped structures for typical headings such as SOAP, physical examination, but also pathology result heading structures. Should not be used instead of`ENTRY`hierarchical structures. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_section_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/SECTION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-SECTION.csv), [Excel](StructureDefinition-SECTION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SECTION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_section_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#concept"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/SECTION",
  "version" : "0.1.0-snapshot",
  "name" : "SECTION",
  "title" : "SECTION",
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
  "description" : "Represents a heading in a heading structure, or  section tree.  Created according to archetyped structures for typical headings such as SOAP,  physical examination, but also pathology result heading structures.  Should not be used instead of `ENTRY` hierarchical structures. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/SECTION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/CONTENT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "SECTION",
        "path" : "SECTION",
        "short" : "Represents a heading in a heading structure, or  section tree.",
        "definition" : "Represents a heading in a heading structure, or  section tree.  Created according to archetyped structures for typical headings such as SOAP,  physical examination, but also pathology result heading structures.  Should not be used instead of `ENTRY` hierarchical structures. \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Items_valid",
            "severity" : "error",
            "human" : "Items valid must be present",
            "expression" : "items.exists() implies items.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "SECTION.items",
        "path" : "SECTION.items",
        "short" : "Ordered list of content items under this section, which may include:\n\n* more `SECTIONs`;\n* `ENTRYs`.",
        "definition" : "Ordered list of content items under this section, which may include:\n\n* more `SECTIONs`;\n* `ENTRYs`.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CONTENT-ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
