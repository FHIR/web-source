# CDC_ValueSet - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CDC_ValueSet**

## Resource Profile: CDC_ValueSet 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset | *Version*:0.1 |
| Draft as of 2018-11-20 | *Computable Name*:CDC_ValueSet |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

 
Profile of ValueSet for use with 2022 CDC Clinical Practice Guideline 

**Usages:**

* This Profile is not used by any profiles in this Implementation Guide

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/fhir.cdc.opioid-cds-r4|current/StructureDefinition/cdc-valueset)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-cdc-valueset.csv), [Excel](StructureDefinition-cdc-valueset.xlsx), [Schematron](StructureDefinition-cdc-valueset.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "cdc-valueset",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset",
  "version" : "0.1",
  "name" : "CDC_ValueSet",
  "status" : "draft",
  "experimental" : false,
  "date" : "2018-11-20",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Profile of ValueSet for use with 2022 CDC Clinical Practice Guideline",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "objimpl",
    "uri" : "http://hl7.org/fhir/object-implementation",
    "name" : "Object Implementation Information"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ValueSet",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ValueSet",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ValueSet",
      "path" : "ValueSet",
      "mustSupport" : false
    },
    {
      "id" : "ValueSet.extension:cdc-valueset-clinical-focus",
      "path" : "ValueSet.extension",
      "sliceName" : "cdc-valueset-clinical-focus",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ValueSet.extension:cdc-valueset-dataelement-scope",
      "path" : "ValueSet.extension",
      "sliceName" : "cdc-valueset-dataelement-scope",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-dataelement-scope"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ValueSet.extension:cdc-valueset-inclusion-criteria",
      "path" : "ValueSet.extension",
      "sliceName" : "cdc-valueset-inclusion-criteria",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-inclusion-criteria"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ValueSet.extension:cdc-valueset-exclusion-criteria",
      "path" : "ValueSet.extension",
      "sliceName" : "cdc-valueset-exclusion-criteria",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-exclusion-criteria"]
      }],
      "mustSupport" : true
    }]
  }
}

```
