# Cancer Diagnosis Encounter - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Cancer Diagnosis Encounter**

## Example Encounter: Cancer Diagnosis Encounter

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Finished

**class**: [ActCode: AMB](http://terminology.hl7.org/7.1.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB) (ambulatory)

**type**: Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making. When using time for code selection, 30-44 minutes of total time is spent on the date of the encounter.

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

**period**: 2022-12-30 --> 2022-12-30

### Diagnoses

| | |
| :--- | :--- |
| - | **Condition** |
| * | [Condition Malignant melanoma of skin](Condition-cancer-diagnosis.md) |



## Resource Content

```json
{
  "resourceType" : "Encounter",
  "id" : "cancer-diagnosis",
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
  "status" : "finished",
  "class" : {
    "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code" : "AMB",
    "display" : "ambulatory"
  },
  "type" : [{
    "coding" : [{
      "system" : "http://www.ama-assn.org/go/cpt",
      "code" : "99203",
      "display" : "Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making. When using time for code selection, 30-44 minutes of total time is spent on the date of the encounter."
    }]
  }],
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "period" : {
    "start" : "2022-12-30",
    "end" : "2022-12-30"
  },
  "diagnosis" : [{
    "condition" : {
      "reference" : "Condition/cancer-diagnosis"
    }
  }]
}

```
