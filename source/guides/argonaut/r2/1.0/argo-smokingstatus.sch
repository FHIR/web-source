<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile Observation
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:Observation</sch:title>
    <sch:rule context="f:Observation">
      <sch:assert test="count(f:subject) &gt;= 1">subject: minimum cardinality of 'subject' is 1</sch:assert>
      <sch:assert test="count(f:issued) &gt;= 1">issued: minimum cardinality of 'issued' is 1</sch:assert>
      <sch:assert test="count(f:valueCodeableConcept) &gt;= 1">valueCodeableConcept: minimum cardinality of 'valueCodeableConcept' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>Observation</sch:title>
    <sch:rule context="f:Observation">
      <sch:assert test="not(exists(f:dataAbsentReason)) or (not(exists(*[starts-with(local-name(.), 'value')])))">SHALL only be present if Observation.value[x] is not present (inherited)</sch:assert>
      <sch:assert test="not(exists(f:component/f:code)) or count(for $coding in f:code/f:coding return parent::*/f:component/f:code/f:coding[f:code/@value=$coding/f:code/@value and f:system/@value=$coding/f:system/@value])=0">Component code SHALL not be same as observation code (inherited)</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>Observation.referenceRange</sch:title>
    <sch:rule context="f:Observation/f:referenceRange">
      <sch:assert test="(exists(f:low) or exists(f:high)or exists(f:text))">Must have at least a low or a high or text (inherited)</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
