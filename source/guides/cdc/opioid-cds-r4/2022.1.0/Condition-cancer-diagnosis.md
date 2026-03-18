# Cancer Diagnosis Condition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Cancer Diagnosis Condition**

## Example Condition: Cancer Diagnosis Condition

**clinicalStatus**: Active

**category**: Encounter Diagnosis

**code**: Malignant melanoma of skin

**subject**: [opioidcds example Male, DoB: 1983-01-10](Patient-example-opioidcds.md)



## Resource Content

```json
{
  "resourceType" : "Condition",
  "id" : "cancer-diagnosis",
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
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "code" : "C43",
      "display" : "Malignant melanoma of skin"
    }]
  },
  "subject" : {
    "reference" : "Patient/example-opioidcds"
  }
}

```
