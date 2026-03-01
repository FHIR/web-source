# EXTRACT_FOLDER - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_FOLDER**

## Logical Model: EXTRACT_FOLDER 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-FOLDER | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_FOLDER |

 
Folder in local Folder structure in an Extract. Empty Folders are allowed. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-FOLDER)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-FOLDER.csv), [Excel](StructureDefinition-EXTRACT-FOLDER.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-FOLDER",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-FOLDER",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_FOLDER",
  "title" : "EXTRACT_FOLDER",
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
  "description" : "Folder in local Folder structure in an Extract. Empty Folders are allowed.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_FOLDER",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_FOLDER",
        "path" : "EXTRACT_FOLDER",
        "short" : "Folder in local Folder structure in an Extract.",
        "definition" : "Folder in local Folder structure in an Extract. Empty Folders are allowed.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_FOLDER.items",
        "path" : "EXTRACT_FOLDER.items",
        "short" : "List of Folders and content items in this Folder.",
        "definition" : "List of Folders and content items in this Folder.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
