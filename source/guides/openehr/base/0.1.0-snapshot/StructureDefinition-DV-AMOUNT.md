# DV_AMOUNT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_AMOUNT**

## Logical Model: DV_AMOUNT ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-AMOUNT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_AMOUNT |

 
Abstract class defining the concept of relative quantified 'amounts'. For relative quantities, the`+`and`-`operators are defined (unlike descendants of`DV_ABSOLUTE_QUANTITY`, such as the date/time types). 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_amount_class)

**Usages:**

* Derived from this Logical Model: [DV_COUNT](StructureDefinition-DV-COUNT.md), [DV_DURATION](StructureDefinition-DV-DURATION.md) and [DV_QUANTITY](StructureDefinition-DV-QUANTITY.md)
* Use this Logical Model: [DV_ABSOLUTE_QUANTITY](StructureDefinition-DV-ABSOLUTE-QUANTITY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-AMOUNT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-AMOUNT.csv), [Excel](StructureDefinition-DV-AMOUNT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-AMOUNT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "valid_percentage",
      "name" : "valid_percentage",
      "title" : "valid_percentage",
      "status" : "active",
      "kind" : "operation",
      "description" : "Test whether a number is a valid percentage, i.e. between 0 and 100. ",
      "code" : "valid_percentage",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "number",
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
      "id" : "add",
      "name" : "add",
      "title" : "add",
      "status" : "active",
      "kind" : "operation",
      "description" : "Sum of this amount and another. The value of accuracy in the result is either:\n\n* the sum of the accuracies of the operands, if both present, or;\n* both operand accuracies are unknown_accuracy_value.\n\nIf the accuracy value is a percentage in one operand and not in the other, the form in the result is that of the larger operand.",
      "code" : "add",
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
          "type" : "Parameters"
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
      "description" : "Difference of this amount and another. The value of `_accuracy_` in the result is either:\n\n* the sum of the accuracies of the operands, if both present, or;\n* unknown, if either or both operand accuracies are unknown.\n\nIf the `_accuracy_` value is a percentage in one operand and not in the other, the form in the result is that of the larger operand.",
      "code" : "subtract",
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
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_equal",
      "name" : "is_equal",
      "title" : "is_equal",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return True if this `DV_AMOUNT` is considered equal to `_other_`.",
      "code" : "is_equal",
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
      "id" : "multiply",
      "name" : "multiply",
      "title" : "multiply",
      "status" : "active",
      "kind" : "operation",
      "description" : "Product of this Amount and `_factor_`.",
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
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "negative",
      "name" : "negative",
      "title" : "negative",
      "status" : "active",
      "kind" : "operation",
      "description" : "Negated version of current object, such as used for representing a difference, e.g. a weight loss.",
      "code" : "negative",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this object is less than `_other_`. Based on comparison of `_magnitude_`.",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_amount_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#valid_percentage"
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
      "valueCanonical" : "#is_equal"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#multiply"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#negative"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-AMOUNT",
  "version" : "0.1.0-snapshot",
  "name" : "DV_AMOUNT",
  "title" : "DV_AMOUNT",
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
  "description" : "Abstract class defining the concept of relative quantified  'amounts'. For relative quantities, the  `+` and  `-` operators are defined (unlike descendants of `DV_ABSOLUTE_QUANTITY`, such as the date/time types). \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_AMOUNT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTIFIED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_AMOUNT",
        "path" : "DV_AMOUNT",
        "short" : "Abstract class defining the concept of relative quantified  'amounts'.",
        "definition" : "Abstract class defining the concept of relative quantified  'amounts'. For relative quantities, the  `+` and  `-` operators are defined (unlike descendants of `DV_ABSOLUTE_QUANTITY`, such as the date/time types). \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Accuracy_is_percent_validity",
            "severity" : "error",
            "human" : "Accuracy is percent validity must satisfy conditional constraints",
            "expression" : "accuracy = 0 implies accuracy_is_percent.not()"
          },
          {
            "key" : "Accuracy_validity",
            "severity" : "error",
            "human" : "Accuracy validity must satisfy conditional constraints",
            "expression" : "accuracy_is_percent implies valid_percentage() (accuracy)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_AMOUNT.accuracy-is-percent",
        "path" : "DV_AMOUNT.accuracy_is_percent",
        "short" : "If `True`, indicates that when this object was created, `_accuracy_` was recorded as a percent value; if `False`, as an absolute quantity value.",
        "definition" : "If `True`, indicates that when this object was created, `_accuracy_` was recorded as a percent value; if `False`, as an absolute quantity value.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_AMOUNT.accuracy",
        "path" : "DV_AMOUNT.accuracy",
        "short" : "Accuracy of measurement, expressed either as a half-range percent value (`_accuracy_is_percent_` = `True`) or a half-range quantity.",
        "definition" : "Accuracy of measurement, expressed either as a half-range percent value (`_accuracy_is_percent_` = `True`) or a half-range quantity. A value of `0` means that accuracy is 100%, i.e. no error.\n\nA value of `_unknown_accuracy_value_` means that accuracy was not recorded.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "decimal"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
