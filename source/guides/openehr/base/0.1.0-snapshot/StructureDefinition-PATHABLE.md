# PATHABLE - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **PATHABLE**

## Logical Model: PATHABLE ( Abstract ) 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/PATHABLE | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:PATHABLE |

 
The`PATHABLE`class defines the pathing capabilities used by nearly all classes in the openEHR reference model, mostly via inheritance of`LOCATABLE`. The defining characteristics of`PATHABLE`objects are that they can locate child objects using paths, and they know their parent object in a compositional hierarchy. The parent feature is defined as abstract in the model, and may be implemented in any way convenient. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/development/common.html#_pathable_class)

**Usages:**

* Derived from this Logical Model: [EVENT_CONTEXT](StructureDefinition-EVENT-CONTEXT.md), [INSTRUCTION_DETAILS](StructureDefinition-INSTRUCTION-DETAILS.md), [ISM_TRANSITION](StructureDefinition-ISM-TRANSITION.md) and [LOCATABLE](StructureDefinition-LOCATABLE.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/PATHABLE)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-PATHABLE.csv), [Excel](StructureDefinition-PATHABLE.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "PATHABLE",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "parent",
      "name" : "parent",
      "title" : "parent",
      "status" : "active",
      "kind" : "operation",
      "description" : "Parent of this node in a compositional hierarchy. \n",
      "code" : "parent",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Parameters"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "item_at_path",
      "name" : "item_at_path",
      "title" : "item_at_path",
      "status" : "active",
      "kind" : "operation",
      "description" : "The item at a path (relative to this item); only valid for unique paths, i.e. paths that resolve to a single item. ",
      "code" : "item_at_path",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Base"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "items_at_path",
      "name" : "items_at_path",
      "title" : "items_at_path",
      "status" : "active",
      "kind" : "operation",
      "description" : "List of items corresponding to a non-unique path.",
      "code" : "items_at_path",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
        },
        {
          "name" : "return",
          "use" : "out",
          "min" : 1,
          "max" : "1",
          "type" : "Base"
        }
      ]
    },
    {
      "resourceType" : "OperationDefinition",
      "id" : "path_exists",
      "name" : "path_exists",
      "title" : "path_exists",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if the path exists in the data with respect to the current item. ",
      "code" : "path_exists",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
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
      "id" : "path_unique",
      "name" : "path_unique",
      "title" : "path_unique",
      "status" : "active",
      "kind" : "operation",
      "description" : "True if the path corresponds to a single item in the data. ",
      "code" : "path_unique",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_path",
          "use" : "in",
          "min" : 1,
          "max" : "1",
          "type" : "string"
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
      "id" : "path_of_item",
      "name" : "path_of_item",
      "title" : "path_of_item",
      "status" : "active",
      "kind" : "operation",
      "description" : "The path to an item relative to the root of this archetyped structure.",
      "code" : "path_of_item",
      "system" : false,
      "instance" : true,
      "parameter" : [
        {
          "name" : "a_loc",
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
          "type" : "string"
        }
      ]
    }
  ],
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/RM/development/common.html#_pathable_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#parent"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#item_at_path"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#items_at_path"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#path_exists"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#path_unique"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#path_of_item"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "version" : "0.1.0-snapshot",
  "name" : "PATHABLE",
  "title" : "PATHABLE",
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
  "description" : "The `PATHABLE` class defines the pathing capabilities used by nearly all classes in the openEHR reference model, mostly via inheritance of `LOCATABLE`. The defining characteristics of `PATHABLE` objects are that they can locate child objects using paths, and they know their parent object in a compositional hierarchy. The parent feature is defined as abstract in the model, and may be implemented in any way convenient.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/PATHABLE",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/Any",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "PATHABLE",
        "path" : "PATHABLE",
        "short" : "The `PATHABLE` class defines the pathing capabilities used by nearly all classes in the openEHR reference model, mostly via inheritance of `LOCATABLE`.",
        "definition" : "The `PATHABLE` class defines the pathing capabilities used by nearly all classes in the openEHR reference model, mostly via inheritance of `LOCATABLE`. The defining characteristics of `PATHABLE` objects are that they can locate child objects using paths, and they know their parent object in a compositional hierarchy. The parent feature is defined as abstract in the model, and may be implemented in any way convenient.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      }
    ]
  }
}

```
