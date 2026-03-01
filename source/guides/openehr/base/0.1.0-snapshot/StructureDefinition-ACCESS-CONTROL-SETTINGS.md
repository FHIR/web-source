# ACCESS_CONTROL_SETTINGS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ACCESS_CONTROL_SETTINGS**

## Logical Model: ACCESS_CONTROL_SETTINGS ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ACCESS-CONTROL-SETTINGS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ACCESS_CONTROL_SETTINGS |

 
Access Control Settings for the EHR and components. Intended to support multiple access control schemes. Currently implementation dependent. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/ehr.html#_access_control_settings_class)

**Usages:**

* Use this Logical Model: [EHR_ACCESS](StructureDefinition-EHR-ACCESS.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ACCESS-CONTROL-SETTINGS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ACCESS-CONTROL-SETTINGS.csv), [Excel](StructureDefinition-ACCESS-CONTROL-SETTINGS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ACCESS-CONTROL-SETTINGS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/ehr.html#_access_control_settings_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ACCESS-CONTROL-SETTINGS",
  "version" : "0.1.0-snapshot",
  "name" : "ACCESS_CONTROL_SETTINGS",
  "title" : "ACCESS_CONTROL_SETTINGS",
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
  "description" : "Access Control Settings for the EHR and components. Intended to support multiple access control schemes. Currently implementation dependent.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ACCESS_CONTROL_SETTINGS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ACCESS_CONTROL_SETTINGS",
        "path" : "ACCESS_CONTROL_SETTINGS",
        "short" : "Access Control Settings for the EHR and components.",
        "definition" : "Access Control Settings for the EHR and components. Intended to support multiple access control schemes. Currently implementation dependent.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
