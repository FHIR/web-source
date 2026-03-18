# OpioidCDS RequestGroup - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidCDS RequestGroup**

## Example RequestGroup: OpioidCDS RequestGroup

**status**: Active

**intent**: Proposal

> **action****title**: High risk for opioid overdose - taper now**description**: Total morphine milligram equivalent (MME) is 179.99999820mg/d. Taper to less than 50.**priority**: Urgent

### Documentations

| | | | |
| :--- | :--- | :--- | :--- |
| - | **Type** | **Display** | **Url** |
| * | Documentation | 2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain | [https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |

**resource**: [ActivityDefinition - Risk Assessment ServiceRequest](ActivityDefinition-opioidcds-risk-assessment-request.md)



## Resource Content

```json
{
  "resourceType" : "RequestGroup",
  "id" : "example-opioidcds",
  "status" : "active",
  "intent" : "proposal",
  "action" : [{
    "title" : "High risk for opioid overdose - taper now",
    "description" : "Total morphine milligram equivalent (MME) is 179.99999820mg/d. Taper to less than 50.",
    "priority" : "urgent",
    "documentation" : [{
      "type" : "documentation",
      "display" : "2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain",
      "url" : "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm"
    }],
    "resource" : {
      "reference" : "ActivityDefinition/opioidcds-risk-assessment-request"
    }
  }]
}

```
