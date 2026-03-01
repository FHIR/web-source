# EHR_ACCESS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EHR_ACCESS**

## Logical Model: EHR_ACCESS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EHR-ACCESS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EHR_ACCESS |

 
EHR-wide access control object. All access decisions to data in the EHR must be made in accordance with the policies and rules in this object. 
NOTE: It is strongly recommended that the inherited attribute`_uid_`be populated in`EHR_ACCESS`objects, using the UID copied from the`_object_id()_`of the`_uid_`field of the enclosing`VERSION`object. + For example, the`ORIGINAL_VERSION.uid``87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`would be copied to the`_uid_`field of the`EHR_ACCESS`object. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_access_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EHR-ACCESS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EHR-ACCESS.csv), [Excel](StructureDefinition-EHR-ACCESS.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EHR-ACCESS",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "scheme",
      "name" : "scheme",
      "title" : "scheme",
      "status" : "active",
      "kind" : "operation",
      "description" : "The name of the access control scheme in use; corresponds to the concrete instance of the settings attribute. ",
      "code" : "scheme",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_access_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#scheme"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EHR-ACCESS",
  "version" : "0.1.0-snapshot",
  "name" : "EHR_ACCESS",
  "title" : "EHR_ACCESS",
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
  "description" : "EHR-wide access control object. All access decisions to data in the EHR must be made in accordance with the policies and rules in this object.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_ACCESS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the `EHR_ACCESS` object.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EHR_ACCESS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EHR_ACCESS",
        "path" : "EHR_ACCESS",
        "short" : "EHR-wide access control object.",
        "definition" : "EHR-wide access control object. All access decisions to data in the EHR must be made in accordance with the policies and rules in this object.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_ACCESS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the `EHR_ACCESS` object.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Scheme_valid",
            "severity" : "error",
            "human" : "Scheme valid must not be empty",
            "expression" : "scheme().not().empty()"
          },
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
        "id" : "EHR_ACCESS.settings",
        "path" : "EHR_ACCESS.settings",
        "short" : "Access control settings for the EHR.",
        "definition" : "Access control settings for the EHR. Instance is a subtype of the type `ACCESS_CONTROL_SETTINGS`, allowing for the use of different access control schemes. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ACCESS-CONTROL-SETTINGS"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
