# DV_QUANTITY - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_QUANTITY**

## Logical Model: DV_QUANTITY 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-QUANTITY | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_QUANTITY |

 
Quantitified type representing scientific quantities, i.e. quantities expressed as a magnitude and units. Units are expressed in the UCUM syntax (http://unitsofmeasure.org/ucum.html[Unified Code for Units of Measure (UCUM)], by Gunther Schadow and Clement J. McDonald of The Regenstrief Institute) (case-sensitive form) by default, or another system if`_units_system_`is set. 
Can also be used for time durations, where it is more convenient to treat these as simply a number of seconds rather than days, months, years (in the latter case,`DV_DURATION`may be used). 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_quantity_class)

**Usages:**

* This Logical Model is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-QUANTITY)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-QUANTITY.csv), [Excel](StructureDefinition-DV-QUANTITY.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-QUANTITY",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "add",
      "name" : "add",
      "title" : "add",
      "status" : "active",
      "kind" : "operation",
      "description" : "Sum of this `DV_QUANTITY` and `_other_`.",
      "code" : "add",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "subtract",
      "name" : "subtract",
      "title" : "subtract",
      "status" : "active",
      "kind" : "operation",
      "description" : "Difference of this `DV_QUANTITY` and `_other_`.",
      "code" : "subtract",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "multiply",
      "name" : "multiply",
      "title" : "multiply",
      "status" : "active",
      "kind" : "operation",
      "description" : "Product of this `DV_QUANTITY` and `_factor_`.",
      "code" : "multiply",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "factor",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "less_than",
      "name" : "less_than",
      "title" : "less_than",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this Quantity object is less than `_other_`, based on comparison of `_magnitude_`. Only valid if `_is_strictly_comparable_to()_` is True.",
      "code" : "less_than",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "decimal"
        },
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
      "id" : "is_integral",
      "name" : "is_integral",
      "title" : "is_integral",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if `_precision_` = 0, meaning that the `_magnitude_` is a whole number.",
      "code" : "is_integral",
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
      "id" : "is_strictly_comparable_to",
      "name" : "is_strictly_comparable_to",
      "title" : "is_strictly_comparable_to",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if this quantity and `_other_` have the same `_units_` and also `_units_system_` if it exists.",
      "code" : "is_strictly_comparable_to",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "other",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        },
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_quantity_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#add"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#subtract"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#multiply"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#less_than"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_integral"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#is_strictly_comparable_to"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTITY",
  "version" : "0.1.0-snapshot",
  "name" : "DV_QUANTITY",
  "title" : "DV_QUANTITY",
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
  "description" : "Quantitified type representing  scientific  quantities, i.e. quantities expressed as a magnitude and units. Units are expressed in the UCUM syntax (http://unitsofmeasure.org/ucum.html[Unified Code for Units of Measure (UCUM)], by Gunther Schadow and Clement J. McDonald of The Regenstrief Institute)  (case-sensitive form) by default, or another system if `_units_system_` is set. \n\nCan also be used for time durations, where it is more convenient to treat these as simply a number of seconds rather than days, months, years (in the latter case, `DV_DURATION` may be used).",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_QUANTITY",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DV-AMOUNT",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_QUANTITY",
        "path" : "DV_QUANTITY",
        "short" : "Quantitified type representing  scientific  quantities, i.",
        "definition" : "Quantitified type representing  scientific  quantities, i.e. quantities expressed as a magnitude and units. Units are expressed in the UCUM syntax (http://unitsofmeasure.org/ucum.html[Unified Code for Units of Measure (UCUM)], by Gunther Schadow and Clement J. McDonald of The Regenstrief Institute)  (case-sensitive form) by default, or another system if `_units_system_` is set. \n\nCan also be used for time durations, where it is more convenient to treat these as simply a number of seconds rather than days, months, years (in the latter case, `DV_DURATION` may be used).",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTITY.magnitude",
        "path" : "DV_QUANTITY.magnitude",
        "short" : "Numeric magnitude of the quantity.",
        "definition" : "Numeric magnitude of the quantity.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "decimal"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTITY.precision",
        "path" : "DV_QUANTITY.precision",
        "short" : "Precision to which the value of the quantity is expressed, in terms of number of decimal places.",
        "definition" : "Precision to which the value of the quantity is expressed, in terms of number of decimal places. The value 0 implies an integral quantity.\nThe value -1 implies no limit, i.e. any number of decimal places.",
        "min" : 0,
        "max" : "1",
        "type" : [
          {
            "code" : "integer"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTITY.units",
        "path" : "DV_QUANTITY.units",
        "short" : "Quantity units, expressed as a code or syntax string from either UCUM (the default) or the units system specified in `_units_system_`, when set.",
        "definition" : "Quantity units, expressed as a code or syntax string from either UCUM (the default) or the units system specified in `_units_system_`, when set.\n\nIn either case, the value is the code or syntax - normally formed of standard ASCII - which is in principal not the same as the display string, although in simple cases such as 'm' (for meters) it will be.\n\nIf the `_units_display_name_` field is set, this may be used for display. If not, the implementations must effect the resolution of the `_units_` value to a display form locally, e.g. by lookup of reference tables, request to a terminology service etc.\n\nExample values from UCUM: \"kg/m^2\", “mm[Hg]\", \"ms-1\", \"km/h\".",
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
        "id" : "DV_QUANTITY.normal-range",
        "path" : "DV_QUANTITY.normal_range",
        "short" : "Optional normal range.",
        "definition" : "Optional normal range. ",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTITY"
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
        "id" : "DV_QUANTITY.other-reference-ranges",
        "path" : "DV_QUANTITY.other_reference_ranges",
        "short" : "Optional tagged other reference ranges for this value in its particular measurement context.",
        "definition" : "Optional tagged other reference ranges for this value in its particular measurement context.",
        "min" : 0,
        "max" : "*",
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
                    "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-QUANTITY"
                  }
                ],
                "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
              }
            ],
            "code" : "http://openehr.org/fhir/StructureDefinition/REFERENCE-RANGE"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_QUANTITY.units-system",
        "path" : "DV_QUANTITY.units_system",
        "short" : "Optional field used to specify a units system from which codes in `_units_` are defined.",
        "definition" : "Optional field used to specify a units system from which codes in `_units_` are defined. Value is a URI identifying a terminology containing units concepts from the  (https://www.hl7.org/fhir/terminologies-systems.html[HL7 FHIR terminologies list]).\n\nIf not set, the UCUM standard (case-sensitive codes) is assumed as the units system.",
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
        "id" : "DV_QUANTITY.units-display-name",
        "path" : "DV_QUANTITY.units_display_name",
        "short" : "Optional field containing the displayable form of the `_units_` field, e.",
        "definition" : "Optional field containing the displayable form of the `_units_` field, e.g. `'°C'`.\n\nIf not set, the application environment needs to determine the displayable form.\n\nNOTE: The display name may be language-dependent for various older and non-systematic units. For this reason, it is not recommended to add unit display names to archetypes, only to templates (for localisation purposes).",
        "min" : 0,
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
