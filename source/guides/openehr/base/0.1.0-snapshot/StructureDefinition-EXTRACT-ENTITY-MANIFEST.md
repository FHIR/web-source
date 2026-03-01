# EXTRACT_ENTITY_MANIFEST - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_ENTITY_MANIFEST**

## Logical Model: EXTRACT_ENTITY_MANIFEST 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-ENTITY-MANIFEST | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_ENTITY_MANIFEST |

 
The manifest for one entity (e.g. EHR subject), identifying the entity and optionally specifying top-level items to be included in the Extract. The list actually included may be modified by the`_version_spec_`part of the specification, and also by the link_depth attribute. In repeat (standing order) requests, the final inclusion may be modified by the send_changes_only value for`EXTRACT_UPDATE_SPEC._update_method_`. 
Various identifiers may be provided for the entity; these are to be used by the receiver system to locate the entity. The`_extract_id_key_`attribute is used to record the identifier that will be used throughout the Extract for this entity, including in instances of`EXTRACT_ENTITY_IDENTIFIER`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [EXTRACT_MANIFEST](StructureDefinition-EXTRACT-MANIFEST.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-ENTITY-MANIFEST)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-ENTITY-MANIFEST.csv), [Excel](StructureDefinition-EXTRACT-ENTITY-MANIFEST.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-ENTITY-MANIFEST",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-ENTITY-MANIFEST",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_ENTITY_MANIFEST",
  "title" : "EXTRACT_ENTITY_MANIFEST",
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
  "description" : "The manifest for one entity (e.g. EHR subject), identifying the entity and optionally specifying top-level items to be included in the Extract. The list actually included may be modified by the `_version_spec_` part of the specification, and also by the link_depth attribute. In repeat (standing order) requests, the final inclusion may be modified by the send_changes_only value for `EXTRACT_UPDATE_SPEC._update_method_`.\n\nVarious identifiers may be provided for the entity; these are to be used by the receiver system to locate the entity. The `_extract_id_key_` attribute is used to record the identifier that will be used throughout the Extract for this entity, including in instances of `EXTRACT_ENTITY_IDENTIFIER`.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_ENTITY_MANIFEST",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_ENTITY_MANIFEST",
        "path" : "EXTRACT_ENTITY_MANIFEST",
        "short" : "The manifest for one entity (e.",
        "definition" : "The manifest for one entity (e.g. EHR subject), identifying the entity and optionally specifying top-level items to be included in the Extract. The list actually included may be modified by the `_version_spec_` part of the specification, and also by the link_depth attribute. In repeat (standing order) requests, the final inclusion may be modified by the send_changes_only value for `EXTRACT_UPDATE_SPEC._update_method_`.\n\nVarious identifiers may be provided for the entity; these are to be used by the receiver system to locate the entity. The `_extract_id_key_` attribute is used to record the identifier that will be used throughout the Extract for this entity, including in instances of `EXTRACT_ENTITY_IDENTIFIER`.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_ENTITY_MANIFEST.extract-id-key",
        "path" : "EXTRACT_ENTITY_MANIFEST.extract_id_key",
        "short" : "Identifier by which this entity is known in the Extract.",
        "definition" : "Identifier by which this entity is known in the Extract. May be one of the other identifiers, e.g. ehr_id or subject_id, or it may be something else, including a simple integer.",
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
        "id" : "EXTRACT_ENTITY_MANIFEST.ehr-id",
        "path" : "EXTRACT_ENTITY_MANIFEST.ehr_id",
        "short" : "EHR / EMR identifier for the entity at the target system.",
        "definition" : "EHR / EMR identifier for the entity at the target system.",
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
        "id" : "EXTRACT_ENTITY_MANIFEST.subject-id",
        "path" : "EXTRACT_ENTITY_MANIFEST.subject_id",
        "short" : "Subject (i.",
        "definition" : "Subject (i.e. patient or similar) identifier for the entity at the target system.",
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
        "id" : "EXTRACT_ENTITY_MANIFEST.other-ids",
        "path" : "EXTRACT_ENTITY_MANIFEST.other_ids",
        "short" : "Other identifiers that may be used to find the entity at the target system, keyed by type.",
        "definition" : "Other identifiers that may be used to find the entity at the target system, keyed by type. May include medicare numbers, drivers license number, tax number etc.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "string"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_ENTITY_MANIFEST.item-list",
        "path" : "EXTRACT_ENTITY_MANIFEST.item_list",
        "short" : "List of Uids of items to be included in the Extract, in cases where individual items are being requested by id.",
        "definition" : "List of Uids of items to be included in the Extract, in cases where individual items are being requested by id. More typically, this attribute is not used, and the `EXTRACT_SPEC._criteria query_` defines the Extract contents. If set, for openEHR data, these are Uids identifying the version containers.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
