# ITEM_TAG - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ITEM_TAG**

## Logical Model: ITEM_TAG 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ITEM-TAG | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ITEM_TAG |

 
A tag with optional value that is associated with a target information entity identified by a UID. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_item_tag_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ITEM-TAG)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ITEM-TAG.csv), [Excel](StructureDefinition-ITEM-TAG.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ITEM-TAG",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_item_tag_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ITEM-TAG",
  "version" : "0.1.0-snapshot",
  "name" : "ITEM_TAG",
  "title" : "ITEM_TAG",
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
  "description" : "A tag with optional value that is associated with a target information entity identified by a UID.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ITEM_TAG",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ITEM_TAG",
        "path" : "ITEM_TAG",
        "short" : "A tag with optional value that is associated with a target information entity identified by a UID.",
        "definition" : "A tag with optional value that is associated with a target information entity identified by a UID.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Inv_key_valid",
            "severity" : "error",
            "human" : "Inv key valid must not be empty",
            "expression" : "key.empty().not() and key.is_justified"
          },
          {
            "key" : "Inv_value_valid",
            "severity" : "error",
            "human" : "Inv value valid must be present",
            "expression" : "value.exists() implies value.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ITEM_TAG.key",
        "path" : "ITEM_TAG.key",
        "short" : "The tag key.",
        "definition" : "The tag key. May not be empty or contain leading or trailing whitespace.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ITEM_TAG.value",
        "path" : "ITEM_TAG.value",
        "short" : "The value.",
        "definition" : "The value. If set, may not be empty.",
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
        "id" : "ITEM_TAG.target",
        "path" : "ITEM_TAG.target",
        "short" : "Identifier of target, which may be a `VERSIONED_OBJECT<T>` or a `VERSION<T>`.",
        "definition" : "Identifier of target, which may be a `VERSIONED_OBJECT<T>` or a `VERSION<T>`.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/UID-BASED-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ITEM_TAG.target-path",
        "path" : "ITEM_TAG.target_path",
        "short" : "Optional archetype (i.",
        "definition" : "Optional archetype (i.e. AQL) or RM path within `_target_`, used to tag a fine-grained element.",
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
        "id" : "ITEM_TAG.owner-id",
        "path" : "ITEM_TAG.owner_id",
        "short" : "Identifier of owner object, such as EHR.",
        "definition" : "Identifier of owner object, such as EHR.",
        "min" : 1,
        "max" : "1",
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
