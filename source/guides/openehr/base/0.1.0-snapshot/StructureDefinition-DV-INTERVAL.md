# DV_INTERVAL - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_INTERVAL**

## Logical Model: DV_INTERVAL 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-INTERVAL | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_INTERVAL |

 
Generic class defining an interval (i.e. range) of a comparable type. An interval is a contiguous subrange of a comparable base type. Used to define intervals of dates, times, quantities (whose units match) and so on. The type parameter,`T`, must be a descendant of the type`DV_ORDERED`, which is necessary (but not sufficient) for instances to be compared (`_strictly_comparable_`is also needed). 
Without the`DV_INTERVAL`class, quite a few more`DV_`classes would be needed to express logical intervals, namely interval versions of all the date/time classes, and of quantity classes. Further, it allows the semantics of intervals to be stated in one place unequivocally, including the conditions for strict comparison. 
The basic semantics are derived from the class`Interval<T>`, described in the support RM. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_interval_class)

**Usages:**

* Use this Logical Model: [CAPABILITY](StructureDefinition-CAPABILITY.md), [CONTACT](StructureDefinition-CONTACT.md), [DV_COUNT](StructureDefinition-DV-COUNT.md), [DV_ORDERED](StructureDefinition-DV-ORDERED.md)...Show 8 more,[DV_PROPORTION](StructureDefinition-DV-PROPORTION.md),[DV_QUANTITY](StructureDefinition-DV-QUANTITY.md),[EXTRACT_PARTICIPATION](StructureDefinition-EXTRACT-PARTICIPATION.md),[EXTRACT_VERSION_SPEC](StructureDefinition-EXTRACT-VERSION-SPEC.md),[PARTICIPATION](StructureDefinition-PARTICIPATION.md),[PARTY_RELATIONSHIP](StructureDefinition-PARTY-RELATIONSHIP.md),[REFERENCE_RANGE](StructureDefinition-REFERENCE-RANGE.md)and[ROLE](StructureDefinition-ROLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-INTERVAL)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-INTERVAL.csv), [Excel](StructureDefinition-DV-INTERVAL.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-INTERVAL",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_interval_class"
    },
    {
      "extension" : [
        {
          "url" : "name",
          "valueCode" : "T"
        },
        {
          "url" : "type",
          "valueUri" : "http://openehr.org/fhir/StructureDefinition/DV-ORDERED"
        }
      ],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-parameter"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-INTERVAL",
  "version" : "0.1.0-snapshot",
  "name" : "DV_INTERVAL",
  "title" : "DV_INTERVAL",
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
  "description" : "Generic class defining an interval (i.e. range) of a comparable type. An interval is a contiguous subrange of a comparable base type. Used to define intervals of dates, times, quantities (whose units match) and so on. The type parameter, `T`, must be a descendant of the type `DV_ORDERED`, which is necessary (but not sufficient) for instances to be compared (`_strictly_comparable_` is also needed). \n\nWithout the `DV_INTERVAL` class, quite a few more `DV_` classes would be needed to express logical intervals, namely interval versions of all the date/time classes, and of quantity classes. Further, it allows the semantics of intervals to be stated in one place unequivocally, including the conditions for strict comparison. \n\nThe basic semantics are derived from the class `Interval<T>`, described in the support RM. ",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_INTERVAL",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_INTERVAL",
        "path" : "DV_INTERVAL",
        "short" : "Generic class defining an interval (i.",
        "definition" : "Generic class defining an interval (i.e. range) of a comparable type. An interval is a contiguous subrange of a comparable base type. Used to define intervals of dates, times, quantities (whose units match) and so on. The type parameter, `T`, must be a descendant of the type `DV_ORDERED`, which is necessary (but not sufficient) for instances to be compared (`_strictly_comparable_` is also needed). \n\nWithout the `DV_INTERVAL` class, quite a few more `DV_` classes would be needed to express logical intervals, namely interval versions of all the date/time classes, and of quantity classes. Further, it allows the semantics of intervals to be stated in one place unequivocally, including the conditions for strict comparison. \n\nThe basic semantics are derived from the class `Interval<T>`, described in the support RM. ",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Limits_consistent",
            "severity" : "error",
            "human" : "Limits consistent must satisfy range constraints",
            "expression" : "(upper_unbounde.not()d and lower_unbounded.not()) implies (lower.is_strictly_comparable_to(upper) and lower <= upper)"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
