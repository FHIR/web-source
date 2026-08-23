# OpioidUrineScreeningActivityDefinition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidUrineScreeningActivityDefinition**

## ActivityDefinition: OpioidUrineScreeningActivityDefinition 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request-1 | *Version*:2022.1.0 |
| Active as of 2026-08-23 | *Computable Name*:URINE_SCREENING_REQUEST_1 |
| *Other Identifiers:*OID:2.16.840.1.113883.4.642.40.65.11.3 | |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

* **Type: **: **Url: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: [ActivityDefinition - Urine Screening Request 1](ActivityDefinition-opioidcds-urine-screening-request-1.md)
* **Type: **: **Version: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: 2022.1.0
* **Type: **: **Name: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: URINE_SCREENING_REQUEST_1
* **Type: **: **Title: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: ActivityDefinition - Urine Screening Request 1
* **Type: **: **Status: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: active
* **Type: **: **Date: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: 2026-08-23 19:52:23+1000
* **Type: **: **Publisher: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: CDC / Security Risk Solutions, Inc. (SRS)
* **Type: **: **Copyright: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: Centers for Disease Control and Prevention (CDC)
* **Type: **: **Libraries: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: 
| |
| :--- |
| [Library - Recommendation #10 - Urine Drug Testing](Library-OpioidCDSREC10OrderSign.md) |

* **Type: **: **Kind: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: ServiceRequest
* **Type: **: **Intent: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: proposal
* **Type: **: **Priority: **
  * **system: ** urn:com.epic.cdshooks.action.code.system.preference-list-item  **code: ** 1: routine



## Resource Content

```json
{
  "resourceType" : "ActivityDefinition",
  "id" : "opioidcds-urine-screening-request-1",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ActivityDefinition/opioidcds-urine-screening-request-1",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:2.16.840.1.113883.4.642.40.65.11.3"
  }],
  "version" : "2022.1.0",
  "name" : "URINE_SCREENING_REQUEST_1",
  "title" : "ActivityDefinition - Urine Screening Request 1",
  "status" : "active",
  "date" : "2026-08-23T19:52:23+10:00",
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
      "code" : "1"
    }]
  },
  "intent" : "proposal",
  "priority" : "routine"
}

```
