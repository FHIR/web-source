# GENERIC_CONTENT_ITEM - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **GENERIC_CONTENT_ITEM**

## Logical Model: GENERIC_CONTENT_ITEM 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/GENERIC-CONTENT-ITEM | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:GENERIC_CONTENT_ITEM |

 
Single item in generic extract, designed for 13606 and CDA data. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/GENERIC-CONTENT-ITEM)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-GENERIC-CONTENT-ITEM.csv), [Excel](StructureDefinition-GENERIC-CONTENT-ITEM.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "GENERIC-CONTENT-ITEM",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/GENERIC-CONTENT-ITEM",
  "version" : "0.1.0-snapshot",
  "name" : "GENERIC_CONTENT_ITEM",
  "title" : "GENERIC_CONTENT_ITEM",
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
  "description" : "Single item in generic extract, designed for 13606 and CDA data.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/GENERIC_CONTENT_ITEM",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-CONTENT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "GENERIC_CONTENT_ITEM",
        "path" : "GENERIC_CONTENT_ITEM",
        "short" : "Single item in generic extract, designed for 13606 and CDA data.",
        "definition" : "Single item in generic extract, designed for 13606 and CDA data.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.item-type",
        "path" : "GENERIC_CONTENT_ITEM.item_type",
        "short" : "Identifier of model or schema used to create the content.",
        "definition" : "Identifier of model or schema used to create the content.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.item-type-version",
        "path" : "GENERIC_CONTENT_ITEM.item_type_version",
        "short" : "Version of model or schema used to create the content item.",
        "definition" : "Version of model or schema used to create the content item.",
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
        "id" : "GENERIC_CONTENT_ITEM.author",
        "path" : "GENERIC_CONTENT_ITEM.author",
        "short" : "Reference to a demographic entity elsewhere in this Extract representing the author of the item version.",
        "definition" : "Reference to a demographic entity elsewhere in this Extract representing the author of the item version. The reference should be a UID corresponding to the UID of a `GENERIC_CONTENT_ITEM` containing the demographic information.",
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
        "id" : "GENERIC_CONTENT_ITEM.creation-time",
        "path" : "GENERIC_CONTENT_ITEM.creation_time",
        "short" : "Time of creation of this item version on the original system.",
        "definition" : "Time of creation of this item version on the original system. This may be an earlier commit time, or it may be the time at which the item was created during the Extract generation process.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/Iso8601-date-time"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.authoriser",
        "path" : "GENERIC_CONTENT_ITEM.authoriser",
        "short" : "Reference to a demographic entity elsewhere in this Extract representing an authoriser of the item version, if relevant.",
        "definition" : "Reference to a demographic entity elsewhere in this Extract representing an authoriser of the item version, if relevant. The reference should be a UID corresponding to the UID of a `GENERIC_CONTENT_ITEM` containing the demographic information.",
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
        "id" : "GENERIC_CONTENT_ITEM.authorisation-time",
        "path" : "GENERIC_CONTENT_ITEM.authorisation_time",
        "short" : "Time of authorisation of this item version on the original system where relevant.",
        "definition" : "Time of authorisation of this item version on the original system where relevant.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/Iso8601-date-time"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.item-status",
        "path" : "GENERIC_CONTENT_ITEM.item_status",
        "short" : "Coded lifecycle status of the item.",
        "definition" : "Coded lifecycle status of the item.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.version-id",
        "path" : "GENERIC_CONTENT_ITEM.version_id",
        "short" : "Version id of this item in original system.",
        "definition" : "Version id of this item in original system.",
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
        "id" : "GENERIC_CONTENT_ITEM.version-set-id",
        "path" : "GENERIC_CONTENT_ITEM.version_set_id",
        "short" : "Version set id of this item in original system, where applicable.",
        "definition" : "Version set id of this item in original system, where applicable.",
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
        "id" : "GENERIC_CONTENT_ITEM.system-id",
        "path" : "GENERIC_CONTENT_ITEM.system_id",
        "short" : "Identifier of EMR or other system from which the item was created / extracted.",
        "definition" : "Identifier of EMR or other system from which the item was created / extracted. Typically in the form of a domain name.",
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
        "id" : "GENERIC_CONTENT_ITEM.other-details",
        "path" : "GENERIC_CONTENT_ITEM.other_details",
        "short" : "Other details about the content item.",
        "definition" : "Other details about the content item.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              },
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "U"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/Hash"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "GENERIC_CONTENT_ITEM.item",
        "path" : "GENERIC_CONTENT_ITEM.item",
        "short" : "Content object.",
        "definition" : "Content object.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
