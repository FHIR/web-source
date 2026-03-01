# SYNC_EXTRACT_SPEC - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **SYNC_EXTRACT_SPEC**

## Logical Model: SYNC_EXTRACT_SPEC 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/SYNC-EXTRACT-SPEC | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:SYNC_EXTRACT_SPEC |

 
Details of specification of Extract, used in a request to specify an Extract, or in a response, to describe what is actually in the Extract. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [SYNC_EXTRACT_REQUEST](StructureDefinition-SYNC-EXTRACT-REQUEST.md) and [SYNC_EXTRACT](StructureDefinition-SYNC-EXTRACT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/SYNC-EXTRACT-SPEC)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-SYNC-EXTRACT-SPEC.csv), [Excel](StructureDefinition-SYNC-EXTRACT-SPEC.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "SYNC-EXTRACT-SPEC",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/SYNC-EXTRACT-SPEC",
  "version" : "0.1.0-snapshot",
  "name" : "SYNC_EXTRACT_SPEC",
  "title" : "SYNC_EXTRACT_SPEC",
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
  "description" : "Details of specification of Extract, used in a request to specify an Extract, or in a response, to describe what is actually in the Extract.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/SYNC_EXTRACT_SPEC",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "SYNC_EXTRACT_SPEC",
        "path" : "SYNC_EXTRACT_SPEC",
        "short" : "Details of specification of Extract, used in a request to specify an Extract, or in a response, to describe what is actually in the Extract.",
        "definition" : "Details of specification of Extract, used in a request to specify an Extract, or in a response, to describe what is actually in the Extract.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "SYNC_EXTRACT_SPEC.includes-versions",
        "path" : "SYNC_EXTRACT_SPEC.includes_versions",
        "short" : "True if the Versions from the Contribution are included; False if just the Contribution and its Audit are included.",
        "definition" : "True if the Versions from the Contribution are included; False if just the Contribution and its Audit are included.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "SYNC_EXTRACT_SPEC.contribution-list",
        "path" : "SYNC_EXTRACT_SPEC.contribution_list",
        "short" : "List of Contributions to include / that are included in the Extract.",
        "definition" : "List of Contributions to include / that are included in the Extract.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/HIER-OBJECT-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "SYNC_EXTRACT_SPEC.contributions-since",
        "path" : "SYNC_EXTRACT_SPEC.contributions_since",
        "short" : "Specify Contributions included in Extract by threshold date.",
        "definition" : "Specify Contributions included in Extract by threshold date.",
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
        "id" : "SYNC_EXTRACT_SPEC.all-contributions",
        "path" : "SYNC_EXTRACT_SPEC.all_contributions",
        "short" : "True if all Contributions in the record are included.",
        "definition" : "True if all Contributions in the record are included.",
        "min" : 0,
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
