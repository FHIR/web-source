# PARTY_IDENTIFIED - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTY_IDENTIFIED**

## Logical Model: PARTY_IDENTIFIED 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTY-IDENTIFIED | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTY_IDENTIFIED |

 
Proxy data for an identified party other than the subject of the record, minimally consisting of human-readable identifier(s), such as name, formal (and possibly computable) identifiers such as NHS number, and an optional link to external data. There must be at least one of name, identifier or external_ref present. 
Used to describe parties where only identifiers may be known, and there is no entry at all in the demographic system (or even no demographic system). Typically for health care providers, e.g. name and provider number of an institution. 
Should not be used to include patient identifying information. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_party_identified_class)

**Usages:**

* Derived from this Logical Model: [PARTY_RELATED](StructureDefinition-PARTY-RELATED.md)
* Use this Logical Model: [EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md) and [FEEDER_AUDIT_DETAILS](StructureDefinition-FEEDER-AUDIT-DETAILS.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTY-IDENTIFIED)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTY-IDENTIFIED.csv), [Excel](StructureDefinition-PARTY-IDENTIFIED.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTY-IDENTIFIED",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_party_identified_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTIFIED",
  "version" : "0.1.0-snapshot",
  "name" : "PARTY_IDENTIFIED",
  "title" : "PARTY_IDENTIFIED",
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
  "description" : "Proxy data for an identified party other than the subject of the record, minimally consisting of human-readable identifier(s), such as name, formal (and possibly computable) identifiers such as NHS number, and an optional link to external data. There must be at least one of name, identifier or external_ref present.\n\nUsed to describe parties where only identifiers may be known, and there is no entry at all in the demographic system (or even no demographic system). Typically for health care providers, e.g. name and provider number of an institution. \n\nShould not be used to include patient identifying information. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTY_IDENTIFIED",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTY_IDENTIFIED",
        "path" : "PARTY_IDENTIFIED",
        "short" : "Proxy data for an identified party other than the subject of the record, minimally consisting of human-readable identifier(s), such as name, formal (and possibly computable) identifiers such as NHS number, and an optional link to external data.",
        "definition" : "Proxy data for an identified party other than the subject of the record, minimally consisting of human-readable identifier(s), such as name, formal (and possibly computable) identifiers such as NHS number, and an optional link to external data. There must be at least one of name, identifier or external_ref present.\n\nUsed to describe parties where only identifiers may be known, and there is no entry at all in the demographic system (or even no demographic system). Typically for health care providers, e.g. name and provider number of an institution. \n\nShould not be used to include patient identifying information. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Basic_validity",
            "severity" : "error",
            "human" : "Basic validity must be present",
            "expression" : "name.exists() or identifiers.exists() or external_ref.exists()"
          },
          {
            "key" : "Name_valid",
            "severity" : "error",
            "human" : "Name valid must be present",
            "expression" : "name.exists() implies name.empty().not()"
          },
          {
            "key" : "Identifiers_valid",
            "severity" : "error",
            "human" : "Identifiers valid must be present",
            "expression" : "identifiers.exists() implies identifiers.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_IDENTIFIED.name",
        "path" : "PARTY_IDENTIFIED.name",
        "short" : "Optional human-readable name (in String form).",
        "definition" : "Optional human-readable name (in String form).",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_IDENTIFIED.identifiers",
        "path" : "PARTY_IDENTIFIED.identifiers",
        "short" : "One or more formal identifiers (possibly computable).",
        "definition" : "One or more formal identifiers (possibly computable). \n",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-IDENTIFIER"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
