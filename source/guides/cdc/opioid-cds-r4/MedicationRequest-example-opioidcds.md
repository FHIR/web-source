# OpioidCDS MedicationRequest - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidCDS MedicationRequest**

## Example MedicationRequest: OpioidCDS MedicationRequest

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Active

**intent**: Order

**medication**: 72 HR Fentanyl 0.075 MG/HR Transdermal System

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

**authoredOn**: 2023-05-01

**reasonCode**: Chronic pain

> **dosageInstruction****timing**: Once per 3 days**asNeeded**: false

### DoseAndRates

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Dose[x]** |
| * | Ordered | 1 patch |


### DispenseRequests

| | |
| :--- | :--- |
| - | **Quantity** |
| * | 10 patch |



## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "example-opioidcds",
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
  "medicationCodeableConcept" : {
    "coding" : [{
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "197696",
      "display" : "72 HR Fentanyl 0.075 MG/HR Transdermal System"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "authoredOn" : "2023-05-01",
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "82423001",
      "display" : "Chronic pain"
    }]
  }],
  "dosageInstruction" : [{
    "timing" : {
      "repeat" : {
        "durationUnit" : "d",
        "frequency" : 1,
        "period" : 3,
        "periodUnit" : "d"
      }
    },
    "asNeededBoolean" : false,
    "doseAndRate" : [{
      "type" : {
        "coding" : [{
          "system" : "http://terminology.hl7.org/CodeSystem/dose-rate-type",
          "code" : "ordered",
          "display" : "Ordered"
        }]
      },
      "doseQuantity" : {
        "value" : 1,
        "unit" : "patch"
      }
    }]
  }],
  "dispenseRequest" : {
    "quantity" : {
      "value" : 10,
      "unit" : "patch"
    }
  }
}

```
