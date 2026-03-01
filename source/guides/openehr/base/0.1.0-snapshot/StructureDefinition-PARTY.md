# PARTY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PARTY**

## Logical Model: PARTY ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PARTY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PARTY |

 
Ancestor of all Party types, including real world entities and their roles. A Party is any entity which can participate in an activity. The`_name_`attribute inherited from`LOCATABLE`is used to indicate the actual type of party (note that the actual names, i.e. identities of parties are indicated in the`_identities_`attribute, not the`_name_`attribute). 
NOTE: It is strongly recommended that the inherited attribute`_uid_`be populated in`PARTY`objects, using the UID copied from the`_object_id()_`of the`_uid_`field of the enclosing`VERSION`object. + For example, the`ORIGINAL_VERSION.uid``87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`would be copied to the`_uid_`field of the`PARTY`object. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/demographic.html#_party_class)

**Usages:**

* Derived from this Logical Model: [ACTOR](StructureDefinition-ACTOR.md) and [ROLE](StructureDefinition-ROLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PARTY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PARTY.csv), [Excel](StructureDefinition-PARTY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PARTY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "type",
      "name" : "type",
      "title" : "type",
      "status" : "active",
      "kind" : "operation",
      "description" : "Type of party, such as  `PERSON`,  `ORGANISATION`, etc. Role name, e.g.  general practitioner ,  nurse ,  private citizen . Taken from inherited `_name_` attribute.",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/demographic.html#_party_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PARTY",
  "version" : "0.1.0-snapshot",
  "name" : "PARTY",
  "title" : "PARTY",
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
  "description" : "Ancestor of all Party types, including real world entities and their roles. A Party is any entity which can participate in an activity. The `_name_` attribute inherited from `LOCATABLE` is used to indicate the actual type of party (note that the actual names, i.e. identities of parties are indicated in the `_identities_` attribute, not the `_name_` attribute).\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `PARTY` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `PARTY` object.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PARTY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PARTY",
        "path" : "PARTY",
        "short" : "Ancestor of all Party types, including real world entities and their roles.",
        "definition" : "Ancestor of all Party types, including real world entities and their roles. A Party is any entity which can participate in an activity. The `_name_` attribute inherited from `LOCATABLE` is used to indicate the actual type of party (note that the actual names, i.e. identities of parties are indicated in the `_identities_` attribute, not the `_name_` attribute).\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `PARTY` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `PARTY` object.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Type_valid",
            "severity" : "error",
            "human" : "Type valid",
            "expression" : "type() = name"
          },
          {
            "key" : "Identities_valid",
            "severity" : "error",
            "human" : "Identities valid must not be empty",
            "expression" : "identities.empty().not()"
          },
          {
            "key" : "Contacts_valid",
            "severity" : "error",
            "human" : "Contacts valid must be present",
            "expression" : "contacts.exists() implies contacts.empty().not()"
          },
          {
            "key" : "Relationships_validity",
            "severity" : "error",
            "human" : "Relationships validity must be present",
            "expression" : "relationships.exists() implies (relationships.empty().not() and then relationships.for_all (r | r.source = self)"
          },
          {
            "key" : "Reverse_relationships_validity",
            "severity" : "error",
            "human" : "Reverse relationships validity must be present",
            "expression" : "reverse_relationships.exists() implies (reverse_relationships.empty().not() and then reverse_relationships.for_all (item | repository (\\\"demographics\\\").all_party_relationships.has_object (item) and then repository(\\\"demographics\\\").all_party_relationships.object (item).target = self))"
          },
          {
            "key" : "Is_archetype_root",
            "severity" : "error",
            "human" : "Is archetype root",
            "expression" : "is_archetype_root()"
          },
          {
            "key" : "Uid_mandatory",
            "severity" : "error",
            "human" : "Uid mandatory must be present",
            "expression" : "uid.exists()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY.identities",
        "path" : "PARTY.identities",
        "short" : "Identities used by the party to identify itself, such as legal name, stage names, aliases, nicknames and so on.",
        "definition" : "Identities used by the party to identify itself, such as legal name, stage names, aliases, nicknames and so on.",
        "min" : 1,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-IDENTITY"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY.contacts",
        "path" : "PARTY.contacts",
        "short" : "Contacts for this party.",
        "definition" : "Contacts for this party.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CONTACT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY.details",
        "path" : "PARTY.details",
        "short" : "All other details for this Party.",
        "definition" : "All other details for this Party.",
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
        "id" : "PARTY.reverse-relationships",
        "path" : "PARTY.reverse_relationships",
        "short" : "References to relationships in which this Party takes part as target.",
        "definition" : "References to relationships in which this Party takes part as target.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/LOCATABLE-REF"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "PARTY.relationships",
        "path" : "PARTY.relationships",
        "short" : "Relationships in which this Party takes part as source.",
        "definition" : "Relationships in which this Party takes part as source.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/PARTY-RELATIONSHIP"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
