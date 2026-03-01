# EVENT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EVENT**

## Logical Model: EVENT ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EVENT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EVENT |

 
Defines the abstract notion of a single event in a series. This class is generic, allowing types to be generated which are locked to particular spatial types, such as`EVENT<ITEM_LIST>`. Subtypes express point or intveral data. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_event_class)

**Usages:**

* Derived from this Logical Model: [INTERVAL_EVENT](StructureDefinition-INTERVAL-EVENT.md) and [POINT_EVENT](StructureDefinition-POINT-EVENT.md)
* Use this Logical Model: [HISTORY](StructureDefinition-HISTORY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EVENT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EVENT.csv), [Excel](StructureDefinition-EVENT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EVENT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "offset",
      "name" : "offset",
      "title" : "offset",
      "status" : "active",
      "kind" : "operation",
      "description" : "Offset of this event from origin, computed as time.diff(parent.origin).",
      "code" : "offset",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_event_class"
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
      "valueCanonical" : "#offset"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EVENT",
  "version" : "0.1.0-snapshot",
  "name" : "EVENT",
  "title" : "EVENT",
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
  "description" : "Defines the abstract notion of a single event in a series. This class is generic, allowing types to be generated which are locked to particular spatial types, such as `EVENT<ITEM_LIST>`. Subtypes express point or intveral data. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EVENT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EVENT",
        "path" : "EVENT",
        "short" : "Defines the abstract notion of a single event in a series.",
        "definition" : "Defines the abstract notion of a single event in a series. This class is generic, allowing types to be generated which are locked to particular spatial types, such as `EVENT<ITEM_LIST>`. Subtypes express point or intveral data. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Offset_validity",
            "severity" : "error",
            "human" : "Offset validity",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Offset_validity1",
            "severity" : "error",
            "human" : "Offset validity1 must be present",
            "expression" : "offset().exists() and then offset() = time.diff (parent().origin)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EVENT.time",
        "path" : "EVENT.time",
        "short" : "Time of this event.",
        "definition" : "Time of this event. If the width is non-zero, it is the time point of the trailing edge of the event. ",
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
        "id" : "EVENT.state",
        "extension" : [
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-group"
              },
              {
                "url" : "value",
                "valueString" : "State"
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          },
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-order"
              },
              {
                "url" : "value",
                "valueInteger" : 8
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          }
        ],
        "path" : "EVENT.state",
        "short" : "Optional state data for this event.",
        "definition" : "Optional state data for this event.",
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
        "id" : "EVENT.data",
        "extension" : [
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-group"
              },
              {
                "url" : "value",
                "valueString" : "Event Data"
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          },
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-order"
              },
              {
                "url" : "value",
                "valueInteger" : 10
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          }
        ],
        "path" : "EVENT.data",
        "short" : "The data of this event.",
        "definition" : "The data of this event.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/T"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
