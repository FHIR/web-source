# Palliative Care ServiceRequest - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Palliative Care ServiceRequest**

## Example ServiceRequest: Palliative Care ServiceRequest

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Active

**intent**: Order

**code**: Palliative care

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

**authoredOn**: 2023-03-31



## Resource Content

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "palliative-care",
  "extension" : [{
    "extension" : [{
      "url" : "dateLastUpdated",
      "valueDateTime" : "2023-05-01"
    },
    {
      "url" : "frequency",
      "valueDuration" : {
        "value" : 30.0,
        "unit" : "days",
        "system" : "http://unitsofmeasure.org",
        "code" : "d"
      }
    }],
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/dataDateRoller"
  }],
  "status" : "active",
  "intent" : "order",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "103735009",
      "display" : "Palliative care"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "authoredOn" : "2023-03-31"
}

```
