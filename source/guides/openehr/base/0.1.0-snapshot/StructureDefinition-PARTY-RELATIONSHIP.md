# PARTY_RELATIONSHIP - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTY_RELATIONSHIP**

## Logical Model: PARTY_RELATIONSHIP 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTY-RELATIONSHIP | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTY_RELATIONSHIP |

 
Generic description of a relationship between parties. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/demographic.html#_party_relationship_class)

**Usages:**

* Use this Logical Model: [PARTY](StructureDefinition-PARTY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTY-RELATIONSHIP)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTY-RELATIONSHIP.csv), [Excel](StructureDefinition-PARTY-RELATIONSHIP.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTY-RELATIONSHIP",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "type",
      "name" : "type",
      "title" : "type",
      "status" : "active",
      "kind" : "operation",
      "description" : "Type of relationship, such as  employment,  authority,  health provision ",
      "code" : "type",
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
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/demographic.html#_party_relationship_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#type"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTY-RELATIONSHIP",
  "version" : "0.1.0-snapshot",
  "name" : "PARTY_RELATIONSHIP",
  "title" : "PARTY_RELATIONSHIP",
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
  "description" : "Generic description of a relationship between parties.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTY_RELATIONSHIP",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTY_RELATIONSHIP",
        "path" : "PARTY_RELATIONSHIP",
        "short" : "Generic description of a relationship between parties.",
        "definition" : "Generic description of a relationship between parties.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Source_valid",
            "severity" : "error",
            "human" : "Source valid must be present",
            "expression" : "source.exists() and then source.relationships.has (self)"
          },
          {
            "key" : "Target_valid",
            "severity" : "error",
            "human" : "Target valid must be present",
            "expression" : "target.exists() and then target.not().reverse_relationships.has (self)"
          },
          {
            "key" : "Type_validity",
            "severity" : "error",
            "human" : "Type validity",
            "expression" : "type() = name"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_RELATIONSHIP.details",
        "path" : "PARTY_RELATIONSHIP.details",
        "short" : "The detailed description of the relationship.",
        "definition" : "The detailed description of the relationship.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_RELATIONSHIP.target",
        "path" : "PARTY_RELATIONSHIP.target",
        "short" : "Target of relationship.",
        "definition" : "Target of relationship.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_RELATIONSHIP.time-validity",
        "path" : "PARTY_RELATIONSHIP.time_validity",
        "short" : "Valid time interval for this relationship.",
        "definition" : "Valid time interval for this relationship.",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-DATE"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-INTERVAL"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY_RELATIONSHIP.source",
        "path" : "PARTY_RELATIONSHIP.source",
        "short" : "Source of relationship.",
        "definition" : "Source of relationship.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-REF"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
