# Ambulatory Opioid MedicationRequest - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Ambulatory Opioid MedicationRequest**

## Example MedicationRequest: Ambulatory Opioid MedicationRequest

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Active

**intent**: Order

**category**: Community

**medication**: Suboxone 2 MG / 0.5 MG Sublingual Film

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

**authoredOn**: 2023-03-31

> **dosageInstruction****timing**: Once per 1.0 days**asNeeded**: false

### DoseAndRates

| | |
| :--- | :--- |
| - | **Dose[x]** |
| * | 1.0 film |


> **dispenseRequest****validityPeriod**: 2023-03-31 00:00:00-0600 --> 2023-07-01 00:00:00-0600**numberOfRepeatsAllowed**: 1

### ExpectedSupplyDurations

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| - | **Value** | **Unit** | **System** | **Code** |
| * | 30 | days | [http://unitsofmeasure.org](http://terminology.hl7.org/5.5.0/CodeSystem-v3-ucum.html) | d |




## Resource Content

```json
{
  "resourceType" : "MedicationRequest",
  "id" : "ambulatory-opioid",
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
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      "code" : "community",
      "display" : "Community"
    }]
  }],
  "medicationCodeableConcept" : {
    "coding" : [{
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "1010603",
      "display" : "Suboxone 2 MG / 0.5 MG Sublingual Film"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "authoredOn" : "2023-03-31",
  "dosageInstruction" : [{
    "timing" : {
      "repeat" : {
        "frequency" : 1,
        "period" : 1.0,
        "periodUnit" : "d"
      }
    },
    "asNeededBoolean" : false,
    "doseAndRate" : [{
      "doseQuantity" : {
        "value" : 1.0,
        "unit" : "film"
      }
    }]
  }],
  "dispenseRequest" : {
    "validityPeriod" : {
      "start" : "2023-03-31T00:00:00-06:00",
      "end" : "2023-07-01T00:00:00-06:00"
    },
    "numberOfRepeatsAllowed" : 1,
    "expectedSupplyDuration" : {
      "value" : 30,
      "unit" : "days",
      "system" : "http://unitsofmeasure.org",
      "code" : "d"
    }
  }
}

```
