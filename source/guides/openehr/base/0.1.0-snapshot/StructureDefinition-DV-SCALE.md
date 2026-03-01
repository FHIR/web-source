# DV_SCALE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_SCALE**

## Logical Model: DV_SCALE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-SCALE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_SCALE |

 
A data type that represents scale values, where there is: 
a) implied ordering, b) no implication that the distance between each value is constant, and c) the total number of values is finite; d) non-integer values are allowed. 
Example: 
-------
 
Borg CR 10 Scale 
0 No Breathlessness at all 0.5 Very Very Slight (Just Noticeable) 1 Very Slight 2 Slight Breathlessness 3 Moderate … etc —- 
For scores that include only Integers,`DV_SCALE`may also be used, but`DV_ORDINAL`should be supported to accommodate existing data instances of that type. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_scale_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-SCALE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-SCALE.csv), [Excel](StructureDefinition-DV-SCALE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-SCALE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_strictly_comparable_to",
      "name" : "is_strictly_comparable_to",
      "title" : "is_strictly_comparable_to",
      "status" : "active",
      "kind" : "operation",
      "description" : "Test if this Scale value is strictly comparable to `_other_`.",
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
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Scale value is less than `_other_`.",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_scale_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_strictly_comparable_to"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-SCALE",
  "version" : "0.1.0-snapshot",
  "name" : "DV_SCALE",
  "title" : "DV_SCALE",
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
  "description" : "A data type that represents scale values, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) non-integer values are allowed.\n\nExample:\n\n----\nBorg CR 10 Scale\n\n0    No Breathlessness at all\n0.5  Very Very Slight (Just Noticeable)\n1    Very Slight\n2    Slight Breathlessness\n3    Moderate\n... etc\n----\n\nFor scores that include only Integers, `DV_SCALE` may also be used, but `DV_ORDINAL` should be supported to accommodate existing data instances of that type.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_SCALE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_SCALE",
        "path" : "DV_SCALE",
        "short" : "A data type that represents scale values, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) non-integer values are allowed.",
        "definition" : "A data type that represents scale values, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) non-integer values are allowed.\n\nExample:\n\n----\nBorg CR 10 Scale\n\n0    No Breathlessness at all\n0.5  Very Very Slight (Just Noticeable)\n1    Very Slight\n2    Slight Breathlessness\n3    Moderate\n... etc\n----\n\nFor scores that include only Integers, `DV_SCALE` may also be used, but `DV_ORDINAL` should be supported to accommodate existing data instances of that type.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_SCALE.symbol",
        "path" : "DV_SCALE.symbol",
        "short" : "Coded textual representation of this value in the scale range, which may be strings made from symbols or other enumerations of terms such as  `no breathlessness`, `very very slight`, `slight breathlessness`.",
        "definition" : "Coded textual representation of this value in the scale range, which may be strings made from symbols or other enumerations of terms such as  `no breathlessness`, `very very slight`, `slight breathlessness`. Codes come from archetypes.\n\nIn some cases, a scale may include values that have no code/symbol. In this case, the symbol will be a `DV-CODED_TEXT` including the `_terminology_id_` and a blank String value for `_code_string_`.",
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
        "id" : "DV_SCALE.value",
        "path" : "DV_SCALE.value",
        "short" : "Real number value of Scale item.",
        "definition" : "Real number value of Scale item.\n",
        "min" : 1,
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
