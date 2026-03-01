# DV_ORDERED - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_ORDERED**

## Logical Model: DV_ORDERED ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-ORDERED | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_ORDERED |

 
Abstract class defining the concept of ordered values, which includes ordinals as well as true quantities. It defines the functions`<`and`_is_strictly_comparable_to()_`, the latter of which must evaluate to`True`for instances being compared with the`<`function, or used as limits in the`DV_INTERVAL<T>`class. 
Data value types which are to be used as limits in the`DV_INTERVAL<T>`class must inherit from this class, and implement the function`_is_strictly_comparable_to()_`to ensure that instances compare meaningfully. For example, instances of`DV_QUANTITY`can only be compared if they measure the same kind of physical quantity. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ordered_class)

**Usages:**

* Derived from this Logical Model: [DV_ORDINAL](StructureDefinition-DV-ORDINAL.md), [DV_QUANTIFIED](StructureDefinition-DV-QUANTIFIED.md) and [DV_SCALE](StructureDefinition-DV-SCALE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-ORDERED)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-ORDERED.csv), [Excel](StructureDefinition-DV-ORDERED.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-ORDERED",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_strictly_comparable_to",
      "name" : "is_strictly_comparable_to",
      "title" : "is_strictly_comparable_to",
      "status" : "active",
      "kind" : "operation",
      "description" : "Test if two instances are strictly comparable. Effected in descendants.",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_simple",
      "name" : "is_simple",
      "title" : "is_simple",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this quantity has no reference ranges.",
      "code" : "is_simple",
      "system" : false,
      "instance" : true,
      "parameter" : [
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
      "id" : "is_normal",
      "name" : "is_normal",
      "title" : "is_normal",
      "status" : "active",
      "kind" : "operation",
      "description" : "Value is in the normal range, determined by comparison of the value to `_normal_range_` if present, or by the `_normal_status_` marker if present. \n",
      "code" : "is_normal",
      "system" : false,
      "instance" : true,
      "parameter" : [
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
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Ordered object is less than `_other_`. Redefined in descendants.",
      "code" : "less_than",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ordered_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_strictly_comparable_to"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_simple"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_normal"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#less_than"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED",
  "version" : "0.1.0-snapshot",
  "name" : "DV_ORDERED",
  "title" : "DV_ORDERED",
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
  "description" : "Abstract class defining the concept of ordered values, which includes ordinals as well as true quantities. It defines the functions  `<` and `_is_strictly_comparable_to()_`, the latter of which must evaluate to `True` for instances being compared with the  `<` function, or used as limits in the `DV_INTERVAL<T>` class. \n\nData value types which are to be used as limits in the `DV_INTERVAL<T>` class must inherit from this class, and implement the function `_is_strictly_comparable_to()_` to ensure that instances compare meaningfully. For example, instances of `DV_QUANTITY` can only be compared if they measure the same kind of physical quantity. \n",
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
  "abstract" : true,
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_ORDERED",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_ORDERED",
        "path" : "DV_ORDERED",
        "short" : "Abstract class defining the concept of ordered values, which includes ordinals as well as true quantities.",
        "definition" : "Abstract class defining the concept of ordered values, which includes ordinals as well as true quantities. It defines the functions  `<` and `_is_strictly_comparable_to()_`, the latter of which must evaluate to `True` for instances being compared with the  `<` function, or used as limits in the `DV_INTERVAL<T>` class. \n\nData value types which are to be used as limits in the `DV_INTERVAL<T>` class must inherit from this class, and implement the function `_is_strictly_comparable_to()_` to ensure that instances compare meaningfully. For example, instances of `DV_QUANTITY` can only be compared if they measure the same kind of physical quantity. \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Other_reference_ranges_validity",
            "severity" : "error",
            "human" : "Other reference ranges validity must be present",
            "expression" : "other_reference_ranges.exists() implies other_reference_ranges.empty().not()"
          },
          {
            "key" : "Is_simple_validity",
            "severity" : "error",
            "human" : "Is simple validity must satisfy conditional constraints",
            "expression" : "(normal_range .empty() and other_reference_ranges .empty()) implies is_simple()"
          },
          {
            "key" : "Normal_range_and_status_consistency",
            "severity" : "error",
            "human" : "Normal range and status consistency must be present",
            "expression" : "(normal_range.exists() and normal_status.exists()) implies (normal_status.code_string.is_equal (“N”) xor normal_range.not().has (self))"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-normal_statuses"
        }
      },
      {
        "id" : "DV_ORDERED.normal-status",
        "path" : "DV_ORDERED.normal_status",
        "short" : "Optional normal status indicator of value with respect to normal range for this value.",
        "definition" : "Optional normal status indicator of value with respect to normal range for this value. Often included by lab, even if the normal range itself is not included. Coded by ordinals in series HHH, HH, H, (nothing), L, LL, LLL; see openEHR terminology group  `normal_status`. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_ORDERED.normal-range",
        "path" : "DV_ORDERED.normal_range",
        "short" : "Optional normal range.",
        "definition" : "Optional normal range. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-INTERVAL"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_ORDERED.other-reference-ranges",
        "path" : "DV_ORDERED.other_reference_ranges",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED"
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
