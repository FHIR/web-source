# DV_CODED_TEXT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_CODED_TEXT**

## Logical Model: DV_CODED_TEXT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_CODED_TEXT |

 
A text item whose value must be the rubric from a controlled terminology, the key (i.e. the 'code') of which is the`_defining_code_`attribute. In other words: a`DV_CODED_TEXT`is a combination of a`CODE_PHRASE`(effectively a code) and the rubric of that term, from a terminology service, in the language in which the data were authored. 
Since`DV_CODED_TEXT`is a subtype of`DV_TEXT`, it can be used in place of it, effectively allowing the type`DV_TEXT`to mean a text item, which may optionally be coded. 
Misuse: If the intention is to represent a term code attached in some way to a fragment of plain text,`DV_CODED_TEXT`should not be used; instead use a`DV_TEXT`and a`TERM_MAPPING`to a`CODE_PHRASE`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_coded_text_class)

**Usages:**

* Use this Logical Model: [AUDIT_DETAILS](StructureDefinition-AUDIT-DETAILS.md), [COMPOSITION](StructureDefinition-COMPOSITION.md), [DV_ORDINAL](StructureDefinition-DV-ORDINAL.md), [DV_SCALE](StructureDefinition-DV-SCALE.md)...Show 14 more,[DV_STATE](StructureDefinition-DV-STATE.md),[ELEMENT](StructureDefinition-ELEMENT.md),[EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md),[EXTRACT_ACTION_REQUEST](StructureDefinition-EXTRACT-ACTION-REQUEST.md),[EXTRACT_PARTICIPATION](StructureDefinition-EXTRACT-PARTICIPATION.md),[EXTRACT_SPEC](StructureDefinition-EXTRACT-SPEC.md),[EXTRACT_UPDATE_SPEC](StructureDefinition-EXTRACT-UPDATE-SPEC.md),[GENERIC_CONTENT_ITEM](StructureDefinition-GENERIC-CONTENT-ITEM.md),[INTERVAL_EVENT](StructureDefinition-INTERVAL-EVENT.md),[ISM_TRANSITION](StructureDefinition-ISM-TRANSITION.md),[ORIGINAL_VERSION](StructureDefinition-ORIGINAL-VERSION.md),[PARTICIPATION](StructureDefinition-PARTICIPATION.md),[PARTY_RELATED](StructureDefinition-PARTY-RELATED.md)and[TERM_MAPPING](StructureDefinition-TERM-MAPPING.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-CODED-TEXT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-CODED-TEXT.csv), [Excel](StructureDefinition-DV-CODED-TEXT.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-CODED-TEXT",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_coded_text_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT",
  "version" : "0.1.0-snapshot",
  "name" : "DV_CODED_TEXT",
  "title" : "DV_CODED_TEXT",
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
  "description" : "A text item whose value must be the rubric from a controlled terminology, the key (i.e. the 'code') of which is the `_defining_code_` attribute. In other words: a `DV_CODED_TEXT` is a combination of a `CODE_PHRASE` (effectively a code) and the rubric of that term, from a terminology service, in the language in which the data were authored. \n\nSince `DV_CODED_TEXT` is a subtype of `DV_TEXT`, it can be used in place of it, effectively allowing the type `DV_TEXT` to mean  a text item, which may optionally be coded. \n\nMisuse: If the intention is to represent a term code attached in some way to a fragment of plain text, `DV_CODED_TEXT` should not be used; instead use a `DV_TEXT` and a `TERM_MAPPING` to a `CODE_PHRASE`. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_CODED_TEXT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_CODED_TEXT",
        "path" : "DV_CODED_TEXT",
        "short" : "A text item whose value must be the rubric from a controlled terminology, the key (i.",
        "definition" : "A text item whose value must be the rubric from a controlled terminology, the key (i.e. the 'code') of which is the `_defining_code_` attribute. In other words: a `DV_CODED_TEXT` is a combination of a `CODE_PHRASE` (effectively a code) and the rubric of that term, from a terminology service, in the language in which the data were authored. \n\nSince `DV_CODED_TEXT` is a subtype of `DV_TEXT`, it can be used in place of it, effectively allowing the type `DV_TEXT` to mean  a text item, which may optionally be coded. \n\nMisuse: If the intention is to represent a term code attached in some way to a fragment of plain text, `DV_CODED_TEXT` should not be used; instead use a `DV_TEXT` and a `TERM_MAPPING` to a `CODE_PHRASE`. ",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_CODED_TEXT.defining-code",
        "path" : "DV_CODED_TEXT.defining_code",
        "short" : "The term of which the  `_value_` attribute is the textual rendition (i.",
        "definition" : "The term of which the  `_value_` attribute is the textual rendition (i.e. rubric). \n",
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
