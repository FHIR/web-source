# FEEDER_AUDIT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **FEEDER_AUDIT**

## Logical Model: FEEDER_AUDIT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:FEEDER_AUDIT |

 
The`FEEDER_AUDIT`class defines the semantics of an audit trail which is constructed to describe the origin of data that have been transformed into openEHR form and committed to the system. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_feeder_audit_class)

**Usages:**

* Use this Logical Model: [LOCATABLE](StructureDefinition-LOCATABLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/FEEDER-AUDIT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-FEEDER-AUDIT.csv), [Excel](StructureDefinition-FEEDER-AUDIT.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "FEEDER-AUDIT",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_feeder_audit_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT",
  "version" : "0.1.0-snapshot",
  "name" : "FEEDER_AUDIT",
  "title" : "FEEDER_AUDIT",
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
  "description" : "The `FEEDER_AUDIT` class defines the semantics of an audit trail which is constructed to describe the origin of data that have been transformed into openEHR form and committed to the system. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/FEEDER_AUDIT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "FEEDER_AUDIT",
        "path" : "FEEDER_AUDIT",
        "short" : "The `FEEDER_AUDIT` class defines the semantics of an audit trail which is constructed to describe the origin of data that have been transformed into openEHR form and committed to the system.",
        "definition" : "The `FEEDER_AUDIT` class defines the semantics of an audit trail which is constructed to describe the origin of data that have been transformed into openEHR form and committed to the system. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT.originating-system-item-ids",
        "path" : "FEEDER_AUDIT.originating_system_item_ids",
        "short" : "Identifiers used for the item in the originating system, e.",
        "definition" : "Identifiers used for the item in the originating system, e.g. filler and placer ids. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-IDENTIFIER"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT.feeder-system-item-ids",
        "path" : "FEEDER_AUDIT.feeder_system_item_ids",
        "short" : "Identifiers used for the item in the feeder system, where the feeder system is distinct from the originating system.",
        "definition" : "Identifiers used for the item in the feeder system, where the feeder system is distinct from the originating system. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-IDENTIFIER"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT.original-content",
        "path" : "FEEDER_AUDIT.original_content",
        "short" : "Optional inline inclusion of or reference to original content corresponding to the openEHR content at this node.",
        "definition" : "Optional inline inclusion of or reference to original content corresponding to the openEHR content at this node. Typically a URI reference to a document or message in a persistent store associated with the EHR. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-ENCAPSULATED"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT.originating-system-audit",
        "path" : "FEEDER_AUDIT.originating_system_audit",
        "short" : "Any audit information for the information item from the originating system.",
        "definition" : "Any audit information for the information item from the originating system. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT-DETAILS"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "FEEDER_AUDIT.feeder-system-audit",
        "path" : "FEEDER_AUDIT.feeder_system_audit",
        "short" : "Any audit information for the information item from the feeder system, if different from the originating system.",
        "definition" : "Any audit information for the information item from the feeder system, if different from the originating system.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT-DETAILS"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
