# ITEM_STRUCTURE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ITEM_STRUCTURE**

## Logical Model: ITEM_STRUCTURE ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ITEM_STRUCTURE |

 
Abstract parent class of all spatial data types. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_structure_class)

**Usages:**

* Derived from this Logical Model: [ITEM_LIST](StructureDefinition-ITEM-LIST.md), [ITEM_SINGLE](StructureDefinition-ITEM-SINGLE.md), [ITEM_TABLE](StructureDefinition-ITEM-TABLE.md) and [ITEM_TREE](StructureDefinition-ITEM-TREE.md)
* Use this Logical Model: [ACTION](StructureDefinition-ACTION.md), [ACTIVITY](StructureDefinition-ACTIVITY.md), [ADDRESS](StructureDefinition-ADDRESS.md), [ADMIN_ENTRY](StructureDefinition-ADMIN-ENTRY.md)...Show 14 more,[CAPABILITY](StructureDefinition-CAPABILITY.md),[CARE_ENTRY](StructureDefinition-CARE-ENTRY.md),[EHR_STATUS](StructureDefinition-EHR-STATUS.md),[EVALUATION](StructureDefinition-EVALUATION.md),[EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md),[EVENT](StructureDefinition-EVENT.md),[EXTRACT_SPEC](StructureDefinition-EXTRACT-SPEC.md),[FEEDER_AUDIT_DETAILS](StructureDefinition-FEEDER-AUDIT-DETAILS.md),[FOLDER](StructureDefinition-FOLDER.md),[HISTORY](StructureDefinition-HISTORY.md),[INSTRUCTION_DETAILS](StructureDefinition-INSTRUCTION-DETAILS.md),[PARTY_IDENTITY](StructureDefinition-PARTY-IDENTITY.md),[PARTY_RELATIONSHIP](StructureDefinition-PARTY-RELATIONSHIP.md)and[PARTY](StructureDefinition-PARTY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ITEM-STRUCTURE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ITEM-STRUCTURE.csv), [Excel](StructureDefinition-ITEM-STRUCTURE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ITEM-STRUCTURE",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_item_structure_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#as_hierarchy"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE",
  "version" : "0.1.0-snapshot",
  "name" : "ITEM_STRUCTURE",
  "title" : "ITEM_STRUCTURE",
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
  "description" : "Abstract parent class of all spatial data types. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ITEM_STRUCTURE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-STRUCTURE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ITEM_STRUCTURE",
        "path" : "ITEM_STRUCTURE",
        "short" : "Abstract parent class of all spatial data types.",
        "definition" : "Abstract parent class of all spatial data types. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
