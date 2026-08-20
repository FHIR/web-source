# End of Life Condition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **End of Life Condition**

## Example Condition: End of Life Condition

**clinicalStatus**: Active

**category**: Health Concern

**code**: Prognosis bad

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "end-of-life",
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active",
      "display" : "Active"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "http://hl7.org/fhir/us/core/CodeSystem/condition-category",
      "code" : "health-concern",
      "display" : "Health Concern"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "170969009",
      "display" : "Prognosis bad"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  }
}

```
