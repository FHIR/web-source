# DV_MULTIMEDIA - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_MULTIMEDIA**

## Logical Model: DV_MULTIMEDIA 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-MULTIMEDIA | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_MULTIMEDIA |

 
A specialisation of`DV_ENCAPSULATED`for audiovisual and bio-signal types. Includes further metadata relating to multimedia types which are not applicable to other subtypes of`DV_ENCAPSULATED`. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_multimedia_class)

**Usages:**

* Use this Logical Model: [ATTESTATION](StructureDefinition-ATTESTATION.md) and [DV_MULTIMEDIA](StructureDefinition-DV-MULTIMEDIA.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-MULTIMEDIA)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-MULTIMEDIA.csv), [Excel](StructureDefinition-DV-MULTIMEDIA.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-MULTIMEDIA",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_external",
      "name" : "is_external",
      "title" : "is_external",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed from the value of the `_uri_` attribute: True if  the data is stored externally to the record, as indicated by `_uri_`. A copy may also be stored internally, in which case `_is_expanded_` is also true.",
      "code" : "is_external",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_inline",
      "name" : "is_inline",
      "title" : "is_inline",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed from the value of the data attribute. True if  the  data is stored  in  expanded  form, ie within the EHR itself. ",
      "code" : "is_inline",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_compressed",
      "name" : "is_compressed",
      "title" : "is_compressed",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed from the value of the `_compression_algorithm_` attribute: True if  the  data is stored in compressed form. ",
      "code" : "is_compressed",
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
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "has_integrity_check",
      "name" : "has_integrity_check",
      "title" : "has_integrity_check",
      "status" : "active",
      "kind" : "operation",
      "description" : "Computed from the value of the `_integrity_check_algorithm_` attribute: True if an integrity check has been computed. ",
      "code" : "has_integrity_check",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_multimedia_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_external"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_inline"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_compressed"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#has_integrity_check"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-MULTIMEDIA",
  "version" : "0.1.0-snapshot",
  "name" : "DV_MULTIMEDIA",
  "title" : "DV_MULTIMEDIA",
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
  "description" : "A specialisation of `DV_ENCAPSULATED` for audiovisual and bio-signal types. Includes further metadata relating to multimedia types which are not applicable to other subtypes of `DV_ENCAPSULATED`.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_MULTIMEDIA",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-ENCAPSULATED",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_MULTIMEDIA",
        "path" : "DV_MULTIMEDIA",
        "short" : "A specialisation of `DV_ENCAPSULATED` for audiovisual and bio-signal types.",
        "definition" : "A specialisation of `DV_ENCAPSULATED` for audiovisual and bio-signal types. Includes further metadata relating to multimedia types which are not applicable to other subtypes of `DV_ENCAPSULATED`.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Not_empty",
            "severity" : "error",
            "human" : "Not empty",
            "expression" : "is_inline() or is_external()"
          },
          {
            "key" : "Integrity_check_validity",
            "severity" : "error",
            "human" : "Integrity check validity must be present",
            "expression" : "integrity_check.exists() implies integrity_check_algorithm.exists()"
          },
          {
            "key" : "Size_valid",
            "severity" : "error",
            "human" : "Size valid must satisfy range constraints",
            "expression" : "null # TODO: manual translation needed"
          }
        ],
        "isModifier" : false,
        "binding" : {
          "strength" : "required",
          "valueSet" : "https://specifications.openehr.org/fhir/valueset-integrity_check_algorithms"
        }
      },
      {
        "id" : "DV_MULTIMEDIA.alternate-text",
        "path" : "DV_MULTIMEDIA.alternate_text",
        "short" : "Text to display in lieu of multimedia display/replay.",
        "definition" : "Text to display in lieu of multimedia display/replay.",
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
        "id" : "DV_MULTIMEDIA.uri",
        "path" : "DV_MULTIMEDIA.uri",
        "short" : "URI reference to electronic information stored outside the record as a file, database entry etc, if supplied as a reference.",
        "definition" : "URI reference to electronic information stored outside the record as a file, database entry etc, if supplied as a reference. \n",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-URI"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.data",
        "path" : "DV_MULTIMEDIA.data",
        "short" : "The actual data found at `_uri_`, if supplied inline.",
        "definition" : "The actual data found at `_uri_`, if supplied inline.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "base64Binary"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.media-type",
        "path" : "DV_MULTIMEDIA.media_type",
        "short" : "Data media type coded from openEHR code set  media types  (interface for the IANA MIME types code set).",
        "definition" : "Data media type coded from openEHR code set  media types  (interface for the IANA MIME types code set). \n",
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
        "id" : "DV_MULTIMEDIA.compression-algorithm",
        "path" : "DV_MULTIMEDIA.compression_algorithm",
        "short" : "Compression type, a coded value from the openEHR Integrity check code set.",
        "definition" : "Compression type, a coded value from the openEHR Integrity check code set. Void means no compression. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.integrity-check",
        "path" : "DV_MULTIMEDIA.integrity_check",
        "short" : "Binary cryptographic integrity checksum.",
        "definition" : "Binary cryptographic integrity checksum.",
        "min" : 0,
        "max" : "*",
        "type" : [
          {
            "code" : "base64Binary"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.integrity-check-algorithm",
        "path" : "DV_MULTIMEDIA.integrity_check_algorithm",
        "short" : "Type of integrity check, a coded value from the openEHR `Integrity check` code set.",
        "definition" : "Type of integrity check, a coded value from the openEHR `Integrity check` code set. ",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/CODE-PHRASE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.thumbnail",
        "path" : "DV_MULTIMEDIA.thumbnail",
        "short" : "The thumbnail for this item, if one exists; mainly for graphics formats.",
        "definition" : "The thumbnail for this item, if one exists; mainly for graphics formats.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-MULTIMEDIA"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_MULTIMEDIA.size",
        "path" : "DV_MULTIMEDIA.size",
        "short" : "Original size in bytes of unencoded encapsulated data.",
        "definition" : "Original size in bytes of unencoded encapsulated data. I.e. encodings such as base64, hexadecimal etc do not change the value of this attribute.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
