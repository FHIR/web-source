# DV_EHR_URI - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_EHR_URI**

## Logical Model: DV_EHR_URI 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-EHR-URI | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_EHR_URI |

 
A`DV_EHR_URI`is a`DV_URI`which has the scheme name 'ehr', and which can only reference items in EHRs. 
Used to reference items in an EHR, which may be the same as the current EHR (containing this link), or another. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ehr_uri_class)

**Usages:**

* Use this Logical Model: [ATTESTATION](StructureDefinition-ATTESTATION.md) and [LINK](StructureDefinition-LINK.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-EHR-URI)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-EHR-URI.csv), [Excel](StructureDefinition-DV-EHR-URI.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-EHR-URI",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_ehr_uri_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#scheme"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-as-leaf"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/view-hint",
      "valueCode" : "element-view-defns-parent"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-EHR-URI",
  "version" : "0.1.0-snapshot",
  "name" : "DV_EHR_URI",
  "title" : "DV_EHR_URI",
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
  "description" : "A `DV_EHR_URI` is a `DV_URI` which has the scheme name 'ehr', and which can only reference items in EHRs. \n\nUsed to reference items in an EHR, which may be the same as the current EHR (containing this link), or another.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_EHR_URI",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-URI",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_EHR_URI",
        "path" : "DV_EHR_URI",
        "short" : "A `DV_EHR_URI` is a `DV_URI` which has the scheme name 'ehr', and which can only reference items in EHRs.",
        "definition" : "A `DV_EHR_URI` is a `DV_URI` which has the scheme name 'ehr', and which can only reference items in EHRs. \n\nUsed to reference items in an EHR, which may be the same as the current EHR (containing this link), or another.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Scheme_valid",
            "severity" : "error",
            "human" : "Scheme valid",
            "expression" : "scheme().is_equal (Ehr_scheme)"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
