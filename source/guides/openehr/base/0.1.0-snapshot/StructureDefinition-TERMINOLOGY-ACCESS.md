# TERMINOLOGY_ACCESS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **TERMINOLOGY_ACCESS**

## Logical Model: TERMINOLOGY_ACCESS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/TERMINOLOGY-ACCESS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:TERMINOLOGY_ACCESS |

 
Defines an object providing proxy access to a terminology. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/TERMINOLOGY-ACCESS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-TERMINOLOGY-ACCESS.csv), [Excel](StructureDefinition-TERMINOLOGY-ACCESS.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "TERMINOLOGY-ACCESS",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "id",
      "name" : "id",
      "title" : "id",
      "status" : "active",
      "kind" : "operation",
      "description" : "Identification of this Terminology.",
      "code" : "id",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "all_codes",
      "name" : "all_codes",
      "title" : "all_codes",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return all codes known in this terminology.",
      "code" : "all_codes",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Coding"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "codes_for_group_id",
      "name" : "codes_for_group_id",
      "title" : "codes_for_group_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return all codes under grouper 'a_group_id' from this terminology.",
      "code" : "codes_for_group_id",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_group_id",
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
          "type" : "Coding"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "codes_for_group_name",
      "name" : "codes_for_group_name",
      "title" : "codes_for_group_name",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return all codes under grouper whose name in 'a_lang' is 'a_name' from this terminology.",
      "code" : "codes_for_group_name",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_lang",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "a_name",
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
          "type" : "Coding"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_code_for_group_id",
      "name" : "has_code_for_group_id",
      "title" : "has_code_for_group_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if  a_code' is known in group  group_id' in the openEHR terminology.",
      "code" : "has_code_for_group_id",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "rubric_for_code",
      "name" : "rubric_for_code",
      "title" : "rubric_for_code",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return all rubric of code  code' in language  lang'.",
      "code" : "rubric_for_code",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_code",
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
          "type" : "string"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#all_codes"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#codes_for_group_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#codes_for_group_name"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_code_for_group_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#rubric_for_code"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/TERMINOLOGY-ACCESS",
  "version" : "0.1.0-snapshot",
  "name" : "TERMINOLOGY_ACCESS",
  "title" : "TERMINOLOGY_ACCESS",
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
  "description" : "Defines an object providing proxy access to a terminology. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/TERMINOLOGY_ACCESS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "TERMINOLOGY_ACCESS",
        "path" : "TERMINOLOGY_ACCESS",
        "short" : "Defines an object providing proxy access to a terminology.",
        "definition" : "Defines an object providing proxy access to a terminology. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
