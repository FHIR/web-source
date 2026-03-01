# ITEM_TABLE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ITEM_TABLE**

## Logical Model: ITEM_TABLE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ITEM-TABLE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ITEM_TABLE |

 
Logical relational database style table data structure, in which columns are named and ordered with respect to each other. Implemented using Cluster-per-row encoding. Each row Cluster must have an identical number of Elements, each of which in turn must have identical names and value types in the corresponding positions in each row. 
Some columns may be designated key' columns, containing key data for each row, in the manner of relational tables. This allows row-naming, where each row represents a body site, a blood antigen etc. All values in a column have the same data type. 
Used for representing any data which is logically a table of values, such as blood pressure, most protocols, many blood tests etc. 
Misuse: Not to be used for time-based data, which should be represented with the temporal class`HISTORY`. The table may be empty. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_table_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ITEM-TABLE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ITEM-TABLE.csv), [Excel](StructureDefinition-ITEM-TABLE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ITEM-TABLE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "row_count",
      "name" : "row_count",
      "title" : "row_count",
      "status" : "active",
      "kind" : "operation",
      "description" : "Number of rows in the table.",
      "code" : "row_count",
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
      "id" : "column_count",
      "name" : "column_count",
      "title" : "column_count",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return number of columns in the table.",
      "code" : "column_count",
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
      "id" : "row_names",
      "name" : "row_names",
      "title" : "row_names",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return set of row names.",
      "code" : "row_names",
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
      "id" : "column_names",
      "name" : "column_names",
      "title" : "column_names",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return set of column names.",
      "code" : "column_names",
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
      "id" : "ith_row",
      "name" : "ith_row",
      "title" : "ith_row",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return i-th row.",
      "code" : "ith_row",
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
      "id" : "has_row_with_name",
      "name" : "has_row_with_name",
      "title" : "has_row_with_name",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return `True` if there is a column with name = `_a_key_`.",
      "code" : "has_row_with_name",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_key",
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
      "id" : "has_column_with_name",
      "name" : "has_column_with_name",
      "title" : "has_column_with_name",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return `True` if there is a column with name = `_a_key_`.",
      "code" : "has_column_with_name",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_key",
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
      "id" : "named_row",
      "name" : "named_row",
      "title" : "named_row",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return row with name = `_a_key_`.",
      "code" : "named_row",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_key",
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
      "id" : "has_row_with_key",
      "name" : "has_row_with_key",
      "title" : "has_row_with_key",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return `True` if there is a row with key `_keys_`.",
      "code" : "has_row_with_key",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "keys",
          "use" : "in",
          "min" : 0,
          "max" : "*",
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
      "id" : "row_with_key",
      "name" : "row_with_key",
      "title" : "row_with_key",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return rows with particular keys.",
      "code" : "row_with_key",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "keys",
          "use" : "in",
          "min" : 0,
          "max" : "*",
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
      "id" : "element_at_cell_ij",
      "name" : "element_at_cell_ij",
      "title" : "element_at_cell_ij",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return cell at a particular location.",
      "code" : "element_at_cell_ij",
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
          "name" : "j",
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
      "description" : "Generate a CEN EN13606-compatible hierarchy consisting of a single `CLUSTER` containing the `CLUSTERs` representing the columns of this table. ",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_table_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#row_count"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#column_count"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#row_names"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#column_names"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#ith_row"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_row_with_name"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_column_with_name"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#named_row"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_row_with_key"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#row_with_key"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#element_at_cell_ij"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ITEM-TABLE",
  "version" : "0.1.0-snapshot",
  "name" : "ITEM_TABLE",
  "title" : "ITEM_TABLE",
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
  "description" : "Logical relational database style table data structure, in which columns are named and ordered with respect to each other. Implemented using Cluster-per-row encoding. Each row Cluster must have an identical number of Elements, each of which in turn must have identical names and value types in the corresponding positions in each row. \n\nSome columns may be designated  key' columns, containing key data for each row, in the manner of relational tables. This allows row-naming, where each row represents a body site, a blood antigen etc. All values in a column have the same data type. \n\nUsed for representing any data which is logically a table of values, such as blood pressure, most protocols, many blood tests etc. \n\nMisuse: Not to be used for time-based data, which should be represented with the temporal class `HISTORY`. The table may be empty. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ITEM_TABLE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ITEM_TABLE",
        "path" : "ITEM_TABLE",
        "short" : "Logical relational database style table data structure, in which columns are named and ordered with respect to each other.",
        "definition" : "Logical relational database style table data structure, in which columns are named and ordered with respect to each other. Implemented using Cluster-per-row encoding. Each row Cluster must have an identical number of Elements, each of which in turn must have identical names and value types in the corresponding positions in each row. \n\nSome columns may be designated  key' columns, containing key data for each row, in the manner of relational tables. This allows row-naming, where each row represents a body site, a blood antigen etc. All values in a column have the same data type. \n\nUsed for representing any data which is logically a table of values, such as blood pressure, most protocols, many blood tests etc. \n\nMisuse: Not to be used for time-based data, which should be represented with the temporal class `HISTORY`. The table may be empty. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Valid_structure",
            "severity" : "error",
            "human" : "Valid structure",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ITEM_TABLE.rows",
        "path" : "ITEM_TABLE.rows",
        "short" : "Physical representation of the table as a list of `CLUSTERs`, each containing the data of one row of the table.",
        "definition" : "Physical representation of the table as a list of `CLUSTERs`, each containing the data of one row of the table. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CLUSTER"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
