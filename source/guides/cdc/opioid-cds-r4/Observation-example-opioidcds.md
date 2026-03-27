# OpioidCDS Observation - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidCDS Observation**

## Example Observation: OpioidCDS Observation

> **Data Date-Roller Extension**
* dateLastUpdated: 2023-05-01
* frequency: No display for Duration (value: 30.0; unit: days; system: http://unitsofmeasure.org; code: d)

**status**: Final

**code**: Methamphetamine [Presence] in Urine

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)

**effective**: 2023-05-01

**performer**: [PractitionerRole: period = 2021-11-24 --> 2023-11-24; specialty = Medical Oncology Physician](PractitionerRole-oncology-specialist.md)

**interpretation**: Positive



## Resource Content

```json
{
  "resourceType" : "Observation",
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
  "status" : "final",
  "code" : {
    "coding" : [{
      "system" : "http://loinc.org",
      "code" : "3779-6"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  },
  "effectiveDateTime" : "2023-05-01",
  "performer" : [{
    "reference" : "PractitionerRole/oncology-specialist"
  }],
  "interpretation" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code" : "POS"
    }]
  }]
}

```
