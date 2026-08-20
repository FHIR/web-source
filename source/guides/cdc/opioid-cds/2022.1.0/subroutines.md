# 2022 CDC Clinical Practice Guideline - Subroutines - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **2022 CDC Clinical Practice Guideline - Subroutines**

## 2022 CDC Clinical Practice Guideline - Subroutines

### For Acute Pain

* Order for opioid analgesic with an expected supply duration less than or equal to 28 days or
* Order for opioid analgesic with therapy type of "acute"

* Definition: Order for opioid analgesics with ambulatory misuse potential with duration < 28 days
  * Answer to Proceed: Yes
  * Details: Look for an existing prescription (order) for opioid analgesics with ambulatory misuse potential with duration < 28 days
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, and MedicationRequest.dispenseRequest.expectedSupplyDuration
* Definition: Order for opioid analgesics with ambulatory misuse potential with therapy type of "acute"
  * Answer to Proceed: Yes
  * Details: Look for an existing prescription (order) for opioid analgesics with ambulatory misuse potential with therapy type of "acute"
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, and MedicationRequest.therapyType

For more information see the [acute pain documentation](acute-pain.md)

### For Subacute or Chronic Pain

* Order for opioid analgesic with an expected supply duration of 28 days or longer or
* Order in the past 90 days for opioid analgesic with therapy type of "continuous" or
* Order for opioid analgesic for 28 of the past 90 days including today and
* An active or pending order for opioid analgesic

