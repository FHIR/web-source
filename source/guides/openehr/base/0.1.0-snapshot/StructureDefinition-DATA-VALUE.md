# DATA_VALUE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DATA_VALUE**

## Logical Model: DATA_VALUE ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DATA-VALUE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DATA_VALUE |

 
Abstract parent of all`DV_`data value types. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_data_value_class)

**Usages:**

* Derived from this Logical Model: [DV_BOOLEAN](StructureDefinition-DV-BOOLEAN.md), [DV_ENCAPSULATED](StructureDefinition-DV-ENCAPSULATED.md), [DV_IDENTIFIER](StructureDefinition-DV-IDENTIFIER.md), [DV_INTERVAL](StructureDefinition-DV-INTERVAL.md)...Show 6 more,[DV_ORDERED](StructureDefinition-DV-ORDERED.md),[DV_PARAGRAPH](StructureDefinition-DV-PARAGRAPH.md),[DV_STATE](StructureDefinition-DV-STATE.md),[DV_TEXT](StructureDefinition-DV-TEXT.md),[DV_TIME_SPECIFICATION](StructureDefinition-DV-TIME-SPECIFICATION.md)and[DV_URI](StructureDefinition-DV-URI.md)
* Use this Logical Model: [ELEMENT](StructureDefinition-ELEMENT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DATA-VALUE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DATA-VALUE.csv), [Excel](StructureDefinition-DATA-VALUE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DATA-VALUE",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_data_value_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "version" : "0.1.0-snapshot",
  "name" : "DATA_VALUE",
  "title" : "DATA_VALUE",
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
  "description" : "Abstract parent of all `DV_` data value types.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DATA_VALUE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/OPENEHR-DEFINITIONS",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DATA_VALUE",
        "path" : "DATA_VALUE",
        "short" : "Abstract parent of all `DV_` data value types.",
        "definition" : "Abstract parent of all `DV_` data value types.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
