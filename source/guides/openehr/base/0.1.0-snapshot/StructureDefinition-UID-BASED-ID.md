# UID_BASED_ID - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **UID_BASED_ID**

## Logical Model: UID_BASED_ID ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/UID-BASED-ID | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:UID_BASED_ID |

 
Abstract model of UID-based identifiers consisting of a root part and an optional extension; lexical form: root '::' extension 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/base_types.html#_uid_based_id_class)

**Usages:**

* Derived from this Logical Model: [HIER_OBJECT_ID](StructureDefinition-HIER-OBJECT-ID.md) and [OBJECT_VERSION_ID](StructureDefinition-OBJECT-VERSION-ID.md)
* Use this Logical Model: [ITEM_TAG](StructureDefinition-ITEM-TAG.md), [LOCATABLE_REF](StructureDefinition-LOCATABLE-REF.md) and [LOCATABLE](StructureDefinition-LOCATABLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/UID-BASED-ID)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-UID-BASED-ID.csv), [Excel](StructureDefinition-UID-BASED-ID.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "UID-BASED-ID",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/base_types.html#_uid_based_id_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/UID-BASED-ID",
  "version" : "0.1.0-snapshot",
  "name" : "UID_BASED_ID",
  "title" : "UID_BASED_ID",
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
  "description" : "Abstract model of UID-based identifiers consisting of a root part and an optional extension; lexical form: root '::' extension",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/UID_BASED_ID",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/OBJECT-ID",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "UID_BASED_ID",
        "path" : "UID_BASED_ID",
        "short" : "Abstract model of UID-based identifiers consisting of a root part and an optional extension; lexical form: root '::' extension",
        "definition" : "Abstract model of UID-based identifiers consisting of a root part and an optional extension; lexical form: root '::' extension.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
