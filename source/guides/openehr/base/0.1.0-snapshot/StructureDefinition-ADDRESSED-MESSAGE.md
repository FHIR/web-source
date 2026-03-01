# ADDRESSED_MESSAGE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ADDRESSED_MESSAGE**

## Logical Model: ADDRESSED_MESSAGE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ADDRESSED-MESSAGE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ADDRESSED_MESSAGE |

 
The concept of a message addressed to nominated recipients. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ADDRESSED-MESSAGE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ADDRESSED-MESSAGE.csv), [Excel](StructureDefinition-ADDRESSED-MESSAGE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ADDRESSED-MESSAGE",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ADDRESSED-MESSAGE",
  "version" : "0.1.0-snapshot",
  "name" : "ADDRESSED_MESSAGE",
  "title" : "ADDRESSED_MESSAGE",
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
  "description" : "The concept of a message addressed to nominated recipients.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ADDRESSED_MESSAGE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ADDRESSED_MESSAGE",
        "path" : "ADDRESSED_MESSAGE",
        "short" : "The concept of a message addressed to nominated recipients.",
        "definition" : "The concept of a message addressed to nominated recipients.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "ADDRESSED_MESSAGE.sender",
        "path" : "ADDRESSED_MESSAGE.sender",
        "short" : "Party sending the message.",
        "definition" : "Party sending the message.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ADDRESSED_MESSAGE.sender-reference",
        "path" : "ADDRESSED_MESSAGE.sender_reference",
        "short" : "Identification of message used by sender.",
        "definition" : "Identification of message used by sender. This will be the same no matter how many times this message is sent to these recipients.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ADDRESSED_MESSAGE.addressees",
        "path" : "ADDRESSED_MESSAGE.addressees",
        "short" : "Intended recipients, in the form of internet addresses.",
        "definition" : "Intended recipients, in the form of internet addresses.",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ADDRESSED_MESSAGE.urgency",
        "path" : "ADDRESSED_MESSAGE.urgency",
        "short" : "Urgency with which destination should deal with message:\n\n* -1 - low\n* 0 - normal\n* 1 - high",
        "definition" : "Urgency with which destination should deal with message:\n\n* -1 - low\n* 0 - normal\n* 1 - high",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ADDRESSED_MESSAGE.message",
        "path" : "ADDRESSED_MESSAGE.message",
        "short" : "The content of the message.",
        "definition" : "The content of the message.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/MESSAGE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
