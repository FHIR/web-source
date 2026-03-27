# Recommendation #8 - Naloxone Consideration - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #8 - Naloxone Consideration**

## Recommendation #8 - Naloxone Consideration

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Assessing Risk and Addressing Potential Harms of Opioid Use ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#AssessingRiskandAddressingPotentialHarmsofOpioidUse)) |
| **Recommendation Description**: Before starting and periodically during continuation of opioid therapy, clinicians should evaluate risk for opioid-related harms and discuss risk with patients. Clinicians should work with patients to incorporate into the management plan strategies to mitigate risk, including offering naloxone. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation8)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
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
* Definition: Factors that increase risk for opioid-related harms are present?
  * Answer to Proceed: Yes
  * Details: See[Factors That Increase Risk For Opioid Related Harms sub-routine](subroutines.md#recommendation-8-factors-that-increase-risk-for-opioid-related-harms)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-08.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #8](PlanDefinition-opioidcds-08.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #8 |
| [Recommendation #8 - risk factors for opioid-related harms before and during opioid therapy](Library-OpioidCDSREC08.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #8 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 10 days for 30 days. This will trigger the message "Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present." Consider offering naloxone given following risk factor(s) for opioid overdose: Average MME (54.000000 'mg/d') >= 50 mg/day. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-mme-less-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. Patient has also been prescribed Temazepam 20 MG Oral Tablet (RXNorm 104693) 1 tablet per 1 day for 30 days. This will trigger the message “Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present. Consider offering naloxone given following risk factor(s) for opioid overdose: concurrent use of benzodiazepine. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-on-benzodiazepine.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-on-benzodiazepine.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. Patient has also been prescribed Naloxone Hydrochloride 0.02 MG/ML Injectable Solution (RXNorm 1191212) 1ml per 1 day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-on-naloxone.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-on-naloxone.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. This will trigger the message "Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present" Consider offering naloxone given following risk factor(s) for opioid overdose: history of alcohol or drug abuse. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-substance-abuse.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-substance-abuse.json) |

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
* Definition: Factors that increase risk for opioid-related harms are present?
  * Answer to Proceed: Yes
  * Details: See[Factors That Increase Risk For Opioid Related Harms sub-routine](subroutines.md#recommendation-8-factors-that-increase-risk-for-opioid-related-harms)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-08.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #8](PlanDefinition-opioidcds-08.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #8 |
| [Recommendation #8 - risk factors for opioid-related harms before and during opioid therapy](Library-OpioidCDSREC08.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #8 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 10 days for 30 days. This will trigger the message "Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present." Consider offering naloxone given following risk factor(s) for opioid overdose: Average MME (54.000000 'mg/d') >= 50 mg/day. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-mme-less-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. Patient has also been prescribed Temazepam 20 MG Oral Tablet (RXNorm 104693) 1 tablet per 1 day for 30 days. This will trigger the message “Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present. Consider offering naloxone given following risk factor(s) for opioid overdose: concurrent use of benzodiazepine. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-on-benzodiazepine.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-on-benzodiazepine.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. Patient has also been prescribed Naloxone Hydrochloride 0.02 MG/ML Injectable Solution (RXNorm 1191212) 1ml per 1 day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-on-naloxone.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-on-naloxone.json) |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) 1 patch per 12 days for 30 days. This will trigger the message "Incorporate into the management plan strategies to mitigate risk; including considering offering naloxone when factors that increase risk for opioid overdose are present" Consider offering naloxone given following risk factor(s) for opioid overdose: history of alcohol or drug abuse. | [Request JSON](requests/OpioidCDSREC08/request-example-rec-08-substance-abuse.json) | [Response JSON](responses/OpioidCDSREC08/response-example-rec-08-substance-abuse.json) |

