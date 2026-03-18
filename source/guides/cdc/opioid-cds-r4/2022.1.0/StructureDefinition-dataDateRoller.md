# DataDateRollerExtension - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **DataDateRollerExtension**

## Extension: DataDateRollerExtension 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/dataDateRoller | *Version*:4.0.1 |
| Draft as of 2022-04-20 | *Computable Name*:DataDateRollerExtension |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

Declares the DateLastUpdated and Frequency arguments to be used by the Data Date Roller for maintaining/rolling test data dates to keep them from going stale.

**Context of Use**

This extension may be used on the following element(s):

* Element ID Resource

**Usage info**

**Usages:**

* Examples for this Extension: [Encounter/cancer-diagnosis](Encounter-cancer-diagnosis.md), [Encounter/oncologist-participant](Encounter-oncologist-participant.md), [MedicationDispense/ambulatory-opioid](MedicationDispense-ambulatory-opioid.md), [MedicationRequest/ambulatory-opioid](MedicationRequest-ambulatory-opioid.md)... Show 4 more, [MedicationRequest/example-opioidcds](MedicationRequest-example-opioidcds.md), [Observation/example-opioidcds](Observation-example-opioidcds.md), [Patient/example-opioidcds](Patient-example-opioidcds.md) and [ServiceRequest/palliative-care](ServiceRequest-palliative-care.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/fhir.cdc.opioid-cds-r4|current/StructureDefinition/dataDateRoller)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-dataDateRoller.csv), [Excel](StructureDefinition-dataDateRoller.xlsx), [Schematron](StructureDefinition-dataDateRoller.sch) 

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "dataDateRoller",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/dataDateRoller",
  "version" : "4.0.1",
  "name" : "DataDateRollerExtension",
  "title" : "Data Date-Roller Extension",
  "status" : "draft",
  "date" : "2022-04-20T09:29:23+11:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Declares the DateLastUpdated and Frequency arguments to be used by the Data Date Roller for maintaining/rolling test data dates to keep them from going stale.",
  "copyright" : "Centers for Disease Control and Prevention (CDC)",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Resource"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "Data Date Roller Arguments",
      "definition" : "The DateLastUpdated and Frequency arguments for the data date roller.",
      "min" : 0,
      "max" : "*"
    },
    {
      "id" : "Extension.extension:dateLastUpdated",
      "path" : "Extension.extension",
      "sliceName" : "dateLastUpdated",
      "short" : "Date that datetime-valued elements were last updated",
      "definition" : "The date that datetime-valued elements of the resource were last updated.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension"
      }]
    },
    {
      "id" : "Extension.extension:dateLastUpdated.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:dateLastUpdated.url",
      "path" : "Extension.extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "dateLastUpdated"
    },
    {
      "id" : "Extension.extension:dateLastUpdated.value[x]",
      "path" : "Extension.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "dateTime"
      }]
    },
    {
      "id" : "Extension.extension:frequency",
      "path" : "Extension.extension",
      "sliceName" : "frequency",
      "short" : "How often and by what offset the dateTime values should be adjusted forward",
      "definition" : "Frequency is used to specify how often the dateTime-valued elements within the resource should have their values updated and also, the offset or duration by which they should be adjusted forward. The determination for when to update the values and by how much should be made by comparing the current dateTime to the value of dateLastUpdated. If the duration specified by frequency has elapsed since the dateLastUpdated value, then the dateTime-valued elements within the resource should all be updated - their value incremented by the duration specified in the frequency value.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension"
      }]
    },
    {
      "id" : "Extension.extension:frequency.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:frequency.url",
      "path" : "Extension.extension.url",
      "type" : [{
        "code" : "uri"
      }],
      "fixedUri" : "frequency"
    },
    {
      "id" : "Extension.extension:frequency.value[x]",
      "path" : "Extension.extension.value[x]",
      "min" : 1,
      "type" : [{
        "code" : "Duration"
      }]
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/dataDateRoller"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "min" : 0,
      "max" : "0"
    }]
  }
}

```
