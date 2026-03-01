# OPENEHR_DEFINITIONS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **OPENEHR_DEFINITIONS**

## Logical Model: OPENEHR_DEFINITIONS ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/OPENEHR-DEFINITIONS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:OPENEHR_DEFINITIONS |

 
Inheritance class to provide access to constants defined in other packages. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Derived from this Logical Model: [DATA_VALUE](StructureDefinition-DATA-VALUE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/OPENEHR-DEFINITIONS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-OPENEHR-DEFINITIONS.csv), [Excel](StructureDefinition-OPENEHR-DEFINITIONS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "OPENEHR-DEFINITIONS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/OPENEHR-DEFINITIONS",
  "version" : "0.1.0-snapshot",
  "name" : "OPENEHR_DEFINITIONS",
  "title" : "OPENEHR_DEFINITIONS",
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
  "description" : "Inheritance class to provide access to constants defined in other packages.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/OPENEHR_DEFINITIONS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/BASIC-DEFINITIONS",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "OPENEHR_DEFINITIONS",
        "path" : "OPENEHR_DEFINITIONS",
        "short" : "Inheritance class to provide access to constants defined in other packages",
        "definition" : "Inheritance class to provide access to constants defined in other packages.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "OPENEHR_DEFINITIONS.Local-terminology-id",
        "path" : "OPENEHR_DEFINITIONS.Local_terminology_id",
        "short" : "Predefined terminology identifier",
        "definition" : "Predefined terminology identifier to indicate it is local to the knowledge resource in which it occurs, e.g. an archetype",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
