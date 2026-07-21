<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.html');
else 
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU1/StructureDefinition-uds-plus-medicationstatement.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
