# ITEM_LIST - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ITEM_LIST**

## Logical Model: ITEM_LIST 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ITEM-LIST | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ITEM_LIST |

 
Logical list data structure, where each item has a value and can be referred to by a name and a positional index in the list. The list may be empty. 
`ITEM_LIST`is used to represent any data which is logically a list of values, such as blood pressure, most protocols, many blood tests etc. 
Not to be used for time-based lists, which should be represented with the proper temporal class, i.e.`HISTORY`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_list_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ITEM-LIST)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ITEM-LIST.csv), [Excel](StructureDefinition-ITEM-LIST.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ITEM-LIST",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "item_count",
      "name" : "item_count",
      "title" : "item_count",
      "status" : "active",
      "kind" : "operation",
      "description" : "Count of all items.",
      "code" : "item_count",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "integer"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "names",
      "name" : "names",
      "title" : "names",
      "status" : "active",
      "kind" : "operation",
      "description" : "Retrieve the names of all items.",
      "code" : "names",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "named_item",
      "name" : "named_item",
      "title" : "named_item",
      "status" : "active",
      "kind" : "operation",
      "description" : "Retrieve the item with name ‘a_name’.",
      "code" : "named_item",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_name",
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
      "id" : "ith_item",
      "name" : "ith_item",
      "title" : "ith_item",
      "status" : "active",
      "kind" : "operation",
      "description" : "Retrieve the i-th item with name.",
      "code" : "ith_item",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "i",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "integer"
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
      "description" : "Generate a CEN EN13606-compatible hierarchy consisting of a single `CLUSTER` containing the `ELEMENTs` of this list.",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_list_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#item_count"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#names"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#named_item"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#ith_item"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ITEM-LIST",
  "version" : "0.1.0-snapshot",
  "name" : "ITEM_LIST",
  "title" : "ITEM_LIST",
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
  "description" : "Logical list data structure, where each item has a value and can be referred to by a name and a positional index in the list. The list may be empty. \n\n`ITEM_LIST` is used to represent any data which is logically a list of values, such as blood pressure, most protocols, many blood tests etc. \n\nNot to be used for time-based lists, which should be represented with the proper temporal class, i.e. `HISTORY`.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ITEM_LIST",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ITEM_LIST",
        "path" : "ITEM_LIST",
        "short" : "Logical list data structure, where each item has a value and can be referred to by a name and a positional index in the list.",
        "definition" : "Logical list data structure, where each item has a value and can be referred to by a name and a positional index in the list. The list may be empty. \n\n`ITEM_LIST` is used to represent any data which is logically a list of values, such as blood pressure, most protocols, many blood tests etc. \n\nNot to be used for time-based lists, which should be represented with the proper temporal class, i.e. `HISTORY`.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Valid_structure",
            "severity" : "error",
            "human" : "Valid structure",
            "expression" : " items.forall (i:ITEM | i.type() = \\\"ELEMENT\\\")"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ITEM_LIST.items",
        "path" : "ITEM_LIST.items",
        "short" : "Physical representation of the list.",
        "definition" : "Physical representation of the list. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ELEMENT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
