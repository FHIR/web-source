# OpioidUrineScreeningActivityDefinition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidUrineScreeningActivityDefinition**

## ActivityDefinition: OpioidUrineScreeningActivityDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request | *Version*:2022.1.0 |
| Active as of 2024-05-09 | *Computable Name*:ActivityDefinition_Urine_Screening_ServiceRequest |
| **Usage:**Clinical Focus: Urine drug screening (procedure) | |
| **Copyright/Legal**: © CDC 2016+. | |

 
A ServiceRequest for Urine drug screening. 

 
Provides urine screening suggestion as part of opioid prescribing clinical decision support. 

* **Type: **: **Url: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): [ActivityDefinition - Urine Screening ServiceRequest](ActivityDefinition-opioidcds-urine-screening-request.md)
* **Type: **: **Version: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): 2022.1.0
* **Type: **: **Name: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): ActivityDefinition_Urine_Screening_ServiceRequest
* **Type: **: **Title: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): ActivityDefinition - Urine Screening ServiceRequest
* **Type: **: **Status: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): active
* **Type: **: **Date: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): 2024-05-09
* **Type: **: **Publisher: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): CDC / Security Risk Solutions, Inc. (SRS)
* **Type: **: **Description: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): A ServiceRequest for Urine drug screening.
* **Type: **: **Purpose: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): Provides urine screening suggestion as part of opioid prescribing clinical decision support.
* **Type: **: **Usage: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): Used to create a urine screening ServiceRequest.
* **Type: **: **Copyright: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): © CDC 2016+.
* **Type: **: **Kind: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 310627008  **display: ** Urine drug screening (procedure): ServiceRequest



## Resource Content

```json
{
  "resourceType" : "ActivityDefinition",
  "id" : "opioidcds-urine-screening-request",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request",
  "version" : "2022.1.0",
  "name" : "ActivityDefinition_Urine_Screening_ServiceRequest",
  "title" : "ActivityDefinition - Urine Screening ServiceRequest",
  "status" : "active",
  "date" : "2024-05-09",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "A ServiceRequest for Urine drug screening.",
  "useContext" : [{
    "code" : {
      "system" : "http://terminology.hl7.org/CodeSystem/usage-context-type",
      "code" : "focus",
      "display" : "Clinical Focus"
    },
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "310627008",
        "display" : "Urine drug screening (procedure)"
      }]
    }
  }],
  "purpose" : "Provides urine screening suggestion as part of opioid prescribing clinical decision support.",
  "usage" : "Used to create a urine screening ServiceRequest.",
  "copyright" : "© CDC 2016+.",
  "topic" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/definition-topic",
      "code" : "assessment",
      "display" : "Assessment"
    }],
    "text" : "Opioid Prescribing"
  }],
  "author" : [{
    "name" : "Kensaku Kawamoto, MD, PhD, MHS"
  },
  {
    "name" : "Bryn Rhodes"
  },
  {
    "name" : "Floyd Eisenberg, MD, MPH"
  },
  {
    "name" : "Robert McClure, MD, MPH"
  }],
  "kind" : "ServiceRequest",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "code" : "310627008",
      "display" : "Urine drug screening (procedure)"
    }]
  }
}

```
