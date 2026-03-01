# EHR - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EHR**

## Logical Model: EHR 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EHR | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EHR |

 
The EHR object is the root object and access point of an EHR for a subject of care. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EHR)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EHR.csv), [Excel](StructureDefinition-EHR.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EHR",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_ehr_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EHR",
  "version" : "0.1.0-snapshot",
  "name" : "EHR",
  "title" : "EHR",
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
  "description" : "The EHR object is the root object and access point of an EHR for a subject of care. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EHR",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EHR",
        "path" : "EHR",
        "short" : "The EHR object is the root object and access point of an EHR for a subject of care.",
        "definition" : "The EHR object is the root object and access point of an EHR for a subject of care. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Contributions_valid",
            "severity" : "error",
            "human" : "Contributions valid",
            "expression" : "for_all c in contributions | c.type().is_equal(\\\"CONTRIBUTION\\\")"
          },
          {
            "key" : "Ehr_access_valid",
            "severity" : "error",
            "human" : "Ehr access valid",
            "expression" : "ehr_access.type().is_equal (\\\"VERSIONED_EHR_ACCESS\\\")"
          },
          {
            "key" : "Ehr_status_valid",
            "severity" : "error",
            "human" : "Ehr status valid",
            "expression" : "ehr_status.type().is_equal(\\\"VERSIONED_EHR_STATUS\\\")"
          },
          {
            "key" : "Compositions_valid",
            "severity" : "error",
            "human" : "Compositions valid",
            "expression" : "for_all c in compositions | c.type().is_equal (\\\"VERSIONED_COMPOSITION\\\")"
          },
          {
            "key" : "Directory_valid",
            "severity" : "error",
            "human" : "Directory valid must be present",
            "expression" : "directory.exists() implies directory.type().is_equal (\\\"VERSIONED_FOLDER\\\")"
          },
          {
            "key" : "Folders_valid",
            "severity" : "error",
            "human" : "Folders valid must be present",
            "expression" : "folders.exists() implies for_all f in folders | f.type().is_equal(\\\"VERSIONED_FOLDER\\\")"
          },
          {
            "key" : "Directory_in_folders",
            "severity" : "error",
            "human" : "Directory in folders must be present",
            "expression" : "folders.exists() implies folders.item(1) = directory"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR.system-id",
        "path" : "EHR.system_id",
        "short" : "The identifier of the logical EHR management system in which this EHR was created.",
        "definition" : "The identifier of the logical EHR management system in which this EHR was created. \n",
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
        "id" : "EHR.ehr-id",
        "path" : "EHR.ehr_id",
        "short" : "The unique identifier of this EHR.",
        "definition" : "The unique identifier of this EHR.\n\nNOTE: is is strongly recommended that a UUID always be used for this field.",
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
        "id" : "EHR.contributions",
        "path" : "EHR.contributions",
        "short" : "List of contributions causing changes to this EHR.",
        "definition" : "List of contributions causing changes to this EHR. Each contribution contains a list of versions, which may include references to any number of `VERSION` instances, i.e. items of type `VERSIONED_COMPOSITION` and `VERSIONED_FOLDER`. ",
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
        "id" : "EHR.ehr-status",
        "path" : "EHR.ehr_status",
        "short" : "Reference to `EHR_STATUS` object for this EHR.",
        "definition" : "Reference to `EHR_STATUS` object for this EHR.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR.ehr-access",
        "path" : "EHR.ehr_access",
        "short" : "Reference to `EHR_ACCESS` object for this EHR.",
        "definition" : "Reference to `EHR_ACCESS` object for this EHR.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR.compositions",
        "path" : "EHR.compositions",
        "short" : "Master list of all Versioned Composition references in this EHR.",
        "definition" : "Master list of all Versioned Composition references in this EHR.",
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
        "id" : "EHR.directory",
        "path" : "EHR.directory",
        "short" : "Optional directory structure for this EHR.",
        "definition" : "Optional directory structure for this EHR. If present, this is a reference to the first member of `_folders_`.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EHR.time-created",
        "path" : "EHR.time_created",
        "short" : "Time of creation of the EHR.",
        "definition" : "Time of creation of the EHR.",
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
        "id" : "EHR.folders",
        "path" : "EHR.folders",
        "short" : "Optional additional Folder structures for this EHR.",
        "definition" : "Optional additional Folder structures for this EHR. If set, the `_directory_` attribute refers to the first member.",
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
        "id" : "EHR.tags",
        "path" : "EHR.tags",
        "short" : "Optional list of tags associated with this EHR.",
        "definition" : "Optional list of tags associated with this EHR. Tag `_target_` values can only be within the same EHR.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
