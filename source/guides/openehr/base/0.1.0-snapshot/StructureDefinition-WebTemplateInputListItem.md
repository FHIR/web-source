# WebTemplateInputListItem - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **WebTemplateInputListItem**

## Logical Model: WebTemplateInputListItem 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/WebTemplateInputListItem | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:WebTemplateInputListItem |

**Usages:**

* Use this Logical Model: [WebTemplateInput](StructureDefinition-WebTemplateInput.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/WebTemplateInputListItem)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-WebTemplateInputListItem.csv), [Excel](StructureDefinition-WebTemplateInputListItem.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "WebTemplateInputListItem",
  "extension" : [
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
  "url" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInputListItem",
  "version" : "0.1.0-snapshot",
  "name" : "WebTemplateInputListItem",
  "title" : "WebTemplateInputListItem",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInputListItem",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "WebTemplateInputListItem",
        "path" : "WebTemplateInputListItem",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "WebTemplateInputListItem.value",
        "path" : "WebTemplateInputListItem.value",
        "short" : "at-code of the specified item",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.label",
        "path" : "WebTemplateInputListItem.label",
        "short" : "label of the item in the default language",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.ordinal",
        "path" : "WebTemplateInputListItem.ordinal",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.localizedLabels",
        "path" : "WebTemplateInputListItem.localizedLabels",
        "short" : "labels in all specified languages",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TranslatedString"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.localizedDescriptions",
        "path" : "WebTemplateInputListItem.localizedDescriptions",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TranslatedString"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.currentStates",
        "path" : "WebTemplateInputListItem.currentStates",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.range",
        "path" : "WebTemplateInputListItem.range",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.precision",
        "path" : "WebTemplateInputListItem.precision",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateInputListItem.termBindings",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/json-property-key",
            "valueCode" : "code"
          }
        ],
        "path" : "WebTemplateInputListItem.termBindings",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateTermBinding"
          }
        ]
      }
    ]
  }
}

```
