# 2022 CDC Clinical Practice Guideline - Process Documentation - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**2022 CDC Clinical Practice Guideline - Documentation**](documentation.md)
* **2022 CDC Clinical Practice Guideline - Process Documentation**

## 2022 CDC Clinical Practice Guideline - Process Documentation

 This section describes the functional behavior of the recommendations as implemented for the chosen pilot sites, and documents the process that was used to establish the functional behavior once the target recommendations were chosen. 

### Assumptions

 Assumptions made in this process were based on team understanding of Epic and Cerner EHR capabilities, as well as team experience with clinical decision support (CDS) implementation in general, and opioid CDS specifically. 

#### Clinical Assumptions

 Opioids for subacute or chronic pain management are often not started with an intent for chronic use; such prescriptions often transition from intended acute pain management. Therefore, it is very difficult to identify a new opioid prescription a priori as for subacute or chronic pain management. 

Indications and associated diagnoses for opioid prescriptions are often not available within the EHR.

End dates for opioid prescriptions are often not reliable.

#### Technical Assumptions

The initial focus is on Epic and Cerner EHR platforms.

 The technical framework to be used for EHR integration is CDS Hooks, with the FHIR Clinical Reasoning Module to represent the behavioral artifacts. 

 Widely scaling this type of CDS is still bleeding-edge clinical informatics work, so an iterative and agile approach is recommended. 

Both Epic and Cerner will be capable of supporting the provision of the following information:

* Opioid medications about to be prescribed
* Problem list, including for cancer
* Prior urine drug testing results

 The degree to which standard vocabularies are used by Epic and Cerner to provide this information must be verified at each implementation site, and to the extent that they are not uniform, terminology mappings will need to be established. 

### Decision Points

#### Opioid Determination

 The first issue to establish is how to determine what constitutes an opioid. The 2022 CDC Clinical Practice Guideline uses NDC codes derived from SAS calculations intended for use against prescription data. Prescription data can include ordered medication and/or dispensed medication, depending on availability at the local site. 

To avoid excess alerting, the algorithm uses the following exclusions:

1. The project team considered excluding liquid opioids altogether, since they may be used for patients with life-limited diseases who might be excluded from the recommendations. However, that approach would also exclude cough medications which have a significant abuse potential. Therefore, the team excluded only injectable liquid forms of opioid and retained oral formulations.
1. In some cases, EHR vendors have developed approaches to identify MME equivalents. In such situations, the implementation should attempt to match the vendor's approach so that end users receive consistent advice.

#### Terminology

 To identify opioids, the IG provides a value set containing RxNorm Semantic Clinical Drug (SCD) and Semantic Brand Drug (SBD) concepts which include ingredient(s), strength, route and dose form. The team provides an enumerated (extensional) value set. However, a value set with that approach quickly becomes outdated as RxNorm updates frequently, or the value set must be updated and made available frequently. Therefore, the project team also includes an RxNorm query to retrieve all opioids in the extended-release/long-acting category and in the immediate-release category. Thus, each implementer can update their value sets and run the expressions at frequencies appropriate to the organization. The challenge with using queries is that RxNorm retires concepts for medications for which there is no input activity (e.g., the NDC code is no longer available). Thus, the output of the data retrieved will not include historical drugs for which codes have been retired. The impact of missing retired codes for MME calculations is likely to be minimal to none since most opioid prescriptions have short durations of 30 days or less and codes should be relatively recent. 

#### Use of Ordered vs Dispensed Medications

 Medication self-administration data are not available in the ambulatory setting, nor would such data be reliable. Therefore, the most proximal information about a patient's medication usage is medication dispensed data. Such dispensed data is increasingly accessible from claims data available to insurers and used to evaluate provider medication utilization rates.[1](#fn1) Researchers can access population-based dispensed data from government sources.[2](#fn2) Some provider organizations also have access to dispensed data for patients treated by their clinicians. The project team considered calculating morphine milligram equivalents (MMEs) available to a patient based on medication dispensed data. However, since dispensed data are not available to all provider organizations and since the pilot site did not have such access, the guidance in this implementation guide addresses medication order (prescription) data. Using prescription data presented an issue regarding comprehensiveness of the data set. While dispensed data are generally available as structured data, evaluation of medication order data at the pilot organization showed 20% of opioid prescriptions used free-text (unstructured) instructions with over 10,000 unique patterns. Eliminating such prescriptions from the analysis could introduce disproportionate impact of clinical decision support interventions. The team built a parsing algorithm to create structured information from 80% of the free-text instructions. Clinical review of the parsing results by two, independent clinicians confirmed their accuracy. Therefore, the team included the parsed data in the MME calculations. 

 For geographic locations with pharmacies that participate in Surescripts, implementation sites have the option to use dispense data to perform the MME calculation. However, coverage varies by region, and even for regions with coverage, licensing costs may be required and must be considered as a factor when determining whether to use dispense data. 

