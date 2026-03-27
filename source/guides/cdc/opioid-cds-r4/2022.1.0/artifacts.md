# Artifacts Summary - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* **Artifacts Summary**

## Artifacts Summary

This page provides a list of the FHIR artifacts defined as part of this implementation guide.

### Common Logic Libraries 

| | |
| :--- | :--- |
| [HelloWorld](Library-HelloWorld.md) | HelloWorld Library |
| [HelloWorldPatientView](Library-HelloWorldPatientView.md) | HelloWorldPatientView Library |
| [CDCMMEClinicalConversionFactors](Library-CDCMMEClinicalConversionFactors.md) | CDCMMEClinicalConversionFactors Library |
| [OpioidCDSRoutines](Library-OpioidCDSRoutines.md) | Common Routines Library |
| [OpioidCDSCommon](Library-OpioidCDSCommon.md) | Common Logic Library |
| [OpioidCDSCommonConfig](Library-OpioidCDSCommonConfig.md) | Common Configuration Library |
| [OpioidLogicMK2020](Library-OMTKLogicMK2020.md) | OMTK Logic MK (2020) Library |
| [OpioidData2020](Library-OMTKData2020.md) | OMTK Data (2020) Library |
| [FHIRHelpers](Library-FHIRHelpers.md) | FHIR Helpers Library |
| [FHIRModelInfo](Library-FHIR-ModelInfo.md) | FHIR ModelInfo Library |

### Recommendation Logic Libraries 

| | |
| :--- | :--- |
| [OpioidCDSREC10CommonLibrary](Library-OpioidCDSREC10Common.md) | Common Logic Library for Recommendation #10 - Urine Drug Testing |
| [OpioidCDSREC01Library](Library-OpioidCDSREC01.md) | Logic Library for Recommendation #1 (order-sign) - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration |
| [OpioidCDSREC02Library](Library-OpioidCDSREC02.md) | Logic Library for Recommendation #2 (order-sign) - Opioid Therapy Goals Discussion |
| [OpioidCDSREC03Library](Library-OpioidCDSREC03.md) | Logic Library for Recommendation #3 (order-sign) - Opioid Immediate Release Form When Starting Opioid Therapy |
| [OpioidCDSREC04And05Library](Library-OpioidCDSREC04And05.md) | Logic Library for Recommendations #4 and #5 (order-sign) - Lowest Effective Dose |
| [OpioidCDSREC06Library](Library-OpioidCDSREC06.md) | Logic Library for Recommendation #6 (order-sign) - Prescribe Lowest Effective Dose and Duration |
| [OpioidCDSREC07Library](Library-OpioidCDSREC07.md) | Logic Library for Recommendation #7 (order-sign) - Opioid Therapy Risk Assessment |
| [OpioidCDSREC08Library](Library-OpioidCDSREC08.md) | Logic Library for Recommendation #8 (order-sign) - Naloxone Consideration |
| [OpioidCDSREC09Library](Library-OpioidCDSREC09.md) | Logic Library for Recommendation #9 (order-sign) - Consider Patient’s History of Controlled Substance Prescriptions |
| [OpioidCDSREC10OrderSignLibrary](Library-OpioidCDSREC10OrderSign.md) | Logic Library for Recommendation #10 (order-sign) - Urine Drug Testing |
| [OpioidCDSREC10PatientViewLibrary](Library-OpioidCDSREC10PatientView.md) | Logic Library for Recommendation #10 (patient-view) - Urine Drug Testing |
| [OpioidCDSREC11OrderSelectLibrary](Library-OpioidCDSREC11OrderSelect.md) | Logic Library for Recommendation #11 (order-select) - Concurrent Use of Opioids and Benzodiazepines |
| [OpioidCDSREC11PatientViewLibrary](Library-OpioidCDSREC11PatientView.md) | Logic Library for Recommendation #11 (patient-view) - Concurrent Use of Opioids and Benzodiazepines |
| [OpioidCDSREC12PatientViewLibrary](Library-OpioidCDSREC12PatientView.md) | Logic Library for Recommendation #12 (patient-view) - Evidence-based Treatment for Patients with Opioid Use Disorder |

### ActivityDefinitions 

