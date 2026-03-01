# EHR_STATUS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EHR_STATUS**

## Logical Model: EHR_STATUS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EHR-STATUS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EHR_STATUS |

 
Single object per EHR containing various EHR-wide status flags and settings, including whether this EHR can be queried, modified etc. This object is always modifiable, in order to change the status of the EHR as a whole. 
NOTE: It is strongly recommended that the inherited attribute`_uid_`be populated in`EHR_STATUS`objects, using the UID copied from the`_object_id()_`of the`_uid_`field of the enclosing`VERSION`object. + For example, the`ORIGINAL_VERSION.uid``87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`would be copied to the`_uid_`field of the`EHR_STATUS`object. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_status_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EHR-STATUS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EHR-STATUS.csv), [Excel](StructureDefinition-EHR-STATUS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EHR-STATUS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_status_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EHR-STATUS",
  "version" : "0.1.0-snapshot",
  "name" : "EHR_STATUS",
  "title" : "EHR_STATUS",
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
  "description" : "Single object per EHR containing various EHR-wide status flags and settings, including whether this EHR can be queried, modified etc. This object is always modifiable, in order to change the status of the EHR as a whole.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_STATUS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `EHR_STATUS` object.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EHR_STATUS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EHR_STATUS",
        "path" : "EHR_STATUS",
        "short" : "Single object per EHR containing various EHR-wide status flags and settings, including whether this EHR can be queried, modified etc.",
        "definition" : "Single object per EHR containing various EHR-wide status flags and settings, including whether this EHR can be queried, modified etc. This object is always modifiable, in order to change the status of the EHR as a whole.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_STATUS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `EHR_STATUS` object.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Is_archetype_root",
            "severity" : "error",
            "human" : "Is archetype root",
            "expression" : "is_archetype_root()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR_STATUS.subject",
        "path" : "EHR_STATUS.subject",
        "short" : "The subject of this EHR.",
        "definition" : "The subject of this EHR. The `_external_ref_` attribute can be used to contain a direct reference to the subject in a demographic or identity service. Alternatively, the association between patients and their records may be done elsewhere for security reasons. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-SELF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR_STATUS.is-queryable",
        "path" : "EHR_STATUS.is_queryable",
        "short" : "True if this EHR should be included in population queries, i.",
        "definition" : "True if this EHR should be included in population queries, i.e. if this EHR is considered active in the population.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR_STATUS.is-modifiable",
        "path" : "EHR_STATUS.is_modifiable",
        "short" : "True if the EHR, other than the `EHR_STATUS` object, is allowed to be written to.",
        "definition" : "True if the EHR, other than the `EHR_STATUS` object, is allowed to be written to. The `EHR_STATUS` object itself can always be written to.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR_STATUS.other-details",
        "path" : "EHR_STATUS.other_details",
        "short" : "Any other details of the EHR summary object, in the form of an archetyped `ITEM_STRUCTURE`.",
        "definition" : "Any other details of the EHR summary object, in the form of an archetyped `ITEM_STRUCTURE`.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
