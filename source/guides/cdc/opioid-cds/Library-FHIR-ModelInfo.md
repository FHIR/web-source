# FHIRModelInfo - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **FHIRModelInfo**

## Library: FHIRModelInfo 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/Library/FHIR-ModelInfo | *Version*:4.0.1 |
| Active as of 2019-08-08 | *Computable Name*:FHIR |
| *Other Identifiers:*http://example.org/fhir/cqi/ecqm/Library/Identifier#FHIR (use: official, ) | |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
Model definition for the FHIR R4 (v4.0.1) Model 

* * **Content: **application/xml: ````````: **Url: **
  * ?: [FHIR Model Definition](Library-FHIR-ModelInfo.md)
* * **Content: **application/xml: ````````: **Version: **
  * ?: 4.0.1
* * **Content: **application/xml: ````````: **Name: **
  * ?: FHIR
* * **Content: **application/xml: ````````: **Title: **
  * ?: FHIR Model Definition
* * **Content: **application/xml: ````````: **Status: **
  * ?: active
* * **Content: **application/xml: ````````: **Date: **
  * ?: 2019-08-08
* * **Content: **application/xml: ````````: **Publisher: **
  * ?: CDC / Security Risk Solutions, Inc. (SRS)
* * **Content: **application/xml: ````````: **Description: **
  * ?: Model definition for the FHIR R4 (v4.0.1) Model
* * **Content: **application/xml: ````````: **Copyright: **
  * ?: Centers for Disease Control and Prevention (CDC)
* * **Content: **application/xml: ````````: **Approval Date: **
  * ?: 2019-08-08
* * **Content: **application/xml: ````````: **Last Review Date: **
  * ?: 2020-06-19



## Resource Content

```json
{
  "resourceType" : "Library",
  "id" : "FHIR-ModelInfo",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/Library/FHIR-ModelInfo",
  "identifier" : [{
    "use" : "official",
    "system" : "http://example.org/fhir/cqi/ecqm/Library/Identifier",
    "value" : "FHIR"
  }],
  "version" : "4.0.1",
  "name" : "FHIR",
  "title" : "FHIR Model Definition",
  "status" : "active",
  "type" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/library-type",
      "code" : "model-definition"
    }]
  },
  "date" : "2019-08-08",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Model definition for the FHIR R4 (v4.0.1) Model",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "approvalDate" : "2019-08-08",
  "lastReviewDate" : "2020-06-19",
  "topic" : [{
    "text" : "FHIR"
  }],
  "content" : [{
    "contentType" : "application/xml",
    "url" : "https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/quick/src/main/resources/org/hl7/fhir/fhir-modelinfo-4.0.1.xml"
  }]
}

```
