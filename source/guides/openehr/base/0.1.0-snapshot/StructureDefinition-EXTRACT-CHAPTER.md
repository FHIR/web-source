# EXTRACT_CHAPTER - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_CHAPTER**

## Logical Model: EXTRACT_CHAPTER 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-CHAPTER | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_CHAPTER |

 
One content chapter of an Extract; contains information relating to only one entity. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* Derived from this Logical Model: [EXTRACT_ENTITY_CHAPTER](StructureDefinition-EXTRACT-ENTITY-CHAPTER.md)
* Use this Logical Model: [EXTRACT](StructureDefinition-EXTRACT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-CHAPTER)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-CHAPTER.csv), [Excel](StructureDefinition-EXTRACT-CHAPTER.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-CHAPTER",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-CHAPTER",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_CHAPTER",
  "title" : "EXTRACT_CHAPTER",
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
  "description" : "One content chapter of an Extract; contains information relating to only one entity.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_CHAPTER",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_CHAPTER",
        "path" : "EXTRACT_CHAPTER",
        "short" : "One content chapter of an Extract; contains information relating to only one entity.",
        "definition" : "One content chapter of an Extract; contains information relating to only one entity.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_CHAPTER.items",
        "path" : "EXTRACT_CHAPTER.items",
        "short" : "The information content of this chapter.",
        "definition" : "The information content of this chapter.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-ITEM"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
