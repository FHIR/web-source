# INTERVAL_EVENT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **INTERVAL_EVENT**

## Logical Model: INTERVAL_EVENT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/INTERVAL-EVENT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:INTERVAL_EVENT |

 
Defines a single interval event in a series. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_interval_event_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/INTERVAL-EVENT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-INTERVAL-EVENT.csv), [Excel](StructureDefinition-INTERVAL-EVENT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "INTERVAL-EVENT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "interval_start_time",
      "name" : "interval_start_time",
      "title" : "interval_start_time",
      "status" : "active",
      "kind" : "operation",
      "description" : "Start time of the interval of this event.",
      "code" : "interval_start_time",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_interval_event_class"
    },
    {
      "extension" : [
        {
          "url" : "name",
          "valueCode" : "T"
        },
        {
          "url" : "type",
          "valueUri" : "http://openehr.org/fhir/StructureDefinition/Any"
        }
      ],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#interval_start_time"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/INTERVAL-EVENT",
  "version" : "0.1.0-snapshot",
  "name" : "INTERVAL_EVENT",
  "title" : "INTERVAL_EVENT",
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
  "description" : "Defines a single interval event in a series. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/INTERVAL_EVENT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/EVENT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "INTERVAL_EVENT",
        "path" : "INTERVAL_EVENT",
        "short" : "Defines a single interval event in a series.",
        "definition" : "Defines a single interval event in a series. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Math_function_validity",
            "severity" : "error",
            "human" : "Math function validity",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Interval_start_time_valid",
            "severity" : "error",
            "human" : "Interval start time valid",
            "expression" : "interval_start_time() = time - width"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "INTERVAL_EVENT.width",
        "path" : "INTERVAL_EVENT.width",
        "short" : "Duration of the time interval during which the values recorded under `data` are true and, if set, the values recorded under `state` are true.",
        "definition" : "Duration of the time interval during which the values recorded under `data` are true and, if set, the values recorded under `state` are true. Void if an instantaneous event.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DURATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "INTERVAL_EVENT.sample-count",
        "path" : "INTERVAL_EVENT.sample_count",
        "short" : "Optional count of original samples to which this event corresponds.",
        "definition" : "Optional count of original samples to which this event corresponds.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "INTERVAL_EVENT.math-function",
        "path" : "INTERVAL_EVENT.math_function",
        "short" : "Mathematical function of the data of this event, e.",
        "definition" : "Mathematical function of the data of this event, e.g.  maximum, mean etc. Coded using https://github.com/openEHR/terminology/blob/master/openEHR_RM/en/openehr_terminology.xml[openEHR vocabulary `event math function`]. Default value `640|actual|`, meaning 'actual value'.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
