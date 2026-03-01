# CODE_PHRASE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **CODE_PHRASE**

## Logical Model: CODE_PHRASE 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/CODE-PHRASE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:CODE_PHRASE |

 
A fully coordinated (i.e. all coordination has been performed) term from a terminology service (as distinct from a particular terminology). 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_code_phrase_class)

**Usages:**

* Use this Logical Model: [AUTHORED_RESOURCE](StructureDefinition-AUTHORED-RESOURCE.md), [COMPOSITION](StructureDefinition-COMPOSITION.md), [DV_CODED_TEXT](StructureDefinition-DV-CODED-TEXT.md), [DV_ENCAPSULATED](StructureDefinition-DV-ENCAPSULATED.md)...Show 8 more,[DV_MULTIMEDIA](StructureDefinition-DV-MULTIMEDIA.md),[DV_ORDERED](StructureDefinition-DV-ORDERED.md),[DV_TEXT](StructureDefinition-DV-TEXT.md),[ENTRY](StructureDefinition-ENTRY.md),[EXTRACT_UPDATE_SPEC](StructureDefinition-EXTRACT-UPDATE-SPEC.md),[RESOURCE_DESCRIPTION_ITEM](StructureDefinition-RESOURCE-DESCRIPTION-ITEM.md),[TERM_MAPPING](StructureDefinition-TERM-MAPPING.md)and[TRANSLATION_DETAILS](StructureDefinition-TRANSLATION-DETAILS.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/CODE-PHRASE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-CODE-PHRASE.csv), [Excel](StructureDefinition-CODE-PHRASE.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "CODE-PHRASE",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_code_phrase_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE",
  "version" : "0.1.0-snapshot",
  "name" : "CODE_PHRASE",
  "title" : "CODE_PHRASE",
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
  "description" : "A fully coordinated (i.e. all coordination has been performed) term from a terminology service (as distinct from a particular terminology). ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/CODE_PHRASE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "CODE_PHRASE",
        "path" : "CODE_PHRASE",
        "short" : "A fully coordinated (i.",
        "definition" : "A fully coordinated (i.e. all coordination has been performed) term from a terminology service (as distinct from a particular terminology). ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Code_string_valid",
            "severity" : "error",
            "human" : "Code string valid must not be empty",
            "expression" : "code_string.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CODE_PHRASE.terminology-id",
        "path" : "CODE_PHRASE.terminology_id",
        "short" : "Identifier of the distinct terminology from which the code_string (or its elements) was extracted.",
        "definition" : "Identifier of the distinct terminology from which the code_string (or its elements) was extracted.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TERMINOLOGY-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CODE_PHRASE.code-string",
        "path" : "CODE_PHRASE.code_string",
        "short" : "The key used by the terminology service to identify a concept or coordination of concepts.",
        "definition" : "The key used by the terminology service to identify a concept or coordination of concepts. This string is most likely parsable inside the terminology service, but nothing can be assumed about its syntax outside that context. ",
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
        "id" : "CODE_PHRASE.preferred-term",
        "path" : "CODE_PHRASE.preferred_term",
        "short" : "Optional attribute to carry preferred term corresponding to the code or expression in `_code_string_`.",
        "definition" : "Optional attribute to carry preferred term corresponding to the code or expression in `_code_string_`. Typical use in integration situations which create mappings, and representing data for which both a (non-preferred) actual term and a preferred term are both required.",
        "min" : 0,
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
