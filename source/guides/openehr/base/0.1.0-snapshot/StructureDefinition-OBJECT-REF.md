# OBJECT_REF - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **OBJECT_REF**

## Logical Model: OBJECT_REF 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/OBJECT-REF | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:OBJECT_REF |

 
Class describing a reference to another object, which may exist locally or be maintained outside the current namespace, e.g. in another service. Services are usually external, e.g. available in a LAN (including on the same host) or the internet via Corba, SOAP, or some other distributed protocol. However, in small systems they may be part of the same executable as the data containing the Id. 

**Original Source:** [specifications.openehr.org](https://specifications.openehr.org/releases/BASE/latest/base_types.html#_object_ref_class)

**Usages:**

* Derived from this Logical Model: [LOCATABLE_REF](StructureDefinition-LOCATABLE-REF.md) and [PARTY_REF](StructureDefinition-PARTY-REF.md)
* Use this Logical Model: [CARE_ENTRY](StructureDefinition-CARE-ENTRY.md), [CONTRIBUTION](StructureDefinition-CONTRIBUTION.md), [EHR](StructureDefinition-EHR.md), [ENTRY](StructureDefinition-ENTRY.md)...Show 7 more,[EXTRACT_ACTION_REQUEST](StructureDefinition-EXTRACT-ACTION-REQUEST.md),[EXTRACT_ENTITY_MANIFEST](StructureDefinition-EXTRACT-ENTITY-MANIFEST.md),[EXTRACT_ERROR](StructureDefinition-EXTRACT-ERROR.md),[FOLDER](StructureDefinition-FOLDER.md),[ITEM_TAG](StructureDefinition-ITEM-TAG.md),[VERSION](StructureDefinition-VERSION.md)and[VERSIONED_OBJECT](StructureDefinition-VERSIONED-OBJECT.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/openehr.base|current/StructureDefinition/OBJECT-REF)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-OBJECT-REF.csv), [Excel](StructureDefinition-OBJECT-REF.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "OBJECT-REF",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/web-source",
      "valueUrl" : "https://specifications.openehr.org/releases/BASE/latest/base_types.html#_object_ref_class"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
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
  "url" : "http://openehr.org/fhir/StructureDefinition/OBJECT-REF",
  "version" : "0.1.0-snapshot",
  "name" : "OBJECT_REF",
  "title" : "OBJECT_REF",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-06-27T18:45:58+10:00",
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
  "description" : "Class describing a reference to another object, which may exist locally or be maintained outside the current namespace, e.g. in another service. Services are usually external, e.g. available in a LAN (including on the same host) or the internet via Corba, SOAP, or some other distributed protocol. However, in small systems they may be part of the same executable as the data containing the Id.",
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
  "type" : "http://openehr.org/fhir/StructureDefinition/OBJECT_REF",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base",
  "derivation" : "specialization",
  "differential" : {
    "element" : [
      {
        "id" : "OBJECT_REF",
        "path" : "OBJECT_REF",
        "short" : "Class describing a reference to another object, which may exist locally or be maintained outside the current namespace, e.g. in another service",
        "definition" : "Class describing a reference to another object, which may exist locally or be maintained outside the current namespace, e.g. in another service. Services are usually external, e.g. available in a LAN (including on the same host) or the internet via Corba, SOAP, or some other distributed protocol. However, in small systems they may be part of the same executable as the data containing the Id.",
        "min" : 0,
        "max" : "*",
        "isModifier" : false
      },
      {
        "id" : "OBJECT_REF.namespace",
        "path" : "OBJECT_REF.namespace",
        "short" : "Namespace to which this identifier belongs in the local system context (and possibly in any other openEHR compliant environment)",
        "definition" : "Namespace to which this identifier belongs in the local system context (and possibly in any other openEHR compliant environment) e.g. terminology , demographic . These names are not yet standardised. Legal values for namespace are: 'local', 'unknown', or a string matching the standard regex [a-zA-Z][a-zA-Z0-9_.:/&?=+-]*. Note that the first two are just special values of the regex, and will be matched by it.",
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
        "id" : "OBJECT_REF.type",
        "path" : "OBJECT_REF.type",
        "short" : "Name of the class (concrete or abstract) of object to which this identifier type refers. These class names are from the relevant reference model",
        "definition" : "Name of the class (concrete or abstract) of object to which this identifier type refers, e.g. PARTY, PERSON, GUIDELINE etc. These class names are from the relevant reference model. The type name ANY can be used to indicate that any type is accepted (e.g. if the type is unknown).",
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
        "id" : "OBJECT_REF.id",
        "path" : "OBJECT_REF.id",
        "short" : "Globally unique id of an object, regardless of where it is stored",
        "definition" : "Globally unique id of an object, regardless of where it is stored.",
        "min" : 1,
        "max" : "1",
        "type" : [
          {
            "code" : "http://openehr.org/fhir/StructureDefinition/OBJECT-ID"
          }
        ],
        "isModifier" : false
      }
    ]
  }
}

```
