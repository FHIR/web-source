# PARTY_PROXY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTY_PROXY**

## Logical Model: PARTY_PROXY ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTY-PROXY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTY_PROXY |

 
Abstract concept of a proxy description of a party, including an optional link to data for this party in a demographic or other identity management system. Sub- typed into`PARTY_IDENTIFIED`and`PARTY_SELF`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_party_proxy_class)

**Usages:**

* Derived from this Logical Model: [PARTY_IDENTIFIED](StructureDefinition-PARTY-IDENTIFIED.md) and [PARTY_SELF](StructureDefinition-PARTY-SELF.md)
* Use this Logical Model: [AUDIT_DETAILS](StructureDefinition-AUDIT-DETAILS.md), [COMPOSITION](StructureDefinition-COMPOSITION.md), [ENTRY](StructureDefinition-ENTRY.md), [FEEDER_AUDIT_DETAILS](StructureDefinition-FEEDER-AUDIT-DETAILS.md)...Show 2 more,[MESSAGE](StructureDefinition-MESSAGE.md)and[PARTICIPATION](StructureDefinition-PARTICIPATION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTY-PROXY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTY-PROXY.csv), [Excel](StructureDefinition-PARTY-PROXY.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTY-PROXY",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_party_proxy_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY",
  "version" : "0.1.0-snapshot",
  "name" : "PARTY_PROXY",
  "title" : "PARTY_PROXY",
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
  "description" : "Abstract concept of a proxy description of a party, including an optional link to data for this party in a demographic or other identity management system. Sub- typed into `PARTY_IDENTIFIED` and `PARTY_SELF`. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTY_PROXY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTY_PROXY",
        "path" : "PARTY_PROXY",
        "short" : "Abstract concept of a proxy description of a party, including an optional link to data for this party in a demographic or other identity management system.",
        "definition" : "Abstract concept of a proxy description of a party, including an optional link to data for this party in a demographic or other identity management system. Sub- typed into `PARTY_IDENTIFIED` and `PARTY_SELF`. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "PARTY_PROXY.external-ref",
        "path" : "PARTY_PROXY.external_ref",
        "short" : "Optional reference to more detailed demographic or identification information for this party, in an external system.",
        "definition" : "Optional reference to more detailed demographic or identification information for this party, in an external system. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-REF"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
