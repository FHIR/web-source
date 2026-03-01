# Any - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Any**

## Logical Model: Any ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/Any | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:Any |

 
Abstract ancestor class for all other classes. Usually maps to a type like Any or Object in an object-oriented technology. Defined here to provide value and reference equality semantics. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Derived from this Logical Model: [ACCESS_CONTROL_SETTINGS](StructureDefinition-ACCESS-CONTROL-SETTINGS.md), [ADDRESSED_MESSAGE](StructureDefinition-ADDRESSED-MESSAGE.md), [ARCHETYPED](StructureDefinition-ARCHETYPED.md), [AUDIT_DETAILS](StructureDefinition-AUDIT-DETAILS.md)...Show 37 more,[AUTHORED_RESOURCE](StructureDefinition-AUTHORED-RESOURCE.md),[BASIC_DEFINITIONS](StructureDefinition-BASIC-DEFINITIONS.md),[CODE_PHRASE](StructureDefinition-CODE-PHRASE.md),[CODE_SET_ACCESS](StructureDefinition-CODE-SET-ACCESS.md),[CONTRIBUTION](StructureDefinition-CONTRIBUTION.md),[EHR](StructureDefinition-EHR.md),[EXTRACT_ENTITY_MANIFEST](StructureDefinition-EXTRACT-ENTITY-MANIFEST.md),[EXTRACT_ERROR](StructureDefinition-EXTRACT-ERROR.md),[EXTRACT_MANIFEST](StructureDefinition-EXTRACT-MANIFEST.md),[EXTRACT_PARTICIPATION](StructureDefinition-EXTRACT-PARTICIPATION.md),[EXTRACT_SPEC](StructureDefinition-EXTRACT-SPEC.md),[EXTRACT_UPDATE_SPEC](StructureDefinition-EXTRACT-UPDATE-SPEC.md),[EXTRACT_VERSION_SPEC](StructureDefinition-EXTRACT-VERSION-SPEC.md),[FEEDER_AUDIT_DETAILS](StructureDefinition-FEEDER-AUDIT-DETAILS.md),[FEEDER_AUDIT](StructureDefinition-FEEDER-AUDIT.md),[ITEM_TAG](StructureDefinition-ITEM-TAG.md),[LINK](StructureDefinition-LINK.md),[MEASUREMENT_SERVICE](StructureDefinition-MEASUREMENT-SERVICE.md),[MESSAGE_CONTENT](StructureDefinition-MESSAGE-CONTENT.md),[MESSAGE](StructureDefinition-MESSAGE.md),[OPENEHR_CODE_SET_IDENTIFIERS](StructureDefinition-OPENEHR-CODE-SET-IDENTIFIERS.md),[OPENEHR_TERMINOLOGY_GROUP_IDENTIFIERS](StructureDefinition-OPENEHR-TERMINOLOGY-GROUP-IDENTIFIERS.md),[PARTICIPATION](StructureDefinition-PARTICIPATION.md),[PARTY_PROXY](StructureDefinition-PARTY-PROXY.md),[PATHABLE](StructureDefinition-PATHABLE.md),[REFERENCE_RANGE](StructureDefinition-REFERENCE-RANGE.md),[RESOURCE_DESCRIPTION_ITEM](StructureDefinition-RESOURCE-DESCRIPTION-ITEM.md),[RESOURCE_DESCRIPTION](StructureDefinition-RESOURCE-DESCRIPTION.md),[REVISION_HISTORY_ITEM](StructureDefinition-REVISION-HISTORY-ITEM.md),[REVISION_HISTORY](StructureDefinition-REVISION-HISTORY.md),[SYNC_EXTRACT_SPEC](StructureDefinition-SYNC-EXTRACT-SPEC.md),[TERM_MAPPING](StructureDefinition-TERM-MAPPING.md),[TERMINOLOGY_ACCESS](StructureDefinition-TERMINOLOGY-ACCESS.md),[TRANSLATION_DETAILS](StructureDefinition-TRANSLATION-DETAILS.md),[UID](StructureDefinition-UID.md),[VERSION](StructureDefinition-VERSION.md)and[VERSIONED_OBJECT](StructureDefinition-VERSIONED-OBJECT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/Any)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-Any.csv), [Excel](StructureDefinition-Any.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "Any",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-replace-cardinality"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/Any",
  "version" : "0.1.0-snapshot",
  "name" : "Any",
  "title" : "Any",
  "status" : "active",
  "experimental" : false,
  "date" : "2024-12-31T18:45:58+10:00",
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
  "description" : "Abstract ancestor class for all other classes. Usually maps to a type like Any or Object in an object-oriented technology. Defined here to provide value and reference equality semantics.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/Any",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "Any",
        "path" : "Any",
        "short" : "Abstract ancestor class for all other classes",
        "definition" : "Abstract ancestor class for all other classes. Usually maps to a type like Any or Object in an object-oriented technology. Defined here to provide value and reference equality semantics.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
