# Recommendation #10 - Urine Drug Testing - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #10 - Urine Drug Testing**

## Recommendation #10 - Urine Drug Testing

**Note that this recommendation is represented in multiple variations where each variation corresponds to the CDS Hook by which it was meant to be triggered/evaluated. Use the tabs below to navigate to each variation.**

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: When prescribing opioids for subacute or chronic pain, clinicians should consider the benefits and risks of toxicology testing to assess for prescribed medications as well as other prescribed and nonprescribed controlled substances. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation10)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then
* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: See[Urine Toxicology Screening in Past Year sub-routine](subroutines.md#recommendation-10-urine-toxicology-screening)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Possible unexpected results found in toxicology screening?
  * Answer to Proceed: Yes
  * Details: See[Possible Unexpected Results in Toxicology Screening sub-routine](subroutines.md#recommendation-10-possible-unexpected-results)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-10-order-sign.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #10 Order Sign](PlanDefinition-opioidcds-10-order-sign.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #10 Order Sign |
| [Recommendation #10 Order Sign - urine drug testing when prescribing opioids for subacute or chronic pain](Library-OpioidCDSREC10OrderSign.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #10 Order Sign |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days. This triggers the message that urine drug screening is recommended with the following three feedback options:i. Perform the screeningii. Indicate that the prescription is not for subacute or chronic pain management and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months. | [Request JSON](requests/OpioidCDSREC10OrderSign/request-example-rec-10-order-sign-no-screenings.json) | [Response JSON](responses/OpioidCDSREC10OrderSign/response-example-rec-10-order-sign-no-screenings.json) |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696) and a urine screening with the prescence of Phencyclidine is present. This triggers the message "Positive Cocaine or PCP in Urine Screening" with a note explaining this may be a false positive or indicate recreational or addictive use. | [Request JSON](requests/OpioidCDSREC10OrderSign/request-example-rec-10-order-sign-illicit-drugs.json) | [Response JSON](responses/OpioidCDSREC10OrderSign/response-example-rec-10-order-sign-illicit-drugs.json) |

* When
* Then
* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: See[Urine Toxicology Screening in Past Year sub-routine](subroutines.md#recommendation-10-urine-toxicology-screening)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Possible unexpected results found in toxicology screening?
  * Answer to Proceed: Yes
  * Details: See[Possible Unexpected Results in Toxicology Screening sub-routine](subroutines.md#recommendation-10-possible-unexpected-results)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-10-order-sign.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #10 Order Sign](PlanDefinition-opioidcds-10-order-sign.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #10 Order Sign |
| [Recommendation #10 Order Sign - urine drug testing when prescribing opioids for subacute or chronic pain](Library-OpioidCDSREC10OrderSign.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #10 Order Sign |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days. This triggers the message that urine drug screening is recommended with the following three feedback options:i. Perform the screeningii. Indicate that the prescription is not for subacute or chronic pain management and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months. | [Request JSON](requests/OpioidCDSREC10OrderSign/request-example-rec-10-order-sign-no-screenings.json) | [Response JSON](responses/OpioidCDSREC10OrderSign/response-example-rec-10-order-sign-no-screenings.json) |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696) and a urine screening with the prescence of Phencyclidine is present. This triggers the message "Positive Cocaine or PCP in Urine Screening" with a note explaining this may be a false positive or indicate recreational or addictive use. | [Request JSON](requests/OpioidCDSREC10OrderSign/request-example-rec-10-order-sign-illicit-drugs.json) | [Response JSON](responses/OpioidCDSREC10OrderSign/response-example-rec-10-order-sign-illicit-drugs.json) |

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: When prescribing opioids for subacute or chronic pain, clinicians should consider the benefits and risks of toxicology testing to assess for prescribed medications as well as other prescribed and nonprescribed controlled substances. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation10)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then
* When
* Then

* Definition: There exists an active opioid analgesic with ambulatory misuse potential order in the outpatient setting
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: See[Urine Toxicology Screening in Past Year sub-routine](subroutines.md#recommendation-10-urine-toxicology-screening)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Possible unexpected results found in toxicology screening?
  * Answer to Proceed: Yes
  * Details: See[Possible Unexpected Results in Toxicology Screening sub-routine](subroutines.md#recommendation-10-possible-unexpected-results)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-10-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #10 Patient View](PlanDefinition-opioidcds-10-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #10 Patient View |
| [Recommendation #10 Patient View - urine drug testing when prescribing opioids for subacute or chronic pain](Library-OpioidCDSREC10PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #10 Patient View |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days.This triggers the message that urine drug screening is recommended with the following three feedback options:i. Perform the screeningii. Indicate that the prescription is not for subacute or chronic pain management and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months. | [Request JSON](requests/OpioidCDSREC10PatientView/request-example-rec-10-patient-view-no-screenings.json) | [Response JSON](responses/OpioidCDSREC10PatientView/response-example-rec-10-patient-view-no-screenings.json) |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days. Patient has condition indicating end of life (Carcinoma of endocrine pancreas). The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC10PatientView/request-example-rec-10-patient-view-end-of-life-med-exclusion.json) | [Response JSON](responses/OpioidCDSREC10PatientView/response-example-rec-10-patient-view-end-of-life-med-exclusion.json) |

* When
* Then
* When
* Then

* Definition: There exists an active opioid analgesic with ambulatory misuse potential order in the outpatient setting
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
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
* Definition: Urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: See[Urine Toxicology Screening in Past Year sub-routine](subroutines.md#recommendation-10-urine-toxicology-screening)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Possible unexpected results found in toxicology screening?
  * Answer to Proceed: Yes
  * Details: See[Possible Unexpected Results in Toxicology Screening sub-routine](subroutines.md#recommendation-10-possible-unexpected-results)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-10-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #10 Patient View](PlanDefinition-opioidcds-10-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #10 Patient View |
| [Recommendation #10 Patient View - urine drug testing when prescribing opioids for subacute or chronic pain](Library-OpioidCDSREC10PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #10 Patient View |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days.This triggers the message that urine drug screening is recommended with the following three feedback options:i. Perform the screeningii. Indicate that the prescription is not for subacute or chronic pain management and snooze for 3 monthsiii. Indicate that it is not applicable, log a comment and snooze for 3 months. | [Request JSON](requests/OpioidCDSREC10PatientView/request-example-rec-10-patient-view-no-screenings.json) | [Response JSON](responses/OpioidCDSREC10PatientView/response-example-rec-10-patient-view-no-screenings.json) |
| Patient 18 or older. Patient is being prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RxNorm code 197696), once every 12 days for 30 days. Patient has condition indicating end of life (Carcinoma of endocrine pancreas). The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC10PatientView/request-example-rec-10-patient-view-end-of-life-med-exclusion.json) | [Response JSON](responses/OpioidCDSREC10PatientView/response-example-rec-10-patient-view-end-of-life-med-exclusion.json) |

