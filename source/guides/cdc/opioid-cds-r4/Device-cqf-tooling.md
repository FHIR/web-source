# CQFToolingDevice - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CQFToolingDevice**

## Device: CQFToolingDevice

Profile: [CRMI Software System Device](http://hl7.org/fhir/uv/crmi/STU1/StructureDefinition-crmi-softwaresystemdevice.html)

**manufacturer**: CQFramework

### DeviceNames

| | | |
| :--- | :--- | :--- |
| - | **Name** | **Type** |
| * | cqf-tooling | Manufacturer name |

**type**: Tooling

### Versions

| | |
| :--- | :--- |
| - | **Value** |
| * | 3.8.0 |



## Resource Content

```json
{
  "resourceType" : "Device",
  "id" : "cqf-tooling",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/crmi/StructureDefinition/crmi-softwaresystemdevice"]
  },
  "manufacturer" : "CQFramework",
  "deviceName" : [{
    "name" : "cqf-tooling",
    "type" : "manufacturer-name"
  }],
  "type" : {
    "coding" : [{
      "system" : "http://terminology.hl7.org/CodeSystem/software-system-type-codes",
      "code" : "tooling"
    }]
  },
  "version" : [{
    "value" : "3.8.0"
  }]
}

```
