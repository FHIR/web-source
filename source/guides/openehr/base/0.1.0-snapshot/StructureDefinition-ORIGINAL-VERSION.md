# ORIGINAL_VERSION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ORIGINAL_VERSION**

## Logical Model: ORIGINAL_VERSION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ORIGINAL-VERSION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ORIGINAL_VERSION |

 
A Version containing locally created content and optional attestations. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_original_version_class)

**Usages:**

* Use this Logical Model: [IMPORTED_VERSION](StructureDefinition-IMPORTED-VERSION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ORIGINAL-VERSION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ORIGINAL-VERSION.csv), [Excel](StructureDefinition-ORIGINAL-VERSION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ORIGINAL-VERSION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_merged",
      "name" : "is_merged",
      "title" : "is_merged",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Version was created from more than just the preceding (checked out) version.",
      "code" : "is_merged",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_original_version_class"
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
      "valueCanonical" : "#is_merged"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ORIGINAL-VERSION",
  "version" : "0.1.0-snapshot",
  "name" : "ORIGINAL_VERSION",
  "title" : "ORIGINAL_VERSION",
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
  "description" : "A Version containing locally created content and optional attestations. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ORIGINAL_VERSION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/VERSION",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ORIGINAL_VERSION",
        "path" : "ORIGINAL_VERSION",
        "short" : "A Version containing locally created content and optional attestations.",
        "definition" : "A Version containing locally created content and optional attestations. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Attestations_valid",
            "severity" : "error",
            "human" : "Attestations valid must be present",
            "expression" : "attestations.exists() implies attestations.empty().not()"
          },
          {
            "key" : "Is_merged_validity",
            "severity" : "error",
            "human" : "Is merged validity must satisfy exclusive conditions",
            "expression" : "other_input_version_ids .empty() xor is_merged()"
          },
          {
            "key" : "Other_input_version_uids_valid",
            "severity" : "error",
            "human" : "Other input version uids valid must be present",
            "expression" : "other_input_version_uids.exists() implies other_input_version_uids.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ORIGINAL_VERSION.uid",
        "path" : "ORIGINAL_VERSION.uid",
        "short" : "Stored version of inheritance precursor.",
        "definition" : "Stored version of inheritance precursor. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-VERSION-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ORIGINAL_VERSION.preceding-version-uid",
        "path" : "ORIGINAL_VERSION.preceding_version_uid",
        "short" : "Stored version of inheritance precursor.",
        "definition" : "Stored version of inheritance precursor. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-VERSION-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ORIGINAL_VERSION.other-input-version-uids",
        "path" : "ORIGINAL_VERSION.other_input_version_uids",
        "short" : "Identifiers of other versions whose content was merged into this version, if any.",
        "definition" : "Identifiers of other versions whose content was merged into this version, if any. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-VERSION-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ORIGINAL_VERSION.lifecycle-state",
        "path" : "ORIGINAL_VERSION.lifecycle_state",
        "short" : "Lifecycle state of the content item in this version; coded by openEHR vocabulary `version lifecycle state`.",
        "definition" : "Lifecycle state of the content item in this version; coded by openEHR vocabulary `version lifecycle state`.",
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
        "id" : "ORIGINAL_VERSION.attestations",
        "path" : "ORIGINAL_VERSION.attestations",
        "short" : "Set of attestations relating to this version.",
        "definition" : "Set of attestations relating to this version. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ATTESTATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ORIGINAL_VERSION.data",
        "path" : "ORIGINAL_VERSION.data",
        "short" : "Data content of this Version.",
        "definition" : "Data content of this Version.",
        "min" : 0,
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
