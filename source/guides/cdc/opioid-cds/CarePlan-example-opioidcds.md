# OpioidCDS CarePlan - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidCDS CarePlan**

## Example CarePlan: OpioidCDS CarePlan

**status**: Active

**intent**: Proposal

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

### Activities

| | |
| :--- | :--- |
| - | **Reference** |
| * | [RequestGroup: status = active; intent = proposal](RequestGroup-example-opioidcds.md) |



## Resource Content

```json
{
  "resourceType" : "CarePlan",
  "id" : "example-opioidcds",
  "status" : "active",
  "intent" : "proposal",
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "activity" : [{
    "reference" : {
      "reference" : "RequestGroup/example-opioidcds"
    }
  }]
}

```
