# OPENEHR_CONTENT_ITEM - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **OPENEHR_CONTENT_ITEM**

## Logical Model: OPENEHR_CONTENT_ITEM 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/OPENEHR-CONTENT-ITEM | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:OPENEHR_CONTENT_ITEM |

 
Form of`EHR EXTRACT_ITEM`containing openEHR serialised`VERSIONED_OBJECTs`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/OPENEHR-CONTENT-ITEM)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-OPENEHR-CONTENT-ITEM.csv), [Excel](StructureDefinition-OPENEHR-CONTENT-ITEM.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "OPENEHR-CONTENT-ITEM",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/OPENEHR-CONTENT-ITEM",
  "version" : "0.1.0-snapshot",
  "name" : "OPENEHR_CONTENT_ITEM",
  "title" : "OPENEHR_CONTENT_ITEM",
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
  "description" : "Form of `EHR EXTRACT_ITEM` containing openEHR serialised `VERSIONED_OBJECTs`.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/OPENEHR_CONTENT_ITEM",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-CONTENT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "OPENEHR_CONTENT_ITEM",
        "path" : "OPENEHR_CONTENT_ITEM",
        "short" : "Form of `EHR EXTRACT_ITEM` containing openEHR serialised `VERSIONED_OBJECTs`.",
        "definition" : "Form of `EHR EXTRACT_ITEM` containing openEHR serialised `VERSIONED_OBJECTs`.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "OPENEHR_CONTENT_ITEM.item",
        "path" : "OPENEHR_CONTENT_ITEM.item",
        "short" : "Content object.",
        "definition" : "Content object.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/VERSIONED-OBJECT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
