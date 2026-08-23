# CodeSystem - CDC 2022 Opioid Indicator - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CodeSystem - CDC 2022 Opioid Indicator**

## CodeSystem: CodeSystem - CDC 2022 Opioid Indicator 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/CodeSystem/opioidcds-indicator | *Version*:2022.1.1 |
| Active as of 2026-08-23 | *Computable Name*:CDC_Opioid_Indicator |
| *Other Identifiers:*OID:2.16.840.1.114222.16.1 | |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
Indicates the urgency/importance of the recommended action 

 This Code system is referenced in the content logical definition of the following value sets: 

* This CodeSystem is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "opioidcds-indicator",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/CodeSystem/opioidcds-indicator",
  "identifier" : [{
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:oid:2.16.840.1.114222.16.1"
  }],
  "version" : "2022.1.1",
  "name" : "CDC_Opioid_Indicator",
  "title" : "CodeSystem - CDC 2022 Opioid Indicator",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-08-23T19:44:36+10:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Indicates the urgency/importance of the recommended action",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "caseSensitive" : true,
  "content" : "complete",
  "concept" : [{
    "code" : "info",
    "display" : "Information",
    "definition" : "Indicates that the workflow result is informational"
  },
  {
    "code" : "warning",
    "display" : "Warning",
    "definition" : "Indicates that the workflow result is a warning"
  },
  {
    "code" : "hard-stop",
    "display" : "Hard Stop",
    "definition" : "Indicates that the workflow should not be allowed to proceed"
  }]
}

```
