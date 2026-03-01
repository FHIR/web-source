# HIER_OBJECT_ID - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **HIER_OBJECT_ID**

## Logical Model: HIER_OBJECT_ID 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:HIER_OBJECT_ID |

 
Concrete type corresponding to hierarchical identifiers of the form defined by UID_BASED_ID. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/base_types.html#_hier_object_id_class)

**Usages:**

* Use this Logical Model: [CONTRIBUTION](StructureDefinition-CONTRIBUTION.md), [EHR](StructureDefinition-EHR.md), [EXTRACT_ACTION_REQUEST](StructureDefinition-EXTRACT-ACTION-REQUEST.md), [EXTRACT_REQUEST](StructureDefinition-EXTRACT-REQUEST.md)...Show 3 more,[EXTRACT](StructureDefinition-EXTRACT.md),[SYNC_EXTRACT_SPEC](StructureDefinition-SYNC-EXTRACT-SPEC.md)and[VERSIONED_OBJECT](StructureDefinition-VERSIONED-OBJECT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/HIER-OBJECT-ID)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-HIER-OBJECT-ID.csv), [Excel](StructureDefinition-HIER-OBJECT-ID.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "HIER-OBJECT-ID",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/base_types.html#_hier_object_id_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID",
  "version" : "0.1.0-snapshot",
  "name" : "HIER_OBJECT_ID",
  "title" : "HIER_OBJECT_ID",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-06-27T18:45:58+10:00",
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
  "description" : "Concrete type corresponding to hierarchical identifiers of the form defined by UID_BASED_ID.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/HIER_OBJECT_ID",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/UID-BASED-ID",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "HIER_OBJECT_ID",
        "path" : "HIER_OBJECT_ID",
        "short" : "Concrete type corresponding to hierarchical identifiers of the form defined by UID_BASED_ID",
        "definition" : "Concrete type corresponding to hierarchical identifiers of the form defined by UID_BASED_ID.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
