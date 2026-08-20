# Recommendation #7 - Opioid Therapy Risk Assessment - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #7 - Opioid Therapy Risk Assessment**

## Recommendation #7 - Opioid Therapy Risk Assessment

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Deciding Duration of Initial Opioid Prescription and Conducting Follow-Up ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#DecidingDurationofInitialOpioidPrescriptionandConductingFollow-Up)) |
| **Recommendation Description**: Clinicians should evaluate benefits and risks with patients within 1-4 weeks of starting opioid therapy for subacute or chronic pain or of dosage escalation. Clinicians should regularly reevaluate benefits and risks of continued opioid therapy with patients. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation7)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

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
* Definition: Opioid risk - benefit assessment procedure not performed in last 90 days?
  * Answer to Proceed: Yes
  * Details: Absence of an opioid treatment assessment procedure in the last 90 days
  * Data (Terminology) Requirement: Opioid treatment assessment procedure
  * Profile: [Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)
  * Path: Procedure.code, and Procedure.performed

[Effective Data Requirements](PlanDefinition-opioidcds-07.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #7](PlanDefinition-opioidcds-07.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #7 |
| [Recommendation #7 - benefits and harms of starting and/or continuing opioid therapy for subacute or chronic pain](Library-OpioidCDSREC07.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #7 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502).one tablet per day for 30 days. Patient is also being prescribed maCarbinoxamineleate 0.4 MG/ML / Hydrocodone Bitartrate 1 MG/ML / Pseudoephedrine Hydrochloride 6 MG/ML Oral Solution (RXNorm 1012727) 3 tablets per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-end-of-life-exclusion.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-end-of-life-exclusion.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-risk-assessment.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-risk-assessment.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 7 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm one tablet per 1 day for 7 days. "Assessment of risk for opioid use procedure." Patients on opioid therapy should be evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently. Assessment of risk for opioid abuse (procedure) | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-seven-of-past-ten-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-seven-of-past-ten-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet. (RXNorm 1049502) one tablet per 1 day for 6 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (Rxnorm 0149502) one tablet per 1 day for 6 days.The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-six-of-past-ten-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-six-of-past-ten-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 30 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 63 days. This will trigger the message "No evaluation for benefits and harms associated with opioid therapy has been performed for the patient in the past 3 months" Patients on opioid therapy should be evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-sixtythree-of-past-ninety-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-sixtythree-of-past-ninety-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per 1 day for 30 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per 1 day for 62 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-sixtytwo-of-past-ninety-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-sixtytwo-of-past-ninety-days.json) |

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
* Definition: Opioid risk - benefit assessment procedure not performed in last 90 days?
  * Answer to Proceed: Yes
  * Details: Absence of an opioid treatment assessment procedure in the last 90 days
  * Data (Terminology) Requirement: Opioid treatment assessment procedure
  * Profile: [Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)
  * Path: Procedure.code, and Procedure.performed

[Effective Data Requirements](PlanDefinition-opioidcds-07.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #7](PlanDefinition-opioidcds-07.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #7 |
| [Recommendation #7 - benefits and harms of starting and/or continuing opioid therapy for subacute or chronic pain](Library-OpioidCDSREC07.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #7 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502).one tablet per day for 30 days. Patient is also being prescribed maCarbinoxamineleate 0.4 MG/ML / Hydrocodone Bitartrate 1 MG/ML / Pseudoephedrine Hydrochloride 6 MG/ML Oral Solution (RXNorm 1012727) 3 tablets per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-end-of-life-exclusion.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-end-of-life-exclusion.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-risk-assessment.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-risk-assessment.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 7 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm one tablet per 1 day for 7 days. "Assessment of risk for opioid use procedure." Patients on opioid therapy should be evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently. Assessment of risk for opioid abuse (procedure) | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-seven-of-past-ten-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-seven-of-past-ten-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet. (RXNorm 1049502) one tablet per 1 day for 6 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (Rxnorm 0149502) one tablet per 1 day for 6 days.The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-six-of-past-ten-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-six-of-past-ten-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 30 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) one tablet per 1 day for 63 days. This will trigger the message "No evaluation for benefits and harms associated with opioid therapy has been performed for the patient in the past 3 months" Patients on opioid therapy should be evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-sixtythree-of-past-ninety-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-sixtythree-of-past-ninety-days.json) |
| Patient is 18 or older. Patient has been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per 1 day for 30 days. Patient has also been prescribed 12 HR Oxycodone Hydrochloride 10 MG Extended Release Oral Tablet (RXNorm 1049502) 1 tablet per 1 day for 62 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC07/request-example-rec-07-sixtytwo-of-past-ninety-days.json) | [Response JSON](responses/OpioidCDSREC07/response-example-rec-07-sixtytwo-of-past-ninety-days.json) |

