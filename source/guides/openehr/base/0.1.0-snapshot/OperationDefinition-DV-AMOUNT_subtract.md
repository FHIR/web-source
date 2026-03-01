# OperationDefinition - OpenEHR Base package v0.1.0-snapshot

* [**Home Page**](index.md)
* [**Artifacts Summary**](artifacts.md)
* [**DV_AMOUNT**](StructureDefinition-DV-AMOUNT.md)
* **OperationDefinition**

## OperationDefinition: OperationDefinition 

| | | |
| :--- | :--- | :--- |
| *Official URL*:http://openehr.org/fhir/StructureDefinition/DV-AMOUNT#subtract | *Version*:0.1.0-snapshot | |
| *Standards status:*[Informative](http://hl7.org/fhir/R5/versions.html#std-process) | [Maturity Level](http://hl7.org/fhir/versions.html#maturity): 3 | *Computable Name*:subtract |

 
Difference of this amount and another. The value of`_accuracy_`in the result is either: 
* the sum of the accuracies of the operands, if both present, or;
* unknown, if either or both operand accuracies are unknown.
 
If the`_accuracy_`value is a percentage in one operand and not in the other, the form in the result is that of the larger operand. 

