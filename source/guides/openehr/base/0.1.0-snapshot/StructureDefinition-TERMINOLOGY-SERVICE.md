# TERMINOLOGY_SERVICE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **TERMINOLOGY_SERVICE**

## Logical Model: TERMINOLOGY_SERVICE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/TERMINOLOGY-SERVICE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:TERMINOLOGY_SERVICE |

 
Defines an object providing proxy access to a terminology service. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Derived from this Logical Model: [EXTERNAL_ENVIRONMENT_ACCESS](StructureDefinition-EXTERNAL-ENVIRONMENT-ACCESS.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/TERMINOLOGY-SERVICE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-TERMINOLOGY-SERVICE.csv), [Excel](StructureDefinition-TERMINOLOGY-SERVICE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "TERMINOLOGY-SERVICE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "terminology",
      "name" : "terminology",
      "title" : "terminology",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return an interface to the terminology named name. Allowable names include:-\n\n* openehr, \n* centc251,\n* any name from are taken from the US NLM UMLS meta-data list at http://www.nlm.nih.gov/research/umls/metaa1.html ",
      "code" : "terminology",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "name",
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
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "code_set",
      "name" : "code_set",
      "title" : "code_set",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return an interface to the code_set identified by the external identifier name (e.g.  ISO_639-1). ",
      "code" : "code_set",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "name",
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
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "code_set_for_id",
      "name" : "code_set_for_id",
      "title" : "code_set_for_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "Return an interface to the code_set identified internally in openEHR by id. \n",
      "code" : "code_set_for_id",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "id",
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
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_terminology",
      "name" : "has_terminology",
      "title" : "has_terminology",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if terminology named name known by this service. Allowable names include:-\n\n*  openehr  \n* centc251  \n* any name from are taken from the US NLM UMLS meta-data list at       http://www.nlm.nih.gov/research/umls/metaa1.html",
      "code" : "has_terminology",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "name",
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
      "id" : "has_code_set",
      "name" : "has_code_set",
      "title" : "has_code_set",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if code_set linked to internal name (e.g. languages ) is available. ",
      "code" : "has_code_set",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "name",
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
      "id" : "terminology_identifiers",
      "name" : "terminology_identifiers",
      "title" : "terminology_identifiers",
      "status" : "active",
      "kind" : "operation",
      "description" : "Set of all terminology identifiers known in the terminology service. Values from the US NLM UMLS meta-data list at:- http://www.nlm.nih.gov/research/umls/metaa1.html ",
      "code" : "terminology_identifiers",
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
      "id" : "openehr_code_sets",
      "name" : "openehr_code_sets",
      "title" : "openehr_code_sets",
      "status" : "active",
      "kind" : "operation",
      "description" : "Set of all code set identifiers known in the terminology service. \n",
      "code" : "openehr_code_sets",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "code_set_identifiers",
      "name" : "code_set_identifiers",
      "title" : "code_set_identifiers",
      "status" : "active",
      "kind" : "operation",
      "description" : "Set of all code sets identifiers for which there is an internal openEHR name; returned as a Map of ids keyed by internal name. ",
      "code" : "code_set_identifiers",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#terminology"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#code_set"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#code_set_for_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_terminology"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_code_set"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#terminology_identifiers"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#openehr_code_sets"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#code_set_identifiers"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/TERMINOLOGY-SERVICE",
  "version" : "0.1.0-snapshot",
  "name" : "TERMINOLOGY_SERVICE",
  "title" : "TERMINOLOGY_SERVICE",
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
  "description" : "Defines an object providing proxy access to a terminology service. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/TERMINOLOGY_SERVICE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/OPENEHR-TERMINOLOGY-GROUP-IDENTIFIERS",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "TERMINOLOGY_SERVICE",
        "path" : "TERMINOLOGY_SERVICE",
        "short" : "Defines an object providing proxy access to a terminology service.",
        "definition" : "Defines an object providing proxy access to a terminology service. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
