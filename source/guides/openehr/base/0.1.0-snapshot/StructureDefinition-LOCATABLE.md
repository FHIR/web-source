# LOCATABLE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **LOCATABLE**

## Logical Model: LOCATABLE ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/LOCATABLE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:LOCATABLE |

 
Root class of all information model classes that can be archetyped. Most classes in the openEHR reference model inherit from the`LOCATABLE`class, which defines the idea of locatability in an archetyped structure.`LOCATABLE`defines a runtime name and an`_archetype_node_id_`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class)

**Usages:**

* Derived from this Logical Model: [ACTIVITY](StructureDefinition-ACTIVITY.md), [ADDRESS](StructureDefinition-ADDRESS.md), [CAPABILITY](StructureDefinition-CAPABILITY.md), [COMPOSITION](StructureDefinition-COMPOSITION.md)...Show 16 more,[CONTACT](StructureDefinition-CONTACT.md),[CONTENT_ITEM](StructureDefinition-CONTENT-ITEM.md),[DATA_STRUCTURE](StructureDefinition-DATA-STRUCTURE.md),[EHR_ACCESS](StructureDefinition-EHR-ACCESS.md),[EHR_STATUS](StructureDefinition-EHR-STATUS.md),[EVENT](StructureDefinition-EVENT.md),[EXTRACT_ACTION_REQUEST](StructureDefinition-EXTRACT-ACTION-REQUEST.md),[EXTRACT_CHAPTER](StructureDefinition-EXTRACT-CHAPTER.md),[EXTRACT_ITEM](StructureDefinition-EXTRACT-ITEM.md),[EXTRACT_REQUEST](StructureDefinition-EXTRACT-REQUEST.md),[EXTRACT](StructureDefinition-EXTRACT.md),[FOLDER](StructureDefinition-FOLDER.md),[ITEM](StructureDefinition-ITEM.md),[PARTY_IDENTITY](StructureDefinition-PARTY-IDENTITY.md),[PARTY_RELATIONSHIP](StructureDefinition-PARTY-RELATIONSHIP.md)and[PARTY](StructureDefinition-PARTY.md)
* Use this Logical Model: [GENERIC_CONTENT_ITEM](StructureDefinition-GENERIC-CONTENT-ITEM.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/LOCATABLE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-LOCATABLE.csv), [Excel](StructureDefinition-LOCATABLE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "LOCATABLE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "concept",
      "name" : "concept",
      "title" : "concept",
      "status" : "active",
      "kind" : "operation",
      "description" : "Clinical concept of the archetype as a whole (= derived from the archetype_node_id' of the root node) ",
      "code" : "concept",
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
      "id" : "is_archetype_root",
      "name" : "is_archetype_root",
      "title" : "is_archetype_root",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this node is the root of an archetyped structure.",
      "code" : "is_archetype_root",
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
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_locatable_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#concept"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_archetype_root"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "version" : "0.1.0-snapshot",
  "name" : "LOCATABLE",
  "title" : "LOCATABLE",
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
  "description" : "Root class of all information model classes that can be archetyped. Most classes in the openEHR reference model inherit from the `LOCATABLE` class, which defines the idea of  locatability in an archetyped structure. `LOCATABLE` defines a runtime name and an `_archetype_node_id_`. ",
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
  "abstract" : true,
  "type" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "LOCATABLE",
        "path" : "LOCATABLE",
        "short" : "Root class of all information model classes that can be archetyped.",
        "definition" : "Root class of all information model classes that can be archetyped. Most classes in the openEHR reference model inherit from the `LOCATABLE` class, which defines the idea of  locatability in an archetyped structure. `LOCATABLE` defines a runtime name and an `_archetype_node_id_`. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Links_valid",
            "severity" : "error",
            "human" : "Links valid must be present",
            "expression" : "links.exists() implies links.empty().not()"
          },
          {
            "key" : "Archetyped_valid",
            "severity" : "error",
            "human" : "Archetyped valid must satisfy exclusive conditions",
            "expression" : "is_archetype_root() xor archetype_details .empty()"
          },
          {
            "key" : "Archetype_node_id_valid",
            "severity" : "error",
            "human" : "Archetype node id valid must not be empty",
            "expression" : "archetype_node_id.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE.name",
        "path" : "LOCATABLE.name",
        "short" : "Runtime name of this fragment, used to build runtime paths.",
        "definition" : "Runtime name of this fragment, used to build runtime paths. This is the term provided via a clinical application or batch process to name this EHR construct: its retention in the EHR faithfully preserves the original label by which this entry was known to end users. \n",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE.archetype-node-id",
        "path" : "LOCATABLE.archetype_node_id",
        "short" : "Design-time archetype identifier of this node taken from its generating archetype; used to build archetype paths.",
        "definition" : "Design-time archetype identifier of this node taken from its generating archetype; used to build archetype paths. Always in the form of an at-code, e.g.  `at0005`. This value enables a 'standardised' name for this node to be generated, by referring to the generating archetype local terminology. \n\nAt an archetype root point, the value of this attribute is always the stringified form of the `_archetype_id_` found in the `_archetype_details_` object. \n",
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
        "id" : "LOCATABLE.uid",
        "path" : "LOCATABLE.uid",
        "short" : "Optional globally unique object identifier for root points of archetyped structures.",
        "definition" : "Optional globally unique object identifier for root points of archetyped structures. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/UID-BASED-ID"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE.links",
        "path" : "LOCATABLE.links",
        "short" : "Links to other archetyped structures (data whose root object inherits from `ARCHETYPED`, such as `ENTRY`, `SECTION` and so on).",
        "definition" : "Links to other archetyped structures (data whose root object inherits from `ARCHETYPED`, such as `ENTRY`, `SECTION` and so on). Links may be to structures in other compositions. ",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/LINK"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE.archetype-details",
        "path" : "LOCATABLE.archetype_details",
        "short" : "Details of archetyping used on this node.",
        "definition" : "Details of archetyping used on this node.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ARCHETYPED"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "LOCATABLE.feeder-audit",
        "path" : "LOCATABLE.feeder_audit",
        "short" : "Audit trail from non-openEHR system of original commit of information forming the content of this node, or from a conversion gateway which has synthesised this node.",
        "definition" : "Audit trail from non-openEHR system of original commit of information forming the content of this node, or from a conversion gateway which has synthesised this node. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/FEEDER-AUDIT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
