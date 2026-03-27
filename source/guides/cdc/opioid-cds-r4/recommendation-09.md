# Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions**

## Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Assessing Risk and Addressing Potential Harms of Opioid Use ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#AssessingRiskandAddressingPotentialHarmsofOpioidUse)) |
| **Recommendation Description**: When prescribing initial opioid therapy for acute, subacute, or chronic pain, and periodically during opioid therapy for chronic pain, clinicians should review the patient’s history of controlled substance prescriptions using state prescription drug monitoring program (PDMP) data to determine whether the patient is receiving opioid dosages or combinations that put the patient at high risk for overdose. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation9)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: PDMP review in past 90 days?
  * Answer to Proceed: No
  * Details: See[PDMP Review in Past 90 Days sub-routine](subroutines.md#recommendation-9-pdmp-review-in-past-90-days)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-09.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #9](PlanDefinition-opioidcds-09.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #9 |
| [Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions](Library-OpioidCDSREC09.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #9 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) Patients "Dosage Instructions" are 1 FIlm per day for 30 days. This will trigger the message "PDMP Data Review" | [Request JSON](requests/OpioidCDSREC09/request-example-rec-09-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC09/response-example-rec-09-in-criteria-met.json) |
| Patient is 18 or older. Patient has been prescribed Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) Patients "Dosage Instructions" are 1 Film per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC09/request-example-rec-09-out-PDMP-review-90-days.json) | [Response JSON](responses/OpioidCDSREC09/response-example-rec-09-out-PDMP-review-90-days.json) |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: PDMP review in past 90 days?
  * Answer to Proceed: No
  * Details: See[PDMP Review in Past 90 Days sub-routine](subroutines.md#recommendation-9-pdmp-review-in-past-90-days)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-09.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #9](PlanDefinition-opioidcds-09.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #9 |
| [Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions](Library-OpioidCDSREC09.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #9 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) Patients "Dosage Instructions" are 1 FIlm per day for 30 days. This will trigger the message "PDMP Data Review" | [Request JSON](requests/OpioidCDSREC09/request-example-rec-09-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC09/response-example-rec-09-in-criteria-met.json) |
| Patient is 18 or older. Patient has been prescribed Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) Patients "Dosage Instructions" are 1 Film per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC09/request-example-rec-09-out-PDMP-review-90-days.json) | [Response JSON](responses/OpioidCDSREC09/response-example-rec-09-out-PDMP-review-90-days.json) |