#### Calculation of Daily Dosage

 Calculation of daily dosage is based on the prescribed (order) or dispensed data based on expected use at the implementation site. The patient may be taking medication less often than prescribed or expected. For example, medication ordered every 4 hours as needed (PRN) leads to a calculation of six doses within a 24 hour period. 

The daily dosage calculation is different based on whether dispsensed data is used:

**Order Data (total daily dose based on the sig)**

Expected use: Total daily dose = quantity per use * strength * daily frequency

Example: Order for two 24 mg tabs every 4 hours = 2 * 24 mg * 6 = 300 mg per day

**Dispensed Data (dose not use sig)**

Expected use: Total daily dose = (number dispensed * strength) / duration (days)

Example: Dispensed 60 pills, 25 mg each, for 30 days = (60 * 25) / 30, or 50 mg per day

 Actual use may be less per day for a longer time period for either calculation, but the MME calculation addresses the prescribed or dispensed data. It is also possible that patients received dispensed medication and failed to ingest some or all of it. The extent to which differences exist between actual use and ordered or dispensed data requires access to reconciled medication data and may be confounded by trust issues. 

 The National Comittee for Quality Assurance (NCQA) Healthcare Effectiveness Data and Information Set (HEDIS) took a similar approach to determining cumulative medication use over time. The related electronic clinical quality measure (eCQM) CMS 128 addresses continuous use of anti-depressant medication management as 84 to 114 days (short term) and 180 to 231 days (long term) based on active medication and can use prescribed or dispensed data as they are available. The eCQM assumes the medication is dispensed and used as written. 

#### Determining Opioid Usage

 Active medications in an EHR may have a start date and indicate the number of doses written; however, if not discontinued, the algorithm assumes the ordered medication remains active. 

The logic assumes the prescription is filled on the day of the order.

If the prescription includes refills, the system assumes the patient requested all refills of the medication.

