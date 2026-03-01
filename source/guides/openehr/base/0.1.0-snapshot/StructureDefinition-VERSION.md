# VERSION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **VERSION**

## Logical Model: VERSION ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/VERSION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:VERSION |

 
Abstract model of one Version within a Version container, containing data, commit audit trail, and the identifier of its Contribution. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_version_class)

**Usages:**

* Derived from this Logical Model: [IMPORTED_VERSION](StructureDefinition-IMPORTED-VERSION.md) and [ORIGINAL_VERSION](StructureDefinition-ORIGINAL-VERSION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/VERSION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-VERSION.csv), [Excel](StructureDefinition-VERSION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "VERSION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "uid",
      "name" : "uid",
      "title" : "uid",
      "status" : "active",
      "kind" : "operation",
      "description" : "Unique identifier of this `VERSION`, in the form of an `{object_id, a version_tree_id, creating_system_id}` triple, where the `_object_id_` has the same value as the containing `VERSIONED_OBJECT _uid_`.",
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
      "description" : "Unique identifier of the version of which this version is a modification; Void if this is the first version.",
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
      "id" : "data",
      "name" : "data",
      "title" : "data",
      "status" : "active",
      "kind" : "operation",
      "description" : "The data of this Version.",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "lifecycle_state",
      "name" : "lifecycle_state",
      "title" : "lifecycle_state",
      "status" : "active",
      "kind" : "operation",
      "description" : "Lifecycle state of this version; coded by openEHR vocabulary `version lifecycle state`.",
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
      "id" : "canonical_form",
      "name" : "canonical_form",
      "title" : "canonical_form",
      "status" : "active",
      "kind" : "operation",
      "description" : "A canonical serial form of this Version, suitable for generating reliable hashes and signatures.",
      "code" : "canonical_form",
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
      "id" : "owner_id",
      "name" : "owner_id",
      "title" : "owner_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "Copy of the owning `VERSIONED_OBJECT._uid_` value; extracted from the local `_uid_` property's `_object_id_`.",
      "code" : "owner_id",
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
      "id" : "is_branch",
      "name" : "is_branch",
      "title" : "is_branch",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Version represents a branch. Derived from `_uid_` attribute. ",
      "code" : "is_branch",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_version_class"
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
      "valueCanonical" : "#data"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#lifecycle_state"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#canonical_form"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#owner_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_branch"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/VERSION",
  "version" : "0.1.0-snapshot",
  "name" : "VERSION",
  "title" : "VERSION",
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
  "description" : "Abstract model of one Version within a Version container, containing data, commit audit trail, and the identifier of its Contribution.",
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
  "abstract" : true,
  "type" : "http://openehr.org/fhir/StructureDefinition/VERSION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "VERSION",
        "path" : "VERSION",
        "short" : "Abstract model of one Version within a Version container, containing data, commit audit trail, and the identifier of its Contribution.",
        "definition" : "Abstract model of one Version within a Version container, containing data, commit audit trail, and the identifier of its Contribution.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Owner_id_valid",
            "severity" : "error",
            "human" : "Owner id valid",
            "expression" : "owner_id().value().is_equal (uid().object_id.value())"
          },
          {
            "key" : "Preceding_version_uid_validity",
            "severity" : "error",
            "human" : "Preceding version uid validity must be present",
            "expression" : "uid().version_tree_id.is_first xor preceding_version_uid().exists()"
          },
          {
            "key" : "Lifecycle_state_ valid",
            "severity" : "error",
            "human" : "Lifecycle state  valid must be present",
            "expression" : "lifecycle_state().exists() and then terminology (Term_id_openehr).has_code_for_group_id (Group_id_version_lifecycle_state, lifecycle_state().defining_code)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "VERSION.contribution",
        "path" : "VERSION.contribution",
        "short" : "Contribution in which this version was added.",
        "definition" : "Contribution in which this version was added. ",
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
        "id" : "VERSION.signature",
        "path" : "VERSION.signature",
        "short" : "OpenPGP digital signature or digest of content committed in this Version.",
        "definition" : "OpenPGP digital signature or digest of content committed in this Version. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "VERSION.commit-audit",
        "path" : "VERSION.commit_audit",
        "short" : "Audit trail corresponding to the committal of this version to the `VERSIONED_OBJECT`.",
        "definition" : "Audit trail corresponding to the committal of this version to the `VERSIONED_OBJECT`.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
