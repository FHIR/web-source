# DV_PARSABLE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_PARSABLE**

## Logical Model: DV_PARSABLE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-PARSABLE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_PARSABLE |

 
Encapsulated data expressed as a parsable String. The internal model of the data item is not described in the openEHR model in common with other encapsulated types, but in this case, the form of the data is assumed to be plaintext, rather than compressed or other types of large binary data. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_parsable_class)

**Usages:**

* Use this Logical Model: [ACTIVITY](StructureDefinition-ACTIVITY.md), [DV_TIME_SPECIFICATION](StructureDefinition-DV-TIME-SPECIFICATION.md), [EXTRACT_SPEC](StructureDefinition-EXTRACT-SPEC.md) and [INSTRUCTION](StructureDefinition-INSTRUCTION.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-PARSABLE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-PARSABLE.csv), [Excel](StructureDefinition-DV-PARSABLE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-PARSABLE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "size",
      "name" : "size",
      "title" : "size",
      "status" : "active",
      "kind" : "operation",
      "description" : "Size in bytes of value.",
      "code" : "size",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "integer"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_parsable_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#size"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-PARSABLE",
  "version" : "0.1.0-snapshot",
  "name" : "DV_PARSABLE",
  "title" : "DV_PARSABLE",
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
  "description" : "Encapsulated data expressed as a parsable String. The internal model of the data item is not described in the openEHR model in common with other encapsulated types, but in this case, the form of the data is assumed to be plaintext, rather than compressed or other types of large binary data. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_PARSABLE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-ENCAPSULATED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_PARSABLE",
        "path" : "DV_PARSABLE",
        "short" : "Encapsulated data expressed as a parsable String.",
        "definition" : "Encapsulated data expressed as a parsable String. The internal model of the data item is not described in the openEHR model in common with other encapsulated types, but in this case, the form of the data is assumed to be plaintext, rather than compressed or other types of large binary data. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Formalism_valid",
            "severity" : "error",
            "human" : "Formalism valid must not be empty",
            "expression" : "formalism.empty().not()"
          },
          {
            "key" : "Size_valid",
            "severity" : "error",
            "human" : "Size valid must satisfy range constraints",
            "expression" : "size() >= 0"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_PARSABLE.value",
        "path" : "DV_PARSABLE.value",
        "short" : "The string, which may validly be empty in some syntaxes.",
        "definition" : "The string, which may validly be empty in some syntaxes.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_PARSABLE.formalism",
        "path" : "DV_PARSABLE.formalism",
        "short" : "Name of the formalism, e.",
        "definition" : "Name of the formalism, e.g.  GLIF 1.0 ,  Proforma  etc.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
