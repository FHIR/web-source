# ATTESTATION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ATTESTATION**

## Logical Model: ATTESTATION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ATTESTATION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ATTESTATION |

 
Record an attestation of a party (the committer) to item(s) of record content. An attestation is an explicit signing by one healthcare agent of particular content for various particular purposes, including: 
* for authorisation of a controlled substance or procedure (e.g. sectioning of patient under mental health act);
* witnessing of content by senior clinical professional;
* indicating acknowledgement of content by intended recipient, e.g. GP who ordered a test result.
 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_attestation_class)

**Usages:**

* Use this Logical Model: [ORIGINAL_VERSION](StructureDefinition-ORIGINAL-VERSION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ATTESTATION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ATTESTATION.csv), [Excel](StructureDefinition-ATTESTATION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ATTESTATION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_attestation_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ATTESTATION",
  "version" : "0.1.0-snapshot",
  "name" : "ATTESTATION",
  "title" : "ATTESTATION",
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
  "description" : "Record an attestation of a party (the committer) to item(s) of record content. An attestation is an explicit signing by one healthcare agent of particular content for various particular purposes, including:\n\n* for authorisation of a controlled substance or procedure (e.g. sectioning of patient under mental health act); \n* witnessing of content by senior clinical professional; \n* indicating acknowledgement of content by intended recipient, e.g. GP who ordered a test result. \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ATTESTATION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ATTESTATION",
        "path" : "ATTESTATION",
        "short" : "Record an attestation of a party (the committer) to item(s) of record content.",
        "definition" : "Record an attestation of a party (the committer) to item(s) of record content. An attestation is an explicit signing by one healthcare agent of particular content for various particular purposes, including:\n\n* for authorisation of a controlled substance or procedure (e.g. sectioning of patient under mental health act); \n* witnessing of content by senior clinical professional; \n* indicating acknowledgement of content by intended recipient, e.g. GP who ordered a test result. \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Items_valid",
            "severity" : "error",
            "human" : "Items valid must be present",
            "expression" : "items.exists() implies items.empty().not()"
          },
          {
            "key" : "Reason_valid",
            "severity" : "error",
            "human" : "Reason valid must satisfy conditional constraints",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ATTESTATION.attested-view",
        "path" : "ATTESTATION.attested_view",
        "short" : "Optional visual representation of content attested e.",
        "definition" : "Optional visual representation of content attested e.g. screen image. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-MULTIMEDIA"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ATTESTATION.proof",
        "path" : "ATTESTATION.proof",
        "short" : "Proof of attestation.",
        "definition" : "Proof of attestation. ",
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
        "id" : "ATTESTATION.items",
        "path" : "ATTESTATION.items",
        "short" : "Items attested, expressed as fully qualified runtime paths to the items in question.",
        "definition" : "Items attested, expressed as fully qualified runtime paths to the items in question. Although not recommended, these may include fine-grained items which have been attested in some other system. Otherwise it is assumed to be for the entire VERSION with which it is associated. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-EHR-URI"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ATTESTATION.reason",
        "path" : "ATTESTATION.reason",
        "short" : "Reason of this attestation.",
        "definition" : "Reason of this attestation. Optionally coded by the openEHR Terminology group  attestation reason ; includes values like  authorisation ,  witness  etc. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ATTESTATION.is-pending",
        "path" : "ATTESTATION.is_pending",
        "short" : "True if this attestation is outstanding; False means it has been completed.",
        "definition" : "True if this attestation is outstanding; False means it has been completed.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
