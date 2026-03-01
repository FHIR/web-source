# DV_QUANTIFIED - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_QUANTIFIED**

## Logical Model: DV_QUANTIFIED ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-QUANTIFIED | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_QUANTIFIED |

 
Abstract class defining the concept of true quantified values, i.e. values which are not only ordered, but which have a precise magnitude. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_quantified_class)

**Usages:**

* Derived from this Logical Model: [DV_ABSOLUTE_QUANTITY](StructureDefinition-DV-ABSOLUTE-QUANTITY.md) and [DV_AMOUNT](StructureDefinition-DV-AMOUNT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-QUANTIFIED)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-QUANTIFIED.csv), [Excel](StructureDefinition-DV-QUANTIFIED.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-QUANTIFIED",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "valid_magnitude_status",
      "name" : "valid_magnitude_status",
      "title" : "valid_magnitude_status",
      "status" : "active",
      "kind" : "operation",
      "description" : "Test whether a string value is one of the valid values for the magnitude_status attribute. ",
      "code" : "valid_magnitude_status",
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
      "id" : "magnitude",
      "name" : "magnitude",
      "title" : "magnitude",
      "status" : "active",
      "kind" : "operation",
      "code" : "magnitude",
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
      "id" : "accuracy_unknown",
      "name" : "accuracy_unknown",
      "title" : "accuracy_unknown",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if accuracy is not known, e.g. due to not being recorded or discernable.",
      "code" : "accuracy_unknown",
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
      "id" : "is_equal",
      "name" : "is_equal",
      "title" : "is_equal",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return True if this `DV_QUANTIFIED` is considered equal to `_other_`.",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_quantified_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#valid_magnitude_status"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#magnitude"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#accuracy_unknown"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_equal"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTIFIED",
  "version" : "0.1.0-snapshot",
  "name" : "DV_QUANTIFIED",
  "title" : "DV_QUANTIFIED",
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
  "description" : "Abstract class defining the concept of true quantified values, i.e. values which are not only ordered, but which have a precise magnitude.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_QUANTIFIED",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_QUANTIFIED",
        "path" : "DV_QUANTIFIED",
        "short" : "Abstract class defining the concept of true quantified values, i.",
        "definition" : "Abstract class defining the concept of true quantified values, i.e. values which are not only ordered, but which have a precise magnitude.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Magnitude_status_valid",
            "severity" : "error",
            "human" : "Magnitude status valid must be present",
            "expression" : "magnitude_status.exists() implies valid_magnitude_status() (magnitude_status)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTIFIED.magnitude-status",
        "path" : "DV_QUANTIFIED.magnitude_status",
        "short" : "Optional status of magnitude with values: \n\n* `\"=\"`   :   magnitude is a point value \n* `\"<\"`   :   value is < magnitude \n* `\">\"`   :   value is > magnitude \n* `\"<=\"` : value is <= magnitude \n* `\">=\"` : value is >= magnitude \n* `\"~\"`   :   value is approximately magnitude \n\nIf not present, assumed meaning is  `\"=\"` .",
        "definition" : "Optional status of magnitude with values: \n\n* `\"=\"`   :   magnitude is a point value \n* `\"<\"`   :   value is < magnitude \n* `\">\"`   :   value is > magnitude \n* `\"<=\"` : value is <= magnitude \n* `\">=\"` : value is >= magnitude \n* `\"~\"`   :   value is approximately magnitude \n\nIf not present, assumed meaning is  `\"=\"` . \n",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTIFIED.accuracy",
        "path" : "DV_QUANTIFIED.accuracy",
        "short" : "Accuracy of measurement.",
        "definition" : "Accuracy of measurement. Exact form of expression determined in descendants.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "Base"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
