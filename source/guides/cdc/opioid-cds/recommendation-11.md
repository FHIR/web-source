# Recommendation #11 - Concurrent Use of Opioids and Benzodiazepines - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #11 - Concurrent Use of Opioids and Benzodiazepines**

## Recommendation #11 - Concurrent Use of Opioids and Benzodiazepines

**Note that this recommendation is represented in multiple variations where each variation corresponds to the CDS Hook by which it was meant to be triggered/evaluated. Use the tabs below to navigate to each variation.**

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: Clinicians should use particular caution when prescribing opioid pain medication and benzodiazepines concurrently and consider whether benefits outweigh risks of concurrent prescribing of opioids and other central nervous system depressants. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation11)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 3 |

* When
* Then

* Definition: Order for opioid analgesic, benzodiazepine, or other central nervous system depressant?
  * Answer to Proceed: Yes
  * Details: See[Opioid Analgesic or Benzodiazepine or CNS Depressant Order sub-routine](subroutines.md#recommendation-11-opioid-analgesic-or-benzodiazepine-or-cns-depressant-order)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Receiving both opioid with ambulatory use potential and benzodiazepine or other central nervous system depressant ?
  * Answer to Proceed: Yes
  * Details: New prescription is for an opioid and existing use of benzodiazepine or other central nervous system depressant evident, OR New prescription is for benzodiazepine or other central nervous system depressant and existing use of opioids evident
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potentialBenzodiazepine or other central nervous system depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category

[Effective Data Requirements](PlanDefinition-opioidcds-11-order-select.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #11 Order Select](PlanDefinition-opioidcds-11-order-select.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #11 Order Select |
| [Recommendation #11 Order Select - concurrent opioid pain medication and benzodiazepines or other central nervous system depressant prescriptions](Library-OpioidCDSREC11OrderSelect.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #11 Order Select |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-benzo-trigger-with-opioid.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-benzo-trigger-with-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-benzo-trigger-without-opioid.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-benzo-trigger-without-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-opioid-trigger-with-benzo.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-opioid-trigger-with-benzo.json) |
| Patient is 18 or older. Patient is being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-opioid-trigger-without-benzo.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-opioid-trigger-without-benzo.json) |

* When
* Then

* Definition: Order for opioid analgesic, benzodiazepine, or other central nervous system depressant?
  * Answer to Proceed: Yes
  * Details: See[Opioid Analgesic or Benzodiazepine or CNS Depressant Order sub-routine](subroutines.md#recommendation-11-opioid-analgesic-or-benzodiazepine-or-cns-depressant-order)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Receiving both opioid with ambulatory use potential and benzodiazepine or other central nervous system depressant ?
  * Answer to Proceed: Yes
  * Details: New prescription is for an opioid and existing use of benzodiazepine or other central nervous system depressant evident, OR New prescription is for benzodiazepine or other central nervous system depressant and existing use of opioids evident
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potentialBenzodiazepine or other central nervous system depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category

[Effective Data Requirements](PlanDefinition-opioidcds-11-order-select.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #11 Order Select](PlanDefinition-opioidcds-11-order-select.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #11 Order Select |
| [Recommendation #11 Order Select - concurrent opioid pain medication and benzodiazepines or other central nervous system depressant prescriptions](Library-OpioidCDSREC11OrderSelect.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #11 Order Select |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-benzo-trigger-with-opioid.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-benzo-trigger-with-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-benzo-trigger-without-opioid.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-benzo-trigger-without-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-opioid-trigger-with-benzo.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-opioid-trigger-with-benzo.json) |
| Patient is 18 or older. Patient is being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11/request-example-rec-11-opioid-trigger-without-benzo.json) | [Response JSON](responses/OpioidCDSREC11/response-example-rec-11-opioid-trigger-without-benzo.json) |

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: Clinicians should use particular caution when prescribing opioid pain medication and benzodiazepines concurrently and consider whether benefits outweigh risks of concurrent prescribing of opioids and other central nervous system depressants. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation11)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 3 |

* When
* Then

* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Active order for opioid analgesics with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Review active medication orders for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Active order for benzodiazepine medication?
  * Answer to Proceed: Yes
  * Details: Review active medication orders for benzodiazepine medications
  * Data (Terminology) Requirement: Benzodiazepine medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Active order for central nervous system depressant?
  * Answer to Proceed: Yes
  * Details: Review active medication orders for central nervous system depressant medications
  * Data (Terminology) Requirement: CNS depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category

[Effective Data Requirements](PlanDefinition-opioidcds-11-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #11 Patient View](PlanDefinition-opioidcds-11-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #11 Patient View |
| [Recommendation #11 Patient View - concurrent opioid pain medication and benzodiazepines or other central nervous system depressant prescriptions](Library-OpioidCDSREC11PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #11 Patient View |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-benzo-trigger-with-opioid.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-benzo-trigger-with-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-benzo-trigger-without-opioid.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-benzo-trigger-without-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-opioid-trigger-with-benzo.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-opioid-trigger-with-benzo.json) |
| Patient is 18 or older. Patient is being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-opioid-trigger-without-benzo.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-opioid-trigger-without-benzo.json) |

* When
* Then

* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Active order for opioid analgesics with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Review active medication orders for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Active order for benzodiazepine medication?
  * Answer to Proceed: Yes
  * Details: Review active medication orders for benzodiazepine medications
  * Data (Terminology) Requirement: Benzodiazepine medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Active order for central nervous system depressant?
  * Answer to Proceed: Yes
  * Details: Review active medication orders for central nervous system depressant medications
  * Data (Terminology) Requirement: CNS depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category

[Effective Data Requirements](PlanDefinition-opioidcds-11-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #11 Patient View](PlanDefinition-opioidcds-11-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #11 Patient View |
| [Recommendation #11 Patient View - concurrent opioid pain medication and benzodiazepines or other central nervous system depressant prescriptions](Library-OpioidCDSREC11PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #11 Patient View |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-benzo-trigger-with-opioid.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-benzo-trigger-with-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-benzo-trigger-without-opioid.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-benzo-trigger-without-opioid.json) |
| Patient is 18 or older. Patient is being prescribed Flurazepam Hydrochloride 15 MG Oral Capsule (RxNorm code 1298088), once per day for 30 days. Patient is also being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days.This triggers a message with the recommendation to avoid prescribing opioid pain medication and benzodiazepine concurrently with following three feedback options:i. Reviseii. Indicate that the benefits outweigh the risks and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-opioid-trigger-with-benzo.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-opioid-trigger-with-benzo.json) |
| Patient is 18 or older. Patient is being prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RxNorm code 1049502), once per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC11PatientView/request-example-rec-11-patient-view-opioid-trigger-without-benzo.json) | [Response JSON](responses/OpioidCDSREC11PatientView/response-example-rec-11-patient-view-opioid-trigger-without-benzo.json) |

