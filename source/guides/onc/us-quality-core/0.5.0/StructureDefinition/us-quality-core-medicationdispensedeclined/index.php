<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.html');
else 
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-medicationdispensedeclined.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
