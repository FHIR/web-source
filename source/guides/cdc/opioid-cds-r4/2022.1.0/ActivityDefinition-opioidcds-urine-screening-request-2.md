# OpioidUrineScreeningActivityDefinition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidUrineScreeningActivityDefinition**

## ActivityDefinition: OpioidUrineScreeningActivityDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request-2 | *Version*:2022.1.0 |
| Active as of 2026-03-18 | *Computable Name*: |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

* **Type: **: **Url: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: [opioidcds-urine-screening-request-2](ActivityDefinition-opioidcds-urine-screening-request-2.md)
* **Type: **: **Version: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: 2022.1.0
* **Type: **: **Status: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: active
* **Type: **: **Date: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: 2026-03-18 16:10:11+1100
* **Type: **: **Publisher: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: CDC / Security Risk Solutions, Inc. (SRS)
* **Type: **: **Copyright: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: Centers for Disease Control and Prevention (CDC)
* **Type: **: **Libraries: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: 
| |
| :--- |
| [Library - Recommendation #10 - Urine Drug Testing](Library-OpioidCDSREC10OrderSign.md) |

* **Type: **: **Kind: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: ServiceRequest
* **Type: **: **Intent: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: proposal
* **Type: **: **Priority: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 2: routine



## Resource Content

```json
{
  "resourceType" : "ActivityDefinition",
  "id" : "opioidcds-urine-screening-request-2",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request-2",
  "version" : "2022.1.0",
  "status" : "active",
  "date" : "2026-03-18T16:10:11+11:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "library" : ["http://fhir.org/guides/cdc/opioid-cds/Library/OpioidCDSREC10OrderSign"],
  "kind" : "ServiceRequest",
  "code" : {
    "coding" : [{
      "system" : "urn:com.epic.cdshooks.action.code.system.preference-list-item",
      "code" : "2"
    }]
  },
  "intent" : "proposal",
  "priority" : "routine"
}

```
