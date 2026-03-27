# Recommendation #2 - Prioritize Nonopioid Pain Therapies - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #2 - Prioritize Nonopioid Pain Therapies**

## Recommendation #2 - Prioritize Nonopioid Pain Therapies

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Determining Whether or Not to Initiate Opioids for Pain ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#DeterminingWhetherorNottoInitiateOpioidsforPain)) |
| **Recommendation Description**: Nonopioid therapies are preferred for subacute and chronic pain. Clinicians should maximize use of nonpharmacologic and nonopioid pharmacologic therapies as appropriate for the specific condition and patient and only consider initiating opioid therapy if expected benefits for pain and function are anticipated to outweigh risks to the patient. Before starting opioid therapy for subacute or chronic pain, clinicians should discuss with patients the realistic benefits and known risks of opioid therapy, should work with patients to establish treatment goals for pain and function, and should consider how opioid therapy will be discontinued if benefits do not outweigh risks. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation2)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 2 |

* When
* Then

* Definition: Opioid order for subacute or chronic pain?
  * Answer to Proceed: Yes
  * Details: See[For Subacute or Chronic Pain sub-routine](subroutines.md#for-subacute-or-chronic-pain)
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
* Definition: Pain treatment plan created or edited in past 90 days?
  * Answer to Proceed: No
  * Details: Look for a pain treatment plan that has been established or edited within the past 90 days (including the day of the visit).The following criteria should be met:• the treatment plan has an initiation date or an edited date within the past 90 days.• the treatment plan should have been created or reviewed within the past 90 days by the**same individual**who is writing the new prescription.
  * Data (Terminology) Requirement: Pain treatment plan
  * Profile: [CarePlan](http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan)
  * Path: CarePlan.category, CarePlan.status, CarePlan.created, CarePlan.lastUpdated, and CarePlan.author
* Definition: Pain management procedure in past 90 days?
  * Answer to Proceed: No
  * Details: Look for a pain management procedure (including the procedure to review a pain management treatment plan) that occurred within the past 90 days (including the day of the visit).
  * Data (Terminology) Requirement: Pain management procedure
  * Profile: [Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)and[MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: Procedure.performed, Procedure.performer.actor, and MedicationRequest.recorder

[Effective Data Requirements](PlanDefinition-opioidcds-02.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #2](PlanDefinition-opioidcds-02.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #2 |
| [Recommendation #2 - Prioritize Nonopioid Pain Therapies](Library-OpioidCDSREC02.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #2 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as an Opioid Treatment Care Plan updated 89 days prior to today. Patients "Dosage Instructions" are 1 Film per day for 30 days. This patient will not trigger any cards and there should not be a recommendation message. | [Request JSON example-rec-02-in-careplan-revisited](requests/OpioidCDSREC02/request-example-rec-02-in-careplan-revisited.json) | [Response JSON example-rec-02-in-careplan-revisited](responses/OpioidCDSREC02/response-example-rec-02-in-careplan-revisited.json) |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as a Care Plan most recently updated 120 days prior to today. Patients "Dosage Instructions" are 1 Film per day for 30 days. Due to the most recent review of the Care Plan having been conducted more than 89 days prior to today this will result in a summary message: "Recommend creation, review or update of opioid treatment plan." | [Request JSON example-rec-02-out-careplan-not-revisited](requests/OpioidCDSREC02/request-example-rec-02-out-careplan-not-revisited.json) | [Response JSON example-rec-02-out-careplan-not-revisited](responses/OpioidCDSREC02/response-example-rec-02-out-careplan-not-revisited.json) |

* When
* Then

* Definition: Opioid order for subacute or chronic pain?
  * Answer to Proceed: Yes
  * Details: See[For Subacute or Chronic Pain sub-routine](subroutines.md#for-subacute-or-chronic-pain)
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
* Definition: Pain treatment plan created or edited in past 90 days?
  * Answer to Proceed: No
  * Details: Look for a pain treatment plan that has been established or edited within the past 90 days (including the day of the visit).The following criteria should be met:• the treatment plan has an initiation date or an edited date within the past 90 days.• the treatment plan should have been created or reviewed within the past 90 days by the**same individual**who is writing the new prescription.
  * Data (Terminology) Requirement: Pain treatment plan
  * Profile: [CarePlan](http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan)
  * Path: CarePlan.category, CarePlan.status, CarePlan.created, CarePlan.lastUpdated, and CarePlan.author
* Definition: Pain management procedure in past 90 days?
  * Answer to Proceed: No
  * Details: Look for a pain management procedure (including the procedure to review a pain management treatment plan) that occurred within the past 90 days (including the day of the visit).
  * Data (Terminology) Requirement: Pain management procedure
  * Profile: [Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)and[MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: Procedure.performed, Procedure.performer.actor, and MedicationRequest.recorder

[Effective Data Requirements](PlanDefinition-opioidcds-02.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #2](PlanDefinition-opioidcds-02.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #2 |
| [Recommendation #2 - Prioritize Nonopioid Pain Therapies](Library-OpioidCDSREC02.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #2 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as an Opioid Treatment Care Plan updated 89 days prior to today. Patients "Dosage Instructions" are 1 Film per day for 30 days. This patient will not trigger any cards and there should not be a recommendation message. | [Request JSON example-rec-02-in-careplan-revisited](requests/OpioidCDSREC02/request-example-rec-02-in-careplan-revisited.json) | [Response JSON example-rec-02-in-careplan-revisited](responses/OpioidCDSREC02/response-example-rec-02-in-careplan-revisited.json) |
| Patient is 18 years or older and has an outpatient Medication Request of Suboxone 2 MG / 0.5 MG Sublingual Film (RXNorm 1010603) authored "Today" as well as a Care Plan most recently updated 120 days prior to today. Patients "Dosage Instructions" are 1 Film per day for 30 days. Due to the most recent review of the Care Plan having been conducted more than 89 days prior to today this will result in a summary message: "Recommend creation, review or update of opioid treatment plan." | [Request JSON example-rec-02-out-careplan-not-revisited](requests/OpioidCDSREC02/request-example-rec-02-out-careplan-not-revisited.json) | [Response JSON example-rec-02-out-careplan-not-revisited](responses/OpioidCDSREC02/response-example-rec-02-out-careplan-not-revisited.json) |

