# Recommendations #4 and #5 - Lowest Effective Dose - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendations #4 and #5 - Lowest Effective Dose**

## Recommendations #4 and #5 - Lowest Effective Dose

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: When opioids are initiated for opioid-naïve patients with acute, subacute, or chronic pain, clinicians should prescribe the lowest effective dosage. If opioids are continued for subacute or chronic pain, clinicians should use caution when prescribing opioids at any dosage, should carefully evaluate individual benefits and risks when considering increasing dosage, and should avoid increasing dosage above levels likely to yield diminishing returns in benefits relative to risks to patients. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation4)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 3 |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.dispenseRequest.expectedSupplyDuration, MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Calculate MME for prescription + active opioids
  * Answer to Proceed: N/A
  * Details: Current calculation uses known order (prescription) data. Note - for as needed (PRN) medication, the daily dose assumes the maximum dose the patient may take any given day if a range is present. Ideally, dispensed data could be used to determine the medication dispensed to the patient
  * Data (Terminology) Requirement: 
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication.coding.code and MedicationRequest.dosageInstruction
* Definition: MME≥50?
  * Answer to Proceed: Yes
  * Details: MME result is ≥ 50
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-04-05.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #4 and #5](PlanDefinition-opioidcds-04-05.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline #5 |
| [Recommendations #4 and #5 - lowest effective dosage](Library-OpioidCDSREC04And05.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for evaluating whether a prescription exceeds the MME of 50 mg/day |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) one patch per day for 30 days. This will trigger the message "High risk for opioid overdose - taper now" It will then link to the "MME Conversation Tables" "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf" | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed Morphine Sulfate 10 MG (RXNorm 892495) one tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-less-than-fifty.json) |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.dispenseRequest.expectedSupplyDuration, MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Calculate MME for prescription + active opioids
  * Answer to Proceed: N/A
  * Details: Current calculation uses known order (prescription) data. Note - for as needed (PRN) medication, the daily dose assumes the maximum dose the patient may take any given day if a range is present. Ideally, dispensed data could be used to determine the medication dispensed to the patient
  * Data (Terminology) Requirement: 
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication.coding.code and MedicationRequest.dosageInstruction
* Definition: MME≥50?
  * Answer to Proceed: Yes
  * Details: MME result is ≥ 50
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-04-05.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #4 and #5](PlanDefinition-opioidcds-04-05.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline #5 |
| [Recommendations #4 and #5 - lowest effective dosage](Library-OpioidCDSREC04And05.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for evaluating whether a prescription exceeds the MME of 50 mg/day |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) one patch per day for 30 days. This will trigger the message "High risk for opioid overdose - taper now" It will then link to the "MME Conversation Tables" "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf" | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed Morphine Sulfate 10 MG (RXNorm 892495) one tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-less-than-fifty.json) |

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: For patients already receiving opioid therapy, clinicians should carefully weigh benefits and risks and exercise care when changing opioid dosage. If benefits outweigh risks of continued opioid therapy, clinicians should work closely with patients to optimize nonopioid therapies while continuing opioid therapy. If benefits do not outweigh risks of continued opioid therapy, clinicians should optimize other therapies and work closely with patients to gradually taper to lower dosages or, if warranted based on the individual circumstances of the patient, appropriately taper and discontinue opioids. Unless there are indications of a life-threatening issue such as warning signs of impending overdose (e.g., confusion, sedation, or slurred speech), opioid therapy should not be discontinued abruptly, and clinicians should not rapidly reduce opioid dosages from higher dosages. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation5)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): B |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 4 |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.dispenseRequest.expectedSupplyDuration, MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Calculate MME for prescription + active opioids
  * Answer to Proceed: N/A
  * Details: Current calculation uses known order (prescription) data. Note - for as needed (PRN) medication, the daily dose assumes the maximum dose the patient may take any given day if a range is present. Ideally, dispensed data could be used to determine the medication dispensed to the patient
  * Data (Terminology) Requirement: 
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication.coding.code and MedicationRequest.dosageInstruction
* Definition: MME≥50?
  * Answer to Proceed: Yes
  * Details: MME result is ≥ 50
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-04-05.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #4 and #5](PlanDefinition-opioidcds-04-05.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline #5 |
| [Recommendations #4 and #5 - lowest effective dosage](Library-OpioidCDSREC04And05.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for evaluating whether a prescription exceeds the MME of 50 mg/day |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) one patch per day for 30 days. This will trigger the message "High risk for opioid overdose - taper now" It will then link to the "MME Conversation Tables" "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf" | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed Morphine Sulfate 10 MG (RXNorm 892495) one tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-less-than-fifty.json) |

* When
* Then

* Definition: Order for opioid analgesic with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.dispenseRequest.expectedSupplyDuration, MedicationRequest.medication, and MedicationRequest.category
* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Calculate MME for prescription + active opioids
  * Answer to Proceed: N/A
  * Details: Current calculation uses known order (prescription) data. Note - for as needed (PRN) medication, the daily dose assumes the maximum dose the patient may take any given day if a range is present. Ideally, dispensed data could be used to determine the medication dispensed to the patient
  * Data (Terminology) Requirement: 
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication.coding.code and MedicationRequest.dosageInstruction
* Definition: MME≥50?
  * Answer to Proceed: Yes
  * Details: MME result is ≥ 50
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 

[Effective Data Requirements](PlanDefinition-opioidcds-04-05.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #4 and #5](PlanDefinition-opioidcds-04-05.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline #5 |
| [Recommendations #4 and #5 - lowest effective dosage](Library-OpioidCDSREC04And05.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for evaluating whether a prescription exceeds the MME of 50 mg/day |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has been prescribed 72 HR Fentanyl 0.075 MG/HR Transdermal System (RXNorm 197696) one patch per day for 30 days. This will trigger the message "High risk for opioid overdose - taper now" It will then link to the "MME Conversation Tables" "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf" | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-greater-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-greater-than-fifty.json) |
| Patient is 18 or older. Patient has been prescribed Morphine Sulfate 10 MG (RXNorm 892495) one tablet per day for 30 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC04_05/request-example-rec-04-05-mme-less-than-fifty.json) | [Response JSON](responses/OpioidCDSREC04_05/response-example-rec-04-05-mme-less-than-fifty.json) |

