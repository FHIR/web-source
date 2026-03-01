# ITEM_TREE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ITEM_TREE**

## Logical Model: ITEM_TREE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ITEM-TREE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ITEM_TREE |

 
Logical tree data structure. The tree may be empty. Used for representing data which are logically a tree such as audiology results, microbiology results, biochemistry results. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_tree_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ITEM-TREE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ITEM-TREE.csv), [Excel](StructureDefinition-ITEM-TREE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ITEM-TREE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_element_path",
      "name" : "has_element_path",
      "title" : "has_element_path",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if path  a_path' is a valid leaf path.\n",
      "code" : "has_element_path",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "element_at_path",
      "name" : "element_at_path",
      "title" : "element_at_path",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the leaf element at the path  a_path'.",
      "code" : "element_at_path",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "as_hierarchy",
      "name" : "as_hierarchy",
      "title" : "as_hierarchy",
      "status" : "active",
      "kind" : "operation",
      "description" : "Generate a CEN EN13606-compatible hierarchy, which is the same as the tree's physical representation.",
      "code" : "as_hierarchy",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_tree_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_element_path"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#element_at_path"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#as_hierarchy"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ITEM-TREE",
  "version" : "0.1.0-snapshot",
  "name" : "ITEM_TREE",
  "title" : "ITEM_TREE",
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
  "description" : "Logical tree data structure. The tree may be empty. Used for representing data which are logically a tree such as audiology results, microbiology results, biochemistry results.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ITEM_TREE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ITEM_TREE",
        "path" : "ITEM_TREE",
        "short" : "Logical tree data structure.",
        "definition" : "Logical tree data structure. The tree may be empty. Used for representing data which are logically a tree such as audiology results, microbiology results, biochemistry results.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "ITEM_TREE.items",
        "path" : "ITEM_TREE.items",
        "short" : "The items comprising the `ITEM_TREE`.",
        "definition" : "The items comprising the `ITEM_TREE`. Can include 0 or more `CLUSTERs` and/or 0 or more individual `ELEMENTs`.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
