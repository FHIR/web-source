# CARE_ENTRY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **CARE_ENTRY**

## Logical Model: CARE_ENTRY ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/CARE-ENTRY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:CARE_ENTRY |

 
The abstract parent of all clinical`ENTRY`subtypes. A`CARE_ENTRY`defines protocol and guideline attributes for all clinical Entry subtypes. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_care_entry_class)

**Usages:**

* Derived from this Logical Model: [ACTION](StructureDefinition-ACTION.md), [EVALUATION](StructureDefinition-EVALUATION.md), [INSTRUCTION](StructureDefinition-INSTRUCTION.md) and [OBSERVATION](StructureDefinition-OBSERVATION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/CARE-ENTRY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-CARE-ENTRY.csv), [Excel](StructureDefinition-CARE-ENTRY.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "CARE-ENTRY",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_care_entry_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#subject_is_self"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/CARE-ENTRY",
  "version" : "0.1.0-snapshot",
  "name" : "CARE_ENTRY",
  "title" : "CARE_ENTRY",
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
  "description" : "The abstract parent of all clinical `ENTRY` subtypes. A `CARE_ENTRY` defines protocol and guideline attributes for all clinical Entry subtypes. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/CARE_ENTRY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ENTRY",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "CARE_ENTRY",
        "path" : "CARE_ENTRY",
        "short" : "The abstract parent of all clinical `ENTRY` subtypes.",
        "definition" : "The abstract parent of all clinical `ENTRY` subtypes. A `CARE_ENTRY` defines protocol and guideline attributes for all clinical Entry subtypes. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "CARE_ENTRY.protocol",
        "extension" : [
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-group"
              },
              {
                "url" : "value",
                "valueString" : "Protocol"
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          },
          {
            "extension" : [
              {
                "url" : "name",
                "valueCode" : "element-view-order"
              },
              {
                "url" : "value",
                "valueInteger" : 4
              }
            ],
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint"
          }
        ],
        "path" : "CARE_ENTRY.protocol",
        "short" : "Description of the method (i.",
        "definition" : "Description of the method (i.e. how) the information in this entry was arrived at. For `OBSERVATIONs`, this is a description of the method or instrument used. For `EVALUATIONs`, how the evaluation was arrived at. For `INSTRUCTIONs`, how to execute the Instruction. This may take the form of references to guidelines, including manually followed and executable; knowledge references such as a paper in Medline; clinical reasons within a larger care process. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CARE_ENTRY.guideline-id",
        "path" : "CARE_ENTRY.guideline_id",
        "short" : "Optional external identifier of guideline creating this Entry if relevant.",
        "definition" : "Optional external identifier of guideline creating this Entry if relevant.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
