# COMPOSITION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **COMPOSITION**

## Logical Model: COMPOSITION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/COMPOSITION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:COMPOSITION |

 
Content of one version in a`VERSIONED_COMPOSITION`. A Composition is considered the unit of modification of the record, the unit of transmission in record Extracts, and the unit of attestation by authorising clinicians. In this latter sense, it may be considered equivalent to a signed document. 
NOTE: It is strongly recommended that the inherited attribute`_uid_`be populated in Compositions, using the UID copied from the`_object_id()_`of the`_uid_`field of the enclosing`VERSION`object. + For example, the`ORIGINAL_VERSION.uid``87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`would be copied to the`_uid_`field of the Composition. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_composition_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/COMPOSITION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-COMPOSITION.csv), [Excel](StructureDefinition-COMPOSITION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "COMPOSITION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_persistent",
      "name" : "is_persistent",
      "title" : "is_persistent",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if category is `431|persistent|`, False otherwise. Useful for finding Compositions in an EHR which are guaranteed to be of interest to most users. ",
      "code" : "is_persistent",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_composition_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_persistent"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/COMPOSITION",
  "version" : "0.1.0-snapshot",
  "name" : "COMPOSITION",
  "title" : "COMPOSITION",
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
  "description" : "Content of one version in a `VERSIONED_COMPOSITION`. A Composition is considered the unit of modification of the record, the unit of transmission in record Extracts, and the unit of attestation by authorising clinicians. In this latter sense, it may be considered equivalent to a signed document.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in Compositions, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the Composition.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/COMPOSITION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "COMPOSITION",
        "path" : "COMPOSITION",
        "short" : "Content of one version in a `VERSIONED_COMPOSITION`.",
        "definition" : "Content of one version in a `VERSIONED_COMPOSITION`. A Composition is considered the unit of modification of the record, the unit of transmission in record Extracts, and the unit of attestation by authorising clinicians. In this latter sense, it may be considered equivalent to a signed document.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in Compositions, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the Composition.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Setting_valid",
            "severity" : "error",
            "human" : "Setting valid",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "unnamed2",
            "severity" : "error",
            "human" : "unnamed2",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "unnamed3",
            "severity" : "error",
            "human" : "unnamed3",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Category_validity",
            "severity" : "error",
            "human" : "Category validity",
            "expression" : "null # TODO: manual translation needed"
          },
          {
            "key" : "Is_persistent_validity",
            "severity" : "error",
            "human" : "Is persistent validity must satisfy conditional constraints",
            "expression" : "is_persistent() implies context .empty()"
          },
          {
            "key" : "Content_valid",
            "severity" : "error",
            "human" : "Content valid must be present",
            "expression" : "content.exists() implies content.empty().not()"
          },
          {
            "key" : "Is_archetype_root",
            "severity" : "error",
            "human" : "Is archetype root",
            "expression" : "is_archetype_root()"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-languages"
        }
      },
      {
        "id" : "COMPOSITION.language",
        "path" : "COMPOSITION.language",
        "short" : "Mandatory indicator of the localised language in which this Composition is written.",
        "definition" : "Mandatory indicator of the localised language in which this Composition is written. Coded from openEHR Code Set  `languages`. The language of an Entry if different from the Composition is indicated in `ENTRY._language_`. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "COMPOSITION.territory",
        "path" : "COMPOSITION.territory",
        "short" : "Name of territory in which this Composition was written.",
        "definition" : "Name of territory in which this Composition was written. Coded from openEHR  countries  code set, which is an expression of the ISO 3166 standard.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "COMPOSITION.category",
        "path" : "COMPOSITION.category",
        "short" : "Temporal category of this Composition, i.",
        "definition" : "Temporal category of this Composition, i.e. \n\n* `431|persistent|` - of potential life-time validity;\n* `451|episodic|` - valid over the life of a care episode;\n* `433|event|` - valid at the time of recording (long-term validity requires subsequent clinical assessment).\n\nor any other code defined in the openEHR terminology group 'category'.\n",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "COMPOSITION.context",
        "path" : "COMPOSITION.context",
        "short" : "The clinical session context of this Composition, i.",
        "definition" : "The clinical session context of this Composition, i.e. the contextual attributes of the clinical session. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EVENT-CONTEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "COMPOSITION.composer",
        "path" : "COMPOSITION.composer",
        "short" : "The person primarily responsible for the content of the Composition (but not necessarily its committal into the EHR system).",
        "definition" : "The person primarily responsible for the content of the Composition (but not necessarily its committal into the EHR system). This is the identifier which should appear on the screen. It may or may not be the person who entered the data. When it is the patient, the special self  instance of `PARTY_PROXY` will be used.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "COMPOSITION.content",
        "path" : "COMPOSITION.content",
        "short" : "The content of this Composition.",
        "definition" : "The content of this Composition. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CONTENT-ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
