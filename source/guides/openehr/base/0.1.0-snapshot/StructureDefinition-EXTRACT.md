# EXTRACT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT**

## Logical Model: EXTRACT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT |

 
Generic model of an Extract of some information from a repository. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT.csv), [Excel](StructureDefinition-EXTRACT.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#concept"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT",
  "title" : "EXTRACT",
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
  "description" : "Generic model of an Extract of some information from a repository.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT",
        "path" : "EXTRACT",
        "short" : "Generic model of an Extract of some information from a repository.",
        "definition" : "Generic model of an Extract of some information from a repository.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Sequence_nr_valid",
            "severity" : "error",
            "human" : "Sequence nr valid must satisfy range constraints",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.chapters",
        "path" : "EXTRACT.chapters",
        "short" : "The content extracted and serialised from the source repository for this Extract.",
        "definition" : "The content extracted and serialised from the source repository for this Extract.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-CHAPTER"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.specification",
        "path" : "EXTRACT.specification",
        "short" : "The specification that this Extract actually conforms to; might not be identical with the specification of the corresponding request.",
        "definition" : "The specification that this Extract actually conforms to; might not be identical with the specification of the corresponding request.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-SPEC"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.request-id",
        "path" : "EXTRACT.request_id",
        "short" : "Reference to causing Request, if any.",
        "definition" : "Reference to causing Request, if any.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.time-created",
        "path" : "EXTRACT.time_created",
        "short" : "Creation time of this Extract",
        "definition" : "Creation time of this Extract",
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
        "id" : "EXTRACT.system-id",
        "path" : "EXTRACT.system_id",
        "short" : "Identifier of creating system.",
        "definition" : "Identifier of creating system.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.sequence-nr",
        "path" : "EXTRACT.sequence_nr",
        "short" : "Number of this Extract response in sequence of responses to Extract request identified by `_request_id_`.",
        "definition" : "Number of this Extract response in sequence of responses to Extract request identified by `_request_id_`. If this is the sole response, or there was no request, value is 1.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT.participations",
        "path" : "EXTRACT.participations",
        "short" : "Participations relevant to the creation of this Extract.",
        "definition" : "Participations relevant to the creation of this Extract.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-PARTICIPATION"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
