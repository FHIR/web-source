# Terminal Condition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Terminal Condition**

## Example Condition: Terminal Condition

**clinicalStatus**: Active

**category**: Encounter Diagnosis

**code**: End stage liver disease

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "terminal",
  "clinicalStatus" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code" : "active",
      "display" : "Active"
    }]
  },
  "category" : [{
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/condition-category",
      "code" : "encounter-diagnosis",
      "display" : "Encounter Diagnosis"
    }]
  }],
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "708248004",
      "display" : "End stage liver disease"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  }
}

```
