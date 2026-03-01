# CONTACT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **CONTACT**

## Logical Model: CONTACT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/CONTACT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:CONTACT |

 
Description of a means of contact of a Party. Actual structure is archetyped. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/demographic.html#_contact_class)

**Usages:**

* Use this Logical Model: [PARTY](StructureDefinition-PARTY.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/CONTACT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-CONTACT.csv), [Excel](StructureDefinition-CONTACT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "CONTACT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "purpose",
      "name" : "purpose",
      "title" : "purpose",
      "status" : "active",
      "kind" : "operation",
      "description" : "Purpose for which this contact is used, e.g. mail,  daytime phone, etc. Taken from value of inherited `_name_` attribute.",
      "code" : "purpose",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/demographic.html#_contact_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#purpose"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/CONTACT",
  "version" : "0.1.0-snapshot",
  "name" : "CONTACT",
  "title" : "CONTACT",
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
  "description" : "Description of a means of contact of a Party. Actual structure is archetyped.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/CONTACT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "CONTACT",
        "path" : "CONTACT",
        "short" : "Description of a means of contact of a Party.",
        "definition" : "Description of a means of contact of a Party. Actual structure is archetyped.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Purpose_valid",
            "severity" : "error",
            "human" : "Purpose valid",
            "expression" : "purpose() = name"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CONTACT.addresses",
        "path" : "CONTACT.addresses",
        "short" : "A set of address alternatives for this contact purpose and time validity combination.",
        "definition" : "A set of address alternatives for this contact purpose and time validity combination.",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ADDRESS"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "CONTACT.time-validity",
        "path" : "CONTACT.time_validity",
        "short" : "Valid time interval for this contact descriptor.",
        "definition" : "Valid time interval for this contact descriptor.",
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
      }
    ]
  }
}

```
