# ACTOR - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ACTOR**

## Logical Model: ACTOR ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ACTOR | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ACTOR |

 
Ancestor of all real-world types, including people and organisations. An actor is any real-world entity capable of taking on a role. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/demographic.html#_actor_class)

**Usages:**

* Derived from this Logical Model: [AGENT](StructureDefinition-AGENT.md), [GROUP](StructureDefinition-GROUP.md), [ORGANISATION](StructureDefinition-ORGANISATION.md) and [PERSON](StructureDefinition-PERSON.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ACTOR)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ACTOR.csv), [Excel](StructureDefinition-ACTOR.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ACTOR",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/demographic.html#_actor_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#type"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ACTOR",
  "version" : "0.1.0-snapshot",
  "name" : "ACTOR",
  "title" : "ACTOR",
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
  "description" : "Ancestor of all real-world types, including people and organisations. An actor is any real-world entity capable of taking on a role.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ACTOR",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PARTY",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ACTOR",
        "path" : "ACTOR",
        "short" : "Ancestor of all real-world types, including people and organisations.",
        "definition" : "Ancestor of all real-world types, including people and organisations. An actor is any real-world entity capable of taking on a role.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Roles_valid",
            "severity" : "error",
            "human" : "Roles valid must be present",
            "expression" : "roles.exists() implies roles.empty().not()"
          },
          {
            "key" : "Legal_identity_exists",
            "severity" : "error",
            "human" : "Legal identity exists",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ACTOR.languages",
        "path" : "ACTOR.languages",
        "short" : "Languages which can be used to communicate with this actor, in preferred order of use (if known, else order irrelevant).",
        "definition" : "Languages which can be used to communicate with this actor, in preferred order of use (if known, else order irrelevant).",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ACTOR.roles",
        "path" : "ACTOR.roles",
        "short" : "Identifiers of the Version container for each Role played by this Party.",
        "definition" : "Identifiers of the Version container for each Role played by this Party.",
        "min" : 0,
        "max" : "*",
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
