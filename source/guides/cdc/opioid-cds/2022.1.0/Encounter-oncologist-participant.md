# Oncology Participant Encounter - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Oncology Participant Encounter**

## Example Encounter: Oncology Participant Encounter

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Finished

**class**: [ActCode: AMB](http://terminology.hl7.org/7.1.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB) (ambulatory)

**type**: Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making. When using time for code selection, 30-44 minutes of total time is spent on the date of the encounter.

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

### Participants

| | | |
| :--- | :--- | :--- |
| - | **Type** | **Individual** |
| * | Medical Oncology Physician | [PractitionerRole: period = 2021-11-24 --> 2023-11-24; specialty = Medical Oncology Physician](PractitionerRole-oncology-specialist.md) |

**period**: 2022-11-29 --> 2022-11-29



## Resource Content

```json
{
  "resourceType" : "Encounter",
  "id" : "oncologist-participant",
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
  "participant" : [{
    "type" : [{
      "coding" : [{
        "system" : "http://nucc.org/provider-taxonomy",
        "code" : "207RX0202X",
        "display" : "Medical Oncology Physician"
      }]
    }],
    "individual" : {
      "reference" : "PractitionerRole/oncology-specialist"
    }
  }],
  "period" : {
    "start" : "2022-11-29",
    "end" : "2022-11-29"
  }
}

```
