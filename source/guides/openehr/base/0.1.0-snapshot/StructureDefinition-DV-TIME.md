# DV_TIME - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_TIME**

## Logical Model: DV_TIME 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-TIME | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_TIME |

 
Represents an absolute point in time from an origin usually interpreted as meaning the start of the current day, specified to a fraction of a second. Semantics defined by ISO 8601. 
Used for recording real world times, rather than scientifically measured fine amounts of time. The partial form is used for approximate times of events and substance administrations. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_time_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-TIME)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-TIME.csv), [Excel](StructureDefinition-DV-TIME.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-TIME",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "magnitude",
      "name" : "magnitude",
      "title" : "magnitude",
      "status" : "active",
      "kind" : "operation",
      "description" : "Numeric value of the time as seconds since the start of day, i.e. `00:00:00`. ",
      "code" : "magnitude",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
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
      "description" : "Addition of a Duration to this Time.",
      "code" : "add",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_diff",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Duration"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "time"
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
      "description" : "Subtract a Duration from this Time.",
      "code" : "subtract",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_diff",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Duration"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "time"
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
      "description" : "Difference between this Time and `_other_`.",
      "code" : "diff",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "time"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Duration"
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
      "description" : "True if this time object is less than `_other_`, based on comparison of `_magnitude()_`. ",
      "code" : "less_than",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "time"
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
      "description" : "True, for any two Times.",
      "code" : "is_strictly_comparable_to",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "time"
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_time_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#magnitude"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-TIME",
  "version" : "0.1.0-snapshot",
  "name" : "DV_TIME",
  "title" : "DV_TIME",
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
  "description" : "Represents an absolute point in time from an origin usually interpreted as meaning the start of the current day, specified to a fraction of a second. Semantics defined by ISO 8601. \n\nUsed for recording real world times, rather than scientifically measured fine amounts of time. The partial form is used for approximate times of events and substance administrations. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_TIME",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-TEMPORAL",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_TIME",
        "path" : "DV_TIME",
        "short" : "Represents an absolute point in time from an origin usually interpreted as meaning the start of the current day, specified to a fraction of a second.",
        "definition" : "Represents an absolute point in time from an origin usually interpreted as meaning the start of the current day, specified to a fraction of a second. Semantics defined by ISO 8601. \n\nUsed for recording real world times, rather than scientifically measured fine amounts of time. The partial form is used for approximate times of events and substance administrations. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Value_valid",
            "severity" : "error",
            "human" : "Value valid",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_TIME.value",
        "path" : "DV_TIME.value",
        "short" : "ISO8601 time string",
        "definition" : "ISO8601 time string",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
