# DV_ORDINAL - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_ORDINAL**

## Logical Model: DV_ORDINAL 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-ORDINAL | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_ORDINAL |

 
A data type that represents integral score values, e.g. pain, Apgar values, etc, where there is: 
a) implied ordering, b) no implication that the distance between each value is constant, and c) the total number of values is finite; d) integer values only. 
Note that although the term 'ordinal' in mathematics means natural numbers only, here any integer is allowed, since negative and zero values are often used by medical professionals for values around a neutral point. Examples of sets of ordinal values: 
* -3, -2, -1, 0, 1, 2, 3 – reflex response values
* 0, 1, 2 – Apgar values
 
This class is used for recording any clinical datum which is customarily recorded using symbolic values. Example: the results on a urinalysis strip, e.g.`{neg, trace, +, ++, +++}`are used for leucocytes, protein, nitrites etc; for non-haemolysed blood`{neg, trace, moderate}`; for haemolysed blood`{small, moderate, large}`. 
For scores or scales that include Real numbers (or might in the future, i.e. not fixed for all time, such as Apgar), use`DV_SCALE`.`DV_SCALE`may also be used in future for representing purely Integer-based scales, however, the`DV_ORDINAL`type should continue to be supported in software implementations in order to accommodate existing data that are instances of this type. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ordinal_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-ORDINAL)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-ORDINAL.csv), [Excel](StructureDefinition-DV-ORDINAL.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-ORDINAL",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Ordinal value is less than `_other_`.",
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
      "description" : "Test if this Ordinal is strictly comparable to `_other_`.",
      "code" : "is_strictly_comparable_to",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ordinal_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-ORDINAL",
  "version" : "0.1.0-snapshot",
  "name" : "DV_ORDINAL",
  "title" : "DV_ORDINAL",
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
  "description" : "A data type that represents integral score values, e.g. pain, Apgar values, etc, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) integer values only.\n\nNote that although the term 'ordinal' in mathematics means natural numbers only, here any integer is allowed, since negative and zero values are often used by medical professionals for values around a neutral point. Examples of sets of ordinal values: \n\n*   -3, -2, -1, 0, 1, 2, 3  -- reflex response values \n*    0, 1, 2                  -- Apgar values \n\nThis class is used for recording any clinical datum which is customarily recorded using symbolic values. Example: the results on a urinalysis strip, e.g. `{neg, trace, +, ++, +++}` are used for leucocytes, protein, nitrites etc; for non-haemolysed blood `{neg, trace, moderate}`; for haemolysed blood `{small, moderate, large}`.\n\nFor scores or scales that include Real numbers (or might in the future, i.e. not fixed for all time, such as Apgar), use `DV_SCALE`. `DV_SCALE` may also be used in future for representing purely Integer-based scales, however, the `DV_ORDINAL` type should continue to be supported in software implementations in order to accommodate existing data that are instances of this type.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_ORDINAL",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_ORDINAL",
        "path" : "DV_ORDINAL",
        "short" : "A data type that represents integral score values, e.",
        "definition" : "A data type that represents integral score values, e.g. pain, Apgar values, etc, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) integer values only.\n\nNote that although the term 'ordinal' in mathematics means natural numbers only, here any integer is allowed, since negative and zero values are often used by medical professionals for values around a neutral point. Examples of sets of ordinal values: \n\n*   -3, -2, -1, 0, 1, 2, 3  -- reflex response values \n*    0, 1, 2                  -- Apgar values \n\nThis class is used for recording any clinical datum which is customarily recorded using symbolic values. Example: the results on a urinalysis strip, e.g. `{neg, trace, +, ++, +++}` are used for leucocytes, protein, nitrites etc; for non-haemolysed blood `{neg, trace, moderate}`; for haemolysed blood `{small, moderate, large}`.\n\nFor scores or scales that include Real numbers (or might in the future, i.e. not fixed for all time, such as Apgar), use `DV_SCALE`. `DV_SCALE` may also be used in future for representing purely Integer-based scales, however, the `DV_ORDINAL` type should continue to be supported in software implementations in order to accommodate existing data that are instances of this type.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Limits_valid",
            "severity" : "error",
            "human" : "Limits valid",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Reference_range_valid",
            "severity" : "error",
            "human" : "Reference range valid",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_ORDINAL.symbol",
        "path" : "DV_ORDINAL.symbol",
        "short" : "Coded textual representation of this value in the enumeration, which may be strings made from  +  symbols, or other enumerations of terms such as  `mild`, `moderate`, `severe`, or even the same number series as the values, e.",
        "definition" : "Coded textual representation of this value in the enumeration, which may be strings made from  +  symbols, or other enumerations of terms such as  `mild`, `moderate`, `severe`, or even the same number series as the values, e.g. 1, 2, 3.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_ORDINAL.value",
        "path" : "DV_ORDINAL.value",
        "short" : "Value in ordered enumeration of values.",
        "definition" : "Value in ordered enumeration of values. Any integer value can be used. \n",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
