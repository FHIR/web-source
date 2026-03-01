# WebTemplate - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **WebTemplate**

## Logical Model: WebTemplate 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/WebTemplate | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:WebTemplate |

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/WebTemplate)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-WebTemplate.csv), [Excel](StructureDefinition-WebTemplate.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "WebTemplate",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/json-suppress-resourcetype",
      "valueBoolean" : true
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/logical-target",
      "valueBoolean" : true
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-load-as-resource",
      "valueBoolean" : true
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/WebTemplate",
  "version" : "0.1.0-snapshot",
  "name" : "WebTemplate",
  "title" : "WebTemplate",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-02-08T18:45:58+10:00",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/WebTemplate",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "WebTemplate",
        "path" : "WebTemplate",
        "short" : "The grouping variant of ITEM, which may contain further instances of ITEM, in an ordered list",
        "definition" : "The grouping variant of ITEM, which may contain further instances of ITEM, in an ordered list.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "WebTemplate.templateId",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-use-as-resource-id",
            "valueBoolean" : true
          }
        ],
        "path" : "WebTemplate.templateId",
        "short" : "Operational template ID",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplate.version",
        "path" : "WebTemplate.version",
        "short" : "Web template structure version",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplate.semver",
        "path" : "WebTemplate.semver",
        "short" : "The semantic version number of the openEHR template",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplate.defaultLanguage",
        "path" : "WebTemplate.defaultLanguage",
        "short" : "Default labels for fields will be in this language",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplate.languages",
        "path" : "WebTemplate.languages",
        "short" : "Array of additional languages. Labels for fields and coded texts will also be available in these additional languages, provided that the operational template has them",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplate.tree",
        "path" : "WebTemplate.tree",
        "short" : "Hierarchical structure of nodes each one potentially having further children",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateItem"
          }
        ]
      }
    ]
  }
}

```
