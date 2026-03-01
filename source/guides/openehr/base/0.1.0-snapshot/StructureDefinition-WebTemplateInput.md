# WebTemplateInput - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **WebTemplateInput**

## Logical Model: WebTemplateInput 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/WebTemplateInput | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:WebTemplateInput |

**Usages:**

* Use this Logical Model: [WebTemplateItem](StructureDefinition-WebTemplateItem.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/WebTemplateInput)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-WebTemplateInput.csv), [Excel](StructureDefinition-WebTemplateInput.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "WebTemplateInput",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInput",
  "version" : "0.1.0-snapshot",
  "name" : "WebTemplateInput",
  "title" : "WebTemplateInput",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInput",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "WebTemplateInput",
        "path" : "WebTemplateInput",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "WebTemplateInput.suffix",
        "path" : "WebTemplateInput.suffix",
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
        "id" : "WebTemplateInput.type",
        "path" : "WebTemplateInput.type",
        "short" : "todo",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-input-type"
        }
      },
      {
        "id" : "WebTemplateInput.defaultValue",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/json-primitive-choice",
            "valueBoolean" : true
          }
        ],
        "path" : "WebTemplateInput.defaultValue",
        "short" : "todo",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          },
          {
            "code" : "integer"
          },
          {
            "code" : "decimal"
          },
          {
            "code" : "boolean"
          }
        ]
      },
      {
        "id" : "WebTemplateInput.terminology",
        "path" : "WebTemplateInput.terminology",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ]
      },
      {
        "id" : "WebTemplateInput.validation",
        "path" : "WebTemplateInput.validation",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInputValidation"
          }
        ]
      },
      {
        "id" : "WebTemplateInput.list",
        "path" : "WebTemplateInput.list",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInputListItem"
          }
        ]
      },
      {
        "id" : "WebTemplateInput.listOpen",
        "path" : "WebTemplateInput.listOpen",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ]
      }
    ]
  }
}

```
