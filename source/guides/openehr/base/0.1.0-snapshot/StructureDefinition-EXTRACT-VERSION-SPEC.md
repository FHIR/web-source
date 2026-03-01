# EXTRACT_VERSION_SPEC - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **EXTRACT_VERSION_SPEC**

## Logical Model: EXTRACT_VERSION_SPEC 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/EXTRACT-VERSION-SPEC | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:EXTRACT_VERSION_SPEC |

 
Specification of what versions should be included in an Extract. By default, only latest versions are included in the Extract, in which case this part of the Extract specification is not needed at all. The attributes`_include_all_versions_`and`_commit_time_interval_`are used to modify this; the former forces all versions to be included; the latter limits the versions to be those latest versions committed in the time interval, or if`_include_all_versions_`is`True`, all versions committed in the time interval. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/foundation_types.html#_any_class)

**Usages:**

* Use this Logical Model: [EXTRACT_SPEC](StructureDefinition-EXTRACT-SPEC.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/EXTRACT-VERSION-SPEC)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-EXTRACT-VERSION-SPEC.csv), [Excel](StructureDefinition-EXTRACT-VERSION-SPEC.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "EXTRACT-VERSION-SPEC",
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
  "url" : "http://openehr.org/fhir/StructureDefinition/EXTRACT-VERSION-SPEC",
  "version" : "0.1.0-snapshot",
  "name" : "EXTRACT_VERSION_SPEC",
  "title" : "EXTRACT_VERSION_SPEC",
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
  "description" : "Specification of what versions should be included in an Extract. By default, only latest versions are included in the Extract, in which case this part of the Extract specification is not needed at all. The attributes `_include_all_versions_` and `_commit_time_interval_` are used to modify this; the former forces all versions to be included; the latter limits the versions to be those latest versions committed in the time interval, or if `_include_all_versions_` is `True`, all versions committed in the time interval.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/EXTRACT_VERSION_SPEC",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "EXTRACT_VERSION_SPEC",
        "path" : "EXTRACT_VERSION_SPEC",
        "short" : "Specification of what versions should be included in an Extract.",
        "definition" : "Specification of what versions should be included in an Extract. By default, only latest versions are included in the Extract, in which case this part of the Extract specification is not needed at all. The attributes `_include_all_versions_` and `_commit_time_interval_` are used to modify this; the former forces all versions to be included; the latter limits the versions to be those latest versions committed in the time interval, or if `_include_all_versions_` is `True`, all versions committed in the time interval.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Includes_revision_history_valid",
            "severity" : "error",
            "human" : "Includes revision history valid must satisfy conditional constraints",
            "expression" : "include_dat.not()a implies include_revision_history"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "EXTRACT_VERSION_SPEC.include-all-versions",
        "path" : "EXTRACT_VERSION_SPEC.include_all_versions",
        "short" : "True if all versions of each item in the Extract are included.",
        "definition" : "True if all versions of each item in the Extract are included.",
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
        "id" : "EXTRACT_VERSION_SPEC.commit-time-interval",
        "path" : "EXTRACT_VERSION_SPEC.commit_time_interval",
        "short" : "Specifies commit time interval of items to source repository to include in Extract.",
        "definition" : "Specifies commit time interval of items to source repository to include in Extract. By default, only latest versions whose commit times fall in the range are included. If include_all_versions is True, then the range includes all versions committed within the interval.",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-DATE-TIME"
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
        "id" : "EXTRACT_VERSION_SPEC.include-revision-history",
        "path" : "EXTRACT_VERSION_SPEC.include_revision_history",
        "short" : "True if revision histories of the items in the Extract are included.",
        "definition" : "True if revision histories of the items in the Extract are included. If included, it is always the full revision history.",
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
        "id" : "EXTRACT_VERSION_SPEC.include-data",
        "path" : "EXTRACT_VERSION_SPEC.include_data",
        "short" : "`True` if the data of items matched by the content spec should be included.",
        "definition" : "`True` if the data of items matched by the content spec should be included. This is the default. If `False`, only revision history is included in serialised versions. Turning this option on in openEHR systems causes `X_VERSIONED_OBJECTs` to have `_revision_history_` set, but versions Void. Useful for interrogating a server without having to look at any content data. In other systems it may or may not have a sensible meaning.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "boolean"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
