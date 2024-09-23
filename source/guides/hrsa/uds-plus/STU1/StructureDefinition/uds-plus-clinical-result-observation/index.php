<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.html');
else 
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-clinical-result-observation.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
