# OpioidRiskAssessmentActivityDefinition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidRiskAssessmentActivityDefinition**

## ActivityDefinition: OpioidRiskAssessmentActivityDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-risk-assessment-request | *Version*:2022.1.0 |
| Active as of 2024-05-09 | *Computable Name*:ActivityDefinition_Risk_Assessment_ServiceRequest |
| **Usage:**Clinical Focus: Risk management (procedure) | |
| **Copyright/Legal**: © CDC 2016+. | |

 
As part of the workflow for recommendation 7, it is recommended that a risk assessment be conducted if the inclusion criteria is met. 

 
Provides dynamic risk assessment suggestion as part of recommendation 7 workflow. 

* **Type: **: **Url: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): [ActivityDefinition - Risk Assessment ServiceRequest](ActivityDefinition-opioidcds-risk-assessment-request.md)
* **Type: **: **Version: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): 2022.1.0
* **Type: **: **Name: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): ActivityDefinition_Risk_Assessment_ServiceRequest
* **Type: **: **Title: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): ActivityDefinition - Risk Assessment ServiceRequest
* **Type: **: **Status: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): active
* **Type: **: **Date: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): 2024-05-09
* **Type: **: **Publisher: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): CDC / Security Risk Solutions, Inc. (SRS)
* **Type: **: **Description: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): As part of the workflow for recommendation 7, it is recommended that a risk assessment be conducted if the inclusion criteria is met.
* **Type: **: **Purpose: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): Provides dynamic risk assessment suggestion as part of recommendation 7 workflow.
* **Type: **: **Usage: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): Used to create a risk assessment ServiceRequest when the inclusion criteria is satisfied for recommendation 7.
* **Type: **: **Copyright: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): © CDC 2016+.
* **Type: **: **Kind: **
  * **system: ** [http://snomed.info/sct](https://browser.ihtsdotools.org/)  **code: ** 454281000124100  **display: ** Assessment of risk for opioid abuse (procedure): ServiceRequest



## Resource Content

```json
{
  "resourceType" : "ActivityDefinition",
  "id" : "opioidcds-risk-assessment-request",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-risk-assessment-request",
  "version" : "2022.1.0",
  "name" : "ActivityDefinition_Risk_Assessment_ServiceRequest",
  "title" : "ActivityDefinition - Risk Assessment ServiceRequest",
  "status" : "active",
  "date" : "2024-05-09",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "As part of the workflow for recommendation 7, it is recommended that a risk assessment be conducted if the inclusion criteria is met.",
  "useContext" : [{
    "code" : {
      "system" : "http://terminology.hl7.org/CodeSystem/usage-context-type",
      "code" : "focus",
      "display" : "Clinical Focus"
    },
    "valueCodeableConcept" : {
      "coding" : [{
        "system" : "http://snomed.info/sct",
        "code" : "225314003",
        "display" : "Risk management (procedure)"
      }]
    }
  }],
  "purpose" : "Provides dynamic risk assessment suggestion as part of recommendation 7 workflow.",
  "usage" : "Used to create a risk assessment ServiceRequest when the inclusion criteria is satisfied for recommendation 7.",
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
      "code" : "454281000124100",
      "display" : "Assessment of risk for opioid abuse (procedure)"
    }]
  }
}

```
