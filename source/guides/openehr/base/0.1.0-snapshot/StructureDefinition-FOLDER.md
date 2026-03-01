# FOLDER - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **FOLDER**

## Logical Model: FOLDER 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/FOLDER | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:FOLDER |

 
The concept of a named folder. 
NOTE: It is strongly recommended that the inherited attribute`_uid_`be populated in**top-level**(i.e. tree-root)`FOLDER`objects, using the UID copied from the`_object_id()_`of the`_uid_`field of the enclosing`VERSION`object. + For example, the`ORIGINAL_VERSION.uid``87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`would be copied to the`_uid_`field of the top`FOLDER`object. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_folder_class)

**Usages:**

* Use this Logical Model: [FOLDER](StructureDefinition-FOLDER.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/FOLDER)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-FOLDER.csv), [Excel](StructureDefinition-FOLDER.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "FOLDER",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_folder_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/FOLDER",
  "version" : "0.1.0-snapshot",
  "name" : "FOLDER",
  "title" : "FOLDER",
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
  "description" : "The concept of a named folder.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in _top-level_ (i.e. tree-root) `FOLDER` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the top `FOLDER` object.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/FOLDER",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "FOLDER",
        "path" : "FOLDER",
        "short" : "The concept of a named folder.",
        "definition" : "The concept of a named folder.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in _top-level_ (i.e. tree-root) `FOLDER` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the top `FOLDER` object.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Folders_valid",
            "severity" : "error",
            "human" : "Folders valid must not be empty",
            "expression" : "folders.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FOLDER.items",
        "path" : "FOLDER.items",
        "short" : "The list of references to other (usually) versioned objects logically in this folder.",
        "definition" : "The list of references to other (usually) versioned objects logically in this folder. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FOLDER.folders",
        "path" : "FOLDER.folders",
        "short" : "Sub-folders of this `FOLDER`.",
        "definition" : "Sub-folders of this `FOLDER`. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/FOLDER"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FOLDER.details",
        "path" : "FOLDER.details",
        "short" : "Archetypable meta-data for `FOLDER`.",
        "definition" : "Archetypable meta-data for `FOLDER`.",
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
