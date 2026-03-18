# Oxycodone urine drug screening tests - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Oxycodone urine drug screening tests**

## ValueSet: Oxycodone urine drug screening tests 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/oxycodone-urine-drug-screening-tests | *Version*:2022.1.0 |
| Active as of 2024-04-15 | *Computable Name*:OXYCODONE_URINE_DRUG_SCREENING_TESTS |
| **Copyright/Legal**: © CDC 2016+. | |

 
Presumed general urine tests for oxycodone. 

 
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
  "id" : "oxycodone-urine-drug-screening-tests",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-rules-text",
    "valueMarkdown" : "Step 1: go to https://loinc.org/tree/\nStep 2: use query oxycodone AND system:urine\nStep 3: export the results to CSV\nStep 4: Filter results by properties defined in query"
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
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
    "valueString" : "Presumed general urine tests for oxycodone."
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
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "structured"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/oxycodone-urine-drug-screening-tests",
  "version" : "2022.1.0",
  "name" : "OXYCODONE_URINE_DRUG_SCREENING_TESTS",
  "title" : "Oxycodone urine drug screening tests",
  "status" : "active",
  "experimental" : false,
  "date" : "2024-04-15T12:22:34-06:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Presumed general urine tests for oxycodone.",
  "purpose" : "Identification of urine drug tests where results can be used when considering pain management therapy",
  "copyright" : "© CDC 2016+.",
  "expansion" : {
    "timestamp" : "2024-04-15T12:22:37-06:00",
    "total" : 20,
    "contains" : [{
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "51954-6",
      "display" : "oxyCODONE Free Ur-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "46973-4",
      "display" : "oxyCODONE Free Ur Cfm-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "61197-0",
      "display" : "oxyCODONE+oxyMORphone Ur Ql Cfm"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "58430-0",
      "display" : "oxyCODONE+oxyMORphone Ur Ql Scn"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "60276-3",
      "display" : "oxyCODONE+oxyMORphone CtO Ur Scn-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "90894-7",
      "display" : "Noroxymorphone Ur Cfm-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "89302-4",
      "display" : "Noroxymorphone Ur Ql Scn"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "86609-5",
      "display" : "Noroxymorphone/Creat Ur Cfm"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "11246-6",
      "display" : "oxyCODONE Ur-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "16249-5",
      "display" : "oxyCODONE Ur Cfm-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "10998-3",
      "display" : "oxyCODONE Ur Ql"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19643-6",
      "display" : "oxyCODONE Ur Ql Cfm"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19642-8",
      "display" : "oxyCODONE Ur Ql Scn"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "70215-9",
      "display" : "oxyCODONE Ur Cfm-sCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "78873-7",
      "display" : "oxyCODONE Z-score Ur"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19645-1",
      "display" : "oxyCODONE CtO Ur Cfm-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "19644-4",
      "display" : "oxyCODONE CtO Ur Scn-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "58395-5",
      "display" : "oxyCODONE/Creat Ur"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "78767-1",
      "display" : "oxyCODONE adj bodymass+crea Ur-mCnc"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "94304-3",
      "display" : "OxyCODONE+metabolites Pnl Ur Cfm"
    },
    {
      "system" : "http://loinc.org",
      "version" : "2.81",
      "code" : "94305-0",
      "display" : "OxyMORphone+Noroxymorph Pnl Ur Cfm"
    }]
  }
}

```
