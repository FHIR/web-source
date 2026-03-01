# DV_DURATION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_DURATION**

## Logical Model: DV_DURATION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-DURATION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_DURATION |

 
Represents a period of time with respect to a notional point in time, which is not specified. A sign may be used to indicate the duration is backwards in time rather than forwards. 
NOTE: two deviations from ISO 8601 are supported, the first, to allow a negative sign, and the second allowing the 'W' designator to be mixed with other designators. See time types section in the Foundation Types model. 
Used for recording the duration of something in the real world, particularly when there is a need a) to represent the duration in customary format, i.e. days, hours, minutes etc, and b) if it will be used in computational operations with date/time quantities, i.e. additions, subtractions etc. 
Misuse: Durations cannot be used to represent points in time, or intervals of time. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_duration_class)

**Usages:**

* Use this Logical Model: [DV_TEMPORAL](StructureDefinition-DV-TEMPORAL.md), [EXTRACT_UPDATE_SPEC](StructureDefinition-EXTRACT-UPDATE-SPEC.md), [HISTORY](StructureDefinition-HISTORY.md) and [INTERVAL_EVENT](StructureDefinition-INTERVAL-EVENT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-DURATION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-DURATION.csv), [Excel](StructureDefinition-DV-DURATION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-DURATION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "add",
      "name" : "add",
      "title" : "add",
      "status" : "active",
      "kind" : "operation",
      "description" : "Sum of this Duration and `_other_`.",
      "code" : "add",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "Duration"
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
      "description" : "Difference of this Duration and `_other_`.",
      "code" : "subtract",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "Duration"
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
      "description" : "Product of this Duration and `_factor_`.",
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
      "description" : "True if this duration object is less than `_other_`, based on comparison of `_magnitude()_`. ",
      "code" : "less_than",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
      "description" : "True, for any two Durations.",
      "code" : "is_strictly_comparable_to",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
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
          "type" : "boolean"
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
      "description" : "Negated version of current duration.\n\nAssuming the current duration is positive, the negated version represents a time prior to some origin point, or a negative age (e.g. so-called 'adjusted age' of premature infant).",
      "code" : "negative",
      "system" : false,
      "instance" : true,
      "parameter" : [
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
      "id" : "magnitude",
      "name" : "magnitude",
      "title" : "magnitude",
      "status" : "active",
      "kind" : "operation",
      "description" : "Numeric value of the duration as a number of seconds. Computed using the method `_to_seconds()_` inherited from `Iso8601_duration`.",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_duration_class"
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
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#negative"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#magnitude"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-DURATION",
  "version" : "0.1.0-snapshot",
  "name" : "DV_DURATION",
  "title" : "DV_DURATION",
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
  "description" : "Represents a period of time with respect to a notional point in time, which is not specified. A sign may be used to indicate the duration is  backwards  in time rather than forwards. \n\nNOTE: two deviations from ISO 8601 are supported, the first, to allow a negative sign, and the second allowing the 'W' designator to be mixed with other designators. See time types section in the Foundation Types model. \n\nUsed for recording the duration of something in the real world, particularly when there is a need a) to represent the duration in customary format, i.e. days, hours, minutes etc, and b) if it will be used in computational operations with date/time quantities, i.e. additions, subtractions etc. \n\nMisuse: Durations cannot be used to represent points in time, or intervals of time. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_DURATION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-AMOUNT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_DURATION",
        "path" : "DV_DURATION",
        "short" : "Represents a period of time with respect to a notional point in time, which is not specified.",
        "definition" : "Represents a period of time with respect to a notional point in time, which is not specified. A sign may be used to indicate the duration is  backwards  in time rather than forwards. \n\nNOTE: two deviations from ISO 8601 are supported, the first, to allow a negative sign, and the second allowing the 'W' designator to be mixed with other designators. See time types section in the Foundation Types model. \n\nUsed for recording the duration of something in the real world, particularly when there is a need a) to represent the duration in customary format, i.e. days, hours, minutes etc, and b) if it will be used in computational operations with date/time quantities, i.e. additions, subtractions etc. \n\nMisuse: Durations cannot be used to represent points in time, or intervals of time. ",
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
        "id" : "DV_DURATION.value",
        "path" : "DV_DURATION.value",
        "short" : "ISO8601 duration string, including described deviations to support negative values and weeks.",
        "definition" : "ISO8601 duration string, including described deviations to support negative values and weeks.",
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
