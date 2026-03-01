# TRANSLATION_DETAILS - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **TRANSLATION_DETAILS**

## Logical Model: TRANSLATION_DETAILS 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/TRANSLATION-DETAILS | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:TRANSLATION_DETAILS |

 
Class providing details of a natural language translation. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_translation_details_class)

**Usages:**

* Use this Logical Model: [AUTHORED_RESOURCE](StructureDefinition-AUTHORED-RESOURCE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/TRANSLATION-DETAILS)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-TRANSLATION-DETAILS.csv), [Excel](StructureDefinition-TRANSLATION-DETAILS.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "TRANSLATION-DETAILS",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_translation_details_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/TRANSLATION-DETAILS",
  "version" : "0.1.0-snapshot",
  "name" : "TRANSLATION_DETAILS",
  "title" : "TRANSLATION_DETAILS",
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
  "description" : "Class providing details of a natural language translation. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/TRANSLATION_DETAILS",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "TRANSLATION_DETAILS",
        "path" : "TRANSLATION_DETAILS",
        "short" : "Class providing details of a natural language translation.",
        "definition" : "Class providing details of a natural language translation. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-languages"
        }
      },
      {
        "id" : "TRANSLATION_DETAILS.language",
        "path" : "TRANSLATION_DETAILS.language",
        "short" : "Language of the translation.",
        "definition" : "Language of the translation.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "TRANSLATION_DETAILS.author",
        "path" : "TRANSLATION_DETAILS.author",
        "short" : "Translator name and other demographic details.",
        "definition" : "Translator name and other demographic details.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              },
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "U"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/Hash"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "TRANSLATION_DETAILS.accreditaton",
        "path" : "TRANSLATION_DETAILS.accreditaton",
        "short" : "Accreditation of translator, usually a national translator's registration or association membership id.",
        "definition" : "Accreditation of translator, usually a national translator's registration or association membership id.",
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
        "id" : "TRANSLATION_DETAILS.other-details",
        "path" : "TRANSLATION_DETAILS.other_details",
        "short" : "Any other meta-data.",
        "definition" : "Any other meta-data.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "extension" : [
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "T"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              },
              {
                "extension" : [
                  {
                    "url" : "name",
                    "valueCode" : "U"
                  },
                  {
                    "url" : "type",
                    "valueUri" : "string"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/Hash"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
