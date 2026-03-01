# FEEDER_AUDIT_DETAILS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **FEEDER_AUDIT_DETAILS**

## Logical Model: FEEDER_AUDIT_DETAILS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT-DETAILS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:FEEDER_AUDIT_DETAILS |

 
Audit details for any system in a feeder system chain. Audit details here means the general notion of who/where/when the information item to which the audit is attached was created. None of the attributes is defined as mandatory, however, in different scenarios, various combinations of attributes will usually be mandatory. This can be controlled by specifying feeder audit details in legacy archetypes. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_feeder_audit_details_class)

**Usages:**

* Use this Logical Model: [FEEDER_AUDIT](StructureDefinition-FEEDER-AUDIT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/FEEDER-AUDIT-DETAILS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-FEEDER-AUDIT-DETAILS.csv), [Excel](StructureDefinition-FEEDER-AUDIT-DETAILS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "FEEDER-AUDIT-DETAILS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_feeder_audit_details_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT-DETAILS",
  "version" : "0.1.0-snapshot",
  "name" : "FEEDER_AUDIT_DETAILS",
  "title" : "FEEDER_AUDIT_DETAILS",
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
  "description" : "Audit details for any system in a feeder system chain. Audit details here means the general notion of who/where/when the information item to which the audit is attached was created. None of the attributes is defined as mandatory, however, in different scenarios, various combinations of attributes will usually be mandatory. This can be controlled by specifying feeder audit details in legacy archetypes. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/FEEDER_AUDIT_DETAILS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "FEEDER_AUDIT_DETAILS",
        "path" : "FEEDER_AUDIT_DETAILS",
        "short" : "Audit details for any system in a feeder system chain.",
        "definition" : "Audit details for any system in a feeder system chain. Audit details here means the general notion of who/where/when the information item to which the audit is attached was created. None of the attributes is defined as mandatory, however, in different scenarios, various combinations of attributes will usually be mandatory. This can be controlled by specifying feeder audit details in legacy archetypes. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "System_id_valid",
            "severity" : "error",
            "human" : "System id valid must not be empty",
            "expression" : "system_id.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT_DETAILS.system-id",
        "path" : "FEEDER_AUDIT_DETAILS.system_id",
        "short" : "Identifier of the system which handled the information item.",
        "definition" : "Identifier of the system which handled the information item. This is the IT system owned by the organisation legally responsible for handling the data, and at which the data were previously created or passed by an earlier system.\n",
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
        "id" : "FEEDER_AUDIT_DETAILS.location",
        "path" : "FEEDER_AUDIT_DETAILS.location",
        "short" : "Identifier of the particular site/facility within an organisation which handled the item.",
        "definition" : "Identifier of the particular site/facility within an organisation which handled the item. For computability, this identifier needs to be e.g. a PKI identifier which can be included in the identifier list of the `PARTY_IDENTIFIED` object. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTIFIED"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT_DETAILS.subject",
        "path" : "FEEDER_AUDIT_DETAILS.subject",
        "short" : "Identifiers for subject of the received information item.",
        "definition" : "Identifiers for subject of the received information item. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-PROXY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT_DETAILS.provider",
        "path" : "FEEDER_AUDIT_DETAILS.provider",
        "short" : "Optional provider(s) who created, committed, forwarded or otherwise handled the item.",
        "definition" : "Optional provider(s) who created, committed, forwarded or otherwise handled the item. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTIFIED"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT_DETAILS.time",
        "path" : "FEEDER_AUDIT_DETAILS.time",
        "short" : "Time of handling the item.",
        "definition" : "Time of handling the item. For an originating system, this will be time of creation, for an intermediate feeder system, this will be a time of accession or other time of handling, where available.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT_DETAILS.version-id",
        "path" : "FEEDER_AUDIT_DETAILS.version_id",
        "short" : "Any identifier used in the system such as  \"interim\" ,  \"final\" , or numeric versions if available.",
        "definition" : "Any identifier used in the system such as  \"interim\" ,  \"final\" , or numeric versions if available. ",
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
        "id" : "FEEDER_AUDIT_DETAILS.other-details",
        "path" : "FEEDER_AUDIT_DETAILS.other_details",
        "short" : "Optional attribute to carry any custom meta-data.",
        "definition" : "Optional attribute to carry any custom meta-data. May be archetyped.",
        "min" : 0,
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
