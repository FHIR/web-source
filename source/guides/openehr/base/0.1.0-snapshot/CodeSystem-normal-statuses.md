# Normal statuses - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Normal statuses**

## CodeSystem: Normal statuses 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-normal_statuses | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:normal_statuses |

 
Normal statuses 

 This Code system is referenced in the content logical definition of the following value sets: 

* [NormalStatuses](ValueSet-normal-statuses.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "normal-statuses",
  "extension" : [
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-normal_statuses",
  "version" : "0.1.0-snapshot",
  "name" : "normal_statuses",
  "title" : "Normal statuses",
  "status" : "active",
  "experimental" : false,
  "date" : "2024-04-11",
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
  "description" : "Normal statuses",
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
  "caseSensitive" : true,
  "valueSet" : "https://specifications.openehr.org/fhir/valueset-normal_statuses",
  "content" : "complete",
  "concept" : [
    {
      "code" : "HHH",
      "display" : "HHH"
    },
    {
      "code" : "HH",
      "display" : "HH"
    },
    {
      "code" : "H",
      "display" : "H"
    },
    {
      "code" : "N",
      "display" : "N"
    },
    {
      "code" : "L",
      "display" : "L"
    },
    {
      "code" : "LL",
      "display" : "LL"
    },
    {
      "code" : "LLL",
      "display" : "LLL"
    }
  ]
}

```
