# Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration**

## Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Determining Whether or Not to Initiate Opioids for Pain ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#DeterminingWhetherorNottoInitiateOpioidsforPain)) |
| **Recommendation Description**: Nonopioid therapies are at least as effective as opioids for many common types of acute pain. Clinicians should maximize use of nonpharmacologic and nonopioid pharmacologic therapies as appropriate for the specific condition and patient and only consider opioid therapy for acute pain if benefits are anticipated to outweigh risks to the patient. Before prescribing opioid therapy for acute pain, clinicians should discuss with patients the realistic benefits and known risks of opioid therapy. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation1)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 3 |

* When
* Then

* Definition: Opioid order for acute pain?
  * Answer to Proceed: Yes
  * Details: See[For Acute Pain sub-routine](subroutines.md#for-acute-pain)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
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

[Effective Data Requirements](PlanDefinition-opioidcds-01.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #1](PlanDefinition-opioidcds-01.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #1 |
| [Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration](Library-OpioidCDSREC01.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #1 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as a Medication Statement 95 days prior to today which will result in recommendation inclusion in addition to Opioid Naive & CDC 2022 General Inclusion Criteria. Patients "Dosage Instructions" are 1 Film per day for 30 days. This should result in a summary message: "Recommend use of nonpharmacologic therapy and nonopioid pharmacologic therapy as alternative." | [Request JSON](requests/OpioidCDSREC01/request-example-rec-01-in-outpatient-opioid.json) | [Response JSON](responses/OpioidCDSREC01/response-example-rec-01-in-outpatient-opioid.json) |
| Patient is 18 years or older and has an inpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603). Patients "Dosage Instructions" are 1 Film per day for 30 days. This will result in an empty set of cards due to the Medication Request being inpatient. | [Request JSON](requests/OpioidCDSREC01/request-example-rec-01-out-inpatient-opioid.json) | [Response JSON](responses/OpioidCDSREC01/response-example-rec-01-out-inpatient-opioid.json) |

* When
* Then

* Definition: Opioid order for acute pain?
  * Answer to Proceed: Yes
  * Details: See[For Acute Pain sub-routine](subroutines.md#for-acute-pain)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
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

[Effective Data Requirements](PlanDefinition-opioidcds-01.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #1](PlanDefinition-opioidcds-01.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #1 |
| [Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration](Library-OpioidCDSREC01.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #1 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as a Medication Statement 95 days prior to today which will result in recommendation inclusion in addition to Opioid Naive & CDC 2022 General Inclusion Criteria. Patients "Dosage Instructions" are 1 Film per day for 30 days. This should result in a summary message: "Recommend use of nonpharmacologic therapy and nonopioid pharmacologic therapy as alternative." | [Request JSON](requests/OpioidCDSREC01/request-example-rec-01-in-outpatient-opioid.json) | [Response JSON](responses/OpioidCDSREC01/response-example-rec-01-in-outpatient-opioid.json) |
| Patient is 18 years or older and has an inpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603). Patients "Dosage Instructions" are 1 Film per day for 30 days. This will result in an empty set of cards due to the Medication Request being inpatient. | [Request JSON](requests/OpioidCDSREC01/request-example-rec-01-out-inpatient-opioid.json) | [Response JSON](responses/OpioidCDSREC01/response-example-rec-01-out-inpatient-opioid.json) |

