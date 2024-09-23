<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.html');
else 
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1.1/StructureDefinition-uds-plus-adverseevent.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
