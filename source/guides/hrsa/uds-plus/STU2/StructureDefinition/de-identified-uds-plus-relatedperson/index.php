<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.html');
else 
  Redirect('https://fhir.org/guides/hrsa/uds-plus/STU2/StructureDefinition-de-identified-uds-plus-relatedperson.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
