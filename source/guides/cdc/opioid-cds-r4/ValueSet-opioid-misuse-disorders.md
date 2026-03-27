# Opioid misuse disorders - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Opioid misuse disorders**

## ValueSet: Opioid misuse disorders 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-misuse-disorders | *Version*:2022.1.0 |
| Active as of 2023-05-25 | *Computable Name*:OPIOID_MISUSE_DISORDERS |
| **Copyright/Legal**: © CDC 2016+. | |

 
Conditions indicating opioid misuse 

 
Conditions that may indicate need for opioid management 

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
  "id" : "opioid-misuse-disorders",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
    "valueString" : "Conditions indicating opioid misuse"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-dataelement-scope",
    "valueString" : "Condition"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-inclusion-criteria",
    "valueString" : "Conditions indicating opioid misuse"
  },
  {
    "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-exclusion-criteria",
    "valueString" : "none"
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
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
    "valueCode" : "structured"
  },
  {
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
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-misuse-disorders",
  "version" : "2022.1.0",
  "name" : "OPIOID_MISUSE_DISORDERS",
  "title" : "Opioid misuse disorders",
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
  "description" : "Conditions indicating opioid misuse",
  "purpose" : "Conditions that may indicate need for opioid management",
  "copyright" : "© CDC 2016+.",
  "compose" : {
    "include" : [{
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "5602001"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "75544000"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "87132004"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "29733004"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "1148649003"
      }]
    },
    {
      "system" : "http://snomed.info/sct",
      "version" : "http://snomed.info/sct/731000124108",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "70545002"
      }]
    },
    {
      "system" : "http://hl7.org/fhir/sid/icd-10-cm",
      "filter" : [{
        "property" : "concept",
        "op" : "is-a",
        "value" : "F11"
      }]
    }]
  }
}

```
