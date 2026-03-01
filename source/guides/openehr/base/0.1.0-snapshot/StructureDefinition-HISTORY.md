# HISTORY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **HISTORY**

## Logical Model: HISTORY 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/HISTORY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:HISTORY |

 
Root object of a linear history, i.e. time series structure. This is a generic class whose type parameter must be a descendant of`ITEM_STRUCTURE`, ensuring that each Event in the`_events_`of a given instance is of the same structural type, i.e.`ITEM_TREE`,`ITEM_LIST`etc. 
For a periodic series of events, period will be set, and the time of each Event in the History must correspond; i.e. the`EVENT._offset_`must be a multiple of period for each Event. Missing events in a period History are however allowed. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_history_class)

**Usages:**

* Use this Logical Model: [OBSERVATION](StructureDefinition-OBSERVATION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/HISTORY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-HISTORY.csv), [Excel](StructureDefinition-HISTORY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "HISTORY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_periodic",
      "name" : "is_periodic",
      "title" : "is_periodic",
      "status" : "active",
      "kind" : "operation",
      "description" : "Indicates whether history is periodic. \n",
      "code" : "is_periodic",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_history_class"
    },
    {
      "extension" : [
        {
          "url" : "name",
          "valueCode" : "T"
        },
        {
          "url" : "type",
          "valueUri" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
        }
      ],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_periodic"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/HISTORY",
  "version" : "0.1.0-snapshot",
  "name" : "HISTORY",
  "title" : "HISTORY",
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
  "description" : "Root object of a linear history, i.e. time series structure. This is a generic class whose type parameter must be a descendant of `ITEM_STRUCTURE`, ensuring that each Event in the `_events_` of a given instance is of the same structural type, i.e. `ITEM_TREE`, `ITEM_LIST` etc.\n\nFor a periodic series of events, period will be set, and the time of each Event in the History must correspond; i.e. the `EVENT._offset_` must be a multiple of period for each Event. Missing events in a period History are however allowed. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/HISTORY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-STRUCTURE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "HISTORY",
        "path" : "HISTORY",
        "short" : "Root object of a linear history, i.",
        "definition" : "Root object of a linear history, i.e. time series structure. This is a generic class whose type parameter must be a descendant of `ITEM_STRUCTURE`, ensuring that each Event in the `_events_` of a given instance is of the same structural type, i.e. `ITEM_TREE`, `ITEM_LIST` etc.\n\nFor a periodic series of events, period will be set, and the time of each Event in the History must correspond; i.e. the `EVENT._offset_` must be a multiple of period for each Event. Missing events in a period History are however allowed. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Events_valid",
            "severity" : "error",
            "human" : "Events valid must be present",
            "expression" : "(events.exists() and then events.empty().not()) or summary.exists()"
          },
          {
            "key" : "Periodic_validity",
            "severity" : "error",
            "human" : "Periodic validity must satisfy exclusive conditions",
            "expression" : "is_periodic() xor period .empty()"
          },
          {
            "key" : "Period_consistency",
            "severity" : "error",
            "human" : "Period consistency must satisfy conditional constraints",
            "expression" : "is_periodic() implies events.for_all (e: EVENT | e.offset. to_seconds.mod(period.to_seconds) = 0)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "HISTORY.origin",
        "path" : "HISTORY.origin",
        "short" : "Time origin of this event history.",
        "definition" : "Time origin of this event history. The first event is not necessarily at the origin point. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "HISTORY.period",
        "path" : "HISTORY.period",
        "short" : "Period between samples in this segment if periodic.",
        "definition" : "Period between samples in this segment if periodic.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DURATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "HISTORY.duration",
        "path" : "HISTORY.duration",
        "short" : "Duration of the entire History; either corresponds to the duration of all the events, and/or the duration represented by the summary, if it exists.",
        "definition" : "Duration of the entire History; either corresponds to the duration of all the events, and/or the duration represented by the summary, if it exists. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DURATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "HISTORY.summary",
        "path" : "HISTORY.summary",
        "short" : "Optional summary data that aggregates, organizes, reduces and transforms the event series.",
        "definition" : "Optional summary data that aggregates, organizes, reduces and transforms the event series. This may be a text or image that presents a graphical presentation, or some data that assists with the interpretation of the data.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "HISTORY.events",
        "path" : "HISTORY.events",
        "short" : "The events in the series.",
        "definition" : "The events in the series. This attribute is of a generic type whose parameter must be a descendant of `ITEM_SUTRUCTURE`.",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/T"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/EVENT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
