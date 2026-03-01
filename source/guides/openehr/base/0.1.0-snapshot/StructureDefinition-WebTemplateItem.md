# WebTemplateItem - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **WebTemplateItem**

## Logical Model: WebTemplateItem 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/WebTemplateItem | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:WebTemplateItem |

**Usages:**

* Use this Logical Model: [WebTemplate](StructureDefinition-WebTemplate.md) and [WebTemplateItem](StructureDefinition-WebTemplateItem.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/WebTemplateItem)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-WebTemplateItem.csv), [Excel](StructureDefinition-WebTemplateItem.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "WebTemplateItem",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/WebTemplateItem",
  "version" : "0.1.0-snapshot",
  "name" : "WebTemplateItem",
  "title" : "WebTemplateItem",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/WebTemplateItem",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "WebTemplateItem",
        "path" : "WebTemplateItem",
        "short" : "The grouping variant of ITEM, which may contain further instances of ITEM, in an ordered list",
        "definition" : "The grouping variant of ITEM, which may contain further instances of ITEM, in an ordered list.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "WebTemplateItem.id",
        "path" : "WebTemplateItem.id",
        "short" : "Node ID (this ID is needed when input data is converted to a composition)",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.depth",
        "path" : "WebTemplateItem.depth",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.name",
        "path" : "WebTemplateItem.name",
        "short" : "Default node name",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.localizedName",
        "path" : "WebTemplateItem.localizedName",
        "short" : "Node name in the default language",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.rmType",
        "path" : "WebTemplateItem.rmType",
        "short" : "Reference Model class name for this node",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-item-rmtype"
        }
      },
      {
        "id" : "WebTemplateItem.nodeId",
        "path" : "WebTemplateItem.nodeId",
        "short" : "Archetype node id as either a full openEHR-EHR-xxxxx archetype id or just an at-code",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.min",
        "path" : "WebTemplateItem.min",
        "short" : "Minimal value of occurrences for this node (this node has to appear at least this many times)",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.max",
        "path" : "WebTemplateItem.max",
        "short" : "Maximal value of occurrences for this node or -1 if unlimited. When converting to a composition this node should not appear more than this many times.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.dependsOn",
        "path" : "WebTemplateItem.dependsOn",
        "short" : "todo",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.localizedNames",
        "path" : "WebTemplateItem.localizedNames",
        "short" : "Map with labels in additional languages",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TranslatedString"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.localizedDescriptions",
        "path" : "WebTemplateItem.localizedDescriptions",
        "short" : "Map with element descriptions",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TranslatedString"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.annotations",
        "path" : "WebTemplateItem.annotations",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/Annotations"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.archetype-id",
        "path" : "WebTemplateItem.archetype_id",
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
        "id" : "WebTemplateItem.aqlPath",
        "path" : "WebTemplateItem.aqlPath",
        "short" : "AQL (or RM) path to this node. Such paths can be used in AQLs",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.custodian-namespace",
        "path" : "WebTemplateItem.custodian_namespace",
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
        "id" : "WebTemplateItem.custodian-organisation",
        "path" : "WebTemplateItem.custodian_organisation",
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
        "id" : "WebTemplateItem.lifecycleState",
        "path" : "WebTemplateItem.lifecycleState",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-item-lifecyclestate"
        }
      },
      {
        "id" : "WebTemplateItem.original-namespace",
        "path" : "WebTemplateItem.original_namespace",
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
        "id" : "WebTemplateItem.original-publisher",
        "path" : "WebTemplateItem.original_publisher",
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
        "id" : "WebTemplateItem.proportionTypes",
        "path" : "WebTemplateItem.proportionTypes",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "code"
          }
        ],
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-item-proportiontype"
        }
      },
      {
        "id" : "WebTemplateItem.revision",
        "path" : "WebTemplateItem.revision",
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
        "id" : "WebTemplateItem.inContext",
        "path" : "WebTemplateItem.inContext",
        "short" : "todo",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.inputs",
        "path" : "WebTemplateItem.inputs",
        "short" : "Used for creating input fields. the inputs are determined by the attributes for a particular datatype",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateInput"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.termBindings",
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/json-property-key",
            "valueCode" : "code"
          }
        ],
        "path" : "WebTemplateItem.termBindings",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/WebTemplateTermBinding"
          }
        ]
      },
      {
        "id" : "WebTemplateItem.children",
        "path" : "WebTemplateItem.children",
        "short" : "todo",
        "min" : 0,
        "max" : "*",
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
