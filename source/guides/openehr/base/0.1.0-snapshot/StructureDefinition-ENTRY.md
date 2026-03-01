# ENTRY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ENTRY**

## Logical Model: ENTRY ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ENTRY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ENTRY |

 
The abstract parent of all`ENTRY`subtypes. An`ENTRY`is the root of a logical item of hard clinical information created in the clinical statement context, within a clinical session. There can be numerous such contexts in a clinical session. Observations and other Entry types only ever document information captured/created in the event documented by the enclosing Composition. 
An`ENTRY`is also the minimal unit of information any query should return, since a whole`ENTRY`(including subparts) records spatial structure, timing information, and contextual information, as well as the subject and generator of the information. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_entry_class)

**Usages:**

* Derived from this Logical Model: [ADMIN_ENTRY](StructureDefinition-ADMIN-ENTRY.md) and [CARE_ENTRY](StructureDefinition-CARE-ENTRY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ENTRY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ENTRY.csv), [Excel](StructureDefinition-ENTRY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ENTRY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "subject_is_self",
      "name" : "subject_is_self",
      "title" : "subject_is_self",
      "status" : "active",
      "kind" : "operation",
      "description" : "Returns True if this Entry is about the subject of the EHR, in which case the subject attribute is of type PARTY_SELF.",
      "code" : "subject_is_self",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_entry_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#subject_is_self"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ENTRY",
  "version" : "0.1.0-snapshot",
  "name" : "ENTRY",
  "title" : "ENTRY",
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
  "description" : "The abstract parent of all `ENTRY` subtypes. An `ENTRY` is the root of a logical item of  hard  clinical information created in the  clinical statement  context, within a clinical session. There can be numerous such contexts in a clinical session. Observations and other Entry types only ever document information captured/created in the event documented by the enclosing Composition.\n\nAn `ENTRY` is also the minimal unit of information any query should return, since a whole `ENTRY` (including subparts) records spatial structure, timing information, and contextual information, as well as the subject and generator of the information. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ENTRY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/CONTENT-ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ENTRY",
        "path" : "ENTRY",
        "short" : "The abstract parent of all `ENTRY` subtypes.",
        "definition" : "The abstract parent of all `ENTRY` subtypes. An `ENTRY` is the root of a logical item of  hard  clinical information created in the  clinical statement  context, within a clinical session. There can be numerous such contexts in a clinical session. Observations and other Entry types only ever document information captured/created in the event documented by the enclosing Composition.\n\nAn `ENTRY` is also the minimal unit of information any query should return, since a whole `ENTRY` (including subparts) records spatial structure, timing information, and contextual information, as well as the subject and generator of the information. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Subject_validity",
            "severity" : "error",
            "human" : "Subject validity must satisfy conditional constraints",
            "expression" : "subject_is_self() implies subject.generating_type = “PARTY_SELF”"
          },
          {
            "key" : "Other_participations_valid",
            "severity" : "error",
            "human" : "Other participations valid must be present",
            "expression" : "other_participations.exists() implies other_participations.empty().not()"
          },
          {
            "key" : "Is_archetype_root",
            "severity" : "error",
            "human" : "Is archetype root",
            "expression" : "is_archetype_root()"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-character_sets"
        }
      },
      {
        "id" : "ENTRY.language",
        "path" : "ENTRY.language",
        "short" : "Mandatory indicator of the localised language in which this Entry is written.",
        "definition" : "Mandatory indicator of the localised language in which this Entry is written. Coded from openEHR Code Set  languages . ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ENTRY.encoding",
        "path" : "ENTRY.encoding",
        "short" : "Name of character set in which text values in this Entry are encoded.",
        "definition" : "Name of character set in which text values in this Entry are encoded. Coded from openEHR Code Set  character sets.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ENTRY.other-participations",
        "path" : "ENTRY.other_participations",
        "short" : "Other participations at `ENTRY` level.",
        "definition" : "Other participations at `ENTRY` level. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTICIPATION"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ENTRY.workflow-id",
        "path" : "ENTRY.workflow_id",
        "short" : "Identifier of externally held workflow engine data for this workflow execution, for this subject of care.",
        "definition" : "Identifier of externally held workflow engine data for this workflow execution, for this subject of care.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ENTRY.subject",
        "path" : "ENTRY.subject",
        "short" : "Id of human subject of this `ENTRY`, e.",
        "definition" : "Id of human subject of this `ENTRY`, e.g.: \n\n* organ donor \n* foetus \n* a family member \n* another clinically relevant person.",
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
        "id" : "ENTRY.provider",
        "path" : "ENTRY.provider",
        "short" : "Optional identification of provider of the information in this `ENTRY`, which might be: \n\n* the patient \n* a patient agent, e.",
        "definition" : "Optional identification of provider of the information in this `ENTRY`, which might be: \n\n* the patient \n* a patient agent, e.g. parent, guardian \n* the clinician \n* a device or software \n\nGenerally only used when the recorder needs to make it explicit. Otherwise, Composition composer and other participants are assumed. \n",
        "min" : 0,
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
