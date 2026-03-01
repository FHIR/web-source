# AUTHORED_RESOURCE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **AUTHORED_RESOURCE**

## Logical Model: AUTHORED_RESOURCE ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/AUTHORED-RESOURCE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:AUTHORED_RESOURCE |

 
Abstract idea of an online resource created by a human author. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_authored_resource_class)

**Usages:**

* Use this Logical Model: [RESOURCE_DESCRIPTION](StructureDefinition-RESOURCE-DESCRIPTION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/AUTHORED-RESOURCE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-AUTHORED-RESOURCE.csv), [Excel](StructureDefinition-AUTHORED-RESOURCE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "AUTHORED-RESOURCE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "current_revision",
      "name" : "current_revision",
      "title" : "current_revision",
      "status" : "active",
      "kind" : "operation",
      "description" : "Most recent revision in `_revision_history_` if `_is_controlled_` else  (uncontrolled) . ",
      "code" : "current_revision",
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
      "id" : "languages_available",
      "name" : "languages_available",
      "title" : "languages_available",
      "status" : "active",
      "kind" : "operation",
      "description" : "Total list of languages available in this resource, derived from `_original_language_` and `_translations_`.\n",
      "code" : "languages_available",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_authored_resource_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#current_revision"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#languages_available"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/AUTHORED-RESOURCE",
  "version" : "0.1.0-snapshot",
  "name" : "AUTHORED_RESOURCE",
  "title" : "AUTHORED_RESOURCE",
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
  "description" : "Abstract idea of an online resource created by a human author. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/AUTHORED_RESOURCE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "AUTHORED_RESOURCE",
        "path" : "AUTHORED_RESOURCE",
        "short" : "Abstract idea of an online resource created by a human author.",
        "definition" : "Abstract idea of an online resource created by a human author. \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Languages_available_valid",
            "severity" : "error",
            "human" : "Languages available valid",
            "expression" : "languages_available().has (original_language)"
          },
          {
            "key" : "Revision_history_valid",
            "severity" : "error",
            "human" : "Revision history valid must satisfy exclusive conditions",
            "expression" : "is_controlled xor revision_history .empty()"
          },
          {
            "key" : "Current_revision_valid",
            "severity" : "error",
            "human" : "Current revision valid must be present",
            "expression" : "(current_revision().exists() and is_controlled.not()) implies current_revision().is_equal (“(uncontrolled)”)"
          },
          {
            "key" : "Translations_valid",
            "severity" : "error",
            "human" : "Translations valid must be present",
            "expression" : "translations.exists() implies (translations.empty().not() and translations.not().has (orginal_language.code_string))"
          },
          {
            "key" : "Description_valid",
            "severity" : "error",
            "human" : "Description valid must be present",
            "expression" : "translations.exists() implies (description.details.for_all (d |\\ntranslations.has_key (d.language.code_string)))"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-languages"
        }
      },
      {
        "id" : "AUTHORED_RESOURCE.original-language",
        "path" : "AUTHORED_RESOURCE.original_language",
        "short" : "Language in which this resource was initially authored.",
        "definition" : "Language in which this resource was initially authored. Although there is no language primacy of resources overall, the language of original authoring is required to ensure natural language translations can preserve quality. Language is relevant in both the description and ontology sections. ",
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
        "id" : "AUTHORED_RESOURCE.is-controlled",
        "path" : "AUTHORED_RESOURCE.is_controlled",
        "short" : "True if this resource is under any kind of change control (even file copying), in which case revision history is created.",
        "definition" : "True if this resource is under any kind of change control (even file copying), in which case revision history is created. ",
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
        "id" : "AUTHORED_RESOURCE.translations",
        "path" : "AUTHORED_RESOURCE.translations",
        "short" : "List of details for each natural-language translation made of this resource, keyed by language.",
        "definition" : "List of details for each natural-language translation made of this resource, keyed by language. For each translation listed here, there must be corresponding sections in all language-dependent parts of the resource. The `_original_language_` does not appear in this list.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TRANSLATION-DETAILS"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUTHORED_RESOURCE.description",
        "path" : "AUTHORED_RESOURCE.description",
        "short" : "Description and lifecycle information of the resource.",
        "definition" : "Description and lifecycle information of the resource.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/RESOURCE-DESCRIPTION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUTHORED_RESOURCE.revision-history",
        "path" : "AUTHORED_RESOURCE.revision_history",
        "short" : "The revision history of the resource.",
        "definition" : "The revision history of the resource. Only required if `_is_controlled_ = True` (avoids large revision histories for informal or private editing situations). ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/REVISION-HISTORY"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
