# AUDIT_DETAILS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **AUDIT_DETAILS**

## Logical Model: AUDIT_DETAILS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:AUDIT_DETAILS |

 
The set of attributes required to document the committal of an information item to a repository. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_audit_details_class)

**Usages:**

* Derived from this Logical Model: [ATTESTATION](StructureDefinition-ATTESTATION.md)
* Use this Logical Model: [CONTRIBUTION](StructureDefinition-CONTRIBUTION.md), [MESSAGE](StructureDefinition-MESSAGE.md), [REVISION_HISTORY_ITEM](StructureDefinition-REVISION-HISTORY-ITEM.md) and [VERSION](StructureDefinition-VERSION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/AUDIT-DETAILS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-AUDIT-DETAILS.csv), [Excel](StructureDefinition-AUDIT-DETAILS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "AUDIT-DETAILS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_audit_details_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/AUDIT-DETAILS",
  "version" : "0.1.0-snapshot",
  "name" : "AUDIT_DETAILS",
  "title" : "AUDIT_DETAILS",
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
  "description" : "The set of attributes required to document the committal of an information item to a repository. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/AUDIT_DETAILS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "AUDIT_DETAILS",
        "path" : "AUDIT_DETAILS",
        "short" : "The set of attributes required to document the committal of an information item to a repository.",
        "definition" : "The set of attributes required to document the committal of an information item to a repository. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "System_id_valid",
            "severity" : "error",
            "human" : "System id valid must not be empty",
            "expression" : "system_id.empty().not()"
          },
          {
            "key" : "Change_type_valid",
            "severity" : "error",
            "human" : "Change type valid",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUDIT_DETAILS.system-id",
        "path" : "AUDIT_DETAILS.system_id",
        "short" : "Identifier of the logical EHR system where the change was committed.",
        "definition" : "Identifier of the logical EHR system where the change was committed. This is almost always owned by the organisation legally responsible for the EHR, and is distinct from any application, or any hosting infrastructure.",
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
        "id" : "AUDIT_DETAILS.time-committed",
        "path" : "AUDIT_DETAILS.time_committed",
        "short" : "Time of committal of the item.",
        "definition" : "Time of committal of the item. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUDIT_DETAILS.change-type",
        "path" : "AUDIT_DETAILS.change_type",
        "short" : "Type of change.",
        "definition" : "Type of change. Coded using the openEHR Terminology  audit change type  group.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUDIT_DETAILS.description",
        "path" : "AUDIT_DETAILS.description",
        "short" : "Reason for committal.",
        "definition" : "Reason for committal. This may be used to qualify the value in the `_change_type_` field. For example, if the change affects only the EHR directory, this field might be used to indicate 'Folder \"episode 2018-02-16\" added' or similar.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "AUDIT_DETAILS.committer",
        "path" : "AUDIT_DETAILS.committer",
        "short" : "Identity and optional reference into identity management service, of user who committed the item.",
        "definition" : "Identity and optional reference into identity management service, of user who committed the item. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
