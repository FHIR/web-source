# EXTRACT_SPEC - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_SPEC**

## Logical Model: EXTRACT_SPEC 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-SPEC | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_SPEC |

 
Specification of an Extract's contents. Subtypes can be used to add details specific to the type of Extract. The specification consists of attributes specifying the directory, and two further groups of attributes in their own classes, namely a version specfication (which versions of information items are to be included) and a manifest (which entities are to be included in the extract). 
Use: Used in a request to specify an Extract, as well as to describe what is contained in an Extract. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [EXTRACT_REQUEST](StructureDefinition-EXTRACT-REQUEST.md) and [EXTRACT](StructureDefinition-EXTRACT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-SPEC)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-SPEC.csv), [Excel](StructureDefinition-EXTRACT-SPEC.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-SPEC",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-SPEC",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_SPEC",
  "title" : "EXTRACT_SPEC",
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
  "description" : "Specification of an Extract's contents. Subtypes can be used to add details specific to the type of Extract. The specification consists of attributes specifying the directory, and two further groups of attributes in their own classes, namely a version specfication (which versions of information items are to be included) and a manifest (which entities are to be included in the extract).\n\nUse: Used in a request to specify an Extract, as well as to describe what is contained in an Extract.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_SPEC",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_SPEC",
        "path" : "EXTRACT_SPEC",
        "short" : "Specification of an Extract's contents.",
        "definition" : "Specification of an Extract's contents. Subtypes can be used to add details specific to the type of Extract. The specification consists of attributes specifying the directory, and two further groups of attributes in their own classes, namely a version specfication (which versions of information items are to be included) and a manifest (which entities are to be included in the extract).\n\nUse: Used in a request to specify an Extract, as well as to describe what is contained in an Extract.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.version-spec",
        "path" : "EXTRACT_SPEC.version_spec",
        "short" : "Specification of which versions of information items to include in the Extract.",
        "definition" : "Specification of which versions of information items to include in the Extract. If Void, the default is latest versions only (which is reasonable for non-versioning systems as well).",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-VERSION-SPEC"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.manifest",
        "path" : "EXTRACT_SPEC.manifest",
        "short" : "Specification of entities (e.",
        "definition" : "Specification of entities (e.g. records) to include in the Extract.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-MANIFEST"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.extract-type",
        "path" : "EXTRACT_SPEC.extract_type",
        "short" : "Coded term indicating the type of content required, e.",
        "definition" : "Coded term indicating the type of content required, e.g.\n\n* `|openehr-ehr|`\n* `|openehr-demographic|`\n* `|generic-emr|`\n* `|other|`\n\nCoded by openEHR Terminology group `'extract content type'`.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.include-multimedia",
        "path" : "EXTRACT_SPEC.include_multimedia",
        "short" : "Indicates whether in-line instances of `DV_MULTIMEDIA` in the source data are included or not.",
        "definition" : "Indicates whether in-line instances of `DV_MULTIMEDIA` in the source data are included or not.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.priority",
        "path" : "EXTRACT_SPEC.priority",
        "short" : "Requested priority of this request to be handled by server.",
        "definition" : "Requested priority of this request to be handled by server. Priority schemes are likely to be local, and use values agreed by both ends.\n\nTBD: alternative is standard coded terms",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.link-depth",
        "path" : "EXTRACT_SPEC.link_depth",
        "short" : "Degree of links to follow emanating from content items specified for inclusion.",
        "definition" : "Degree of links to follow emanating from content items specified for inclusion. The kind of links to follow is dependent on the type of Extract.\n\nAll items at the target end of followed links at the given depth are also included in the extract; `EXTRACT_CONTENT_ITEM._is_primary_` is used to differentiate.\n\n* 0 = don't follow;\n* 1 = follow first degree links;\n* 2 = follow 2nd degree links;\n* ....\n* n = follow nth degree links\n",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.criteria",
        "path" : "EXTRACT_SPEC.criteria",
        "short" : "Queries specifying the contents of this Extract.",
        "definition" : "Queries specifying the contents of this Extract.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-PARSABLE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_SPEC.other-details",
        "path" : "EXTRACT_SPEC.other_details",
        "short" : "Other specification items.",
        "definition" : "Other specification items. Archetypable.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/ITEM-STRUCTURE"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
