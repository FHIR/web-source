# DV_ABSOLUTE_QUANTITY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_ABSOLUTE_QUANTITY**

## Logical Model: DV_ABSOLUTE_QUANTITY ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-ABSOLUTE-QUANTITY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_ABSOLUTE_QUANTITY |

 
Abstract class defining the concept of quantified entities whose values are absolute with respect to an origin. Dates and Times are the main example. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_absolute_quantity_class)

**Usages:**

* Derived from this Logical Model: [DV_TEMPORAL](StructureDefinition-DV-TEMPORAL.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-ABSOLUTE-QUANTITY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-ABSOLUTE-QUANTITY.csv), [Excel](StructureDefinition-DV-ABSOLUTE-QUANTITY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-ABSOLUTE-QUANTITY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "add",
      "name" : "add",
      "title" : "add",
      "status" : "active",
      "kind" : "operation",
      "description" : "Addition of a differential amount to this quantity. \n\nThe value of accuracy in the result is either:\n\n* the sum of the accuracies of the operands, if both present, or;\n* unknown, if either or both operand accuracies are unknown.",
      "code" : "add",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_diff",
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
      "description" : "Result of subtracting a differential amount from this quantity.\n\nThe value of `_accuracy_` in the result is either:\n\n* the sum of the accuracies of the operands, if both present, or;\n* unknown, if either or both operand accuracies are unknown.",
      "code" : "subtract",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_diff",
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
      "id" : "diff",
      "name" : "diff",
      "title" : "diff",
      "status" : "active",
      "kind" : "operation",
      "description" : "Difference of two quantities.\n\nThe value of accuracy in the result is either:\n\n* the sum of the accuracies of the operands, if both present, or;\n* unknown, if either or both operand accuracies are unknown.",
      "code" : "diff",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_absolute_quantity_class"
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
      "valueCanonical" : "#diff"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-ABSOLUTE-QUANTITY",
  "version" : "0.1.0-snapshot",
  "name" : "DV_ABSOLUTE_QUANTITY",
  "title" : "DV_ABSOLUTE_QUANTITY",
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
  "description" : "Abstract class defining the concept of quantified entities whose values are absolute with respect to an origin. Dates and Times are the main example.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_ABSOLUTE_QUANTITY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTIFIED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_ABSOLUTE_QUANTITY",
        "path" : "DV_ABSOLUTE_QUANTITY",
        "short" : "Abstract class defining the concept of quantified entities whose values are absolute with respect to an origin.",
        "definition" : "Abstract class defining the concept of quantified entities whose values are absolute with respect to an origin. Dates and Times are the main example.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_ABSOLUTE_QUANTITY.accuracy",
        "path" : "DV_ABSOLUTE_QUANTITY.accuracy",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-AMOUNT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
