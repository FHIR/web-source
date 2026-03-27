# Recommendation #3 - Opioid Immediate Release Form When Starting Opioid Therapy - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #3 - Opioid Immediate Release Form When Starting Opioid Therapy**

## Recommendation #3 - Opioid Immediate Release Form When Starting Opioid Therapy

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: When starting opioid therapy for acute, subacute, or chronic pain, clinicians should prescribe immediate-release opioids instead of extended-release and long-acting (ER/LA) opioids. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation3)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then

* Definition: Is this order for extended-release opioid analgesics with ambulatory misuse potential?
  * Answer to Proceed: Yes
  * Details: Look for a new prescription for extended release opioids. [Ideally the order should be selected prior to being committed to the system]
  * Data (Terminology) Requirement: Extended-release opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Opioid naïve?
  * Answer to Proceed: Yes
  * Details: See[Opioid Naïve sub-routine](subroutines.md#opioid-naive)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-03.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #3](PlanDefinition-opioidcds-03.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #3 |
| [Recommendation #3 - prescribe immediate-release opioids instead of extended-release/long-acting (ER/LA) opioids](Library-OpioidCDSREC03.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #3 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has a Medication Request authored "Today" for 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet which is an "Extended Release Opioid with Ambulatory Abuse Potential". This will result in a recommendation message: "Recommend use of immediate-release opioids instead of extended release/long acting opioids when starting patient on opioids." | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-long-acting-opioid.json) |
| Patient is 18 years or older and has a Medication Request authored "Today" for Buprenorphine 2 MG / Naloxone 0.5 MG Oral Strip which is not an "Extended Release Opioid". This will not result in any recommendation messages. | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-not-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-not-long-acting-opioid.json) |
| Patient is 18 years or older and has a Medication Request authored "Today" for Buprenorphine 2 MG / Naloxone 0.5 MG Oral Strip which is not an "Extended Release Opioid". Additionally, the patient has an active Medication Request for 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet which is an "Extended Release Opioid with Ambulatory Abuse Potential". This will not result in any recommendation messages. | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-preexisting-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-preexisting-long-acting-opioid.json) |

* When
* Then

* Definition: Is this order for extended-release opioid analgesics with ambulatory misuse potential?
  * Answer to Proceed: Yes
  * Details: Look for a new prescription for extended release opioids. [Ideally the order should be selected prior to being committed to the system]
  * Data (Terminology) Requirement: Extended-release opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Opioid naïve?
  * Answer to Proceed: Yes
  * Details: See[Opioid Naïve sub-routine](subroutines.md#opioid-naive)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-03.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #3](PlanDefinition-opioidcds-03.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #3 |
| [Recommendation #3 - prescribe immediate-release opioids instead of extended-release/long-acting (ER/LA) opioids](Library-OpioidCDSREC03.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #3 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has a Medication Request authored "Today" for 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet which is an "Extended Release Opioid with Ambulatory Abuse Potential". This will result in a recommendation message: "Recommend use of immediate-release opioids instead of extended release/long acting opioids when starting patient on opioids." | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-long-acting-opioid.json) |
| Patient is 18 years or older and has a Medication Request authored "Today" for Buprenorphine 2 MG / Naloxone 0.5 MG Oral Strip which is not an "Extended Release Opioid". This will not result in any recommendation messages. | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-not-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-not-long-acting-opioid.json) |
| Patient is 18 years or older and has a Medication Request authored "Today" for Buprenorphine 2 MG / Naloxone 0.5 MG Oral Strip which is not an "Extended Release Opioid". Additionally, the patient has an active Medication Request for 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet which is an "Extended Release Opioid with Ambulatory Abuse Potential". This will not result in any recommendation messages. | [Request JSON](requests/OpioidCDSREC03/request-example-rec-03-preexisting-long-acting-opioid.json) | [Response JSON](responses/OpioidCDSREC03/response-example-rec-03-preexisting-long-acting-opioid.json) |