#### Opioid-tolerant vs Opioid-naive

 The team considered how to define the concepts opioid-tolerant and opioid-naïve. Guideline for pain management in adult cancer pain defined these terms as:[3](#fn3) 

* **Opioid tolerant:** patients who are taking, for 1 week or longer, at least: 
* 60 mg oral morphine/day;
* 25 µg transdermal fentanyl/hour;
* 30 mg oral oxycodone/day;
* 8 mg oral hydromorphone/day;
* 25 mg oral oxymorphone/day; or
* An equianalgesic dose of any other opioid.

* **Opioid naive:** patients who do not meet the above definition of opioid tolerant, and who have not taken opioid doses at least as much as those listed above for 1 week or longer. 

The NCCN v.2010 pain management algorithms also supply simpler definitions for these terms: 
* **Opioid naive:** patients who are not chronically receiving opioid analgesics on a daily basis; and
* **Opioid tolerant:** patients who are chronically receiving opioid analgesics on a daily basis.
 

 The team was concerned that an opioid-naïve patient by the definitions provided could have received opioid prescriptions and potentially have an MME of greater than 50. Informing a physician that a patient with an elevated MME is opioid naïve would lead to confusion. Therefore, the team decided to base recommendations on the MME calculation and to avoid categorizing patients as opioid tolerant or naïve. 

#### Opioid Abuse Risk Assessment

The project team considered options to determine that a provider has evaluated benefits and harms of opioid use. The implementer needs to determine how the local clinicians capture such assessments and map the concept to the SNOMED-CT concept: *Assessment of risk for opioid abuse (procedure) SCTID: 454281000124100* 

The team rejected use of the concept *At risk for drug therapy problem (finding) (SCTID: 451691000124102)* as it was too generic as it could address non-opioid medication therapy concerns. The team also considered searching for use of patient responses to pain scales as evidence that the clinician evaluated patients' responses to opioid use. However, pain scales have many uses without concomitant use of opioids and merely evaluating pain is not sufficient to assess risk for opioid-related harms. Therefore, the guidance does not include pain scale evaluation as a method for determining the benefits of opioid use. 

To address the recommendation statement “optimize other therapies and work with patients to taper opioids to lower dosages or to taper opioids,” implementers should determine what local activities represent such actions and map the activity to the SNOMED-CT concept: *High risk drug monitoring (regime/therapy): SCTID: 268525008* 

The project team considered potential benefits of regularly scheduled queries to identify the cohort of patients who have been given new prescriptions for opioids or prescriptions for escalating doses. Further the analysis of the cohort could also determine those for whom assessment of risk or high-risk drug monitoring had not occurred at the expected intervals, triggering a task list for a clinician role to be determined by the practice. This non-synchronous approach is challenged by the fact that CDS Hooks requires an event such as opening a record or ordering a mediation as a trigger. Since opioid prescriptions have limited number of days supplied, patients on continued therapy have encounters with physicians; therefore, triggering on the entry of a new prescription order allows intervention in a synchronous manner and is equally effective to the asynchronous approach to identify patients requiring evaluation and monitoring. 

#### Information to assist with Non-Medication Terminology Decisions

*  Value sets provided include concepts from standardized code systems (e.g., SNOMED-CT, ICD-10-CM, RxNorm) to indicate inclusion criteria for a given data element. However, clinicians often document using natural language and/or local codes. In addition, some sources only capture billing codes. The implementation site must have a mechanism to map such clinician-entered data to the content of the value set to determine if a patient's data represents the information required for processing the clinical decision support. Vendors and implementation sites may use third party vendors and tools to perform such mappings. The result is a need to create the mappings for each guideline valueset based on locally available information. To assure consistency of such translations across settings and vendor products requires careful study and analysis. The process also requires effort on the part of the EHR, local implementation site, or third party vendor; new value sets must be analyzed and individually configured in the system, and existing value sets must be updated regularly to support newly available codes, and reviewed for accuracy. 
*  Some concepts seem relatively straigthforward when included in a clinical guideline for consumption by a clinician. However, when setting up queries to retrieve data from EHR or other clinical software data storage, the concepts needed may be difficult to encode using available code systems. Value sets can help with the problem only in so far as the concepts are clearly defined without ambiguity. A good example is the definition of end-stage, stage 4 or terminal cancer, for exclusion from opiate usage calculation. One approach is to develop a value set indicating metastatic cancer and pancreatic cancer. This has the potential of covering the vast majority of cancers and secondary malignant neoplastic disease. Avoiding primary neoplastic and non-neoplastic disease seems prudent as these diagnoses are less likely to identify patients for whom the opportunity for additional treatment and quality of life has passed. However, successfully identifying patients for whom opiate medications should be ignored might better be managed by using encounter location or type to identify patients assigned to hospice care, e.g. 
* Procedures 
1. Referral to hospice (procedure) SCTID : 306205009
1. Admission to hospice (procedure) SCTID: 305336008
1. Urgent admission to hospice (procedure) SCTID: 183919006
1. Discharge to healthcare facility for hospice care (procedure) SCTID: 428371000124100
 
* Findings 
1. Full care by hospice (finding) SCTID: 170935008
1. Transition from self-care to hospice (finding) SCTID: 448451000124101
1. Transition from acute care to hospice (finding) SCTID: 1891000124102
1. Transition from long-term care to hospice (finding) SCTID: 1951000124104
1. Transition from long-term care to hospice (finding) SCTID: 1951000124104
 
* Regime/therapy: 
1. Dying care (regime/therapy) SCTID: 385736008
 
 Because it is so difficult to identify individual patients who are appropriately receiving high opioid doses, it is important to allow the physician to override the alert with a reason, e.g., to indicate end-of-life care. Since the override option has the potential of over alerting, a mechanism to determine end-of-life care as provided using hospice care seem preferable. 

### Functional Description

The following two criteria must be satisfied for every patient for each recommendation:

* Patient is being prescribed opioid medications for subacute or chronic pain
* Patient does not appear to be at end of life

#### Chronic Pain

* Inferred based on prescription being for a duration of 28 days or more.

#### End of Life Assessment

The assessment to determine whether the patient appears to be at end of life consists of three elements:

* Patient has been diagnosed with a condition that has a limited life expectancy prognostic estimation
* Patient has been prescribed a medication that indicates the patient is approaching end of life
* Patient has been referred, discharged or admitted to hospice care

#### Recommendation #1

* When
* Then

#### Recommendation #2

* When
* Then

#### Recommendation #3

* When
* Then

#### Recommendations #4 and #5

* When
* Then

#### Recommendation #6

* When
* Then

#### Recommendation #7

* When
* Then

#### Recommendation #8

* When
* Then

#### Recommendation #9

* When
* Then

#### Recommendation #10

* When
* Then
* When
* Then

#### Recommendation #11

* When
* Then

#### Recommendation #12

* When
* Then

-------

 1. Centers for Medicare and Medicaid Services. Medicare Provider Utilization and Payment Data: Part D Prescriber. Available at: https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Part-D-Prescriber.html. Accessed 19 July 2018.[↩](#ref1) 

 2. Data.Gov. Data Catalog: Pharmacy datasets. Available at: https://catalog.data.gov/dataset?tags=pharmacy. Accessed 19 July 2018.[↩](#ref2) 

 3. Stokowski LA. Adult cancer pain: part 2 - the latest guideline for pain management. Medscape Oncology. 2010. Available at: https://www.medscape.com/viewarticle/733067_2. Accessed 19 July 2018.[↩](#ref3) 

