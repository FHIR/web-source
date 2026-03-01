# ELEMENT - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **ELEMENT**

## Logical Model: ELEMENT 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/ELEMENT | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:ELEMENT |

 
The leaf variant of`ITEM`, to which a`DATA_VALUE`instance is attached. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_element_class)

**Usages:**

* Use this Logical Model: [ITEM_LIST](StructureDefinition-ITEM-LIST.md) and [ITEM_SINGLE](StructureDefinition-ITEM-SINGLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/ELEMENT)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-ELEMENT.csv), [Excel](StructureDefinition-ELEMENT.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "ELEMENT",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "is_null",
      "name" : "is_null",
      "title" : "is_null",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if value logically not known, e.g. if indeterminate, not asked etc. ",
      "code" : "is_null",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_structures.html#_element_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_null"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/ELEMENT",
  "version" : "0.1.0-snapshot",
  "name" : "ELEMENT",
  "title" : "ELEMENT",
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
  "description" : "The leaf variant of `ITEM`, to which a `DATA_VALUE` instance is attached. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/ELEMENT",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/ITEM",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "ELEMENT",
        "path" : "ELEMENT",
        "short" : "The leaf variant of `ITEM`, to which a `DATA_VALUE` instance is attached.",
        "definition" : "The leaf variant of `ITEM`, to which a `DATA_VALUE` instance is attached. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Inv_is_null_valid",
            "severity" : "error",
            "human" : "Inv is null valid",
            "expression" : "is_null() = (value .empty())"
          },
          {
            "key" : "Inv_null_flavour_indicated",
            "severity" : "error",
            "human" : "Inv null flavour indicated must satisfy exclusive conditions",
            "expression" : "is_null() xor null_flavour .empty()"
          },
          {
            "key" : "Inv_null_flavour_valid",
            "severity" : "error",
            "human" : "Inv null flavour valid must satisfy conditional constraints",
            "expression" : "is_null() implies terminology (Terminology_id_openehr).has_code_for_group_id (Group_id_null_flavour, null_flavour.defining_code)"
          },
          {
            "key" : "Inv_null_reason_valid",
            "severity" : "error",
            "human" : "Inv null reason valid must be present",
            "expression" : "null_reason.exists() implies is_null()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ELEMENT.null-flavour",
        "path" : "ELEMENT.null_flavour",
        "short" : "Flavour of null value, e.",
        "definition" : "Flavour of null value, e.g. `253|unknown|`, `271|no information|`, `272|masked|`, and `273|not applicable|`.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-CODED-TEXT"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ELEMENT.value",
        "path" : "ELEMENT.value",
        "short" : "Property representing leaf value object of `ELEMENT`.",
        "definition" : "Property representing leaf value object of `ELEMENT`. In real data, any concrete subtype of `DATA_VALUE` can be used.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "ELEMENT.null-reason",
        "path" : "ELEMENT.null_reason",
        "short" : "Optional specific reason for null value; if set, `_null_flavour_` must be set.",
        "definition" : "Optional specific reason for null value; if set, `_null_flavour_` must be set. Null reason may apply only to a minority of clinical data, commonly needed in reporting contexts.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/DV-TEXT"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
