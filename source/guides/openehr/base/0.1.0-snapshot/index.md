# Home Page - OpenEHR Base package v0.1.0-snapshot

* **Home Page**

## Home Page

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/ImplementationGuide/openehr.base | *Version*:0.1.0-snapshot | |
| *IG Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:OpenEHRBasePackage |

### Introduction

 This publication contains information to support FHIR tools working with openEHR content. Specifically, it contains a FHIR representation of the openEHR reference model. In general, this IG is a technical internal artifact to the tools; it's not anticipated that the implementers who use either openEHR or FHIR will need to look at this. (hopefully) 

### Dependencies

 This IG depends on the following additional IGs: 

*There are no Global profiles defined*



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "openehr.base",
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      "valueCode" : "informative"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      "valueCode" : "fhir"
    },
    {
      "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      "valueInteger" : 3
    }
  ],
  "url" : "http://openehr.org/fhir/ImplementationGuide/openehr.base",
  "version" : "0.1.0-snapshot",
  "name" : "OpenEHRBasePackage",
  "title" : "OpenEHR Base package",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-12-17T07:04:54+11:00",
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
  "description" : "This IG defines the base openEHR Reference model in order to support validation and publication of openEHR archetypes in the FHIR framework",
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
  "packageId" : "openehr.base",
  "license" : "CC0-1.0",
  "fhirVersion" : ["5.0.0"],
  "dependsOn" : [
    {
      "id" : "hl7tx",
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
          "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
        }
      ],
      "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
      "packageId" : "hl7.terminology.r5",
      "version" : "7.0.1"
    },
    {
      "id" : "hl7ext",
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
          "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
        }
      ],
      "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
      "packageId" : "hl7.fhir.uv.extensions.r5",
      "version" : "5.2.0"
    },
    {
      "id" : "tools",
      "uri" : "http://hl7.org/fhir/uv/hl7.fhir.uv.tools/ImplementationGuide/hl7.fhir.uv.tools",
      "packageId" : "hl7.fhir.uv.tools",
      "version" : "0.9.0"
    }
  ],
  "definition" : {
    "resource" : [
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:extension"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/property"
        },
        "name" : "Property Extension",
        "description" : "OpenEHR Property definition - what kind of thing a quantity is about."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/attestation-reason"
        },
        "name" : "Attestation Reason",
        "description" : "Attestation Reason"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/audit-change-type"
        },
        "name" : "Audit Change Type",
        "description" : "Audit Change Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/character-sets"
        },
        "name" : "Character Set",
        "description" : "Character Set"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/composition-category"
        },
        "name" : "Composition Category",
        "description" : "Composition Category"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/compression-algorithms"
        },
        "name" : "Compression algorithms",
        "description" : "Compression algorithms"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/event-math-function"
        },
        "name" : "Event Math Function",
        "description" : "Event Math Function"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/extract-action-type"
        },
        "name" : "Extract Action Type",
        "description" : "Extract Action Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/extract-content-type"
        },
        "name" : "Extract Content Type",
        "description" : "Extract Content Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/instruction-transitions"
        },
        "name" : "Instruction Transitions",
        "description" : "Instruction Transitions"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/integrity-check-algorithms"
        },
        "name" : "Integrity check algorithms",
        "description" : "Integrity check algorithms"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/normal-statuses"
        },
        "name" : "Normal statuses",
        "description" : "Normal statuses"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/null-flavours"
        },
        "name" : "Null Flavours",
        "description" : "Null Flavours"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/participation-function"
        },
        "name" : "Participation Function",
        "description" : "Participation Function"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/participation-mode"
        },
        "name" : "Participation Mode",
        "description" : "Participation Mode"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/property"
        },
        "name" : "Property",
        "description" : "Type of quantity being measured"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/proportion-kind"
        },
        "name" : "PROPORTION_KIND",
        "description" : "Class of enumeration constants defining types of proportion for the DV_PROPORTION class."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/setting"
        },
        "name" : "Setting",
        "description" : "Setting"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/subject-relationship"
        },
        "name" : "Subject Relationship",
        "description" : "Subject Relationship"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/term-mapping-purpose"
        },
        "name" : "Term Mapping Purpose",
        "description" : "Term Mapping Purpose"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/version-lifecycle-state"
        },
        "name" : "Version Lifecycle State",
        "description" : "Version Lifecycle State"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/extract-update-trigger-event-type"
        },
        "name" : "Extract Update Trigger Event Type",
        "description" : "Extract Update Trigger Event Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/instruction-states"
        },
        "name" : "Instruction States",
        "description" : "Instruction States"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/attestation-reason"
        },
        "name" : "Attestation Reason",
        "description" : "Attestation Reason"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/audit-change-type"
        },
        "name" : "Audit Change Type",
        "description" : "Audit Change Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/character-sets"
        },
        "name" : "Character Set",
        "description" : "Character Set"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/composition-category"
        },
        "name" : "Composition Category",
        "description" : "Composition Category"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/compression-algorithms"
        },
        "name" : "Compression algorithms",
        "description" : "Compression algorithms"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/event-math-function"
        },
        "name" : "Event Math Function",
        "description" : "Event Math Function"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/extract-action-type"
        },
        "name" : "Extract Action Type",
        "description" : "Extract Action Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/extract-content-type"
        },
        "name" : "Extract Content Type",
        "description" : "Extract Content Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/extract-update-trigger-event-type"
        },
        "name" : "Extract Update Trigger Event Type",
        "description" : "Extract Update Trigger Event Type"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/instruction-states"
        },
        "name" : "Instruction States",
        "description" : "Instruction States"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/instruction-transitions"
        },
        "name" : "Instruction Transitions",
        "description" : "Instruction Transitions"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/integrity-check-algorithms"
        },
        "name" : "Integrity check algorithms",
        "description" : "Integrity check algorithms"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/normal-statuses"
        },
        "name" : "Normal statuses",
        "description" : "Normal statuses"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/null-flavours"
        },
        "name" : "Null Flavours",
        "description" : "Null Flavours"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/participation-function"
        },
        "name" : "Participation Function",
        "description" : "Participation Function"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/participation-mode"
        },
        "name" : "Participation Mode",
        "description" : "Participation Mode"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/property"
        },
        "name" : "Property",
        "description" : "Property"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/proportion-kind"
        },
        "name" : "PROPORTION_KIND",
        "description" : "Class of enumeration constants defining types of proportion for the DV_PROPORTION class."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/setting"
        },
        "name" : "Setting",
        "description" : "Setting"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/subject-relationship"
        },
        "name" : "Subject Relationship",
        "description" : "Subject Relationship"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/term-mapping-purpose"
        },
        "name" : "Term Mapping Purpose",
        "description" : "Term Mapping Purpose"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/territories"
        },
        "name" : "Territories",
        "description" : "Territories"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/version-lifecycle-state"
        },
        "name" : "Version Lifecycle State",
        "description" : "Version Lifecycle State"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/input-type"
        },
        "name" : "Input Type CodeSystem",
        "description" : "Input Type CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/item-lifecyclestate"
        },
        "name" : "Item LifecycleState CodeSystem",
        "description" : "Item LifecycleState CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/item-proportiontype"
        },
        "name" : "Item ProportionType CodeSystem",
        "description" : "Item ProportionType CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/item-rmtype"
        },
        "name" : "Item rmType CodeSystem",
        "description" : "Item rmType CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/range-maxop"
        },
        "name" : "Range MaxOp CodeSystem",
        "description" : "Range MaxOp CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/range-minop"
        },
        "name" : "Range MinOp CodeSystem",
        "description" : "Range MinOp CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "CodeSystem"
          }
        ],
        "reference" : {
          "reference" : "CodeSystem/term-binding-type"
        },
        "name" : "Term Binding CodeSystem",
        "description" : "Term Binding CodeSystem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/Annotations"
        },
        "name" : "Annotations"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TranslatedString"
        },
        "name" : "TranslatedString"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplate"
        },
        "name" : "WebTemplate"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateInput"
        },
        "name" : "WebTemplateInput"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateInputListItem"
        },
        "name" : "WebTemplateInputListItem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateInputValidation"
        },
        "name" : "WebTemplateInputValidation"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateInputValidationRange"
        },
        "name" : "WebTemplateInputValidationRange"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateItem"
        },
        "name" : "WebTemplateItem"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateTermBinding"
        },
        "name" : "WebTemplateTermBinding"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/WebTemplateTermBindingValue"
        },
        "name" : "WebTemplateTermBindingValue"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/input-type"
        },
        "name" : "Input Type ValueSet",
        "description" : "Input Type ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/item-lifecyclestate"
        },
        "name" : "Item Lifecycle State ValueSet",
        "description" : "Item Lifecycle State ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/item-proportiontype"
        },
        "name" : "Item ProportionType ValueSet",
        "description" : "Item ProportionType ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/item-rmtype"
        },
        "name" : "Item rmType ValueSet",
        "description" : "Item rmType ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/term-binding-type"
        },
        "name" : "Term Binding Type ValueSet",
        "description" : "Term Binding Type ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/range-maxop"
        },
        "name" : "Range MaxOp ValueSet",
        "description" : "Range MaxOp ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "ValueSet"
          }
        ],
        "reference" : {
          "reference" : "ValueSet/range-minop"
        },
        "name" : "Range MinOp ValueSet",
        "description" : "Range MinOp ValueSet"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ACCESS-CONTROL-SETTINGS"
        },
        "name" : "ACCESS_CONTROL_SETTINGS",
        "description" : "Access Control Settings for the EHR and components. Intended to support multiple access control schemes. Currently implementation dependent."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ACTION"
        },
        "name" : "ACTION",
        "description" : "Used to record a clinical action that has been performed, which may have been ad hoc, or due to the execution of an Activity in an Instruction workflow. Every Action corresponds to a careflow step of some kind or another."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ACTIVITY"
        },
        "name" : "ACTIVITY",
        "description" : "Defines a single activity within an Instruction, such as a medication administration."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ACTOR"
        },
        "name" : "ACTOR",
        "description" : "Ancestor of all real-world types, including people and organisations. An actor is any real-world entity capable of taking on a role."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ADDRESS"
        },
        "name" : "ADDRESS",
        "description" : "Address of contact, which may be electronic or geographic."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ADDRESSED-MESSAGE"
        },
        "name" : "ADDRESSED_MESSAGE",
        "description" : "The concept of a message addressed to nominated recipients."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ADMIN-ENTRY"
        },
        "name" : "ADMIN_ENTRY",
        "description" : "Entry subtype for administrative information, i.e. information about setting up the clinical process, but not itself clinically relevant. Archetypes will define contained information.\n\nUsed for administrative details of admission, episode, ward location, discharge, appointment (if not stored in a practice management or appointments system). \n\nNot to be used for any clinically significant information."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/AGENT"
        },
        "name" : "AGENT",
        "description" : "Generic concept of any kind of agent, including devices, software systems, but not humans or organisations."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ARCHETYPE-ID"
        },
        "name" : "ARCHETYPE_ID",
        "description" : "Identifier for archetypes. Ideally these would identify globally unique archetypes. Lexical form: rm_originator '-' rm_name '-' rm_entity '.' concept_name { '-' specialisation }* '.v' number."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ARCHETYPED"
        },
        "name" : "ARCHETYPED",
        "description" : "Archetypes act as the configuration basis for the particular structures of instances defined by the reference model. To enable archetypes to be used to create valid data, key classes in the reference model act as  root  points for archetyping; accordingly, these classes have the `_archetype_details_` attribute set. \n\nAn instance of the class `ARCHETYPED` contains the relevant archetype identification information, allowing generating archetypes to be matched up with data instances."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ATTESTATION"
        },
        "name" : "ATTESTATION",
        "description" : "Record an attestation of a party (the committer) to item(s) of record content. An attestation is an explicit signing by one healthcare agent of particular content for various particular purposes, including:\n\n* for authorisation of a controlled substance or procedure (e.g. sectioning of patient under mental health act); \n* witnessing of content by senior clinical professional; \n* indicating acknowledgement of content by intended recipient, e.g. GP who ordered a test result."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/AUDIT-DETAILS"
        },
        "name" : "AUDIT_DETAILS",
        "description" : "The set of attributes required to document the committal of an information item to a repository."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/AUTHORED-RESOURCE"
        },
        "name" : "AUTHORED_RESOURCE",
        "description" : "Abstract idea of an online resource created by a human author."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/Any"
        },
        "name" : "Any",
        "description" : "Abstract ancestor class for all other classes. Usually maps to a type like Any or Object in an object-oriented technology. Defined here to provide value and reference equality semantics."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/BASIC-DEFINITIONS"
        },
        "name" : "BASIC_DEFINITIONS",
        "description" : "Inheritance class to provide access to constants defined in other packages."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CAPABILITY"
        },
        "name" : "CAPABILITY",
        "description" : "Capability of a role, such as  ehr modifier,  health care provider. Capability should be backed up by credentials."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CARE-ENTRY"
        },
        "name" : "CARE_ENTRY",
        "description" : "The abstract parent of all clinical `ENTRY` subtypes. A `CARE_ENTRY` defines protocol and guideline attributes for all clinical Entry subtypes."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CLUSTER"
        },
        "name" : "CLUSTER",
        "description" : "The grouping variant of `ITEM`, which may contain further instances of `ITEM`, in an ordered list."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CODE-PHRASE"
        },
        "name" : "CODE_PHRASE",
        "description" : "A fully coordinated (i.e. all coordination has been performed) term from a terminology service (as distinct from a particular terminology)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CODE-SET-ACCESS"
        },
        "name" : "CODE_SET_ACCESS",
        "description" : "Defines an object providing proxy access to a code_set."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/COMPOSITION"
        },
        "name" : "COMPOSITION",
        "description" : "Content of one version in a `VERSIONED_COMPOSITION`. A Composition is considered the unit of modification of the record, the unit of transmission in record Extracts, and the unit of attestation by authorising clinicians. In this latter sense, it may be considered equivalent to a signed document.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in Compositions, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the Composition."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CONTACT"
        },
        "name" : "CONTACT",
        "description" : "Description of a means of contact of a Party. Actual structure is archetyped."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CONTENT-ITEM"
        },
        "name" : "CONTENT_ITEM",
        "description" : "Abstract ancestor of all concrete content types."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/CONTRIBUTION"
        },
        "name" : "CONTRIBUTION",
        "description" : "Documents a Contribution (change set) of one or more versions added to a change-controlled repository."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DATA-STRUCTURE"
        },
        "name" : "DATA_STRUCTURE",
        "description" : "Abstract parent class of all data structure types. Includes the `_as_hierarchy_` function which can generate the equivalent CEN EN13606 single hierarchy for each subtype's physical representation. For example, the physical representation of an `ITEM_LIST` is `List<ELEMENT>`; its implementation of `_as_hierarchy_` will generate a `CLUSTER` containing the set of `ELEMENT` nodes from the list."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DATA-VALUE"
        },
        "name" : "DATA_VALUE",
        "description" : "Abstract parent of all `DV_` data value types."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-ABSOLUTE-QUANTITY"
        },
        "name" : "DV_ABSOLUTE_QUANTITY",
        "description" : "Abstract class defining the concept of quantified entities whose values are absolute with respect to an origin. Dates and Times are the main example."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-AMOUNT"
        },
        "name" : "DV_AMOUNT",
        "description" : "Abstract class defining the concept of relative quantified  'amounts'. For relative quantities, the  `+` and  `-` operators are defined (unlike descendants of `DV_ABSOLUTE_QUANTITY`, such as the date/time types)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-BOOLEAN"
        },
        "name" : "DV_BOOLEAN",
        "description" : "Items which are truly boolean data, such as true/false or yes/no answers. For such data, it is important to devise the meanings (usually questions in subjective data)  carefully, so that the only allowed results are in fact true or false. \n\nMisuse: The DV_BOOLEAN class should not be used as a replacement for naively modelled enumerated types such as male/female etc. Such values should be coded, and in any case the enumeration often has more than two values."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-CODED-TEXT"
        },
        "name" : "DV_CODED_TEXT",
        "description" : "A text item whose value must be the rubric from a controlled terminology, the key (i.e. the 'code') of which is the `_defining_code_` attribute. In other words: a `DV_CODED_TEXT` is a combination of a `CODE_PHRASE` (effectively a code) and the rubric of that term, from a terminology service, in the language in which the data were authored. \n\nSince `DV_CODED_TEXT` is a subtype of `DV_TEXT`, it can be used in place of it, effectively allowing the type `DV_TEXT` to mean  a text item, which may optionally be coded. \n\nMisuse: If the intention is to represent a term code attached in some way to a fragment of plain text, `DV_CODED_TEXT` should not be used; instead use a `DV_TEXT` and a `TERM_MAPPING` to a `CODE_PHRASE`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-COUNT"
        },
        "name" : "DV_COUNT",
        "description" : "Countable quantities. Used for countable types such as pregnancies and steps (taken by a physiotherapy patient), number of cigarettes smoked in a day. \n\nMisuse: Not to be used for amounts of physical entities (which all have units)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-DATE-TIME"
        },
        "name" : "DV_DATE_TIME",
        "description" : "Represents an absolute point in time, specified to the second. Semantics defined by ISO 8601. \n\nUsed for recording a precise point in real world time, and for approximate time stamps, e.g. the origin of a `HISTORY` in an `OBSERVATION` which is only partially known."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-DATE"
        },
        "name" : "DV_DATE",
        "description" : "Represents an absolute point in time, as measured on the Gregorian calendar, and specified only to the day. Semantics defined by ISO 8601. Used for recording dates in real world time. The partial form is used for approximate birth dates, dates of death, etc."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-DURATION"
        },
        "name" : "DV_DURATION",
        "description" : "Represents a period of time with respect to a notional point in time, which is not specified. A sign may be used to indicate the duration is  backwards  in time rather than forwards. \n\nNOTE: two deviations from ISO 8601 are supported, the first, to allow a negative sign, and the second allowing the 'W' designator to be mixed with other designators. See time types section in the Foundation Types model. \n\nUsed for recording the duration of something in the real world, particularly when there is a need a) to represent the duration in customary format, i.e. days, hours, minutes etc, and b) if it will be used in computational operations with date/time quantities, i.e. additions, subtractions etc. \n\nMisuse: Durations cannot be used to represent points in time, or intervals of time."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-EHR-URI"
        },
        "name" : "DV_EHR_URI",
        "description" : "A `DV_EHR_URI` is a `DV_URI` which has the scheme name 'ehr', and which can only reference items in EHRs. \n\nUsed to reference items in an EHR, which may be the same as the current EHR (containing this link), or another."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-ENCAPSULATED"
        },
        "name" : "DV_ENCAPSULATED",
        "description" : "Abstract class defining the common meta-data of all types of encapsulated data."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-GENERAL-TIME-SPECIFICATION"
        },
        "name" : "DV_GENERAL_TIME_SPECIFICATION",
        "description" : "Specifies points in time in a general syntax. Based on the HL7v3 GTS data type."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-IDENTIFIER"
        },
        "name" : "DV_IDENTIFIER",
        "description" : "Type for representing identifiers of real-world entities. Typical identifiers include drivers licence number, social security number, veterans affairs number, prescription id, order id, and so on.\n\nDV_IDENTIFIER is used to represent any identifier of a real thing, issued by some authority or agency. \n\nMisuse: DV_IDENTIFIER is not used to express identifiers generated by the infrastructure to refer to information items; the types OBJECT_ID and OBJECT_REF and subtypes are defined for this purpose."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-INTERVAL"
        },
        "name" : "DV_INTERVAL",
        "description" : "Generic class defining an interval (i.e. range) of a comparable type. An interval is a contiguous subrange of a comparable base type. Used to define intervals of dates, times, quantities (whose units match) and so on. The type parameter, `T`, must be a descendant of the type `DV_ORDERED`, which is necessary (but not sufficient) for instances to be compared (`_strictly_comparable_` is also needed). \n\nWithout the `DV_INTERVAL` class, quite a few more `DV_` classes would be needed to express logical intervals, namely interval versions of all the date/time classes, and of quantity classes. Further, it allows the semantics of intervals to be stated in one place unequivocally, including the conditions for strict comparison. \n\nThe basic semantics are derived from the class `Interval<T>`, described in the support RM."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-MULTIMEDIA"
        },
        "name" : "DV_MULTIMEDIA",
        "description" : "A specialisation of `DV_ENCAPSULATED` for audiovisual and bio-signal types. Includes further metadata relating to multimedia types which are not applicable to other subtypes of `DV_ENCAPSULATED`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-ORDERED"
        },
        "name" : "DV_ORDERED",
        "description" : "Abstract class defining the concept of ordered values, which includes ordinals as well as true quantities. It defines the functions  `<` and `_is_strictly_comparable_to()_`, the latter of which must evaluate to `True` for instances being compared with the  `<` function, or used as limits in the `DV_INTERVAL<T>` class. \n\nData value types which are to be used as limits in the `DV_INTERVAL<T>` class must inherit from this class, and implement the function `_is_strictly_comparable_to()_` to ensure that instances compare meaningfully. For example, instances of `DV_QUANTITY` can only be compared if they measure the same kind of physical quantity."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-ORDINAL"
        },
        "name" : "DV_ORDINAL",
        "description" : "A data type that represents integral score values, e.g. pain, Apgar values, etc, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) integer values only.\n\nNote that although the term 'ordinal' in mathematics means natural numbers only, here any integer is allowed, since negative and zero values are often used by medical professionals for values around a neutral point. Examples of sets of ordinal values: \n\n*   -3, -2, -1, 0, 1, 2, 3  -- reflex response values \n*    0, 1, 2                  -- Apgar values \n\nThis class is used for recording any clinical datum which is customarily recorded using symbolic values. Example: the results on a urinalysis strip, e.g. `{neg, trace, +, ++, +++}` are used for leucocytes, protein, nitrites etc; for non-haemolysed blood `{neg, trace, moderate}`; for haemolysed blood `{small, moderate, large}`.\n\nFor scores or scales that include Real numbers (or might in the future, i.e. not fixed for all time, such as Apgar), use `DV_SCALE`. `DV_SCALE` may also be used in future for representing purely Integer-based scales, however, the `DV_ORDINAL` type should continue to be supported in software implementations in order to accommodate existing data that are instances of this type."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-PARAGRAPH"
        },
        "name" : "DV_PARAGRAPH",
        "description" : "DEPRECATED: use markdown formatted `DV_TEXT` instead.\n\nOriginal definition:\n\nA logical composite text value consisting of a series of `DV_TEXTs`, i.e. plain text (optionally coded) potentially with simple formatting, to form a larger tract of prose, which may be interpreted for display purposes as a paragraph. \n\n`DV_PARAGRAPH` is the standard way for constructing longer text items in summaries, reports and so on."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-PARSABLE"
        },
        "name" : "DV_PARSABLE",
        "description" : "Encapsulated data expressed as a parsable String. The internal model of the data item is not described in the openEHR model in common with other encapsulated types, but in this case, the form of the data is assumed to be plaintext, rather than compressed or other types of large binary data."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-PERIODIC-TIME-SPECIFICATION"
        },
        "name" : "DV_PERIODIC_TIME_SPECIFICATION",
        "description" : "Specifies periodic points in time, linked to the calendar (phase-linked), or a real world repeating event, such as  breakfast  (event-linked). Based on the HL7v3 data types `PIVL<T>` and `EIVL<T>`. \n\nUsed in therapeutic prescriptions, expressed as `INSTRUCTIONs` in the openEHR model."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-PROPORTION"
        },
        "name" : "DV_PROPORTION",
        "description" : "Models a ratio of values, i.e. where the numerator and denominator are both pure numbers. The `_valid_proportion_kind_` property of the `PROPORTION_KIND` class is used to control the type attribute to be one of a defined set.\n\nUsed for recording titers (e.g. 1:128), concentration ratios, e.g. Na:K (unitary denominator), albumin:creatinine ratio, and percentages, e.g. red cell distirbution width (RDW). \n \nMisuse: Should not be used to represent things like blood pressure which are often written using a  '/' character, giving the misleading impression that the item is a ratio, when in fact it is a structured value. Similarly, visual acuity, often written as (e.g.) \"6/24\" in clinical notes is not a ratio but an ordinal (which includes non-numeric symbols like CF = count fingers etc). Should not be used for formulations."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-QUANTIFIED"
        },
        "name" : "DV_QUANTIFIED",
        "description" : "Abstract class defining the concept of true quantified values, i.e. values which are not only ordered, but which have a precise magnitude."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-QUANTITY"
        },
        "name" : "DV_QUANTITY",
        "description" : "Quantitified type representing  scientific  quantities, i.e. quantities expressed as a magnitude and units. Units are expressed in the UCUM syntax (http://unitsofmeasure.org/ucum.html[Unified Code for Units of Measure (UCUM)], by Gunther Schadow and Clement J. McDonald of The Regenstrief Institute)  (case-sensitive form) by default, or another system if `_units_system_` is set. \n\nCan also be used for time durations, where it is more convenient to treat these as simply a number of seconds rather than days, months, years (in the latter case, `DV_DURATION` may be used)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-SCALE"
        },
        "name" : "DV_SCALE",
        "description" : "A data type that represents scale values, where there is:\n\na) implied ordering, \nb) no implication that the distance between each value is constant, and \nc) the total number of values is finite;\nd) non-integer values are allowed.\n\nExample:\n\n----\nBorg CR 10 Scale\n\n0    No Breathlessness at all\n0.5  Very Very Slight (Just Noticeable)\n1    Very Slight\n2    Slight Breathlessness\n3    Moderate\n... etc\n----\n\nFor scores that include only Integers, `DV_SCALE` may also be used, but `DV_ORDINAL` should be supported to accommodate existing data instances of that type."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-STATE"
        },
        "name" : "DV_STATE",
        "description" : "For representing state values which obey a defined state machine, such as a variable  representing the states of an instruction or care process. \n\nDV_STATE is expressed as a String but its values are driven by archetype-defined  state machines. This provides a powerful way of capturing stateful complex processes  in simple data."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-TEMPORAL"
        },
        "name" : "DV_TEMPORAL",
        "description" : "Specialised temporal variant of `DV_ABSOLUTE_QUANTITY` whose diff type is `DV_DURATION`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-TEXT"
        },
        "name" : "DV_TEXT",
        "description" : "A text item, which may contain any amount of legal characters arranged as e.g. words, sentences etc (i.e. one `DV_TEXT` may be more than one word). Visual formatting and hyperlinks may be included via markdown.\n\nIf the `_formatting_` field is set, the `_value_` field is affected as follows:\n\n* `_formatting_ = \"plain\"`: plain text, may contain newlines;\n* `_formatting_ = \"plain_no_newlines\"`: plain text with no newlines;\n* `_formatting_ = \"markdown\"`: text in markdown format; use of CommonMark strongly recommended.\n\nA `DV_TEXT` can be coded by adding mappings to it."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-TIME-SPECIFICATION"
        },
        "name" : "DV_TIME_SPECIFICATION",
        "description" : "This is an abstract class of which all timing specifications are specialisations. Specifies points in time, possibly linked to the calendar, or a real world repeating event, such as  breakfast."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-TIME"
        },
        "name" : "DV_TIME",
        "description" : "Represents an absolute point in time from an origin usually interpreted as meaning the start of the current day, specified to a fraction of a second. Semantics defined by ISO 8601. \n\nUsed for recording real world times, rather than scientifically measured fine amounts of time. The partial form is used for approximate times of events and substance administrations."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/DV-URI"
        },
        "name" : "DV_URI",
        "description" : "A reference to an object which structurally conforms to the Universal Resource Identifier (URI) RFC-3986 standard. The reference is contained in the `_value_` attribute, which is a `String`. So-called 'plain-text URIs' that contain RFC-3986 forbidden characters such as spaces etc, are allowed on the basis that they need to be RFC-3986 encoded prior to use in e.g. REST APIs or other contexts relying on machine-level conformance."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EHR-ACCESS"
        },
        "name" : "EHR_ACCESS",
        "description" : "EHR-wide access control object. All access decisions to data in the EHR must be made in accordance with the policies and rules in this object.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_ACCESS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2` would be copied to the `_uid_` field of the `EHR_ACCESS` object."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EHR-STATUS"
        },
        "name" : "EHR_STATUS",
        "description" : "Single object per EHR containing various EHR-wide status flags and settings, including whether this EHR can be queried, modified etc. This object is always modifiable, in order to change the status of the EHR as a whole.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `EHR_STATUS` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `EHR_STATUS` object."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EHR"
        },
        "name" : "EHR",
        "description" : "The EHR object is the root object and access point of an EHR for a subject of care."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ELEMENT"
        },
        "name" : "ELEMENT",
        "description" : "The leaf variant of `ITEM`, to which a `DATA_VALUE` instance is attached."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ENTRY"
        },
        "name" : "ENTRY",
        "description" : "The abstract parent of all `ENTRY` subtypes. An `ENTRY` is the root of a logical item of  hard  clinical information created in the  clinical statement  context, within a clinical session. There can be numerous such contexts in a clinical session. Observations and other Entry types only ever document information captured/created in the event documented by the enclosing Composition.\n\nAn `ENTRY` is also the minimal unit of information any query should return, since a whole `ENTRY` (including subparts) records spatial structure, timing information, and contextual information, as well as the subject and generator of the information."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EVALUATION"
        },
        "name" : "EVALUATION",
        "description" : "Entry type for evaluation statements. Used for all kinds of statements which evaluate other information, such as interpretations of observations, diagnoses, differential diagnoses, hypotheses, risk assessments, goals and plans. \n\nShould not be used for actionable statements such as medication orders - these are represented using the `INSTRUCTION` type."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EVENT-CONTEXT"
        },
        "name" : "EVENT_CONTEXT",
        "description" : "Documents the context information of a healthcare event involving the subject of care and the health system. The context information recorded here are independent of the attributes recorded in the version audit, which document the  system interaction  context, i.e. the context of a user interacting with the health record system. Healthcare events include patient contacts, and any other business activity, such as pathology investigations which take place on behalf of the patient."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EVENT"
        },
        "name" : "EVENT",
        "description" : "Defines the abstract notion of a single event in a series. This class is generic, allowing types to be generated which are locked to particular spatial types, such as `EVENT<ITEM_LIST>`. Subtypes express point or intveral data."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTERNAL-ENVIRONMENT-ACCESS"
        },
        "name" : "EXTERNAL_ENVIRONMENT_ACCESS",
        "description" : "A mixin class providing access to services in the external environment."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-ACTION-REQUEST"
        },
        "name" : "EXTRACT_ACTION_REQUEST",
        "description" : "Generic model of a Request for an Extract, containing an Extract specification."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-CHAPTER"
        },
        "name" : "EXTRACT_CHAPTER",
        "description" : "One content chapter of an Extract; contains information relating to only one entity."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-CONTENT-ITEM"
        },
        "name" : "EXTRACT_CONTENT_ITEM",
        "description" : "Abstract model of a wrapper for one content item in an Extract, containing various meta-data. Indicates whether it was part of the primary set and what its original path was. Intended to be subtyped for wrappers of specific types of content."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-ENTITY-CHAPTER"
        },
        "name" : "EXTRACT_ENTITY_CHAPTER",
        "description" : "Type of chapter that contains information relating to a single demographic entity."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-ENTITY-MANIFEST"
        },
        "name" : "EXTRACT_ENTITY_MANIFEST",
        "description" : "The manifest for one entity (e.g. EHR subject), identifying the entity and optionally specifying top-level items to be included in the Extract. The list actually included may be modified by the `_version_spec_` part of the specification, and also by the link_depth attribute. In repeat (standing order) requests, the final inclusion may be modified by the send_changes_only value for `EXTRACT_UPDATE_SPEC._update_method_`.\n\nVarious identifiers may be provided for the entity; these are to be used by the receiver system to locate the entity. The `_extract_id_key_` attribute is used to record the identifier that will be used throughout the Extract for this entity, including in instances of `EXTRACT_ENTITY_IDENTIFIER`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-ERROR"
        },
        "name" : "EXTRACT_ERROR"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-FOLDER"
        },
        "name" : "EXTRACT_FOLDER",
        "description" : "Folder in local Folder structure in an Extract. Empty Folders are allowed."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-ITEM"
        },
        "name" : "EXTRACT_ITEM",
        "description" : "Abstract parent of Extract Folder and Content types."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-MANIFEST"
        },
        "name" : "EXTRACT_MANIFEST",
        "description" : "Specification of the candidate entities and optionally top-level items (e.g. Compositions) to be included in the Extract."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-PARTICIPATION"
        },
        "name" : "EXTRACT_PARTICIPATION",
        "description" : "Model of a participation of a Party (any Actor or Role) in an activity.  Used to represent any participation of a Party in some activity, which is not  explicitly in the model, e.g. assisting nurse. Can be used to record past or  future participations.\n\nShould not be used in place of more permanent relationships between demographic entities."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-REQUEST"
        },
        "name" : "EXTRACT_REQUEST",
        "description" : "Generic model of a Request for an Extract, containing an Extract specification."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-SPEC"
        },
        "name" : "EXTRACT_SPEC",
        "description" : "Specification of an Extract's contents. Subtypes can be used to add details specific to the type of Extract. The specification consists of attributes specifying the directory, and two further groups of attributes in their own classes, namely a version specfication (which versions of information items are to be included) and a manifest (which entities are to be included in the extract).\n\nUse: Used in a request to specify an Extract, as well as to describe what is contained in an Extract."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-UPDATE-SPEC"
        },
        "name" : "EXTRACT_UPDATE_SPEC",
        "description" : "Specification of the how the request should be processed by server. The request can be persisted in the server, meaning that a) it can be re-activated by the requesting system simply by indicating Request id, and b) that a changes-only pattern of Extract updates can be set up. To achieve this, the server has to remember what was sent in the previous response.\n\nThe update mode may be event-driven and periodic update or a mixture of both. The candidate items to be sent each time are the result of re-evaluating the content and versioning parts of the specification; what is actually sent is determined by the `_send_changes_only_` flag."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT-VERSION-SPEC"
        },
        "name" : "EXTRACT_VERSION_SPEC",
        "description" : "Specification of what versions should be included in an Extract. By default, only latest versions are included in the Extract, in which case this part of the Extract specification is not needed at all. The attributes `_include_all_versions_` and `_commit_time_interval_` are used to modify this; the former forces all versions to be included; the latter limits the versions to be those latest versions committed in the time interval, or if `_include_all_versions_` is `True`, all versions committed in the time interval."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/EXTRACT"
        },
        "name" : "EXTRACT",
        "description" : "Generic model of an Extract of some information from a repository."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/FEEDER-AUDIT-DETAILS"
        },
        "name" : "FEEDER_AUDIT_DETAILS",
        "description" : "Audit details for any system in a feeder system chain. Audit details here means the general notion of who/where/when the information item to which the audit is attached was created. None of the attributes is defined as mandatory, however, in different scenarios, various combinations of attributes will usually be mandatory. This can be controlled by specifying feeder audit details in legacy archetypes."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/FEEDER-AUDIT"
        },
        "name" : "FEEDER_AUDIT",
        "description" : "The `FEEDER_AUDIT` class defines the semantics of an audit trail which is constructed to describe the origin of data that have been transformed into openEHR form and committed to the system."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/FOLDER"
        },
        "name" : "FOLDER",
        "description" : "The concept of a named folder.\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in _top-level_ (i.e. tree-root) `FOLDER` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the top `FOLDER` object."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/GENERIC-CONTENT-ITEM"
        },
        "name" : "GENERIC_CONTENT_ITEM",
        "description" : "Single item in generic extract, designed for 13606 and CDA data."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/GENERIC-ENTRY"
        },
        "name" : "GENERIC_ENTRY",
        "description" : "This class is used to create intermediate representations of data from sources not otherwise conforming to openEHR classes, such as HL7 messages, relational databases and so on."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/GROUP"
        },
        "name" : "GROUP",
        "description" : "A group is a real world group of parties which is created by another party, usually an organisation, for some specific purpose. A typical clinical example is that of the specialist care team, e.g.  cardiology team . The members of the group usually work together."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/HIER-OBJECT-ID"
        },
        "name" : "HIER_OBJECT_ID",
        "description" : "Concrete type corresponding to hierarchical identifiers of the form defined by UID_BASED_ID."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/HISTORY"
        },
        "name" : "HISTORY",
        "description" : "Root object of a linear history, i.e. time series structure. This is a generic class whose type parameter must be a descendant of `ITEM_STRUCTURE`, ensuring that each Event in the `_events_` of a given instance is of the same structural type, i.e. `ITEM_TREE`, `ITEM_LIST` etc.\n\nFor a periodic series of events, period will be set, and the time of each Event in the History must correspond; i.e. the `EVENT._offset_` must be a multiple of period for each Event. Missing events in a period History are however allowed."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/IMPORTED-VERSION"
        },
        "name" : "IMPORTED_VERSION",
        "description" : "Versions whose content is an `ORIGINAL_VERSION` copied from another location; this class inherits `_commit_audit_` and `_contribution_` from `VERSION<T>`, providing imported versions with their own audit trail and Contribution, distinct from those of the imported `ORIGINAL_VERSION`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/INSTRUCTION-DETAILS"
        },
        "name" : "INSTRUCTION_DETAILS",
        "description" : "Used to record details of the Instruction causing an Action."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/INSTRUCTION"
        },
        "name" : "INSTRUCTION",
        "description" : "Used to specify actions in the future. Enables simple and complex specifications to be expressed, including in a fully-computable workflow form. Used for any actionable statement such as medication and therapeutic orders, monitoring, recall and review. Enough details must be provided for the specification to be directly executed by an actor, either human or machine. \n\nNot to be used for plan items which are only specified in general terms."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/INTERVAL-EVENT"
        },
        "name" : "INTERVAL_EVENT",
        "description" : "Defines a single interval event in a series."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ISM-TRANSITION"
        },
        "name" : "ISM_TRANSITION",
        "description" : "Model of a transition in the Instruction State Machine, caused by a careflow step. The attributes document the careflow step as well as the ISM transition."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-LIST"
        },
        "name" : "ITEM_LIST",
        "description" : "Logical list data structure, where each item has a value and can be referred to by a name and a positional index in the list. The list may be empty. \n\n`ITEM_LIST` is used to represent any data which is logically a list of values, such as blood pressure, most protocols, many blood tests etc. \n\nNot to be used for time-based lists, which should be represented with the proper temporal class, i.e. `HISTORY`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-SINGLE"
        },
        "name" : "ITEM_SINGLE",
        "description" : "Logical single value data structure. Used to represent any data which is logically a single value, such as a person's height or weight."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-STRUCTURE"
        },
        "name" : "ITEM_STRUCTURE",
        "description" : "Abstract parent class of all spatial data types."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-TABLE"
        },
        "name" : "ITEM_TABLE",
        "description" : "Logical relational database style table data structure, in which columns are named and ordered with respect to each other. Implemented using Cluster-per-row encoding. Each row Cluster must have an identical number of Elements, each of which in turn must have identical names and value types in the corresponding positions in each row. \n\nSome columns may be designated  key' columns, containing key data for each row, in the manner of relational tables. This allows row-naming, where each row represents a body site, a blood antigen etc. All values in a column have the same data type. \n\nUsed for representing any data which is logically a table of values, such as blood pressure, most protocols, many blood tests etc. \n\nMisuse: Not to be used for time-based data, which should be represented with the temporal class `HISTORY`. The table may be empty."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-TAG"
        },
        "name" : "ITEM_TAG",
        "description" : "A tag with optional value that is associated with a target information entity identified by a UID."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM-TREE"
        },
        "name" : "ITEM_TREE",
        "description" : "Logical tree data structure. The tree may be empty. Used for representing data which are logically a tree such as audiology results, microbiology results, biochemistry results."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ITEM"
        },
        "name" : "ITEM",
        "description" : "The abstract parent of `CLUSTER` and `ELEMENT` representation classes."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/LINK"
        },
        "name" : "LINK",
        "description" : "The `LINK` type defines a logical relationship between two items, such as two `ENTRYs` or an `ENTRY` and a `COMPOSITION`. Links can be used across compositions, and across EHRs. Links can potentially be used between interior (i.e. non archetype root) nodes, although this probably should be prevented in archetypes. Multiple `LINKs` can be attached to the root object of any archetyped structure to give the effect of a 1->N link.\n\n1:1 and 1:N relationships between archetyped content elements (e.g. `ENTRYs`) can be expressed by using one, or more than one, respectively, `LINKs`. Chains of links can be used to see  problem threads  or other logical groupings of items. \n\nLinks should be between archetyped structures only, i.e. between objects representing complete domain concepts because relationships between sub-elements of whole concepts are not necessarily meaningful, and may be downright confusing. Sensible links only exist between whole `ENTRYs`, `SECTIONs`, `COMPOSITIONs` and so on."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/LOCATABLE-REF"
        },
        "name" : "LOCATABLE_REF",
        "description" : "Reference to a LOCATABLE instance inside the top-level content structure inside a VERSION<T> identified by the id attribute. The path attribute is applied to the object that VERSION.data points to"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/LOCATABLE"
        },
        "name" : "LOCATABLE",
        "description" : "Root class of all information model classes that can be archetyped. Most classes in the openEHR reference model inherit from the `LOCATABLE` class, which defines the idea of  locatability in an archetyped structure. `LOCATABLE` defines a runtime name and an `_archetype_node_id_`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/MEASUREMENT-SERVICE"
        },
        "name" : "MEASUREMENT_SERVICE",
        "description" : "Defines an object providing proxy access to a measurement information service."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/MESSAGE-CONTENT"
        },
        "name" : "MESSAGE_CONTENT",
        "description" : "Abstract parent of message payload types."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/MESSAGE"
        },
        "name" : "MESSAGE",
        "description" : "A “message” is an authored, possibly signed, piece of content intended for one or more recipients. Since the recipient may or may not be known directly, recipients are specified in the `ADDRESSED_MESSAGE` class."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OBJECT-ID"
        },
        "name" : "OBJECT_ID",
        "description" : "Ancestor class of identifiers of informational objects. Ids may be completely meaningless, in which case their only job is to refer to something, or may carry some information to do with the identified object. Object ids are used inside an object to identify that object. To identify another object in another service, use an OBJECT_REF, or else use a UID for local objects identified by UID. If none of the subtypes is suitable, direct instances of this class may be used."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OBJECT-REF"
        },
        "name" : "OBJECT_REF",
        "description" : "Class describing a reference to another object, which may exist locally or be maintained outside the current namespace, e.g. in another service. Services are usually external, e.g. available in a LAN (including on the same host) or the internet via Corba, SOAP, or some other distributed protocol. However, in small systems they may be part of the same executable as the data containing the Id."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OBJECT-VERSION-ID"
        },
        "name" : "OBJECT_VERSION_ID",
        "description" : "Globally unique identifier for one version of a versioned object; lexical form: object_id '::' creating_system_id '::' version_tree_id."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OBSERVATION"
        },
        "name" : "OBSERVATION",
        "description" : "Entry subtype for all clinical data in the past or present, i.e. which (by the time it is recorded) has already occurred. `OBSERVATION` data is expressed using the class `HISTORY<T>`, which guarantees that it is situated in time. `OBSERVATION` is used for all notionally objective (i.e. measured in some way) observations of phenomena, and patient-reported phenomena, e.g. pain. \n\nNot to be used for recording opinion or future statements of any kind, including instructions, intentions, plans etc."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OPENEHR-CODE-SET-IDENTIFIERS"
        },
        "name" : "OPENEHR_CODE_SET_IDENTIFIERS",
        "description" : "List of identifiers for code sets in the openEHR terminology."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OPENEHR-CONTENT-ITEM"
        },
        "name" : "OPENEHR_CONTENT_ITEM",
        "description" : "Form of `EHR EXTRACT_ITEM` containing openEHR serialised `VERSIONED_OBJECTs`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OPENEHR-DEFINITIONS"
        },
        "name" : "OPENEHR_DEFINITIONS",
        "description" : "Inheritance class to provide access to constants defined in other packages."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/OPENEHR-TERMINOLOGY-GROUP-IDENTIFIERS"
        },
        "name" : "OPENEHR_TERMINOLOGY_GROUP_IDENTIFIERS",
        "description" : "List of identifiers for groups in the openEHR terminology."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ORGANISATION"
        },
        "name" : "ORGANISATION",
        "description" : "Generic description of organisations. An organisation is a legally constituted body whose existence (in general) outlives the existence of parties considered to be part of it."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ORIGINAL-VERSION"
        },
        "name" : "ORIGINAL_VERSION",
        "description" : "A Version containing locally created content and optional attestations."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTICIPATION"
        },
        "name" : "PARTICIPATION",
        "description" : "Model of a participation of a Party (any Actor or Role) in an activity.  Used to represent any participation of a Party in some activity, which is not  explicitly in the model, e.g. assisting nurse. Can be used to record past or  future participations. \n\nShould not be used in place of more permanent relationships between demographic entities."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-IDENTIFIED"
        },
        "name" : "PARTY_IDENTIFIED",
        "description" : "Proxy data for an identified party other than the subject of the record, minimally consisting of human-readable identifier(s), such as name, formal (and possibly computable) identifiers such as NHS number, and an optional link to external data. There must be at least one of name, identifier or external_ref present.\n\nUsed to describe parties where only identifiers may be known, and there is no entry at all in the demographic system (or even no demographic system). Typically for health care providers, e.g. name and provider number of an institution. \n\nShould not be used to include patient identifying information."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-IDENTITY"
        },
        "name" : "PARTY_IDENTITY",
        "description" : "An identity  owned  by a Party, such as a person name or company name, and which is used by the Party to identify itself. Actual structure is archetyped."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-PROXY"
        },
        "name" : "PARTY_PROXY",
        "description" : "Abstract concept of a proxy description of a party, including an optional link to data for this party in a demographic or other identity management system. Sub- typed into `PARTY_IDENTIFIED` and `PARTY_SELF`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-REF"
        },
        "name" : "PARTY_REF",
        "description" : "Identifier for parties in a demographic or identity service. There are typically a number of subtypes of the PARTY class, including PERSON, ORGANISATION, etc. Abstract supertypes are allowed if the referenced object is of a type not known by the current implementation of this class (in other words, if the demographic model is changed by the addition of a new PARTY or ACTOR subtypes, valid PARTY_REFs can still be constructed to them)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-RELATED"
        },
        "name" : "PARTY_RELATED",
        "description" : "Proxy type for identifying a party and its relationship to the subject of the record. Use where the relationship between the party and the subject of the record must be known."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-RELATIONSHIP"
        },
        "name" : "PARTY_RELATIONSHIP",
        "description" : "Generic description of a relationship between parties."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY-SELF"
        },
        "name" : "PARTY_SELF",
        "description" : "Party proxy representing the subject of the record. Used to indicate that the party is the owner of the record. May or may not have `_external_ref_` set."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PARTY"
        },
        "name" : "PARTY",
        "description" : "Ancestor of all Party types, including real world entities and their roles. A Party is any entity which can participate in an activity. The `_name_` attribute inherited from `LOCATABLE` is used to indicate the actual type of party (note that the actual names, i.e. identities of parties are indicated in the `_identities_` attribute, not the `_name_` attribute).\n\nNOTE: It is strongly recommended that the inherited attribute `_uid_` be populated in `PARTY` objects, using the UID copied from the `_object_id()_` of the `_uid_` field of the enclosing `VERSION` object. +\nFor example, the `ORIGINAL_VERSION.uid` `87284370-2D4B-4e3d-A3F3-F303D2F4F34B::uk.nhs.ehr1::2`  would be copied to the `_uid_` field of the `PARTY` object."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PATHABLE"
        },
        "name" : "PATHABLE",
        "description" : "The `PATHABLE` class defines the pathing capabilities used by nearly all classes in the openEHR reference model, mostly via inheritance of `LOCATABLE`. The defining characteristics of `PATHABLE` objects are that they can locate child objects using paths, and they know their parent object in a compositional hierarchy. The parent feature is defined as abstract in the model, and may be implemented in any way convenient."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PERSON"
        },
        "name" : "PERSON",
        "description" : "Generic description of persons. Provides a dedicated type to which Person archetypes can be targeted."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/POINT-EVENT"
        },
        "name" : "POINT_EVENT",
        "description" : "Defines a single point event in a series."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/PROPORTION-KIND"
        },
        "name" : "PROPORTION_KIND",
        "description" : "Class of enumeration constants defining types of proportion for the `DV_PROPORTION` class."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/REFERENCE-RANGE"
        },
        "name" : "REFERENCE_RANGE",
        "description" : "Defines a named range to be associated with any `DV_ORDERED` datum. Each such range is particular to the patient and context, e.g. sex, age, and any other factor which affects ranges. May be used to represent normal, therapeutic, dangerous, critical etc ranges."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/RESOURCE-DESCRIPTION-ITEM"
        },
        "name" : "RESOURCE_DESCRIPTION_ITEM",
        "description" : "Language-specific detail of resource description. When a resource is translated for use in another language environment, each `RESOURCE_DESCRIPTION_ITEM` needs to be copied and translated into the new language."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/RESOURCE-DESCRIPTION"
        },
        "name" : "RESOURCE_DESCRIPTION",
        "description" : "Defines the descriptive meta-data of a resource."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/REVISION-HISTORY-ITEM"
        },
        "name" : "REVISION_HISTORY_ITEM",
        "description" : "An entry in a revision history, corresponding to a version from a versioned container. Consists of `AUDIT_DETAILS` instances with revision identifier of the revision to which the `AUDIT_DETAILS` instance belongs."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/REVISION-HISTORY"
        },
        "name" : "REVISION_HISTORY",
        "description" : "Purpose Defines the notion of a revision history of audit items, each associated with the version for which that audit was committed. The list is in most-recent-first order."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/ROLE"
        },
        "name" : "ROLE",
        "description" : "Generic description of a role performed by an Actor. The role corresponds to a competency of the Party. Roles are used to define the responsibilities undertaken by a Party for a purpose. Roles should have credentials qualifying the performer to perform the role."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/SECTION"
        },
        "name" : "SECTION",
        "description" : "Represents a heading in a heading structure, or  section tree.  Created according to archetyped structures for typical headings such as SOAP,  physical examination, but also pathology result heading structures.  Should not be used instead of `ENTRY` hierarchical structures."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/SYNC-EXTRACT-REQUEST"
        },
        "name" : "SYNC_EXTRACT_REQUEST",
        "description" : "Type of request designed for synchronisation of Contributions between openEHR servers."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/SYNC-EXTRACT-SPEC"
        },
        "name" : "SYNC_EXTRACT_SPEC",
        "description" : "Details of specification of Extract, used in a request to specify an Extract, or in a response, to describe what is actually in the Extract."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/SYNC-EXTRACT"
        },
        "name" : "SYNC_EXTRACT"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TEMPLATE-ID"
        },
        "name" : "TEMPLATE_ID",
        "description" : "Identifier for templates. Lexical form to be determined."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TERM-MAPPING"
        },
        "name" : "TERM_MAPPING",
        "description" : "Represents a coded term mapped to a `DV_TEXT`, and the relative match of the target term with respect to the mapped item. Plain or coded text items may appear in the EHR for which one or mappings in alternative terminologies are required. Mappings are only used to enable computer processing, so they can only be instances of `DV_CODED_TEXT`.\n\nUsed for adding classification terms (e.g. adding ICD classifiers to SNOMED descriptive terms), or mapping into equivalents in other terminologies (e.g. across nursing vocabularies)."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TERMINOLOGY-ACCESS"
        },
        "name" : "TERMINOLOGY_ACCESS",
        "description" : "Defines an object providing proxy access to a terminology."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TERMINOLOGY-ID"
        },
        "name" : "TERMINOLOGY_ID",
        "description" : "Identifier for terminologies such as accessed via a terminology query service. In this class, the value attribute identifies the Terminology in the terminology service, e.g. SNOMED-CT . A terminology is assumed to be in a particular language, which must be explicitly specified. Lexical form: name [ '(' version ')' ]."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TERMINOLOGY-SERVICE"
        },
        "name" : "TERMINOLOGY_SERVICE",
        "description" : "Defines an object providing proxy access to a terminology service."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/TRANSLATION-DETAILS"
        },
        "name" : "TRANSLATION_DETAILS",
        "description" : "Class providing details of a natural language translation."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/UID-BASED-ID"
        },
        "name" : "UID_BASED_ID",
        "description" : "Abstract model of UID-based identifiers consisting of a root part and an optional extension; lexical form: root '::' extension"
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/UID"
        },
        "name" : "UID",
        "description" : "Abstract parent of classes representing unique identifiers which identify information entities in a durable way. UIDs only ever identify one IE in time or space and are never re-used."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical:abstract"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSION"
        },
        "name" : "VERSION",
        "description" : "Abstract model of one Version within a Version container, containing data, commit audit trail, and the identifier of its Contribution."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-COMPOSITION"
        },
        "name" : "VERSIONED_COMPOSITION",
        "description" : "Version-controlled composition abstraction, defined by inheriting `VERSIONED_OBJECT<COMPOSITION>`."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-EHR-ACCESS"
        },
        "name" : "VERSIONED_EHR_ACCESS",
        "description" : "Version container for `EHR_ACCESS` instance."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-EHR-STATUS"
        },
        "name" : "VERSIONED_EHR_STATUS",
        "description" : "Version container for `EHR_STATUS` instance."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-FOLDER"
        },
        "name" : "VERSIONED_FOLDER",
        "description" : "A version-controlled hierarchy of `FOLDERs` giving the effect of a directory."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-OBJECT"
        },
        "name" : "VERSIONED_OBJECT",
        "description" : "Version control abstraction, defining semantics for versioning one complex object."
      },
      {
        "extension" : [
          {
            "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
            "valueString" : "StructureDefinition:logical"
          }
        ],
        "reference" : {
          "reference" : "StructureDefinition/VERSIONED-PARTY"
        },
        "name" : "VERSIONED_PARTY",
        "description" : "Static type formed by binding generic parameter of `VERSIONED_OBJECT<T>` to `PARTY`."
      }
    ],
    "page" : {
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
          "valueCode" : "informative"
        }
      ],
      "sourceUrl" : "index.html",
      "name" : "index.html",
      "title" : "Home Page",
      "generation" : "html",
      "page" : [
        {
          "sourceUrl" : "toc.html",
          "name" : "toc.html",
          "title" : "Table of Contents",
          "generation" : "html"
        }
      ]
    },
    "parameter" : [
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "copyrightyear"
        },
        "value" : "2022+"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "releaselabel"
        },
        "value" : "First Draft"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "no-usage-check"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "noRootToc"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-other"
        },
        "value" : "/input/data"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/Terminology"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/Foundation"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/DataTypes"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/Structures"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/Common"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/Demographics"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/EHR"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/WebTemplate"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-attestation_reason"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-audit_change_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-character_sets"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-extract_update_trigger_event_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-composition_category"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-compression_algorithms"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-event_math_function"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-extract_action_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-extract_content_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-instruction_transitions"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-integrity_check_algorithms"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-normal_statuses"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-null_flavours"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-participation_function"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-participation_mode"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-property"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-proportion_kind"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-setting"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-subject_relationship"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-term_mapping_purpose"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-version_lifecycle_state"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/codesystem-instruction_states"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-attestation_reason"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-audit_change_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-character_sets"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-composition_category"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-compression_algorithms"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-event_math_function"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-extract_action_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-extract_content_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-extract_update_trigger_event_type"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-instruction_states"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-instruction_transitions"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-integrity_check_algorithms"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-normal_statuses"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-null_flavours"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-participation_function"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-participation_mode"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-property"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-proportion_kind"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-setting"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-subject_relationship"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-term_mapping_purpose"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-version_lifecycle_state"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "special-url"
        },
        "value" : "https://specifications.openehr.org/fhir/valueset-territories"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "autoload-resources"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/capabilities"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/examples"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/extensions"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/models"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/operations"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/profiles"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/resources"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/vocabulary"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/testing"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "input/history"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-resource"
        },
        "value" : "fsh-generated/resources"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-pages"
        },
        "value" : "template/config"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-pages"
        },
        "value" : "input/images"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-liquid"
        },
        "value" : "template/liquid"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-liquid"
        },
        "value" : "input/liquid"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-qa"
        },
        "value" : "temp/qa"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-temp"
        },
        "value" : "temp/pages"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-output"
        },
        "value" : "output"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/guide-parameter-code",
          "code" : "path-tx-cache"
        },
        "value" : "input-cache/txcache"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-suppressed-warnings"
        },
        "value" : "input/ignoreWarnings.txt"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "path-history"
        },
        "value" : "http://openehr.org/fhir/history.html"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "template-html"
        },
        "value" : "template-page.html"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "template-md"
        },
        "value" : "template-page-md.html"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-contact"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-context"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-copyright"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-jurisdiction"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-license"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-publisher"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-version"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "apply-wg"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "active-tables"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "fmm-definition"
        },
        "value" : "http://hl7.org/fhir/versions.html#maturity"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "propagate-status"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "excludelogbinaryformat"
        },
        "value" : "true"
      },
      {
        "code" : {
          "system" : "http://hl7.org/fhir/tools/CodeSystem/ig-parameters",
          "code" : "tabbed-snapshots"
        },
        "value" : "true"
      }
    ]
  }
}

```
