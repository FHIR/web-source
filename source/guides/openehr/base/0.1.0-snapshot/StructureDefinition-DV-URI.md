# DV_URI - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **DV_URI**

## Logical Model: DV_URI 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-URI | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:DV_URI |

 
A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard. The reference is contained in the`_value_`attribute, which is a`String`. So-called 'plain-text URIs' that contain RFC-3986 forbidden characters such as spaces etc, are allowed on the basis that they need to be RFC-3986 encoded prior to use in e.g. REST APIs or other contexts relying on machine-level conformance. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_uri_class)

**Usages:**

* Derived from this Logical Model: [DV_EHR_URI](StructureDefinition-DV-EHR-URI.md)
* Use this Logical Model: [DV_MULTIMEDIA](StructureDefinition-DV-MULTIMEDIA.md) and [DV_TEXT](StructureDefinition-DV-TEXT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/DV-URI)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-DV-URI.csv), [Excel](StructureDefinition-DV-URI.xlsx) 

#### Contained resources



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "DV-URI",
  "contained" : [
    {
      "resourceType" : "OperationDefinition",
      "id" : "scheme",
      "name" : "scheme",
      "title" : "scheme",
      "status" : "active",
      "kind" : "operation",
      "description" : "A distributed information 'space' in which  information objects  exist. The scheme simultaneously specifies an information space and a mechanism for accessing objects in  that  space.  For  example  if  scheme  = \"ftp\", it identifies the information space in which  all  ftp-able objects  exist,  and also the application - ftp - which can be used to access them. Values may include: \"ftp\", \"telnet\", \"mailto\", etc. Refer to RFC-3986 for a full list. \n",
      "code" : "scheme",
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
      "id" : "path",
      "name" : "path",
      "title" : "path",
      "status" : "active",
      "kind" : "operation",
      "description" : "A string whose format is  a  function  of  the  scheme. Identifies   the   location  in  <scheme>-space  of  an information entity. Typical values include hierarchical directory  paths  for  any  machine.  For example, with scheme = \"ftp\", path might be `\"/pub/images/image_01\"`. The strings \".\" and \"..\" are reserved for use in the path. Paths may include internet/intranet location identifiers of the form: `sub_domain...domain`, e.g. `\"info.cern.ch\"`. ",
      "code" : "path",
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
      "id" : "fragment_id",
      "name" : "fragment_id",
      "title" : "fragment_id",
      "status" : "active",
      "kind" : "operation",
      "description" : "A part of, a  fragment  or  a  sub-function  within  an object. Allows references to sub-parts of objects, such as a certain line and character  position  in  a  text object. The  syntax  and semantics are defined by the application responsible for the object. \n",
      "code" : "fragment_id",
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
      "id" : "query",
      "name" : "query",
      "title" : "query",
      "status" : "active",
      "kind" : "operation",
      "description" : "Query string to send to application implied  by  scheme and  path.  Enables  queries  to applications, including databases  to  be  included in  the  URI. Supports any query meaningful to the server, including SQL. \n",
      "code" : "query",
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
      "valueUrl" : "https://specifications.openehr.org/releases/RM/Release-1.1.0/data_types.html#_dv_uri_class"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#scheme"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#path"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#fragment_id"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/type-operation",
      "valueCanonical" : "#query"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/DV-URI",
  "version" : "0.1.0-snapshot",
  "name" : "DV_URI",
  "title" : "DV_URI",
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
  "description" : "A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard. The reference is contained in the `_value_` attribute, which is a `String`. So-called 'plain-text URIs' that contain RFC-3986 forbidden characters such as spaces etc, are allowed on the basis that they need to be RFC-3986 encoded prior to use in e.g. REST APIs or other contexts relying on machine-level conformance.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/DV_URI",
  "baseDefinition" : "http://openehr.org/fhir/StructureDefinition/DATA-VALUE",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "DV_URI",
        "path" : "DV_URI",
        "short" : "A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard.",
        "definition" : "A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard. The reference is contained in the `_value_` attribute, which is a `String`. So-called 'plain-text URIs' that contain RFC-3986 forbidden characters such as spaces etc, are allowed on the basis that they need to be RFC-3986 encoded prior to use in e.g. REST APIs or other contexts relying on machine-level conformance.",
        "min" : 0,
        "max" : "*",
        "constraint" : [
          {
            "key" : "Value_valid",
            "severity" : "error",
            "human" : "Value valid must not be empty",
            "expression" : "value.empty().not()"
          }
        ],
        "isModifier" : false
      },
      {
        "id" : "DV_URI.value",
        "path" : "DV_URI.value",
        "short" : "Value of URI as a String.",
        "definition" : "Value of URI as a String. 'Plain-text' URIs are allowed, enabling better readability, but must be RFC-3986 encoded in use.",
        "min" : 1,
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
