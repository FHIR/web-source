<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.html');
else 
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-uds-plus-race-extension.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
