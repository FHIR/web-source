# IMPORTED_VERSION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **IMPORTED_VERSION**

## Logical Model: IMPORTED_VERSION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/IMPORTED-VERSION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:IMPORTED_VERSION |

 
Versions whose content is an`ORIGINAL_VERSION`copied from another location; this class inherits`_commit_audit_`and`_contribution_`from`VERSION<T>`, providing imported versions with their own audit trail and Contribution, distinct from those of the imported`ORIGINAL_VERSION`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_imported_version_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/IMPORTED-VERSION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-IMPORTED-VERSION.csv), [Excel](StructureDefinition-IMPORTED-VERSION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "IMPORTED-VERSION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "uid",
      "name" : "uid",
      "title" : "uid",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed version of inheritance precursor, derived as `_item.uid_`. ",
      "code" : "uid",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "preceding_version_uid",
      "name" : "preceding_version_uid",
      "title" : "preceding_version_uid",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed version of inheritance precursor, derived as `_item.preceding_version_uid_`. ",
      "code" : "preceding_version_uid",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "lifecycle_state",
      "name" : "lifecycle_state",
      "title" : "lifecycle_state",
      "status" : "active",
      "kind" : "operation",
      "description" : "Lifecycle state of the content item in wrapped `ORIGINAL_VERSION`, derived as `_item.lifecycle_state_`; coded by openEHR vocabulary `version lifecycle state`.",
      "code" : "lifecycle_state",
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
      "id" : "data",
      "name" : "data",
      "title" : "data",
      "status" : "active",
      "kind" : "operation",
      "description" : "Original content of this Version. \n",
      "code" : "data",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_imported_version_class"
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
      "valueCanonical" : "#uid"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#preceding_version_uid"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#lifecycle_state"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#data"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/IMPORTED-VERSION",
  "version" : "0.1.0-snapshot",
  "name" : "IMPORTED_VERSION",
  "title" : "IMPORTED_VERSION",
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
  "description" : "Versions whose content is an `ORIGINAL_VERSION` copied from another location; this class inherits `_commit_audit_` and `_contribution_` from `VERSION<T>`, providing imported versions with their own audit trail and Contribution, distinct from those of the imported `ORIGINAL_VERSION`. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/IMPORTED_VERSION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/VERSION",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "IMPORTED_VERSION",
        "path" : "IMPORTED_VERSION",
        "short" : "Versions whose content is an `ORIGINAL_VERSION` copied from another location; this class inherits `_commit_audit_` and `_contribution_` from `VERSION<T>`, providing imported versions with their own audit trail and Contribution, distinct from those of the imported `ORIGINAL_VERSION`.",
        "definition" : "Versions whose content is an `ORIGINAL_VERSION` copied from another location; this class inherits `_commit_audit_` and `_contribution_` from `VERSION<T>`, providing imported versions with their own audit trail and Contribution, distinct from those of the imported `ORIGINAL_VERSION`. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "IMPORTED_VERSION.item",
        "path" : "IMPORTED_VERSION.item",
        "short" : "The `ORIGINAL_VERSION` object that was imported.",
        "definition" : "The `ORIGINAL_VERSION` object that was imported. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ORIGINAL-VERSION"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
