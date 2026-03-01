# VERSIONED_COMPOSITION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **VERSIONED_COMPOSITION**

## Logical Model: VERSIONED_COMPOSITION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/VERSIONED-COMPOSITION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:VERSIONED_COMPOSITION |

 
Version-controlled composition abstraction, defined by inheriting`VERSIONED_OBJECT<COMPOSITION>`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_versioned_composition_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/VERSIONED-COMPOSITION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-VERSIONED-COMPOSITION.csv), [Excel](StructureDefinition-VERSIONED-COMPOSITION.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "VERSIONED-COMPOSITION",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_persistent",
      "name" : "is_persistent",
      "title" : "is_persistent",
      "status" : "active",
      "kind" : "operation",
      "description" : "Indicates whether this composition set is persistent; derived from first version.",
      "code" : "is_persistent",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_versioned_composition_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_persistent"
    },
    {
      "extension" : [
        {
          "url" : "name",
          "valueCode" : "T"
        },
        {
          "url" : "type",
          "valueUri" : "http://openehr.org/fhir/StructureDefinition/Any"
        }
      ],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/VERSIONED-COMPOSITION",
  "version" : "0.1.0-snapshot",
  "name" : "VERSIONED_COMPOSITION",
  "title" : "VERSIONED_COMPOSITION",
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
  "description" : "Version-controlled composition abstraction, defined by inheriting `VERSIONED_OBJECT<COMPOSITION>`. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/VERSIONED_COMPOSITION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/VERSIONED-OBJECT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "VERSIONED_COMPOSITION",
        "path" : "VERSIONED_COMPOSITION",
        "short" : "Version-controlled composition abstraction, defined by inheriting `VERSIONED_OBJECT<COMPOSITION>`.",
        "definition" : "Version-controlled composition abstraction, defined by inheriting `VERSIONED_OBJECT<COMPOSITION>`. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Archetype_node_id_valid",
            "severity" : "error",
            "human" : "Archetype node id valid",
            "expression" : "for_all v in all_versions() | v.archetype_node_id.is_equal (all_versions().first().archetype_node_id)"
          },
          {
            "key" : "Persistent_validity",
            "severity" : "error",
            "human" : "Persistent validity",
            "expression" : "for_all v in all_versions() | v.is_persistent() = all_versions().first().data.is_persistent()"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
