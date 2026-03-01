# REVISION_HISTORY_ITEM - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **REVISION_HISTORY_ITEM**

## Logical Model: REVISION_HISTORY_ITEM 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/REVISION-HISTORY-ITEM | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:REVISION_HISTORY_ITEM |

 
An entry in a revision history, corresponding to a version from a versioned container. Consists of`AUDIT_DETAILS`instances with revision identifier of the revision to which the`AUDIT_DETAILS`instance belongs. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_revision_history_item_class)

**Usages:**

* Use this Logical Model: [REVISION_HISTORY](StructureDefinition-REVISION-HISTORY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/REVISION-HISTORY-ITEM)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-REVISION-HISTORY-ITEM.csv), [Excel](StructureDefinition-REVISION-HISTORY-ITEM.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "REVISION-HISTORY-ITEM",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_revision_history_item_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/REVISION-HISTORY-ITEM",
  "version" : "0.1.0-snapshot",
  "name" : "REVISION_HISTORY_ITEM",
  "title" : "REVISION_HISTORY_ITEM",
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
  "description" : "An entry in a revision history, corresponding to a version from a versioned container. Consists of `AUDIT_DETAILS` instances with revision identifier of the revision to which the `AUDIT_DETAILS` instance belongs. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/REVISION_HISTORY_ITEM",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "REVISION_HISTORY_ITEM",
        "path" : "REVISION_HISTORY_ITEM",
        "short" : "An entry in a revision history, corresponding to a version from a versioned container.",
        "definition" : "An entry in a revision history, corresponding to a version from a versioned container. Consists of `AUDIT_DETAILS` instances with revision identifier of the revision to which the `AUDIT_DETAILS` instance belongs. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Audit_valid",
            "severity" : "error",
            "human" : "Audit valid must not be empty",
            "expression" : "audits.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "REVISION_HISTORY_ITEM.version-id",
        "path" : "REVISION_HISTORY_ITEM.version_id",
        "short" : "Version identifier for this revision.",
        "definition" : "Version identifier for this revision. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-VERSION-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "REVISION_HISTORY_ITEM.audits",
        "path" : "REVISION_HISTORY_ITEM.audits",
        "short" : "The audits for this revision; there will always be at least one commit audit (which may itself be an `ATTESTATION`), there may also be further attestations.",
        "definition" : "The audits for this revision; there will always be at least one commit audit (which may itself be an `ATTESTATION`), there may also be further attestations. ",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