| | |
| :--- | :--- |
| [OpioidRiskAssessmentActivityDefinition](ActivityDefinition-opioidcds-risk-assessment-request.md) | An ActivityDefinition for recommendation of risk assessment |
| [OpioidUrineScreeningActivityDefinition](ActivityDefinition-opioidcds-urine-screening-request.md) | An ActivityDefinition for recommendation of urine screening |
| [OpioidUrineScreeningActivityDefinition](ActivityDefinition-opioidcds-urine-screening-request-1.md) | An ActivityDefinition for recommendation of urine screening |
| [OpioidUrineScreeningActivityDefinition](ActivityDefinition-opioidcds-urine-screening-request-2.md) | An ActivityDefinition for recommendation of urine screening |

### Knowledge Artifacts: Plan Definitions 

These define workflows, rules, strategies, or protocols as part of content in this implementation guide.

| | |
| :--- | :--- |
| [Recommendation #1 - Nonpharmacologic and Nonopioid Pharmacologic Therapy Consideration](PlanDefinition-opioidcds-01.md) | Nonopioid therapies are at least as effective as opioids for many common types of acute pain. Clinicians should maximize use of nonpharmacologic and nonopioid pharmacologic therapies as appropriate for the specific condition and patient and only consider opioid therapy for acute pain if benefits are anticipated to outweigh risks to the patient. Before prescribing opioid therapy for acute pain, clinicians should discuss with patients the realistic benefits and known risks of opioid therapy. |
| [Recommendation #10 - Urine Drug Testing (order-sign)](PlanDefinition-opioidcds-10-order-sign.md) | When prescribing opioids for subacute or chronic pain, clinicians should consider the benefits and risks of toxicology testing to assess for prescribed medications as well as other prescribed and nonprescribed controlled substances. |
| [Recommendation #10 - Urine Drug Testing (patient-view)](PlanDefinition-opioidcds-10-patient-view.md) | When prescribing opioids for subacute or chronic pain, clinicians should consider the benefits and risks of toxicology testing to assess for prescribed medications as well as other prescribed and nonprescribed controlled substances. |
| [Recommendation #11 - Concurrent Use of Opioids and Benzodiazepines (order-select)](PlanDefinition-opioidcds-11-order-select.md) | Clinicians should use particular caution when prescribing opioid pain medication and benzodiazepines concurrently and consider whether benefits outweigh risks of concurrent prescribing of opioids and other central nervous system depressants. |
| [Recommendation #11 - Concurrent Use of Opioids and Benzodiazepines (patient-view)](PlanDefinition-opioidcds-11-patient-view.md) | Clinicians should use particular caution when prescribing opioid pain medication and benzodiazepines concurrently and consider whether benefits outweigh risks of concurrent prescribing of opioids and other central nervous system depressants. |
| [Recommendation #12 - Evidence-based Treatment for Patients with Opioid Use Disorder (patient-view)](PlanDefinition-opioidcds-12-patient-view.md) | Clinicians should offer or arrange treatment with evidence-based medications to treat patients with opioid use disorder. Detoxification on its own, without medications for opioid use disorder, is not recommended for opioid use disorder because of increased risks for resuming drug use, overdose, and overdose death. |
| [Recommendation #2 - Opioid Therapy Goals Discussion](PlanDefinition-opioidcds-02.md) | Nonopioid therapies are preferred for subacute and chronic pain. Clinicians should maximize use of nonpharmacologic and nonopioid pharmacologic therapies as appropriate for the specific condition and patient and only consider initiating opioid therapy if expected benefits for pain and function are anticipated to outweigh risks to the patient. Before starting opioid therapy for subacute or chronic pain, clinicians should discuss with patients the realistic benefits and known risks of opioid therapy, should work with patients to establish treatment goals for pain and function, and should consider how opioid therapy will be discontinued if benefits do not outweigh risks. |
| [Recommendation #3 - Opioid Immediate Release Form When Starting Opioid Therapy](PlanDefinition-opioidcds-03.md) | When starting opioid therapy for acute, subacute, or chronic pain, clinicians should prescribe immediate-release opioids instead of extended-release and long-acting (ER/LA) opioids. |
| [Recommendation #6 - Prescribe Lowest Effective Dose and Duration](PlanDefinition-opioidcds-06.md) | When opioids are needed for acute pain, clinicians should prescribe no greater quantity than needed for the expected duration of pain severe enough to require opioids. |
| [Recommendation #7 - Opioid Therapy Risk Assessment](PlanDefinition-opioidcds-07.md) | Clinicians should evaluate benefits and risks with patients within 1-4 weeks of starting opioid therapy for subacute or chronic pain or of dosage escalation. Clinicians should regularly reevaluate benefits and risks of continued opioid therapy with patients. |
| [Recommendation #8 - Naloxone Consideration](PlanDefinition-opioidcds-08.md) | Before starting and periodically during continuation of opioid therapy, clinicians should evaluate risk for opioid-related harms and discuss risk with patients. Clinicians should work with patients to incorporate into the management plan strategies to mitigate risk, including offering naloxone. |
| [Recommendation #9 - Consider Patient's History of Controlled Substance Prescriptions](PlanDefinition-opioidcds-09.md) | When prescribing initial opioid therapy for acute, subacute, or chronic pain, and periodically during opioid therapy for chronic pain, clinicians should review the patient’s history of controlled substance prescriptions using state prescription drug monitoring program (PDMP) data to determine whether the patient is receiving opioid dosages or combinations that put the patient at high risk for overdose. |
| [Recommendations #4 and #5 - Lowest Effective Dose](PlanDefinition-opioidcds-04-05.md) | Recommendation 4: When opioids are initiated for opioid-naïve patients with acute, subacute, or chronic pain, clinicians should prescribe the lowest effective dosage. If opioids are continued for subacute or chronic pain, clinicians should use caution when prescribing opioids at any dosage, should carefully evaluate individual benefits and risks when considering increasing dosage, and should avoid increasing dosage above levels likely to yield diminishing returns in benefits relative to risks to patients. Recommendation 5: For patients already receiving opioid therapy, clinicians should carefully weigh benefits and risks and exercise care when changing opioid dosage. If benefits outweigh risks of continued opioid therapy, clinicians should work closely with patients to optimize nonopioid therapies while continuing opioid therapy. If benefits do not outweigh risks of continued opioid therapy, clinicians should optimize other therapies and work closely with patients to gradually taper to lower dosages or, if warranted based on the individual circumstances of the patient, appropriately taper and discontinue opioids. Unless there are indications of a life-threatening issue such as warning signs of impending overdose (e.g., confusion, sedation, or slurred speech), opioid therapy should not be discontinued abruptly, and clinicians should not rapidly reduce opioid dosages from higher dosages. |

### Knowledge Artifacts: Libraries 

These define logic, asset collections and other libraries as part of content in this implementation guide.

| | |
| :--- | :--- |
| [Morphine Milligram Equivalent (MME) Calculator for FHIR R4](Library-MMECalculator.md) | This library contains logic to surface the MME calculation functionality provided by the OMTKLogic library by extracting appropriate information from FHIR R4 MedicationRequest resource. |
| [Morphine Milligram Equivalent (MME) Conversion Factors for FHIR R4](Library-ConversionFactors.md) | This library contains logic to expose configurable conversion factors for the MME calculation functionality provided by the OMTKLogic library. |
| [Opioid Management Terminology Knowledge Data](Library-OMTKData.md) | This library contains drug ingredient data for opioid ingredients of combinations drugs as determined using the [RxNav](https://rxnav.nlm.nih.gov/) API. The content was produced using the process described [here](http://build.fhir.org/ig/cqframework/opioid-cds-r4/service-documentation.html#solution-component-1-medication-and-terminology-knowledge-base). |
| [Opioid Management Terminology Knowledge Logic](Library-OMTKLogic.md) | This library provides functionality for calculating Morphine Milligram Equivalents (MME) for opioid medications, as described in the CDC Opioid Prescribing Guideline. |

### Structures: Resource Profiles 

These define constraints on FHIR resources for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [CDC_ValueSet](StructureDefinition-cdc-valueset.md) | Profile of ValueSet for use with 2022 CDC Clinical Practice Guideline |

### Structures: Extension Definitions 

These define constraints on FHIR data types for systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [CDC 2022 Opioid Guidance Clinical Focus Extension](StructureDefinition-cdc-valueset-clinical-focus.md) | Describes the clinical focus for the ValueSet. |
| [CDC 2022 Opioid Guidance Data Element Extension](StructureDefinition-cdc-valueset-dataelement-scope.md) | Describes the data element scope for the ValueSet. |
| [CDC 2022 Opioid Guidance Inclusion Criteria Extension](StructureDefinition-cdc-valueset-inclusion-criteria.md) | Describes the clinical focus for the ValueSet. |
| [CDC 2022 Opioid Guidance exclusion Criteria Extension](StructureDefinition-cdc-valueset-exclusion-criteria.md) | Describes the clinical focus for the ValueSet. |
| [DataDateRollerExtension](StructureDefinition-dataDateRoller.md) | Declares the DateLastUpdated and Frequency arguments to be used by the Data Date Roller for maintaining/rolling test data dates to keep them from going stale. |

### Terminology: Value Sets 

These define sets of codes used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [All urine drug screening tests](ValueSet-all-urine-drug-screening-tests.md) | Urine tests to all opioid and non-opioid drugs |
| [Amphetamine class medications](ValueSet-amphetamines-class-medications.md) | Amphetamine class medications based upon the mapping of SNOMED CT drug class to ingredient then linked to RXNorm |
| [Amphetamine-class drugs and metabolite urine tests](ValueSet-amphetamine-urine-drug-screening-tests.md) | Urine tests, both quantitative and qualitative, including confirmatory, that detect Amphetamine-class drugs and metabolites |
| [Barbiturate Medications](ValueSet-barbiturate-medications.md) | All Barbiturate medications |
| [Barbiturate urine drug screening tests](ValueSet-barbiturate-urine-drug-screening-tests.md) | Presumed general urine tests for barbiturates that are not specific to a particular substance. |
| [Benzodiazepine medications](ValueSet-benzodiazepine-medications.md) | All benzodiazepine clinical drugs |
| [Benzodiazepine urine drug screening tests](ValueSet-benzodiazepine-urine-drug-screening-tests.md) | Presumed general urine tests for benzodiazepines that are not specific to a particular substance. |
| [Buprenorphine Medications](ValueSet-buprenorphine-medications.md) | All Buprenorphine medications |
| [Buprenorphine and Methadone medications](ValueSet-buprenorphine-and-methadone-medications.md) | All Buprenorphine and Methadone medications |
| [Buprenorphine urine drug screening tests](ValueSet-buprenorphine-urine-drug-screening-tests.md) | Presumed general urine tests for buprenorphine. |
| [CDC malignant cancer conditions](ValueSet-cdc-malignant-cancer-conditions.md) | All neoplastic and malignant conditions, including pain due to neoplasm. |
| [CNS depressant medications](ValueSet-cns-depressant-medications.md) | Medications considered to have an ingredient considered to be a CNS depressant, some of which may be mild. Removed from this set are cough medications and bowl transit modifiers. |
| [Cannabinoid class urine drug screening](ValueSet-cannabinoid-urine-drug-screening-tests.md) | Cannabinoid, including synthetic and THC, urine tests |
| [Cocaine urine drug screening tests](ValueSet-cocaine-urine-drug-screening-tests.md) | Urine tests for cocaine and cocaine metabolites |
| [Condition Clinical Status Active](ValueSet-condition-clinical-status-active.md) | The subject is currently experiencing the condition or situation, there is evidence of the condition or situation, or considered to be a significant risk. |
| [Conditions documenting substance misuse](ValueSet-conditions-documenting-substance-misuse.md) | Any finding or condition that indicate problematic misuse of a substance other than tobacco or laxatives, including “history of” conditions. |
| [Conditions likely terminal for opioid prescribing](ValueSet-conditions-likely-terminal-for-opioid-prescribing.md) | Conditions that generally are thought to have terminal prognosis |
| [Encounter Diagnosis Condition Category](ValueSet-condition-encounter-diagnosis-category.md) | Encounter Diagnosis condition category. |
| [Extended release opioid with ambulatory misuse potential](ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.md) | All opioid clinical drugs except those restricted to surgical use only, and that are in an extended release dose form code |
| [Fentanyl-type medications](ValueSet-fentanyl-type-medications.md) | Fentanyl and similar medications (sufentanil, alfentanil, remifentanil) |
| [Fentanyl-type urine drug screening tests](ValueSet-fentanyl-type-urine-drug-screening-tests.md) | Urine tests for fentanyl-type drugs and metabolites |
| [General opiate urine drug screening tests](ValueSet-general-opiate-urine-drug-screening-tests.md) | Presumed general urine tests for naturally occurring opioids (i.e. opiates) that are not specific to a particular substance based upon the inclusion of the word ‘opiates’ in the long name. |
| [Heroin urine drug screening tests](ValueSet-heroin-urine-drug-screening-tests.md) | Presumed general urine tests for heroin and metabolites. |
| [Hospice Disposition](ValueSet-hospice-disposition.md) | This value set contains concepts that represent patients receiving hospice care outside of a hospital or long term care facility. |
| [Hospice Finding](ValueSet-hospice-finding.md) | Finding codes for receiving hospice care |
| [Hospice Procedure](ValueSet-hospice-procedure.md) | Procedure codes for referral, admission, or transfer to a hospice |
| [Limited life expectancy conditions](ValueSet-limited-life-expectancy-conditions.md) | A finding that documents a terminal prognosis |
| [Methadone medications](ValueSet-methadone-medications.md) | Medication codes representing methadone medications |
| [Methadone urine drug screening tests](ValueSet-methadone-urine-drug-screening-tests.md) | Urine tests to identify methadone and metabolites |
| [Naloxone medications](ValueSet-naloxone-medications.md) | All naloxone medications |
| [Non-opioid drug urine screening](ValueSet-non-opioid-urine-drug-screening.md) | Individual tests and panels of tests of urine for illicit drugs EXCEPT those for opioids. |
| [Non-synthetic opioid medications](ValueSet-non-synthetic-opioid-medications.md) | Medications derived from the opium plant that are not synthetically created . All metabolize to morphine. |
| [Observation Category Laboratory](ValueSet-observation-category-laboratory.md) | Laboratory Observation Category |
| [Observation Category Procedure](ValueSet-observation-category-procedure.md) | Procedure Observation Category |
| [Office Visit](ValueSet-office-visit.md) | Codes specifying outpatient encounters |
| [Oncology specialty designations (NUCC)](ValueSet-oncology-specialty-designations.md) | NUCC oncology provider types who may provide encounters to patients with cancer |
| [Opiate specific urine drug screening tests](ValueSet-opiate-specific-urine-drug-screening-tests.md) | Urine tests for naturally occurring opioids (i.e. opiates) that are specific to a particular naturally occurring opioid and therefore do not have the general word ‘opiates’ in the long name. |
| [Opioid analgesics with ambulatory misuse potential](ValueSet-opioid-analgesics-with-ambulatory-misuse-potential.md) | All opioid clinical drugs except cough medications, antispasmodics, or those restricted to surgical use only as identified by those using an injectable form. |
| [Opioid counseling procedure](ValueSet-opioid-counseling-procedure.md) | Procedure for counseling on opioid use |
| [Opioid drug urine screening](ValueSet-opioid-urine-drug-screening.md) | Individual tests and panels of tests of urine for opioids |
| [Opioid misuse assessment procedure](ValueSet-opioid-misuse-assessment-procedure.md) | Procedure to assess the risk of opioid abuse occurring by a patient |
| [Opioid misuse disorders](ValueSet-opioid-misuse-disorders.md) | Conditions indicating opioid misuse |
| [Opioid treatment assessment procedure](ValueSet-opioid-treatment-assessment-procedure.md) | Broad set of concepts that may represent a procedure to assess the risk of opioid abuse occurring by a patient |
| [Oxycodone Medications](ValueSet-oxycodone-medications.md) | All Oxycodone medications |
| [Oxycodone urine drug screening tests](ValueSet-oxycodone-urine-drug-screening-tests.md) | Presumed general urine tests for oxycodone. |
| [PDMP data reviewed finding](ValueSet-pdmp-data-reviewed-finding.md) | Finding indicating that the Prescription Drug Monitoring Program (PDMP) data was reviewed |
| [PDMP review procedure](ValueSet-pdmp-review-procedure.md) | Procedure for Prescription Drug Monitoring Program (PDMP) review |
| [Pain management procedure](ValueSet-pain-management-procedure.md) | Procedure for subacute or chronic pain control management |
| [Pain treatment plan](ValueSet-pain-treatment-plan.md) | A Pain medicine Plan of care note |
| [Phencyclidine urine drug screening tests](ValueSet-phencyclidine-urine-drug-screening-tests.md) | Urine tests for phencyclidine |
| [Problem List Condition Category](ValueSet-condition-problem-list-category.md) | Problem list condition category. |
| [Sickle-cell diseases](ValueSet-sickle-cell-diseases.md) | Sickle-cell disorders that cause painful crisis |
| [Sleep disordered breathing](ValueSet-conditions-documenting-sleep-disordered-breathing.md) | Conditions associated with sleep-related breathing disorders. |
| [Substance misuse behavioral counseling](ValueSet-substance-misuse-behavioral-counseling.md) | Counseling and associated procedures for substance misuse |
| [Synthetic opioid medications](ValueSet-synthetic-opioid-medications.md) | Opioid medications that are not exclusively and solely derived from the opium plant. These are synthetic or semisynthetic opioids. |
| [Synthetic opioid urine drug screening tests](ValueSet-synthetic-opioid-urine-drug-screening-tests.md) | Urine tests for synthetic and semi-synthetic (non-opiate) substances |
| [Therapies indicating end of life care](ValueSet-therapies-indicating-end-of-life-care.md) | Therapeutic activities indicating end of life. Include procedures or therapies specific to a terminal patient, exclude procedures or therapies performed on a deceased patient |
| [US Core Health Concern Condition Category](ValueSet-condition-us-core-health-concern-category.md) | US Core Health Concern Condition Category. |
| [ValueSet - Medication Request Category Community](ValueSet-medicationrequest-category-community.md) | Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.). |
| [ValueSet - Medication Request Status Active](ValueSet-medicationrequest-status-active.md) | The prescription is ‘actionable’, but not all actions that are implied by it have occurred yet. |
| [Xylazine drug urine screening tests](ValueSet-xylazine-urine-drug-screening-tests.md) | Individual tests and panels of tests of urine for xylazine |

### Terminology: Code Systems 

These define new code systems used by systems conforming to this implementation guide.

| | |
| :--- | :--- |
| [CDC Opioid Override Reasons](CodeSystem-opioidcds-overrideReasons.md) | Override reasons for the 2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain |
| [CodeSystem - CDC 2022 Opioid Indicator](CodeSystem-opioidcds-indicator.md) | Indicates the urgency/importance of the recommended action |

### Example: Example Instances 

These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.

| | |
| :--- | :--- |
| [Ambulatory Opioid MedicationDispense](MedicationDispense-ambulatory-opioid.md) | Ambulatory Opioid MedicationDispense Example |
| [Ambulatory Opioid MedicationRequest](MedicationRequest-ambulatory-opioid.md) | Ambulatory Opioid MedicationRequest Example |
| [Cancer Diagnosis Condition](Condition-cancer-diagnosis.md) | Cancer Diagnosis Condition Example |
| [Cancer Diagnosis Encounter](Encounter-cancer-diagnosis.md) | Cancer Diagnosis Encounter Example |
| [End of Life Condition](Condition-end-of-life.md) | End of Life Condition Example |
| [Oncology Participant Encounter](Encounter-oncologist-participant.md) | Oncology Participant Encounter Example |
| [Oncology Specialist PractitionerRole](PractitionerRole-oncology-specialist.md) | Oncology Specialist PractitionerRole Example |
| [OpioidCDS CarePlan](CarePlan-example-opioidcds.md) | CarePlan Example |
| [OpioidCDS MedicationRequest](MedicationRequest-example-opioidcds.md) | MedicationRequest Example |
| [OpioidCDS Observation](Observation-example-opioidcds.md) | Observation Example |
| [OpioidCDS Patient](Patient-example-opioidcds.md) | Patient Example |
| [OpioidCDS RequestGroup](RequestGroup-example-opioidcds.md) | RequestGroup Example |
| [Palliative Care ServiceRequest](ServiceRequest-palliative-care.md) | Palliative Care ServiceRequest Example |
| [Terminal Condition](Condition-terminal.md) | Terminal Condition Example |

### Other 

These are resources that are used within this implementation guide that do not fit into one of the other categories.

| | |
| :--- | :--- |
| [CQFToolingDevice](Device-cqf-tooling.md) | A Device that represents a CQF Tooling version. |
| [Input Expansion Parameters](Parameters-manifest.md) | The input expansion parameters resource for this implementation guide, specifying SNOMED Edition and version. This resource will be contained within the published implementation guide with all pinned references. |

