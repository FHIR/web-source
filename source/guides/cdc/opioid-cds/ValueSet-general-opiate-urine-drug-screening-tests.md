# General opiate urine drug screening tests - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **General opiate urine drug screening tests**

## ValueSet: General opiate urine drug screening tests 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/general-opiate-urine-drug-screening-tests | *Version*:2022.1.0 |
| Active as of 2023-05-25 | *Computable Name*:GENERAL_OPIATE_URINE_DRUG_SCREENING_TESTS |
| **Copyright/Legal**: © CDC 2016+. | |

 
Presumed general urine tests for naturally occurring opioids (i.e. opiates) that are not specific to a particular substance based upon the inclusion of the word ‘opiates’ in the long name. 

 
Identification of urine drug tests where results can be used when considering pain management therapy 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

No formal definition provided for this value set

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "general-opiate-urine-drug-screening-tests",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
    "valueString" : "Presumed general urine tests for naturally occurring opioids (i.e. opiates) that are not specific to a particular substance based upon the inclusion of the word 'opiates' in the long name."
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-dataelement-scope",
    "valueString" : "Urine test"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-inclusion-criteria",
    "valueString" : "Codes"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-exclusion-criteria",
    "valueString" : "None"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-author",
    "valueContactDetail" : {
      "name" : "MD Partners, Inc.",
      "telecom" : [{
        "system" : "email",
        "value" : "info@mdpartners.com"
      }]
    }
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-rules-text",
    "valueMarkdown" : "Step 1. Add all codes found using the following LOINC query: opiates (=system:Urine)"
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/general-opiate-urine-drug-screening-tests",
  "version" : "2022.1.0",
  "name" : "GENERAL_OPIATE_URINE_DRUG_SCREENING_TESTS",
  "title" : "General opiate urine drug screening tests",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-05-25T18:08:12-06:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Presumed general urine tests for naturally occurring opioids (i.e. opiates) that are not specific to a particular substance based upon the inclusion of the word 'opiates' in the long name.",
  "purpose" : "Identification of urine drug tests where results can be used when considering pain management therapy",
  "copyright" : "© CDC 2016+.",
  "expansion" : {
    "timestamp" : "2023-05-25T18:08:12-06:00",
    "total" : 22,
    "contains" : [{
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19298-9",
      "display" : "Opiates positive [Identifier] in Urine by Confirmatory method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "8220-6",
      "display" : "Opiates [Mass/volume] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "17384-9",
      "display" : "Opiates [Mass/volume] in Urine by Confirmatory method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "70150-8",
      "display" : "Opiates [Mass/volume] in Urine by Screen method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "5707-5",
      "display" : "Deprecated Opiates [Identifier] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "5706-7",
      "display" : "Opiates [Identifier] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "3879-4",
      "display" : "Opiates [Presence] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "18390-5",
      "display" : "Opiates [Presence] in Urine by Confirmatory method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "8221-4",
      "display" : "Opiates [Presence] in Urine by SAMHSA confirm method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "8222-2",
      "display" : "Opiates [Presence] in Urine by SAMHSA screen method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19295-5",
      "display" : "Opiates [Presence] in Urine by Screen method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "21431-2",
      "display" : "Opiates [Presence] in Urine by Screen method >2000 ng/mL"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "70151-6",
      "display" : "Opiates [Presence] in Urine by Screen method >300 ng/mL"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "52952-9",
      "display" : "Opiates [Moles/volume] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19302-9",
      "display" : "Opiates confirm method [Identifier] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19138-7",
      "display" : "Opiates cutoff [Mass/volume] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19300-3",
      "display" : "Opiates cutoff [Mass/volume] in Urine for Confirmatory method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19299-7",
      "display" : "Opiates cutoff [Mass/volume] in Urine for Screen method"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19301-1",
      "display" : "Opiates screen method [Identifier] in Urine"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19297-1",
      "display" : "Opiates tested for in Urine by Screen method Narrative"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19296-3",
      "display" : "Opiates tested for in Urine by Screen method Nominal"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "41465-6",
      "display" : "Opiates/Creatinine [Mass Ratio] in Urine"
    }]
  }
}

```