* Definition: Order for opioid analgesic with expected supply duration ≥ 28 days, or
  * Answer to Proceed: Yes
  * Details: Order for opioid analgesics with ambulatory misuse potential with a supply duration ≥ 28 days• Subacute definition = order for opioid analgesic with ambulatory misuse potential with a supply duration of one to two months• Chronic pain definition = order for opioid analgesic with ambulatory misuse potential with a supply duration of ≥ two months
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication and MedicationRequest.dispenseRequest.expectedSupplyDuration or MedicationRequest.dispenseRequest.validityPeriod or MedicationRequest.dosageInstruction.timing.repeat.boundsPeriod
* Definition: A present or past order in the last 90 days for opioid analgesic with ambulatory misuse potential with courseOfTherapyType of continuous, or
  * Answer to Proceed: Yes
  * Details: • Note that[courseOfTherapyType](https://hl7.org/fhir/us/core/StructureDefinition-us-core-medicationrequest-definitions.html#MedicationRequest.courseOfTherapyType)is an element of the US Core MedicationRequest resource. In some EHRs, users can populate this element by setting a flag indicating that order is part of long-term care.
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication and MedicationRequest.authoredOn or MedicationRequest.dosageInstruction.timing.event and MedicationRequest.courseOfTherapyType
* Definition: Order for opioid analgesic with ambulatory misuse potential prescribed for 28 of the past 90 days from today, and an active or pending order for opioid analgesics with ambulatory misuse potential
  * Answer to Proceed: Yes
  * Details: • Reviews active and past medications for an indication of recent treatment for chronic pain.
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication and MedicationRequest.dispenseRequest.expectedSupplyDuration or MedicationRequest.dispenseRequest.validityPeriod or MedicationRequest.dosageInstruction.timing.repeat.boundsPeriod and MedicationRequest.status

For more information see the [subacute and/or chronic pain documentation](chronic-pain.md)

### CDC 2022 General Inclusion Criteria

* Patient is 18 or older
* Patient does not have evidence of sickle cell disease
* Patient does not have findings indicating limited life expectancy
* Patient does not have orders for therapies indicating end of life care
* Patient is not undergoing active cancer treatment:
* Patient does not have conditions likely terminal for opioid prescribing present

* Definition: Age < 18 years?
  * Answer to Proceed: No
  * Details: Calculate age from date of birth; exclude patients with age less than 18 years at the time of the prescription
  * Data (Terminology) Requirement: Date of birth
  * Profile: [Patient](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-patient)
  * Path: Patient.birthDate
* Definition: Evidence of sickle cell disease?
  * Answer to Proceed: No
  * Details: Look for patients with a diagnosis or problem list entry indicating sickle cell disease
  * Data (Terminology) Requirement: Sickle cell disease condition
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category, Condition.code, and Condition.clinicalStatus
* Definition: Limited life expectancy conditions present?
  * Answer to Proceed: No
  * Details: Look for documented findings consistent with those listed in the limited life expectancy value set (terminal illness, bad prognosis, pre-terminal)
  * Data (Terminology) Requirement: Limited life expectancy conditions
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category and Condition.code
* Definition: Order for therapies indicating end of life care in past 90 days?
  * Answer to Proceed: No
  * Details: Look for patients with an existing order for therapies indicating end of life care written within past 90 days
  * Data (Terminology) Requirement: Therapies indicating end of life care
  * Profile: [ServiceRequest](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-servicerequest)
  * Path: ServiceRequest.status, ServiceRequest.intent, ServiceRequest.authoredOn, and ServiceRequest.code
* Definition: Active cancer treatment?
  * Answer to Proceed: No
  * Details: See[Active Cancer Treatment sub-routine](subroutines.md#active-cancer-treatment)
  * Data (Terminology) Requirement: 
  * Profile: 
  * Path: 
* Definition: Conditions Likely Terminal for opioid prescribing present?
  * Answer to Proceed: No
  * Details: Look for patients with**active**conditions in the value set end-of-life-conditions
  * Data (Terminology) Requirement: Conditions likely terminal for opioid prescribing
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category, Condition.code, and Condition.clinicalStatus

### Active Cancer Treatment

* Patient problem list includes CDC malignant cancer condition, or
* Patient has had at least 2 office visits within the past 12 months with a CDC malignant cancer condition diagnosis

* Definition: Patient problem list includes CDC malignant cancer condition?
  * Answer to Proceed: No
  * Details: • An active CDC malignant cancer condition entry is present within the Patient's problem list
  * Data (Terminology) Requirement: CDC malignant cancer conditions
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)
  * Path: Condition.category and Condition.code
* Definition: Two office visits within the past 12 months?
  * Answer to Proceed: No
  * Details: Look for a minimum of two distinct encounters within 12 months of the date of the current visit for which each of the following is true:• the encounter diagnosis (primary or secondary or co-morbidity diagnosis) is listed in the CDC Malignant Cancer Conditions value set
  * Data (Terminology) Requirement: Office Visit
  * Profile: [Encounter](http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter)
  * Path: Encounter.class and Encounter.period.start
* Definition: Office visits including CDC malignant cancer condition?
  * Answer to Proceed: No
  * Details: • The encounter diagnosis (primary or secondary or co-morbidity diagnosis) is listed in the CDC Malignant Cancer Conditions value set
  * Data (Terminology) Requirement: CDC malignant cancer conditions
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)and[Encounter](http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter)
  * Path: Condition.category, Condition.code, and Encounter.diagnosis

### Opioid Naive

* No indication of opioid use in the past 90 days from a prescription, self report (for future implementation), or a dispensing event (for future implementation)

An evaluation to determine if a patient is opioid naive is not possible when a EHR system does not support queries for past medications by date range.

* Definition: Opioid analgesics with ambulatory misuse potential prescription in past 90 days excluding the last 24 hours?
  * Answer to Proceed: No
  * Details: Look for an existing prescription (order) for opioid that is in the value set for opioid with ambulatorymisuse potential authored within the past 90 days (excluding the last 24 hours)
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, and MedicationRequest.authoredOn
* Definition: Opioid analgesics with ambulatory misuse potential reported as being taken excluding the last 24 hours?*
  * Answer to Proceed: No
  * Details: Look for evidence of active medication on the medication list that is in the value set for opioid withambulatory care misuse potential (excluding the last 24 hours)
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationStatement](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-medicationstatement)
  * Path: MedicationStatement.medication, MedicationStatement.status, and MedicationStatement.effective
* Definition: Opioid analgesics with ambulatory misuse potential dispensing event in past 90 days excluding the last 24 hours?*
  * Answer to Proceed: No
  * Details: Look for evidence of a dispensing event for medication that is in the value set for opioid with ambulatoryuse potential occurring within the past 90 days (excluding the last 24 hours)
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationDispense](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-medicationdispense)
  * Path: MedicationDispense.medication, MedicationDispense.status, and MedicationDispense.whenHandedOver
