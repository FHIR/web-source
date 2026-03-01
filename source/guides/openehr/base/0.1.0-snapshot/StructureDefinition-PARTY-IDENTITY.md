# PARTY_IDENTITY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTY_IDENTITY**

## Logical Model: PARTY_IDENTITY 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTY-IDENTITY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTY_IDENTITY |

 
An identity owned by a Party, such as a person name or company name, and which is used by the Party to identify itself. Actual structure is archetyped. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/demographic.html#_party_identity_class)

**Usages:**

* Use this Logical Model: [PARTY](StructureDefinition-PARTY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTY-IDENTITY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTY-IDENTITY.csv), [Excel](StructureDefinition-PARTY-IDENTITY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTY-IDENTITY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "purpose",
      "name" : "purpose",
      "title" : "purpose",
      "status" : "active",
      "kind" : "operation",
      "description" : "Purpose of identity, e.g. legal ,  stagename,  nickname,  tribal name,  trading name. Taken from value of inherited `_name_` attribute.",
      "code" : "purpose",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/demographic.html#_party_identity_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#purpose"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTITY",
  "version" : "0.1.0-snapshot",
  "name" : "PARTY_IDENTITY",
  "title" : "PARTY_IDENTITY",
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
  "description" : "An identity  owned  by a Party, such as a person name or company name, and which is used by the Party to identify itself. Actual structure is archetyped.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTY_IDENTITY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTY_IDENTITY",
        "path" : "PARTY_IDENTITY",
        "short" : "An identity  owned  by a Party, such as a person name or company name, and which is used by the Party to identify itself.",
        "definition" : "An identity  owned  by a Party, such as a person name or company name, and which is used by the Party to identify itself. Actual structure is archetyped.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Purpose_valid",
            "severity" : "error",
            "human" : "Purpose valid",
            "expression" : "purpose() = name"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_IDENTITY.details",
        "path" : "PARTY_IDENTITY.details",
        "short" : "The value of the identity.",
        "definition" : "The value of the identity. This will often taken the form of a parseable string or a small structure of strings.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
