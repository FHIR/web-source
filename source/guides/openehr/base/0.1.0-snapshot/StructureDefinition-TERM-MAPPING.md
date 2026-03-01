# TERM_MAPPING - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **TERM_MAPPING**

## Logical Model: TERM_MAPPING 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/TERM-MAPPING | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:TERM_MAPPING |

 
Represents a coded term mapped to a`DV_TEXT`, and the relative match of the target term with respect to the mapped item. Plain or coded text items may appear in the EHR for which one or mappings in alternative terminologies are required. Mappings are only used to enable computer processing, so they can only be instances of`DV_CODED_TEXT`. 
Used for adding classification terms (e.g. adding ICD classifiers to SNOMED descriptive terms), or mapping into equivalents in other terminologies (e.g. across nursing vocabularies). 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_term_mapping_class)

**Usages:**

* Use this Logical Model: [DV_TEXT](StructureDefinition-DV-TEXT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/TERM-MAPPING)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-TERM-MAPPING.csv), [Excel](StructureDefinition-TERM-MAPPING.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "TERM-MAPPING",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "narrower",
      "name" : "narrower",
      "title" : "narrower",
      "status" : "active",
      "kind" : "operation",
      "description" : "The mapping is to a narrower term.",
      "code" : "narrower",
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
      "id" : "broader",
      "name" : "broader",
      "title" : "broader",
      "status" : "active",
      "kind" : "operation",
      "description" : "The mapping is to a broader term.",
      "code" : "broader",
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
      "id" : "equivalent",
      "name" : "equivalent",
      "title" : "equivalent",
      "status" : "active",
      "kind" : "operation",
      "description" : "The mapping is to an equivalent term.",
      "code" : "equivalent",
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
      "id" : "unknown",
      "name" : "unknown",
      "title" : "unknown",
      "status" : "active",
      "kind" : "operation",
      "description" : "The kind of mapping is unknown.",
      "code" : "unknown",
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
      "id" : "is_valid_match_code",
      "name" : "is_valid_match_code",
      "title" : "is_valid_match_code",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if match valid.",
      "code" : "is_valid_match_code",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "c",
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
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_term_mapping_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#narrower"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#broader"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#equivalent"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#unknown"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_valid_match_code"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/TERM-MAPPING",
  "version" : "0.1.0-snapshot",
  "name" : "TERM_MAPPING",
  "title" : "TERM_MAPPING",
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
  "description" : "Represents a coded term mapped to a `DV_TEXT`, and the relative match of the target term with respect to the mapped item. Plain or coded text items may appear in the EHR for which one or mappings in alternative terminologies are required. Mappings are only used to enable computer processing, so they can only be instances of `DV_CODED_TEXT`.\n\nUsed for adding classification terms (e.g. adding ICD classifiers to SNOMED descriptive terms), or mapping into equivalents in other terminologies (e.g. across nursing vocabularies). \n",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/TERM_MAPPING",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "TERM_MAPPING",
        "path" : "TERM_MAPPING",
        "short" : "Represents a coded term mapped to a `DV_TEXT`, and the relative match of the target term with respect to the mapped item.",
        "definition" : "Represents a coded term mapped to a `DV_TEXT`, and the relative match of the target term with respect to the mapped item. Plain or coded text items may appear in the EHR for which one or mappings in alternative terminologies are required. Mappings are only used to enable computer processing, so they can only be instances of `DV_CODED_TEXT`.\n\nUsed for adding classification terms (e.g. adding ICD classifiers to SNOMED descriptive terms), or mapping into equivalents in other terminologies (e.g. across nursing vocabularies). \n",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Purpose_valid",
            "severity" : "error",
            "human" : "Purpose valid must be present",
            "expression" : "purpose.exists() implies terminology (Terminology_id_openehr).has_code_for_group_id (Group_id_term_mapping_purpose, purpose.defining_code)"
          },
          {
            "key" : "Match_valid",
            "severity" : "error",
            "human" : "Match valid",
            "expression" : "is_valid_match_code() (match)"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "TERM_MAPPING.match",
        "path" : "TERM_MAPPING.match",
        "short" : "The relative match of the target term with respect to the mapped text item.",
        "definition" : "The relative match of the target term with respect to the mapped text item. Result meanings: \n\n* `'>'`: the mapping is to a broader term e.g. orginal text =  arbovirus infection , target =  viral infection  \n* `'='`: the mapping is to a (supposedly) equivalent to the original item \n* `'<'`: the mapping is to a narrower term. e.g. original text =  diabetes , mapping =  diabetes mellitus . \n* `'?'`: the kind of mapping is unknown. \n\nThe first three values are taken from the ISO standards 2788 ( Guide to Establishment and development of monolingual thesauri) and 5964 (Guide to Establishment and development of multilingual thesauri). \n",
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
        "id" : "TERM_MAPPING.purpose",
        "path" : "TERM_MAPPING.purpose",
        "short" : "Purpose of the mapping e.",
        "definition" : "Purpose of the mapping e.g. 'automated data mining', 'billing', 'interoperability'.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "TERM_MAPPING.target",
        "path" : "TERM_MAPPING.target",
        "short" : "The target term of the mapping.",
        "definition" : "The target term of the mapping. ",
        "min" : 1,
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
