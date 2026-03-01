# RESOURCE_DESCRIPTION_ITEM - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **RESOURCE_DESCRIPTION_ITEM**

## Logical Model: RESOURCE_DESCRIPTION_ITEM 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION-ITEM | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:RESOURCE_DESCRIPTION_ITEM |

 
Language-specific detail of resource description. When a resource is translated for use in another language environment, each`RESOURCE_DESCRIPTION_ITEM`needs to be copied and translated into the new language. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_resource_description_item_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/RESOURCE-DESCRIPTION-ITEM)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-RESOURCE-DESCRIPTION-ITEM.csv), [Excel](StructureDefinition-RESOURCE-DESCRIPTION-ITEM.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "RESOURCE-DESCRIPTION-ITEM",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_resource_description_item_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION-ITEM",
  "version" : "0.1.0-snapshot",
  "name" : "RESOURCE_DESCRIPTION_ITEM",
  "title" : "RESOURCE_DESCRIPTION_ITEM",
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
  "description" : "Language-specific detail of resource description. When a resource is translated for use in another language environment, each `RESOURCE_DESCRIPTION_ITEM` needs to be copied and translated into the new language.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/RESOURCE_DESCRIPTION_ITEM",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "RESOURCE_DESCRIPTION_ITEM",
        "path" : "RESOURCE_DESCRIPTION_ITEM",
        "short" : "Language-specific detail of resource description.",
        "definition" : "Language-specific detail of resource description. When a resource is translated for use in another language environment, each `RESOURCE_DESCRIPTION_ITEM` needs to be copied and translated into the new language.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Purpose_valid",
            "severity" : "error",
            "human" : "Purpose valid must not be empty",
            "expression" : "purpose.empty().not()"
          },
          {
            "key" : "Use_valid",
            "severity" : "error",
            "human" : "Use valid must be present",
            "expression" : "use.exists() implies use.empty().not()"
          },
          {
            "key" : "misuse_valid",
            "severity" : "error",
            "human" : "misuse valid must be present",
            "expression" : "misuse.exists() implies misuse.empty().not()"
          },
          {
            "key" : "copyright_valid",
            "severity" : "error",
            "human" : "copyright valid must be present",
            "expression" : "copyright.exists() implies copyright.empty().not()"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-languages"
        }
      },
      {
        "id" : "RESOURCE_DESCRIPTION_ITEM.language",
        "path" : "RESOURCE_DESCRIPTION_ITEM.language",
        "short" : "The localised language in which the items in this description item are written.",
        "definition" : "The localised language in which the items in this description item are written. Coded from openEHR code set `languages`.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "RESOURCE_DESCRIPTION_ITEM.purpose",
        "path" : "RESOURCE_DESCRIPTION_ITEM.purpose",
        "short" : "Purpose of the resource.",
        "definition" : "Purpose of the resource.",
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
        "id" : "RESOURCE_DESCRIPTION_ITEM.keywords",
        "path" : "RESOURCE_DESCRIPTION_ITEM.keywords",
        "short" : "Keywords which characterise this resource, used e.",
        "definition" : "Keywords which characterise this resource, used e.g. for indexing and searching. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "RESOURCE_DESCRIPTION_ITEM.use",
        "path" : "RESOURCE_DESCRIPTION_ITEM.use",
        "short" : "Description of the uses of the resource, i.",
        "definition" : "Description of the uses of the resource, i.e. contexts in which it could be used. \n",
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
        "id" : "RESOURCE_DESCRIPTION_ITEM.misuse",
        "path" : "RESOURCE_DESCRIPTION_ITEM.misuse",
        "short" : "Description of any misuses of the resource, i.",
        "definition" : "Description of any misuses of the resource, i.e. contexts in which it should not be used.",
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
        "id" : "RESOURCE_DESCRIPTION_ITEM.copyright",
        "path" : "RESOURCE_DESCRIPTION_ITEM.copyright",
        "short" : "Optional copyright statement for the resource as a knowledge resource.",
        "definition" : "Optional copyright statement for the resource as a knowledge resource. \n",
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
        "id" : "RESOURCE_DESCRIPTION_ITEM.original-resource-uri",
        "path" : "RESOURCE_DESCRIPTION_ITEM.original_resource_uri",
        "short" : "URIs of original clinical document(s) or description of which resource is a formalisation, in the language of this description item; keyed by meaning.",
        "definition" : "URIs of original clinical document(s) or description of which resource is a formalisation, in the language of this description item; keyed by meaning. ",
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
        "id" : "RESOURCE_DESCRIPTION_ITEM.other-details",
        "path" : "RESOURCE_DESCRIPTION_ITEM.other_details",
        "short" : "Additional language-senstive resource metadata, as a list of name/value pairs.",
        "definition" : "Additional language-senstive resource metadata, as a list of name/value pairs. ",
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
      }
    ]
  }
}

```
