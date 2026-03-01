# OperationDefinition - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* [**DV_URI**](StructureDefinition-DV-URI.md)
* **OperationDefinition**

## OperationDefinition: OperationDefinition 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-URI#path | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:path |

 
A string whose format is a function of the scheme. Identifies the location in-space of an information entity. Typical values include hierarchical directory paths for any machine. For example, with scheme = "ftp", path might be `"/pub/images/image_01"`. The strings "." and ".." are reserved for use in the path. Paths may include internet/intranet location identifiers of the form: `sub_domain...domain`, e.g. `"info.cern.ch"`. 

