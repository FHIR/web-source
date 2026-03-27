# Recommendation #12 - Evidence-based Treatment for Patients with Opioid Use Disorder - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Recommendation #12 - Evidence-based Treatment for Patients with Opioid Use Disorder**

## Recommendation #12 - Evidence-based Treatment for Patients with Opioid Use Disorder

| |
| :--- |
| **CDC Guideline**:[2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm) |
| **Recommendation Topic**: Selecting Opioids and Determining Opioid Dosages ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#SelectingOpioidsandDeterminingOpioidDosages)) |
| **Recommendation Description**: Clinicians should offer or arrange treatment with evidence-based medications to treat patients with opioid use disorder. Detoxification on its own, without medications for opioid use disorder, is not recommended for opioid use disorder because of increased risks for resuming drug use, overdose, and overdose death. ([Source](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#Recommendation12)) |
| [**Recommendation Category**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=evidence%20type%3A%201).-,Recommendation%20categories,-(on%20basis%20of): A |
| [**Evidence Type**](https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm#:~:text=specific%20clinical%20situations.-,Evidence%20types,-(on%20basis%20of): 1 |

* When
* Then

* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Presence of diagnosis of opioid misuse disorders in past 90 days?
  * Answer to Proceed: Yes
  * Details: Look for an active condition of opioid misuse disorder
  * Data (Terminology) Requirement: Opioid misuse disorders
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category, Condition.code, Condition.clinicalStatus, and Condition.recordedDate
* Definition: Active order for buprenorphine or methadone medications?
  * Answer to Proceed: No
  * Details: An active prescription (order) for buprenorphine or methadone medications
  * Data (Terminology) Requirement: Buprenorphine and methadone medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, MedicationRequest.status, and MedicationRequest.authoredOn

#### Rationale for Medication-Assisted Treatment

| | | |
| :--- | :--- | :--- |
| Presence of diagnosis of opioid misuse disorder | Existing*active*diagnosis of opioid misuse disorder | Opioid misuse disorders value set |
| Positive result from opioid misuse disorder evaluation tool | * Evidence of positive result from opioid misuse disorder evaluation tool
* Timing - within 90 days
 | * Value set for opioid misuse disorders evaluation tool(s) - LOINC pan
* Result options for such opioid misuse disorder evaluation tool(s) - perhaps LOINC normative responses that differentiate positive from negative results.
* Consider this element a FUTURE option
 |
| Not Receiving Evidence-Based Treatment for Opioid Use Disorder | * Evidence of an ordered medication for opioid misuse disorder treatment in the last 90 days 
* Status *active* or *completed*
 | Buprenorphine and methadone medications |

[Effective Data Requirements](PlanDefinition-opioidcds-12-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #12 (patient-view)](PlanDefinition-opioidcds-12-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #12 |
| [Recommendation #12 (patient-view) - Evidence-based Treatment for Patients with Opioid Use Disorder](Library-OpioidCDSREC12PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #12 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has a diagnosis of opioid misuse disorder in past 90 days. This will trigger the message "Recommend opioid agonist or partial agonist treatment with methadone maintenance therapy or buprenorphine and/or behavioral therapy". | [Request JSON](requests/OpioidCDSREC12PatientView/request-example-rec-12-patient-view-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC12PatientView/response-example-rec-12-patient-view-in-criteria-met.json) |
| Patient is 18 or older. Patient has a diagnosis of opioid misuse disorder and has been prescribed Buprenorphine 2 MG / Naloxone 0.5 MG Sublingual Film (1010600) in past 90 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC12PatientView/request-example-rec-12-patient-view-out-opioid-misuse.json) | [Response JSON](responses/OpioidCDSREC12PatientView/response-example-rec-12-patient-view-out-opioid-misuse.json) |

* When
* Then

* Definition: CDC 2022 General Inclusion Criteria met?
  * Answer to Proceed: Yes
  * Details: See[CDC 2022 General Inclusion Criteria sub-routine](subroutines.md#cdc-2022-general-inclusion-criteria)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Presence of diagnosis of opioid misuse disorders in past 90 days?
  * Answer to Proceed: Yes
  * Details: Look for an active condition of opioid misuse disorder
  * Data (Terminology) Requirement: Opioid misuse disorders
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category, Condition.code, Condition.clinicalStatus, and Condition.recordedDate
* Definition: Active order for buprenorphine or methadone medications?
  * Answer to Proceed: No
  * Details: An active prescription (order) for buprenorphine or methadone medications
  * Data (Terminology) Requirement: Buprenorphine and methadone medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, MedicationRequest.status, and MedicationRequest.authoredOn

#### Rationale for Medication-Assisted Treatment

| | | |
| :--- | :--- | :--- |
| Presence of diagnosis of opioid misuse disorder | Existing*active*diagnosis of opioid misuse disorder | Opioid misuse disorders value set |
| Positive result from opioid misuse disorder evaluation tool | * Evidence of positive result from opioid misuse disorder evaluation tool
* Timing - within 90 days
 | * Value set for opioid misuse disorders evaluation tool(s) - LOINC pan
* Result options for such opioid misuse disorder evaluation tool(s) - perhaps LOINC normative responses that differentiate positive from negative results.
* Consider this element a FUTURE option
 |
| Not Receiving Evidence-Based Treatment for Opioid Use Disorder | * Evidence of an ordered medication for opioid misuse disorder treatment in the last 90 days 
* Status *active* or *completed*
 | Buprenorphine and methadone medications |

[Effective Data Requirements](PlanDefinition-opioidcds-12-patient-view.md#effective-data-requirements)
 

The following artifacts formalize the description of the logic and behavior defined by this recommendation.

| | | |
| :--- | :--- | :--- |
| [2022 CDC Clinical Practice Guideline Recommendation #12 (patient-view)](PlanDefinition-opioidcds-12-patient-view.md) | [PlanDefinition](http://hl7.org/fhir/R4/plandefinition.html) | Event-Condition-Action rule that implements behavior for 2022 CDC Clinical Practice Guideline Recommendation #12 |
| [Recommendation #12 (patient-view) - Evidence-based Treatment for Patients with Opioid Use Disorder](Library-OpioidCDSREC12PatientView.md) | [Library](http://hl7.org/fhir/R4/library.html) | Defines the data requirements to support evaluation of recommendation #12 |
| [Opioid Terminology Management Knowledge-base Data (OMTK) Library](Library-OMTKData2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Opioid Terminology Management Knowledge-base (OMTK) Library](Library-OMTKLogicMK2020.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides logic for implementation of opioid management functionality including Milligram Morphine Equivalents (MME). |
| [Common Opioid Decision Support Logic](Library-OpioidCDSCommon.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common logic for the recommendations |
| [Common OpioidCDS Configuration Logic](Library-OpioidCDSCommonConfig.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common configuration logic for the recommendations |
| [Common OpioidCDS Routines Logic](Library-OpioidCDSRoutines.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that provides common routines logic for the recommendations |
| [FHIRHelpers Conversion Logic](Library-FHIRHelpers.md) | [Library](http://hl7.org/fhir/R4/library.html) | CQL Library that defines functions to convert between FHIR data types and CQL system-defined types, as well as functions to support FHIRPath implementation |

| | | |
| :--- | :--- | :--- |
| Patient is 18 or older. Patient has a diagnosis of opioid misuse disorder in past 90 days. This will trigger the message "Recommend opioid agonist or partial agonist treatment with methadone maintenance therapy or buprenorphine and/or behavioral therapy". | [Request JSON](requests/OpioidCDSREC12PatientView/request-example-rec-12-patient-view-in-criteria-met.json) | [Response JSON](responses/OpioidCDSREC12PatientView/response-example-rec-12-patient-view-in-criteria-met.json) |
| Patient is 18 or older. Patient has a diagnosis of opioid misuse disorder and has been prescribed Buprenorphine 2 MG / Naloxone 0.5 MG Sublingual Film (1010600) in past 90 days. The patient will be excluded and no message will be triggered - an empty set of cards will be returned. | [Request JSON](requests/OpioidCDSREC12PatientView/request-example-rec-12-patient-view-out-opioid-misuse.json) | [Response JSON](responses/OpioidCDSREC12PatientView/response-example-rec-12-patient-view-out-opioid-misuse.json) |

