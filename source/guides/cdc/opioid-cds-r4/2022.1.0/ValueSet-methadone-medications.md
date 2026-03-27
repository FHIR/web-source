# Methadone medications - 2022 CDC Clinical Practice Guideline for Prescribing Opioids Implementation Guide v2022.1.0

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Methadone medications**

## ValueSet: Methadone medications 

| | |
| :--- | :--- |
| *Official URL*:http://fhir.org/guides/cdc/opioid-cds/ValueSet/methadone-medications | *Version*:2022.1.0 |
| Active as of 2025-02-24 | *Computable Name*:METHADONE_MEDICATIONS |
| **Copyright/Legal**: © CDC 2016+. | |

 
Medication codes representing methadone medications 

 **References** 

This value set is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

### Logical Definition (CLD)

No formal definition provided for this value set

 

### Expansion

-------

 Explanation of the columns that may appear on this page: 

| | |
| :--- | :--- |
| Level | A few code lists that FHIR defines are hierarchical - each code is assigned a level. In this scheme, some codes are under other codes, and imply that the code they are under also applies |
| System | The source of the definition of the code (when the value set draws in codes defined elsewhere) |
| Code | The code (used as the code in the resource instance) |
| Display | The display (used in the*display*element of a[Coding](http://hl7.org/fhir/R4/datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept |
| Comments | Additional notes about how to use the code |



## Resource Content

```json
{
  "resourceType" : "ValueSet",
  "id" : "methadone-medications",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computablevalueset",
    "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-executablevalueset"]
  },
  "extension" : [{
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-author",
    "valueContactDetail" : {
      "name" : "MD Partners, Inc.",
      "telecom" : [{
        "system" : "email",
        "value" : "info@mdpartners.com"
      }]
    }
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "computable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
    "valueCode" : "executable"
  },
  {
    "url" : "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-usageWarning",
    "valueString" : "This value set contains a point-in-time expansion enumerating the codes that meet the value set intent. As new versions of the code systems used by the value set are released, the contents of this expansion will need to be updated to incorporate newly defined codes that meet the value set intent. Before, and periodically during production use, the value set expansion contents SHOULD be updated. The value set expansion specifies the timestamp when the expansion was produced, SHOULD contain the parameters used for the expansion, and SHALL contain the codes that are obtained by evaluating the value set definition. If this is ONLY an executable value set, a distributable definition of the value set must be obtained to compute the updated expansion."
  },
  {
    "url" : "http://hl7.org/fhir/StructureDefinition/valueset-rules-text",
    "valueMarkdown" : "https://mor.nlm.nih.gov/RxMix/ \r\nScript:\r\nStep 1 \r\nCreate Batch text input file (Methadone.txt) with following RxNorm identifier for the ingredient (TTY=IN) as the only concept within the file: \r\n6813       \r\n\r\nStep 2\r\nSubmit batch job using the above Methadone.txt as the input file to following workflow by uploading a workflow file (methadone-wf.config) with the following text in the file:  <WFE><filteredOutputs>RXCUI|name|term_type</filteredOutputs><input>NOINPUT</input><FS><service>NOINPUT</service><function>getRelatedByType</function><level>0</level><paramSize>2</paramSize><param order ='0'>?</param><param order ='1'>BPCK,GPCK,SBD,SCD</param></FS></WFE>\r\nThis will produce a result file with all Opioid clinical drugs, both branded and general, included"
  }],
  "url" : "http://fhir.org/guides/cdc/opioid-cds/ValueSet/methadone-medications",
  "version" : "2022.1.0",
  "name" : "METHADONE_MEDICATIONS",
  "title" : "Methadone medications",
  "status" : "active",
  "experimental" : false,
  "date" : "2025-02-24T13:06:52-07:00",
  "publisher" : "CDC / Security Risk Solutions, Inc. (SRS)",
  "contact" : [{
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.securityrisksolutions.com"
    }]
  }],
  "description" : "Medication codes representing methadone medications",
  "copyright" : "© CDC 2016+.",
  "expansion" : {
    "timestamp" : "2025-02-24T13:06:52-07:00",
    "total" : 16,
    "contains" : [{
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "1990745",
      "display" : "methadone hydrochloride 40 MG Tablet for Oral Suspension [Diskets]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864708",
      "display" : "methadone hydrochloride 10 MG Oral Tablet [Dolophine]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864712",
      "display" : "methadone hydrochloride 10 MG Oral Tablet [Methadose]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864720",
      "display" : "methadone hydrochloride 5 MG Oral Tablet [Dolophine]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864737",
      "display" : "methadone hydrochloride 5 MG Oral Tablet [Methadose]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864980",
      "display" : "methadone hydrochloride 40 MG Tablet for Oral Suspension [Methadose]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "991149",
      "display" : "methadone hydrochloride 10 MG/ML Oral Solution [Methadose]"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864706",
      "display" : "methadone hydrochloride 10 MG Oral Tablet"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864714",
      "display" : "methadone hydrochloride 10 MG/ML Injectable Solution"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864718",
      "display" : "methadone hydrochloride 5 MG Oral Tablet"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864761",
      "display" : "methadone hydrochloride 1 MG/ML Oral Solution"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864769",
      "display" : "methadone hydrochloride 2 MG/ML Oral Solution"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864826",
      "display" : "methadone hydrochloride 5 MG/ML Oral Solution"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864978",
      "display" : "methadone hydrochloride 40 MG Tablet for Oral Suspension"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "864984",
      "display" : "methadone hydrochloride 20 MG/ML Oral Solution"
    },
    {
      "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
      "code" : "991147",
      "display" : "methadone hydrochloride 10 MG/ML Oral Solution"
    }]
  }
}

```
