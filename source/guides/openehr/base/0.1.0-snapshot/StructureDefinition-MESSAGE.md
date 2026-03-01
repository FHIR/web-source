# MESSAGE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **MESSAGE**

## Logical Model: MESSAGE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/MESSAGE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:MESSAGE |

 
A “message” is an authored, possibly signed, piece of content intended for one or more recipients. Since the recipient may or may not be known directly, recipients are specified in the`ADDRESSED_MESSAGE`class. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [ADDRESSED_MESSAGE](StructureDefinition-ADDRESSED-MESSAGE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/MESSAGE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-MESSAGE.csv), [Excel](StructureDefinition-MESSAGE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "MESSAGE",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/MESSAGE",
  "version" : "0.1.0-snapshot",
  "name" : "MESSAGE",
  "title" : "MESSAGE",
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
  "description" : "A “message” is an authored, possibly signed, piece of content intended for one or more recipients. Since the recipient may or may not be known directly, recipients are specified in the `ADDRESSED_MESSAGE` class.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/MESSAGE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "MESSAGE",
        "path" : "MESSAGE",
        "short" : "A “message” is an authored, possibly signed, piece of content intended for one or more recipients.",
        "definition" : "A “message” is an authored, possibly signed, piece of content intended for one or more recipients. Since the recipient may or may not be known directly, recipients are specified in the `ADDRESSED_MESSAGE` class.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "MESSAGE.audit",
        "path" : "MESSAGE.audit",
        "short" : "Details of who actually created the message and when.",
        "definition" : "Details of who actually created the message and when. This is the person who entered the data or otherwise caused the message to be created, or might be a piece of software.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "MESSAGE.author",
        "path" : "MESSAGE.author",
        "short" : "Party responsible for the message content, who may or may not be technically responsible for its creation (e.",
        "definition" : "Party responsible for the message content, who may or may not be technically responsible for its creation (e.g. by data entry etc).",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "MESSAGE.content",
        "path" : "MESSAGE.content",
        "short" : "Content of the message.",
        "definition" : "Content of the message.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/MESSAGE-CONTENT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "MESSAGE.signature",
        "path" : "MESSAGE.signature",
        "short" : "Optional signature by the author of message content in openPGP format.",
        "definition" : "Optional signature by the author of message content in openPGP format. The signature is created as a Hash and optional signing of the serialisation of this message object with this signature field Void.",
        "min" : 0,
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