* Definition: * Future consideration: Current algorithm addresses only orders (prescriptions).1 - Implement one global configuration point to set all past medication queries at each particular site: “Can the implementing EHR support queries for past medications by date range? Yes or No”. An evaluation to determine if a patient is opioid naive is not possible when a EHR system does not support queries for past medications by date range.2 - orders use RxNorm, but medication lists and dispensed medication will require an NDC value set and/or local mapping of NDC to RxNorm to enable this element

### Recommendation-specific Subroutines

#### Recommendation 8 Factors that Increase Risk for Opioid Related Harms

* Currently receiving benzodiazepine or other central nervous system depressant medications, or
* High opioid dosages (MME/day >= 50), or
* History of substance use disorder, or
* Diagnosed with sleep-disordered breathing condition

* Definition: No evidence of current naloxone medications?
  * Answer to Proceed: Yes
  * Details: Find evidence of naloxone medication prescription (an active medication order for naloxone)
  * Data (Terminology) Requirement: Naloxone medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.authoredOn
* Definition: Currently receiving benzodiazepine or other central nervous system depressant medications?
  * Answer to Proceed: Yes
  * Details: Find evidence of benzodiazepine prescription (an active medication order for benzodiazepine or other central nervous system depressant medications)
  * Data (Terminology) Requirement: Benzodiazepine or other central nervous system depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, and MedicationRequest.authoredOn
* Definition: MME (morphine milligram equivalents > 50)
  * Answer to Proceed: Yes
  * Details: Determine MME from existing active prescriptions ([recommendation 4 & 5](recommendation-04-05.md)), or future scope; dispensed medications, or patient-reported medications
  * Data (Terminology) Requirement: 
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, MedicationRequest.category, MedicationRequest.authoredOn, and MedicationRequest.dosageInstruction
* Definition: History of conditions documenting substance use disorder?
  * Answer to Proceed: Yes
  * Details: Find evidence of conditions documenting substance use in the problem list or past medical history, including history of overdose
  * Data (Terminology) Requirement: Conditions documenting substance misuse disorder
  * Profile: [Condition](http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-condition)[Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)
  * Path: Condition.code, Condition.category, and Procedure.code
* Definition: Diagnosis with a sleep-disordered breathing condition?
  * Answer to Proceed: Yes
  * Details: Find documentation of an active sleep-disordered breathing condition
  * Data (Terminology) Requirement: Conditions documenting sleep-disordered breathing
  * Profile: TBD
  * Path: TBD

#### Recommendation 9 PDMP Review in Past 90 Days

* PDMP review procedure has been performed in the past 90 days or
* PDMP data has been reviewed in the past 90 days

* Definition: PDMP review procedure in past 90 days?
  * Answer to Proceed: No
  * Details: Look for evidence of a prescription drug monitoring program (PDMP) review procedure (may need to modify time interval for review based on local practice / regulation) [Evidence for the PDMP review procedure may potentially originate in a PDMP Smart App that provides the code once PDMP review procedure has been completed]
  * Data (Terminology) Requirement: PDMP review procedure
  * Profile: [Procedure](http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure)
  * Path: Procedure.code, Procedure.status, and Procedure.performed
* Definition: PDMP data reviewed finding in past 90 days?
  * Answer to Proceed: No
  * Details: Documentation (i.e., a finding that PDMP review has occurred) in last 90 days (may need to modify time interval for review based on local practice / regulation)
  * Data (Terminology) Requirement: PDMP data reviewed finding
  * Profile: [Observation](http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-observation)
  * Path: Observation.status, Observation.code, and Observation.effective

#### Recommendation 10 Urine Toxicology Screening

* Opioid urine toxicology screening in past year, or
* Nonopioid urine toxicology screening in past year 

* Definition: Opioid urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: An opioid urine toxicology screening test performed within the past year
  * Data (Terminology) Requirement: Opioid urine toxicology screening
  * Profile: [Observation](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)
  * Path: Observation.category, Observation.code, Observation.effective, and Observation.status
