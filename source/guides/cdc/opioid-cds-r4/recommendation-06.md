# Recommendation #6 - Prescribe Lowest Effective Dose and Duration - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #6 - Prescribe Lowest Effective Dose and Duration**

## Recommendation #6 - Prescribe Lowest Effective Dose and Duration

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Deciding Duration of Initial Opioid Prescription and Conducting Follow-Up ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#DecidingDurationofInitialOpioidPrescriptionandConductingFollow-Up)) |
| **Recommendation Description**: When opioids are needed for acute pain, clinicians should prescribe no greater quantity than needed for the expected duration of pain severe enough to require opioids. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation6)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then

* Definition: Order for opioid analgesics with with ambulatory misuse potential?
  * Answer to Proceed: Yes
  * Details: Trigger based on a new prescription (order) for opioids in the relevant value set - ideally the prescription should be selected prior to being committed to the system
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Order for opioid analgesics with ambulatory misuse potential for > 7 days?
  * Answer to Proceed: Yes
  * Details: Determine if the new prescription (order) has an intended duration of > 7 days
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.dispenseRequest.expectedSupplyDuration

[Effective Data Requirements](PlanDefinition-opioidcds-06.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #6](PlanDefinition-opioidcds-06.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #6 |
| [Recommendation #6 - Prescribe Lowest Effective Dose and Duration](Library-OpioidCDSREC06.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #6 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed oxyCODONE HCl 10 MG 12HR Extended Release Oral Tablet (RXNorm 1049502). Patients "Dosage Instructions" are 1 Tablet per day for 5 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC06/request-example-rec-06-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC06/response-example-rec-06-in-criteria-met.json) |
| Patient is 18 or older. Patient has been prescribed oxyCODONE HCl 10 MG 12HR Extended Release Oral Tablet (RXNorm 1049502).Patients "Dosage Instructions" are 1 Tablet per day for 27 days. The patient will be included and the following message will be triggered - "Recommend limit therapy to ≤ 3 days to maximum of ≤ 7 days and to limit to immediate release opioids". | [Request JSON](requests/OpioidCDSREC06/request-example-rec-06-out-extended-release-27-days.json) | [Response JSON](responses/OpioidCDSREC06/response-example-rec-06-out-extended-release-27-days.json) |

* When
* Then

* Definition: Order for opioid analgesics with with ambulatory misuse potential?
  * Answer to Proceed: Yes
  * Details: Trigger based on a new prescription (order) for opioids in the relevant value set - ideally the prescription should be selected prior to being committed to the system
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Order for opioid analgesics with ambulatory misuse potential for > 7 days?
  * Answer to Proceed: Yes
  * Details: Determine if the new prescription (order) has an intended duration of > 7 days
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.dispenseRequest.expectedSupplyDuration

[Effective Data Requirements](PlanDefinition-opioidcds-06.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #6](PlanDefinition-opioidcds-06.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #6 |
| [Recommendation #6 - Prescribe Lowest Effective Dose and Duration](Library-OpioidCDSREC06.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #6 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed oxyCODONE HCl 10 MG 12HR Extended Release Oral Tablet (RXNorm 1049502). Patients "Dosage Instructions" are 1 Tablet per day for 5 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC06/request-example-rec-06-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC06/response-example-rec-06-in-criteria-met.json) |
| Patient is 18 or older. Patient has been prescribed oxyCODONE HCl 10 MG 12HR Extended Release Oral Tablet (RXNorm 1049502).Patients "Dosage Instructions" are 1 Tablet per day for 27 days. The patient will be included and the following message will be triggered - "Recommend limit therapy to ≤ 3 days to maximum of ≤ 7 days and to limit to immediate release opioids". | [Request JSON](requests/OpioidCDSREC06/request-example-rec-06-out-extended-release-27-days.json) | [Response JSON](responses/OpioidCDSREC06/response-example-rec-06-out-extended-release-27-days.json) |

