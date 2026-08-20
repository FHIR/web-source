# ValueSet - Medication Request Status Active - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **ValueSet - Medication Request Status Active**

## ValueSet: ValueSet - Medication Request Status Active 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/medicationrequest-status-active | *Version*:0.0.1 |
| Active as of 2026-03-18 | *Computable Name*:Valueset_medicationrequest_status_active |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
The prescription is ‘actionable’, but not all actions that are implied by it have occurred yet. 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

No formal definition provided for this value set

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "medicationrequest-status-active",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/medicationrequest-status-active",
  "version" : "0.0.1",
  "name" : "Valueset_medicationrequest_status_active",
  "title" : "ValueSet - Medication Request Status Active",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-03-18T16:10:11+11:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "The prescription is 'actionable', but not all actions that are implied by it have occurred yet.",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "expansion" : {
    "timestamp" : "2021-05-18T13:47:55-07:00",
    "contains" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
      "code" : "active",
      "display" : "Active"
    }]
  }
}

```
