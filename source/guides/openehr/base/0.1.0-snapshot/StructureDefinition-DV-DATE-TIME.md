# DV_DATE_TIME - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_DATE_TIME**

## Logical Model: DV_DATE_TIME 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_DATE_TIME |

 
Represents an absolute point in time, specified to the second. Semantics defined by ISO 8601. 
Used for recording a precise point in real world time, and for approximate time stamps, e.g. the origin of a`HISTORY`in an`OBSERVATION`which is only partially known. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_date_time_class)

**Usages:**

* Use this Logical Model: [ACTION](StructureDefinition-ACTION.md), [AUDIT_DETAILS](StructureDefinition-AUDIT-DETAILS.md), [EHR](StructureDefinition-EHR.md), [EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md)...Show 7 more,[EVENT](StructureDefinition-EVENT.md),[EXTRACT](StructureDefinition-EXTRACT.md),[FEEDER_AUDIT_DETAILS](StructureDefinition-FEEDER-AUDIT-DETAILS.md),[HISTORY](StructureDefinition-HISTORY.md),[INSTRUCTION](StructureDefinition-INSTRUCTION.md),[SYNC_EXTRACT_SPEC](StructureDefinition-SYNC-EXTRACT-SPEC.md)and[VERSIONED_OBJECT](StructureDefinition-VERSIONED-OBJECT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-DATE-TIME)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-DATE-TIME.csv), [Excel](StructureDefinition-DV-DATE-TIME.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-DATE-TIME",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "magnitude",
      "name" : "magnitude",
      "title" : "magnitude",
      "status" : "active",
      "kind" : "operation",
      "description" : "Numeric value of the date/time as seconds since the calendar origin date/time `0001-01-01T00:00:00Z`. \n",
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
      "description" : "Addition of a Duration to this Date/time.",
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
          "type" : "dateTime"
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
      "description" : "Subtract a Duration from this Date/time.",
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
          "type" : "dateTime"
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
      "description" : "Difference between this Date/time and `_other_`.",
      "code" : "diff",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
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
      "description" : "True if this date-time object is less than `_other_`, based on comparison of `_magnitude()_`. ",
      "code" : "less_than",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
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
      "description" : "True, for any two Date/times.",
      "code" : "is_strictly_comparable_to",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_date_time_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME",
  "version" : "0.1.0-snapshot",
  "name" : "DV_DATE_TIME",
  "title" : "DV_DATE_TIME",
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
  "description" : "Represents an absolute point in time, specified to the second. Semantics defined by ISO 8601. \n\nUsed for recording a precise point in real world time, and for approximate time stamps, e.g. the origin of a `HISTORY` in an `OBSERVATION` which is only partially known. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_DATE_TIME",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-TEMPORAL",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_DATE_TIME",
        "path" : "DV_DATE_TIME",
        "short" : "Represents an absolute point in time, specified to the second.",
        "definition" : "Represents an absolute point in time, specified to the second. Semantics defined by ISO 8601. \n\nUsed for recording a precise point in real world time, and for approximate time stamps, e.g. the origin of a `HISTORY` in an `OBSERVATION` which is only partially known. \n",
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
        "id" : "DV_DATE_TIME.value",
        "path" : "DV_DATE_TIME.value",
        "short" : "ISO8601 date/time string.",
        "definition" : "ISO8601 date/time string.",
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