* Definition: Nonopioid urine toxicology screening in past year?
  * Answer to Proceed: Yes
  * Details: A nonopioid urine toxicology screening test performed within the past year
  * Data (Terminology) Requirement: Non-opioid urine toxicology screening
  * Profile: [Observation](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)
  * Path: Observation.category, Observation.code, Observation.effective, and Observation.status

#### Recommendation 10 Possible Unexpected Results

* Positive result for a substance of potential interest in the past year or
* Negative result for a prescribable substance in the past year and
* An order for that substance exists in the 30 days prior to the test or
* Positive result for a prescribable\n substance in the past year and
* No order for that substance exists\n in the 30 days prior to the test

* Definition: Positive result for a substance of potential interest in the past year?
  * Answer to Proceed: Yes
  * Details: Urine toxicology screen result contains a substance of potential interest
  * Data (Terminology) Requirement: Cocaine urine toxicology test resultHeroin urine toxicology test resultPhencyclidine (PCP) urine toxicology test result
  * Profile: [Observation](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)
  * Path: Observation.category, Observation.code, and Observation.value
* Definition: Possible unexpected negative result for prescribable substance?
  * Answer to Proceed: Yes
  * Details: Negative result for a prescribable substance in the past year and an order for that substance exists in the 30 days prior to the test
  * Data (Terminology) Requirement: Amphetamine urine toxicology test resultBarbiturate urine toxicology test resultBenzodiazepine urine toxicology test resultBuprenorphine urine toxicology test resultFentanyl urine toxicology test resultMethadone urine toxicology test resultOpiate urine toxicology test resultOxycodone urine toxicology test resultAmphetamine medicationBarbiturate medicationBenzodiazepine medicationBuprenorphine medicationFentanyl medicationMethadone medicationOpiate medicationOxycodone medication
  * Profile: [Observation](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)[MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: Observation.category, Observation.code, and Observation.value, MedicationRequest.status, MedicationRequest.authoredOn, and MedicationRequest.medication
* Definition: Possible unexpected positive result for prescribable substance?
  * Answer to Proceed: Yes
  * Details: Positive result for a prescribable substance in the past year and no order for that substance exists in the 30 days prior to the test
  * Data (Terminology) Requirement: Amphetamine urine toxicology test resultBarbiturate urine toxicology test resultBenzodiazepine urine toxicology test resultBuprenorphine urine toxicology test resultFentanyl urine toxicology test resultMethadone urine toxicology test resultOpiate urine toxicology test resultOxycodone urine toxicology test resultAmphetamine medicationBarbiturate medicationBenzodiazepine medicationBuprenorphine medicationFentanyl medicationMethadone medicationOpiate medicationOxycodone medication
  * Profile: [Observation](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)[MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: Observation.category, Observation.code, and Observation.valueMedicationRequest.status, MedicationRequest.authoredOn, and MedicationRequest.medication

#### Recommendation 11 Opioid Analgesic or Benzodiazepine or CNS Depressant Order

* Provider is prescribing an opioid analgesic with ambulatory misuse potential in the outpatient setting or
* Provider is prescribing a benzodiazepine or
* Provider is prescribing a central nervous system depressant medication

* Definition: Order for opioid analgesics with ambulatory misuse potential?
  * Answer to Proceed: Yes
  * Details: Trigger based on a new prescription (order) for opioid analgesics with ambulatory misuse potential - ideally the prescription should be selected prior to being committed to the system
  * Data (Terminology) Requirement: Opioid analgesics with ambulatory misuse potential
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Order for benzodiazepine medications?
  * Answer to Proceed: Yes
  * Details: Trigger based on a new prescription (order) for benzodiazepines in the relevant value sets - ideally the prescription should be selected prior to being committed to the system
  * Data (Terminology) Requirement: Benzodiazepine medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category
* Definition: Order for central nervous system depressant medications?
  * Answer to Proceed: Yes
  * Details: Trigger based on a new prescription (order) for central nervous system depressant in the relevant value sets - ideally the prescription should be selected prior to being committed to the system
  * Data (Terminology) Requirement: CNS depressant medications
  * Profile: [MedicationRequest](http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest)
  * Path: MedicationRequest.medication, and MedicationRequest.category

