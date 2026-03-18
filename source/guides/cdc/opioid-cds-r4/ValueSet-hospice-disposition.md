# Hospice Disposition - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Hospice Disposition**

## ValueSet: Hospice Disposition 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/hospice-disposition | *Version*:2022.1.0 |
| Active as of 2023-05-25 | *Computable Name*:HOSPICE_DISPOSITION |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
This value set contains concepts that represent patients receiving hospice care outside of a hospital or long term care facility. 

 
This value set may use the Quality Data Model (QDM) datatype related to Procedure, Order or Intervention, Order. The intent of this value set is to identify all patients receiving hospice care outside of a hospital or long term care facility. 

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
  "id" : "hospice-disposition",
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
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/hospice-disposition",
  "version" : "2022.1.0",
  "name" : "HOSPICE_DISPOSITION",
  "title" : "Hospice Disposition",
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
  "description" : "This value set contains concepts that represent patients receiving hospice care outside of a hospital or long term care facility.",
  "purpose" : "This value set may use the Quality Data Model (QDM) datatype related to Procedure, Order or Intervention, Order. The intent of this value set is to identify all patients receiving hospice care outside of a hospital or long term care facility.",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "expansion" : {
    "timestamp" : "2021-02-08T13:47:55-07:00",
    "contains" : [{
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "385763009",
      "display" : "Hospice care (regime/therapy)"
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "2020-09",
      "code" : "385765002",
      "display" : "Hospice care management (procedure)"
    }]
  }
}

```
