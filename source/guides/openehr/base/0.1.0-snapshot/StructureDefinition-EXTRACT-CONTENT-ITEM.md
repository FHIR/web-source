# EXTRACT_CONTENT_ITEM - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_CONTENT_ITEM**

## Logical Model: EXTRACT_CONTENT_ITEM ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-CONTENT-ITEM | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_CONTENT_ITEM |

 
Abstract model of a wrapper for one content item in an Extract, containing various meta-data. Indicates whether it was part of the primary set and what its original path was. Intended to be subtyped for wrappers of specific types of content. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* Derived from this Logical Model: [GENERIC_CONTENT_ITEM](StructureDefinition-GENERIC-CONTENT-ITEM.md) and [OPENEHR_CONTENT_ITEM](StructureDefinition-OPENEHR-CONTENT-ITEM.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-CONTENT-ITEM)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-CONTENT-ITEM.csv), [Excel](StructureDefinition-EXTRACT-CONTENT-ITEM.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-CONTENT-ITEM",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-CONTENT-ITEM",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_CONTENT_ITEM",
  "title" : "EXTRACT_CONTENT_ITEM",
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
  "description" : "Abstract model of a wrapper for one content item in an Extract, containing various meta-data. Indicates whether it was part of the primary set and what its original path was. Intended to be subtyped for wrappers of specific types of content.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_CONTENT_ITEM",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_CONTENT_ITEM",
        "path" : "EXTRACT_CONTENT_ITEM",
        "short" : "Abstract model of a wrapper for one content item in an Extract, containing various meta-data.",
        "definition" : "Abstract model of a wrapper for one content item in an Extract, containing various meta-data. Indicates whether it was part of the primary set and what its original path was. Intended to be subtyped for wrappers of specific types of content.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Item_validity",
            "severity" : "error",
            "human" : "Item validity must be present",
            "expression" : "is_masked xor item.exists()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_CONTENT_ITEM.is-primary",
        "path" : "EXTRACT_CONTENT_ITEM.is_primary",
        "short" : "True if the content item carried in this container was part of the primary set for the Extract, i.",
        "definition" : "True if the content item carried in this container was part of the primary set for the Extract, i.e. not added due to link-following.",
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
        "id" : "EXTRACT_CONTENT_ITEM.is-changed",
        "path" : "EXTRACT_CONTENT_ITEM.is_changed",
        "short" : "True if the content item carried in this container is any kind of change since last send, in repeat sending situations.",
        "definition" : "True if the content item carried in this container is any kind of change since last send, in repeat sending situations.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_CONTENT_ITEM.is-masked",
        "path" : "EXTRACT_CONTENT_ITEM.is_masked",
        "short" : "True if the content of this item has not been included due to insufficient access rights of requestor.",
        "definition" : "True if the content of this item has not been included due to insufficient access rights of requestor.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_CONTENT_ITEM.item",
        "path" : "EXTRACT_CONTENT_ITEM.item",
        "short" : "Content object.",
        "definition" : "Content object.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "Base"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
