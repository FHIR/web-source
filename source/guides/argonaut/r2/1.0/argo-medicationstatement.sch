<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile MedicationStatement
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:MedicationStatement</sch:title>
    <sch:rule context="f:MedicationStatement">
      <sch:assert test="count(f:dateAsserted) &gt;= 1">dateAsserted: minimum cardinality of 'dateAsserted' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>MedicationStatement</sch:title>
    <sch:rule context="f:MedicationStatement">
      <sch:assert test="not(exists(*[starts-with(local-name(.), 'reasonForUse')]) and f:wasNotTaken/@value=true())">Reason for use is only permitted if wasNotTaken is false (inherited)</sch:assert>
      <sch:assert test="not(exists(f:reasonNotTaken) and f:wasNotTaken/@value=false())">Reason not taken is only permitted if wasNotTaken is true (inherited)</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
