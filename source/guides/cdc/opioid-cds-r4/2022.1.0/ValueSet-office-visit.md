# Office Visit - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Office Visit**

## ValueSet: Office Visit 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/office-visit | *Version*:0.2.0 |
| Active as of 2023-05-25 | *Computable Name*:OFFICE_VISIT |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
Codes specifying outpatient encounters 

 
Codes specifying outpatient encounters 

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
  "id" : "office-visit",
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
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/office-visit",
  "version" : "0.2.0",
  "name" : "OFFICE_VISIT",
  "title" : "Office Visit",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-05-25T18:08:12-06:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Codes specifying outpatient encounters",
  "purpose" : "Codes specifying outpatient encounters",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "expansion" : {
    "timestamp" : "2021-02-08T13:46:02-07:00",
    "contains" : [{
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "185463005",
      "display" : "Visit out of hours (procedure)"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "185464004",
      "display" : "Out of hours visit - not night visit (procedure)"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "185465003",
      "display" : "Weekend visit (procedure)"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "3391000175108",
      "display" : "Office visit for pediatric care and assessment (procedure)"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "439740005",
      "display" : "Postoperative follow-up visit (procedure)"
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99202",
      "display" : "Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and straightforward medical decision making. When using time for code selection, 15-29 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99203",
      "display" : "Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and low level of medical decision making. When using time for code selection, 30-44 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99204",
      "display" : "Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making. When using time for code selection, 45-59 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99205",
      "display" : "Office or other outpatient visit for the evaluation and management of a new patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using time for code selection, 60-74 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99212",
      "display" : "Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and straightforward medical decision making. When using time for code selection, 10-19 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99213",
      "display" : "Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and low level of medical decision making. When using time for code selection, 20-29 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99214",
      "display" : "Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and moderate level of medical decision making. When using time for code selection, 30-39 minutes of total time is spent on the date of the encounter."
    },
    {
      "system" : "http://www.ama-assn.org/go/cpt",
      "version" : "2021",
      "code" : "99215",
      "display" : "Office or other outpatient visit for the evaluation and management of an established patient, which requires a medically appropriate history and/or examination and high level of medical decision making. When using time for code selection, 40-54 minutes of total time is spent on the date of the encounter."
    }]
  }
}

```
