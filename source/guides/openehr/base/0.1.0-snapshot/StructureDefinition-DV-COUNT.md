# DV_COUNT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_COUNT**

## Logical Model: DV_COUNT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-COUNT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_COUNT |

 
Countable quantities. Used for countable types such as pregnancies and steps (taken by a physiotherapy patient), number of cigarettes smoked in a day. 
Misuse: Not to be used for amounts of physical entities (which all have units). 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_count_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-COUNT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-COUNT.csv), [Excel](StructureDefinition-DV-COUNT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-COUNT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "add",
      "name" : "add",
      "title" : "add",
      "status" : "active",
      "kind" : "operation",
      "description" : "Sum of this `DV_COUNT` and `_other_`.",
      "code" : "add",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "integer"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "subtract",
      "name" : "subtract",
      "title" : "subtract",
      "status" : "active",
      "kind" : "operation",
      "description" : "Difference of this `DV_COUNT` and `_other_`.",
      "code" : "subtract",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "integer"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "multiply",
      "name" : "multiply",
      "title" : "multiply",
      "status" : "active",
      "kind" : "operation",
      "description" : "Product of this `DV_COUNT` and `_factor_`.",
      "code" : "multiply",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "factor",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        },
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
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Quantified object is less than `_other_`, based on comparison of `_magnitude_`.",
      "code" : "less_than",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_strictly_comparable_to",
      "name" : "is_strictly_comparable_to",
      "title" : "is_strictly_comparable_to",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return True.",
      "code" : "is_strictly_comparable_to",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_count_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#add"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#subtract"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#multiply"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#less_than"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_strictly_comparable_to"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-COUNT",
  "version" : "0.1.0-snapshot",
  "name" : "DV_COUNT",
  "title" : "DV_COUNT",
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
  "description" : "Countable quantities. Used for countable types such as pregnancies and steps (taken by a physiotherapy patient), number of cigarettes smoked in a day. \n\nMisuse: Not to be used for amounts of physical entities (which all have units).",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_COUNT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-AMOUNT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_COUNT",
        "path" : "DV_COUNT",
        "short" : "Countable quantities.",
        "definition" : "Countable quantities. Used for countable types such as pregnancies and steps (taken by a physiotherapy patient), number of cigarettes smoked in a day. \n\nMisuse: Not to be used for amounts of physical entities (which all have units).",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_COUNT.magnitude",
        "path" : "DV_COUNT.magnitude",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_COUNT.normal-range",
        "path" : "DV_COUNT.normal_range",
        "short" : "Optional normal range.",
        "definition" : "Optional normal range. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-COUNT"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-INTERVAL"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_COUNT.other-reference-ranges",
        "path" : "DV_COUNT.other_reference_ranges",
        "short" : "Optional tagged other reference ranges for this value in its particular measurement context.",
        "definition" : "Optional tagged other reference ranges for this value in its particular measurement context.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-COUNT"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/REFERENCE-RANGE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
