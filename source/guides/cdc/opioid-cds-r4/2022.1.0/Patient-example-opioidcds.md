# OpioidCDS Patient - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **OpioidCDS Patient**

## Example Patient: OpioidCDS Patient

opioidcds example Male, DoB: 1983-01-10

-------

| | |
| :--- | :--- |
| Contact Detail | 751 E Apple Drive Novi MI 48376 (home) |
| Data Date-Roller Extension: | * dateLastUpdated: 2023-05-01
* frequency: No display for Duration 
 |



## Resource Content

```json
{
  "resourceType" : "Patient",
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
  "name" : [{
    "family" : "example",
    "given" : ["opioidcds"]
  }],
  "gender" : "male",
  "birthDate" : "1983-01-10",
  "address" : [{
    "use" : "home",
    "type" : "postal",
    "line" : ["751 E Apple Drive"],
    "city" : "Novi",
    "district" : "Oakland County",
    "state" : "MI",
    "postalCode" : "48376"
  }]
}

```
