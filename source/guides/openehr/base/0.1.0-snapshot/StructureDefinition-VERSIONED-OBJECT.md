# VERSIONED_OBJECT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **VERSIONED_OBJECT**

## Logical Model: VERSIONED_OBJECT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/VERSIONED-OBJECT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:VERSIONED_OBJECT |

 
Version control abstraction, defining semantics for versioning one complex object. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_versioned_object_class)

**Usages:**

* Derived from this Logical Model: [VERSIONED_COMPOSITION](StructureDefinition-VERSIONED-COMPOSITION.md), [VERSIONED_EHR_ACCESS](StructureDefinition-VERSIONED-EHR-ACCESS.md), [VERSIONED_EHR_STATUS](StructureDefinition-VERSIONED-EHR-STATUS.md), [VERSIONED_FOLDER](StructureDefinition-VERSIONED-FOLDER.md) and [VERSIONED_PARTY](StructureDefinition-VERSIONED-PARTY.md)
* Use this Logical Model: [OPENEHR_CONTENT_ITEM](StructureDefinition-OPENEHR-CONTENT-ITEM.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/VERSIONED-OBJECT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-VERSIONED-OBJECT.csv), [Excel](StructureDefinition-VERSIONED-OBJECT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "VERSIONED-OBJECT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "version_count",
      "name" : "version_count",
      "title" : "version_count",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the total number of versions in this object.",
      "code" : "version_count",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "integer"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "all_version_ids",
      "name" : "all_version_ids",
      "title" : "all_version_ids",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return a list of ids of all versions in this object. ",
      "code" : "all_version_ids",
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
      "id" : "all_versions",
      "name" : "all_versions",
      "title" : "all_versions",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return a list of all versions in this object. ",
      "code" : "all_versions",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "*",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_version_at_time",
      "name" : "has_version_at_time",
      "title" : "has_version_at_time",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if a version for time  `_a_time_` exists. ",
      "code" : "has_version_at_time",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_time",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_version_id",
      "name" : "has_version_id",
      "title" : "has_version_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if a version with `_a_version_uid_` exists. ",
      "code" : "has_version_id",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_version_uid",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "version_with_id",
      "name" : "version_with_id",
      "title" : "version_with_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the version with `_uid_` =  `_a_version_uid_`. \n",
      "code" : "version_with_id",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_version_uid",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
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
      "id" : "is_original_version",
      "name" : "is_original_version",
      "title" : "is_original_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if version with `_a_version_uid_` is an `ORIGINAL_VERSION`. ",
      "code" : "is_original_version",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_version_uid",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "version_at_time",
      "name" : "version_at_time",
      "title" : "version_at_time",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the version for time  `_a_time_`. ",
      "code" : "version_at_time",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_time",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "dateTime"
        },
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
      "id" : "revision_history",
      "name" : "revision_history",
      "title" : "revision_history",
      "status" : "active",
      "kind" : "operation",
      "description" : "History of all audits and attestations in this versioned repository.",
      "code" : "revision_history",
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
      "id" : "latest_version",
      "name" : "latest_version",
      "title" : "latest_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the most recently added version (i.e. on trunk or any branch). ",
      "code" : "latest_version",
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
      "id" : "latest_trunk_version",
      "name" : "latest_trunk_version",
      "title" : "latest_trunk_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the most recently added trunk version. ",
      "code" : "latest_trunk_version",
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
      "id" : "trunk_lifecycle_state",
      "name" : "trunk_lifecycle_state",
      "title" : "trunk_lifecycle_state",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return the lifecycle state from the latest trunk version. Useful for determining if the version container is logically deleted. ",
      "code" : "trunk_lifecycle_state",
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
      "id" : "commit_original_version",
      "name" : "commit_original_version",
      "title" : "commit_original_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "Add a new original version. ",
      "code" : "commit_original_version",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_contribution",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_new_version_uid",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_preceding_version_id",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "an_audit",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_lifecycle_state",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "a_data",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "signing_key",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
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
      "id" : "commit_original_merged_version",
      "name" : "commit_original_merged_version",
      "title" : "commit_original_merged_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "Add a new original merged version. This commit function adds a parameter containing the ids of other versions merged into the current one. ",
      "code" : "commit_original_merged_version",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_contribution",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_new_version_uid",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_preceding_version_id",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "an_audit",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_lifecycle_state",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "a_data",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "an_other_input_uids",
          "use" : "in",
          "min" : 1,
          "max" : "*",
          "type" : "Parameters"
        },
        {
          "name" : "signing_key",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
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
      "id" : "commit_imported_version",
      "name" : "commit_imported_version",
      "title" : "commit_imported_version",
      "status" : "active",
      "kind" : "operation",
      "description" : "Add a new imported version. Details of version id etc come from the `ORIGINAL_VERSION` being committed. ",
      "code" : "commit_imported_version",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_contribution",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "an_audit",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_version",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
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
      "id" : "commit_attestation",
      "name" : "commit_attestation",
      "title" : "commit_attestation",
      "status" : "active",
      "kind" : "operation",
      "description" : "Add a new attestation to a specified original version. Attestations can only be added to Original versions. ",
      "code" : "commit_attestation",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "an_attestation",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "a_ver_id",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
        {
          "name" : "signing_key",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_versioned_object_class"
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
      "valueCanonical" : "#version_count"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#all_version_ids"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#all_versions"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_version_at_time"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_version_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#version_with_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_original_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#version_at_time"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#revision_history"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#latest_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#latest_trunk_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#trunk_lifecycle_state"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#commit_original_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#commit_original_merged_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#commit_imported_version"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#commit_attestation"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/VERSIONED-OBJECT",
  "version" : "0.1.0-snapshot",
  "name" : "VERSIONED_OBJECT",
  "title" : "VERSIONED_OBJECT",
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
  "description" : "Version control abstraction, defining semantics for versioning one complex object.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/VERSIONED_OBJECT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "VERSIONED_OBJECT",
        "path" : "VERSIONED_OBJECT",
        "short" : "Version control abstraction, defining semantics for versioning one complex object.",
        "definition" : "Version control abstraction, defining semantics for versioning one complex object.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Version_count_valid",
            "severity" : "error",
            "human" : "Version count valid must satisfy range constraints",
            "expression" : "version_count() >= 0"
          },
          {
            "key" : "All_version_ids_valid",
            "severity" : "error",
            "human" : "All version ids valid",
            "expression" : "all_version_ids().count() = version_count()"
          },
          {
            "key" : "All_versions_valid",
            "severity" : "error",
            "human" : "All versions valid",
            "expression" : "all_versions().count() = version_count()"
          },
          {
            "key" : "Latest_version_valid",
            "severity" : "error",
            "human" : "Latest version valid must be present",
            "expression" : "version_count() > 0 implies latest_version().exists()"
          },
          {
            "key" : "Uid_validity",
            "severity" : "error",
            "human" : "Uid validity must not be empty",
            "expression" : "extension.empty()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "VERSIONED_OBJECT.uid",
        "path" : "VERSIONED_OBJECT.uid",
        "short" : "Unique identifier of this version container in the form of a UID with no extension.",
        "definition" : "Unique identifier of this version container in the form of a UID with no extension. This id will be the same in all instances of the same container in a distributed environment, meaning that it can be understood as the uid of the  virtual version tree. ",
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
        "id" : "VERSIONED_OBJECT.owner-id",
        "path" : "VERSIONED_OBJECT.owner_id",
        "short" : "Reference to object to which this version container belongs, e.",
        "definition" : "Reference to object to which this version container belongs, e.g. the id of the containing EHR or other relevant owning entity. ",
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
        "id" : "VERSIONED_OBJECT.time-created",
        "path" : "VERSIONED_OBJECT.time_created",
        "short" : "Time of initial creation of this versioned object.",
        "definition" : "Time of initial creation of this versioned object. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
