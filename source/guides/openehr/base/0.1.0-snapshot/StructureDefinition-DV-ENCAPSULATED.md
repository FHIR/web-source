# DV_ENCAPSULATED - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_ENCAPSULATED**

## Logical Model: DV_ENCAPSULATED ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-ENCAPSULATED | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_ENCAPSULATED |

 
Abstract class defining the common meta-data of all types of encapsulated data. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_encapsulated_class)

**Usages:**

* Derived from this Logical Model: [DV_MULTIMEDIA](StructureDefinition-DV-MULTIMEDIA.md) and [DV_PARSABLE](StructureDefinition-DV-PARSABLE.md)
* Use this Logical Model: [FEEDER_AUDIT](StructureDefinition-FEEDER-AUDIT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-ENCAPSULATED)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-ENCAPSULATED.csv), [Excel](StructureDefinition-DV-ENCAPSULATED.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-ENCAPSULATED",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_encapsulated_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-ENCAPSULATED",
  "version" : "0.1.0-snapshot",
  "name" : "DV_ENCAPSULATED",
  "title" : "DV_ENCAPSULATED",
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
  "description" : "Abstract class defining the common meta-data of all types of encapsulated data.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_ENCAPSULATED",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_ENCAPSULATED",
        "path" : "DV_ENCAPSULATED",
        "short" : "Abstract class defining the common meta-data of all types of encapsulated data.",
        "definition" : "Abstract class defining the common meta-data of all types of encapsulated data.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Size_valid",
            "severity" : "error",
            "human" : "Size valid must satisfy range constraints",
            "expression" : "size() >= 0"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-character_sets"
        }
      },
      {
        "id" : "DV_ENCAPSULATED.charset",
        "path" : "DV_ENCAPSULATED.charset",
        "short" : "Name of character encoding scheme in which this value is encoded.",
        "definition" : "Name of character encoding scheme in which this value is encoded. Coded from openEHR Code Set  character sets . Unicode is the default assumption in openEHR, with UTF-8 being the assumed encoding. This attribute allows for variations from these assumptions. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_ENCAPSULATED.language",
        "path" : "DV_ENCAPSULATED.language",
        "short" : "Optional indicator of the localised language in which the data is written, if relevant.",
        "definition" : "Optional indicator of the localised language in which the data is written, if relevant. Coded from openEHR Code Set `languages`.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
