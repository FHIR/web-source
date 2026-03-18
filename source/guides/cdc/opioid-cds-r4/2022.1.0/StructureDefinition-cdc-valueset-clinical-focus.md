# CDC 2022 Opioid Guidance Clinical Focus Extension - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **CDC 2022 Opioid Guidance Clinical Focus Extension**

## Extension: CDC 2022 Opioid Guidance Clinical Focus Extension 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus | *Version*:1.0.0 |
| Draft as of 2018-04-22 | *Computable Name*:CDC_Opioid_Guidance_ValueSet_Clinical_Focus_Extension |
| **Copyright/Legal**: Centers for Disease Control and Prevention (CDC) | |

Describes the clinical focus for the ValueSet.

**Context of Use**

This extension may be used on the following element(s):

* Element ID ValueSet

**Usage info**

**Usages:**

* Use this Extension: [CDC_ValueSet](StructureDefinition-cdc-valueset.md)
* Examples for this Extension: [BARBITURATE_MEDICATIONS](ValueSet-barbiturate-medications.md), [BARBITURATE_URINE_DRUG_SCREENING_TESTS](ValueSet-barbiturate-urine-drug-screening-tests.md), [BENZODIAZEPINE_MEDICATIONS](ValueSet-benzodiazepine-medications.md), [BENZODIAZEPINE_URINE_DRUG_SCREENING_TESTS](ValueSet-benzodiazepine-urine-drug-screening-tests.md)... Show 25 more, [BUPRENORPHINE_AND_METHADONE_MEDICATIONS](ValueSet-buprenorphine-and-methadone-medications.md), [BUPRENORPHINE_MEDICATIONS](ValueSet-buprenorphine-medications.md), [BUPRENORPHINE_URINE_DRUG_SCREENING_TESTS](ValueSet-buprenorphine-urine-drug-screening-tests.md), [CDC_MALIGNANT_CANCER_CONDITIONS](ValueSet-cdc-malignant-cancer-conditions.md), [SLEEP_DISORDERED_BREATHING](ValueSet-conditions-documenting-sleep-disordered-breathing.md), [CONDITIONS_LIKELY_TERMINAL_FOR_OPIOID_PRESCRIBING](ValueSet-conditions-likely-terminal-for-opioid-prescribing.md), [EXTENDED_RELEASE_OPIOID_WITH_AMBULATORY_MISUSE_POTENTIAL](ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.md), [GENERAL_OPIATE_URINE_DRUG_SCREENING_TESTS](ValueSet-general-opiate-urine-drug-screening-tests.md), [HEROIN_URINE_DRUG_SCREENING_TESTS](ValueSet-heroin-urine-drug-screening-tests.md), [HOSPICE_FINDING](ValueSet-hospice-finding.md), [HOSPICE_PROCEDURE](ValueSet-hospice-procedure.md), [LIMITED_LIFE_EXPECTANCY_CONDITIONS](ValueSet-limited-life-expectancy-conditions.md), [NALOXONE_MEDICATIONS](ValueSet-naloxone-medications.md), [ONCOLOGY_SPECIALTY_DESIGNATIONS](ValueSet-oncology-specialty-designations.md), [OPIATE_SPECIFIC_URINE_DRUG_SCREENING_TESTS](ValueSet-opiate-specific-urine-drug-screening-tests.md), [OPIOID_ANALGESICS_WITH_AMBULATORY_MISUSE_POTENTIAL](ValueSet-opioid-analgesics-with-ambulatory-misuse-potential.md), [OPIOID_MISUSE_DISORDERS](ValueSet-opioid-misuse-disorders.md), [OXYCODONE_MEDICATIONS](ValueSet-oxycodone-medications.md), [OXYCODONE_URINE_DRUG_SCREENING_TESTS](ValueSet-oxycodone-urine-drug-screening-tests.md), [PHENCYCLIDINE_URINE_DRUG_SCREENING_TESTS](ValueSet-phencyclidine-urine-drug-screening-tests.md), [SICKLE_CELL_DISEASES](ValueSet-sickle-cell-diseases.md), [SUBSTANCE_MISUSE_BEHAVIORAL_COUNSELING](ValueSet-substance-misuse-behavioral-counseling.md), [SYNTHETIC_OPIOID_MEDICATIONS](ValueSet-synthetic-opioid-medications.md), [SYNTHETIC_OPIOID_URINE_DRUG_SCREENING_TESTS](ValueSet-synthetic-opioid-urine-drug-screening-tests.md) and [THERAPIES_INDICATING_END_OF_LIFE_CARE](ValueSet-therapies-indicating-end-of-life-care.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/fhir.cdc.opioid-cds-r4|current/StructureDefinition/cdc-valueset-clinical-focus)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-cdc-valueset-clinical-focus.csv), [Excel](StructureDefinition-cdc-valueset-clinical-focus.xlsx), [Schematron](StructureDefinition-cdc-valueset-clinical-focus.sch) 

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "cdc-valueset-clinical-focus",
  "url" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus",
  "version" : "1.0.0",
  "name" : "CDC_Opioid_Guidance_ValueSet_Clinical_Focus_Extension",
  "title" : "CDC 2022 Opioid Guidance Clinical Focus Extension",
  "status" : "draft",
  "date" : "2018-04-22",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Describes the clinical focus for the ValueSet.",
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
    "expression" : "ValueSet"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "CDC 2022 Opioid Guidance Clinical Focus Extension",
      "definition" : "Describes the clinical focus for the ValueSet.",
      "min" : 0,
      "max" : "1",
      "isModifier" : false
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "http://fhir.org/guides/cdc/opioid-cds/StructureDefinition/cdc-valueset-clinical-focus"
    },
    {
      "id" : "Extension.valueString",
      "path" : "Extension.valueString",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }]
    }]
  }
}

```
