# CLUSTER - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **CLUSTER**

## Logical Model: CLUSTER 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/CLUSTER | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:CLUSTER |

 
The grouping variant of`ITEM`, which may contain further instances of`ITEM`, in an ordered list. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_cluster_class)

**Usages:**

* Use this Logical Model: [ITEM_TABLE](StructureDefinition-ITEM-TABLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/CLUSTER)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-CLUSTER.csv), [Excel](StructureDefinition-CLUSTER.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "CLUSTER",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_cluster_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-ready"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/CLUSTER",
  "version" : "0.1.0-snapshot",
  "name" : "CLUSTER",
  "title" : "CLUSTER",
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
  "description" : "The grouping variant of `ITEM`, which may contain further instances of `ITEM`, in an ordered list. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/CLUSTER",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "CLUSTER",
        "path" : "CLUSTER",
        "short" : "The grouping variant of `ITEM`, which may contain further instances of `ITEM`, in an ordered list.",
        "definition" : "The grouping variant of `ITEM`, which may contain further instances of `ITEM`, in an ordered list. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "CLUSTER.items",
        "extension" : [
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-group"
              },
              {
                "url" : "value",
                "valueString" : "Items"
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          },
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-order"
              },
              {
                "url" : "value",
                "valueInteger" : 8
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          }
        ],
        "path" : "CLUSTER.items",
        "short" : "Ordered list of items - `CLUSTER` or `ELEMENT` objects - under this `CLUSTER`.",
        "definition" : "Ordered list of items - `CLUSTER` or `ELEMENT` objects - under this `CLUSTER`. ",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
