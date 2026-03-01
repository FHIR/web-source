# LOCATABLE_REF - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **LOCATABLE_REF**

## Logical Model: LOCATABLE_REF 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/LOCATABLE-REF | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:LOCATABLE_REF |

 
Reference to a LOCATABLE instance inside the top-level content structure inside a VERSIONidentified by the id attribute. The path attribute is applied to the object that VERSION.data points to 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/base_types.html#_locatable_ref_class)

**Usages:**

* Use this Logical Model: [INSTRUCTION_DETAILS](StructureDefinition-INSTRUCTION-DETAILS.md) and [PARTY](StructureDefinition-PARTY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/LOCATABLE-REF)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-LOCATABLE-REF.csv), [Excel](StructureDefinition-LOCATABLE-REF.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "LOCATABLE-REF",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/base_types.html#_locatable_ref_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE-REF",
  "version" : "0.1.0-snapshot",
  "name" : "LOCATABLE_REF",
  "title" : "LOCATABLE_REF",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-06-27T18:45:58+10:00",
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
  "description" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute. The path attribute is applied to the object that VERSION.data points to",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE_REF",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "LOCATABLE_REF",
        "path" : "LOCATABLE_REF",
        "short" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute",
        "definition" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute. The path attribute is applied to the object that VERSION.data points to",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE_REF.path",
        "path" : "LOCATABLE_REF.path",
        "short" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute",
        "definition" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute. The path attribute is applied to the object that VERSION.data points to",
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
        "id" : "LOCATABLE_REF.id",
        "path" : "LOCATABLE_REF.id",
        "short" : "The path to an instance, as an absolute path with respect to the object found at VERSION.data",
        "definition" : "The path to an instance, as an absolute path with respect to the object found at VERSION.data. An empty path means that the object referred to by id is being specified.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/UID-BASED-ID"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
