# RESOURCE_DESCRIPTION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **RESOURCE_DESCRIPTION**

## Logical Model: RESOURCE_DESCRIPTION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:RESOURCE_DESCRIPTION |

 
Defines the descriptive meta-data of a resource. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_resource_description_class)

**Usages:**

* Use this Logical Model: [AUTHORED_RESOURCE](StructureDefinition-AUTHORED-RESOURCE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/RESOURCE-DESCRIPTION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-RESOURCE-DESCRIPTION.csv), [Excel](StructureDefinition-RESOURCE-DESCRIPTION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "RESOURCE-DESCRIPTION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_resource_description_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION",
  "version" : "0.1.0-snapshot",
  "name" : "RESOURCE_DESCRIPTION",
  "title" : "RESOURCE_DESCRIPTION",
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
  "description" : "Defines the descriptive meta-data of a resource.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/RESOURCE_DESCRIPTION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "RESOURCE_DESCRIPTION",
        "path" : "RESOURCE_DESCRIPTION",
        "short" : "Defines the descriptive meta-data of a resource.",
        "definition" : "Defines the descriptive meta-data of a resource.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Original_author_valid",
            "severity" : "error",
            "human" : "Original author valid must not be empty",
            "expression" : "original_author.empty().not()"
          },
          {
            "key" : "Lifecycle_state_valid",
            "severity" : "error",
            "human" : "Lifecycle state valid must not be empty",
            "expression" : "lifecycle_state.empty().not()"
          },
          {
            "key" : "Details_valid",
            "severity" : "error",
            "human" : "Details valid must not be empty",
            "expression" : "details.empty().not()"
          },
          {
            "key" : "Language_valid",
            "severity" : "error",
            "human" : "Language valid must be present",
            "expression" : "parent_resource.exists() implies details.for_all (d | parent_resource.languages_available.has (d.language.code_string))"
          },
          {
            "key" : "Parent_resource_valid",
            "severity" : "error",
            "human" : "Parent resource valid must be present",
            "expression" : "parent_resource.exists() implies parent_resource.description = self"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "RESOURCE_DESCRIPTION.original-author",
        "path" : "RESOURCE_DESCRIPTION.original_author",
        "short" : "Original author of this resource, with all relevant details, including organisation.",
        "definition" : "Original author of this resource, with all relevant details, including organisation.",
        "min" : 1,
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
        "id" : "RESOURCE_DESCRIPTION.other-contributors",
        "path" : "RESOURCE_DESCRIPTION.other_contributors",
        "short" : "Other contributors to the resource, probably listed in  `'name <email>'`  form.",
        "definition" : "Other contributors to the resource, probably listed in  `'name <email>'`  form. ",
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
        "id" : "RESOURCE_DESCRIPTION.lifecycle-state",
        "path" : "RESOURCE_DESCRIPTION.lifecycle_state",
        "short" : "Lifecycle state of the resource, typically including states such as: `initial | submitted | experimental | awaiting_approval | approved | superseded | obsolete`.",
        "definition" : "Lifecycle state of the resource, typically including states such as: `initial | submitted | experimental | awaiting_approval | approved | superseded | obsolete`.",
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
        "id" : "RESOURCE_DESCRIPTION.resource-package-uri",
        "path" : "RESOURCE_DESCRIPTION.resource_package_uri",
        "short" : "URI of package to which this resource belongs.",
        "definition" : "URI of package to which this resource belongs.",
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
        "id" : "RESOURCE_DESCRIPTION.other-details",
        "path" : "RESOURCE_DESCRIPTION.other_details",
        "short" : "Additional non language-senstive resource meta-data, as a list of name/value pairs.",
        "definition" : "Additional non language-senstive resource meta-data, as a list of name/value pairs. ",
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
        "id" : "RESOURCE_DESCRIPTION.parent-resource",
        "path" : "RESOURCE_DESCRIPTION.parent_resource",
        "short" : "Reference to owning resource.",
        "definition" : "Reference to owning resource. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/AUTHORED-RESOURCE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "RESOURCE_DESCRIPTION.details",
        "path" : "RESOURCE_DESCRIPTION.details",
        "short" : "Details of all parts of resource description that are natural language-dependent, keyed by language code.",
        "definition" : "Details of all parts of resource description that are natural language-dependent, keyed by language code. ",
        "min" : 1,
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION-ITEM"
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
