# CONTRIBUTION - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **CONTRIBUTION**

## Logical Model: CONTRIBUTION 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/CONTRIBUTION | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:CONTRIBUTION |

 
Documents a Contribution (change set) of one or more versions added to a change-controlled repository. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_contribution_class)

**Usages:**

* Use this Logical Model: [SYNC_EXTRACT](StructureDefinition-SYNC-EXTRACT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/CONTRIBUTION)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-CONTRIBUTION.csv), [Excel](StructureDefinition-CONTRIBUTION.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "CONTRIBUTION",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_contribution_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/CONTRIBUTION",
  "version" : "0.1.0-snapshot",
  "name" : "CONTRIBUTION",
  "title" : "CONTRIBUTION",
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
  "description" : "Documents a Contribution (change set) of one or more versions added to a change-controlled repository. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/CONTRIBUTION",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "CONTRIBUTION",
        "path" : "CONTRIBUTION",
        "short" : "Documents a Contribution (change set) of one or more versions added to a change-controlled repository.",
        "definition" : "Documents a Contribution (change set) of one or more versions added to a change-controlled repository. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "CONTRIBUTION.uid",
        "path" : "CONTRIBUTION.uid",
        "short" : "Unique identifier for this Contribution.",
        "definition" : "Unique identifier for this Contribution. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CONTRIBUTION.versions",
        "path" : "CONTRIBUTION.versions",
        "short" : "Set of references to Versions causing changes to this EHR.",
        "definition" : "Set of references to Versions causing changes to this EHR. Each contribution contains a list of versions, which may include paths pointing to any number of versionable items, i.e. items of types such as `COMPOSITION` and `FOLDER`. ",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CONTRIBUTION.audit",
        "path" : "CONTRIBUTION.audit",
        "short" : "Audit trail corresponding to the committal of this Contribution.",
        "definition" : "Audit trail corresponding to the committal of this Contribution. ",
        "min" : 1,
        "max" : "1",
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
