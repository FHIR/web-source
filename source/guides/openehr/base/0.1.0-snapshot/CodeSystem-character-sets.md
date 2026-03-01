# Character Set - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* **Character Set**

## CodeSystem: Character Set 

| | | |
| :--- | :--- | :--- |
| *Official URL*:https://specifications.openehr.org/fhir/codesystem-character_sets | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:character_sets |

 
Character Set 

 This Code system is referenced in the content logical definition of the following value sets: 

* [character_sets](ValueSet-character-sets.md)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "character-sets",
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
  "url" : "https://specifications.openehr.org/fhir/codesystem-character_sets",
  "version" : "0.1.0-snapshot",
  "name" : "character_sets",
  "title" : "Character Set",
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
  "description" : "Character Set",
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
  "valueSet" : "https://specifications.openehr.org/fhir/valueset-character-sets",
  "content" : "complete",
  "concept" : [
    {
      "code" : "ISO-10646-UTF-1"
    },
    {
      "code" : "ISO_8859-1:1987"
    },
    {
      "code" : "ISO-8859-2"
    },
    {
      "code" : "ISO_8859-3:1988"
    },
    {
      "code" : "ISO-8859-15"
    },
    {
      "code" : "US-ASCII"
    },
    {
      "code" : "UTF-7"
    },
    {
      "code" : "UTF-8"
    },
    {
      "code" : "UTF-16"
    },
    {
      "code" : "UTF-16BE"
    },
    {
      "code" : "UTF-16LE"
    },
    {
      "code" : "UTF-32"
    },
    {
      "code" : "UTF-32BE"
    },
    {
      "code" : "UTF-32LE"
    }
  ]
}

```
