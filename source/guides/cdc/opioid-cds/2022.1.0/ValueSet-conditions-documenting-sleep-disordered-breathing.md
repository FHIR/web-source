# Sleep disordered breathing - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Sleep disordered breathing**

## ValueSet: Sleep disordered breathing 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-documenting-sleep-disordered-breathing | *Version*:2022.1.0 |
| Active as of 2023-04-02 | *Computable Name*:SLEEP_DISORDERED_BREATHING |
| *Keywords:*CDS4CP | |
| **Copyright/Legal**: © CDC 2016+. | |

 
Conditions associated with sleep-related breathing disorders. 

 
(Clinical Focus: Conditions associated with sleep-related breathing disorders.),(Data Element Scope: This value set contains ICD10CM and SNOMEDCT codes representing sleep-related breathing disorders, including apnea and sleep hypoventilation.),(Inclusion Criteria: Disorder codes for sleep-related breathing disorders, primarily related to apnea and sleep hypoventilation.),(Exclusion Criteria: Codes related to infants. Conditions such as “sleep disorder, unspecified” and “insufficient sleep syndrome” are also excluded.) 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

 

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
  "id" : "conditions-documenting-sleep-disordered-breathing",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-keyWord",
    "valueString" : "CDS4CP"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/resource-lastReviewDate",
    "valueDate" : "2023-04-02"
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-effectiveDate",
    "valueDateTime" : "2023-04-02"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
    "valueString" : "Conditions associated with sleep-related breathing disorders."
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-dataelement-scope",
    "valueString" : "This value set contains ICD10CM and SNOMEDCT codes representing sleep-related breathing disorders, including apnea and sleep hypoventilation."
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-inclusion-criteria",
    "valueString" : "Disorder codes for sleep-related breathing disorders, primarily related to apnea and sleep hypoventilation."
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-exclusion-criteria",
    "valueString" : "Codes related to infants. Conditions such as \"sleep disorder, unspecified\" and \"insufficient sleep syndrome\" are also excluded."
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-author",
    "valueContactDetail" : {
      "name" : "MD Partners, Inc.",
      "telecom" : [{
        "system" : "email",
        "value" : "info@mdpartners.com"
      }]
    }
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-documenting-sleep-disordered-breathing",
  "version" : "2022.1.0",
  "name" : "SLEEP_DISORDERED_BREATHING",
  "title" : "Sleep disordered breathing",
  "status" : "active",
  "experimental" : false,
  "date" : "2023-04-02T01:02:51-04:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Conditions associated with sleep-related breathing disorders.",
  "purpose" : "(Clinical Focus: Conditions associated with sleep-related breathing disorders.),(Data Element Scope: This value set contains ICD10CM and SNOMEDCT  codes representing sleep-related breathing disorders, including apnea and sleep hypoventilation.),(Inclusion Criteria: Disorder codes for sleep-related breathing disorders, primarily related to apnea and sleep hypoventilation.),(Exclusion Criteria: Codes related to infants. Conditions such as \"sleep disorder, unspecified\" and \"insufficient sleep syndrome\" are also excluded.)",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "valueSet" : ["http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.114"]
    },
    {
      "valueSet" : ["http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.115"]
    }]
  }
}

```
