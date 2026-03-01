# MEASUREMENT_SERVICE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **MEASUREMENT_SERVICE**

## Logical Model: MEASUREMENT_SERVICE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/MEASUREMENT-SERVICE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:MEASUREMENT_SERVICE |

 
Defines an object providing proxy access to a measurement information service. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/MEASUREMENT-SERVICE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-MEASUREMENT-SERVICE.csv), [Excel](StructureDefinition-MEASUREMENT-SERVICE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "MEASUREMENT-SERVICE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_valid_units_string",
      "name" : "is_valid_units_string",
      "title" : "is_valid_units_string",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if the units string  units' is a valid string according to the HL7 UCUM specification.",
      "code" : "is_valid_units_string",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "units",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "boolean"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "units_equivalent",
      "name" : "units_equivalent",
      "title" : "units_equivalent",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if two units strings correspond to the same measured property.",
      "code" : "units_equivalent",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "units1",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "units2",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
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
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_valid_units_string"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#units_equivalent"
    },
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
  "url" : "http://openehr.org/fhir/StructureDefinition/MEASUREMENT-SERVICE",
  "version" : "0.1.0-snapshot",
  "name" : "MEASUREMENT_SERVICE",
  "title" : "MEASUREMENT_SERVICE",
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
  "description" : "Defines an object providing proxy access to a measurement information service.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/MEASUREMENT_SERVICE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "MEASUREMENT_SERVICE",
        "path" : "MEASUREMENT_SERVICE",
        "short" : "Defines an object providing proxy access to a measurement information service.",
        "definition" : "Defines an object providing proxy access to a measurement information service.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
