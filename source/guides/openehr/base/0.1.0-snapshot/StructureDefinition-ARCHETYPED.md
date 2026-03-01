# ARCHETYPED - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ARCHETYPED**

## Logical Model: ARCHETYPED 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ARCHETYPED | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ARCHETYPED |

 
Archetypes act as the configuration basis for the particular structures of instances defined by the reference model. To enable archetypes to be used to create valid data, key classes in the reference model act as root points for archetyping; accordingly, these classes have the`_archetype_details_`attribute set. 
An instance of the class`ARCHETYPED`contains the relevant archetype identification information, allowing generating archetypes to be matched up with data instances. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_archetyped_class)

**Usages:**

* Use this Logical Model: [LOCATABLE](StructureDefinition-LOCATABLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ARCHETYPED)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ARCHETYPED.csv), [Excel](StructureDefinition-ARCHETYPED.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ARCHETYPED",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_archetyped_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ARCHETYPED",
  "version" : "0.1.0-snapshot",
  "name" : "ARCHETYPED",
  "title" : "ARCHETYPED",
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
  "description" : "Archetypes act as the configuration basis for the particular structures of instances defined by the reference model. To enable archetypes to be used to create valid data, key classes in the reference model act as  root  points for archetyping; accordingly, these classes have the `_archetype_details_` attribute set. \n\nAn instance of the class `ARCHETYPED` contains the relevant archetype identification information, allowing generating archetypes to be matched up with data instances.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ARCHETYPED",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ARCHETYPED",
        "path" : "ARCHETYPED",
        "short" : "Archetypes act as the configuration basis for the particular structures of instances defined by the reference model.",
        "definition" : "Archetypes act as the configuration basis for the particular structures of instances defined by the reference model. To enable archetypes to be used to create valid data, key classes in the reference model act as  root  points for archetyping; accordingly, these classes have the `_archetype_details_` attribute set. \n\nAn instance of the class `ARCHETYPED` contains the relevant archetype identification information, allowing generating archetypes to be matched up with data instances.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "rm_version_valid",
            "severity" : "error",
            "human" : "rm version valid must not be empty",
            "expression" : "rm_version.empty().not()"
          },
          {
            "key" : "Rm_version_valid",
            "severity" : "error",
            "human" : "Rm version valid must not be empty",
            "expression" : "rm_version.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ARCHETYPED.archetype-id",
        "path" : "ARCHETYPED.archetype_id",
        "short" : "Globally unique archetype identifier.",
        "definition" : "Globally unique archetype identifier. ",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ARCHETYPE-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ARCHETYPED.template-id",
        "path" : "ARCHETYPED.template_id",
        "short" : "Globally unique template identifier, if a template was active at this point in the structure.",
        "definition" : "Globally unique template identifier, if a template was active at this point in the structure. Normally, a template would only be used at the top of a top-level structure, but the possibility exists for templates at lower levels. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/TEMPLATE-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ARCHETYPED.rm-version",
        "path" : "ARCHETYPED.rm_version",
        "short" : "Version of the openEHR reference model used to create this object.",
        "definition" : "Version of the openEHR reference model used to create this object. Expressed in terms of the release version string, e.g.  1.0 ,  1.2.4 .",
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
