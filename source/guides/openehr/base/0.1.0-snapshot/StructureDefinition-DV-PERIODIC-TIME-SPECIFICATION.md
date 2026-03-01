# DV_PERIODIC_TIME_SPECIFICATION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_PERIODIC_TIME_SPECIFICATION**

## Logical Model: DV_PERIODIC_TIME_SPECIFICATION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-PERIODIC-TIME-SPECIFICATION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_PERIODIC_TIME_SPECIFICATION |

 
Specifies periodic points in time, linked to the calendar (phase-linked), or a real world repeating event, such as breakfast (event-linked). Based on the HL7v3 data types`PIVL<T>`and`EIVL<T>`. 
Used in therapeutic prescriptions, expressed as`INSTRUCTIONs`in the openEHR model. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_periodic_time_specification_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-PERIODIC-TIME-SPECIFICATION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-PERIODIC-TIME-SPECIFICATION.csv), [Excel](StructureDefinition-DV-PERIODIC-TIME-SPECIFICATION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-PERIODIC-TIME-SPECIFICATION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "period",
      "name" : "period",
      "title" : "period",
      "status" : "active",
      "kind" : "operation",
      "description" : "The period of the repetition, computationally derived from the syntax representation. Extracted from the  value' attribute.",
      "code" : "period",
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
      "id" : "calendar_alignment",
      "name" : "calendar_alignment",
      "title" : "calendar_alignment",
      "status" : "active",
      "kind" : "operation",
      "description" : "Calendar alignment extracted from value. ",
      "code" : "calendar_alignment",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "event_alignment",
      "name" : "event_alignment",
      "title" : "event_alignment",
      "status" : "active",
      "kind" : "operation",
      "description" : "Event alignment extracted from value. ",
      "code" : "event_alignment",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "institution_specified",
      "name" : "institution_specified",
      "title" : "institution_specified",
      "status" : "active",
      "kind" : "operation",
      "description" : "Extracted from value.",
      "code" : "institution_specified",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_periodic_time_specification_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#period"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#calendar_alignment"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#event_alignment"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#institution_specified"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-PERIODIC-TIME-SPECIFICATION",
  "version" : "0.1.0-snapshot",
  "name" : "DV_PERIODIC_TIME_SPECIFICATION",
  "title" : "DV_PERIODIC_TIME_SPECIFICATION",
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
  "description" : "Specifies periodic points in time, linked to the calendar (phase-linked), or a real world repeating event, such as  breakfast  (event-linked). Based on the HL7v3 data types `PIVL<T>` and `EIVL<T>`. \n\nUsed in therapeutic prescriptions, expressed as `INSTRUCTIONs` in the openEHR model. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_PERIODIC_TIME_SPECIFICATION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-TIME-SPECIFICATION",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_PERIODIC_TIME_SPECIFICATION",
        "path" : "DV_PERIODIC_TIME_SPECIFICATION",
        "short" : "Specifies periodic points in time, linked to the calendar (phase-linked), or a real world repeating event, such as  breakfast  (event-linked).",
        "definition" : "Specifies periodic points in time, linked to the calendar (phase-linked), or a real world repeating event, such as  breakfast  (event-linked). Based on the HL7v3 data types `PIVL<T>` and `EIVL<T>`. \n\nUsed in therapeutic prescriptions, expressed as `INSTRUCTIONs` in the openEHR model. ",
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
      }
    ]
  }
}

```
