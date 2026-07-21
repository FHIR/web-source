<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.html');
else 
  Redirect('https://fhir.org/guides/onc/us-quality-core/0.5.0/StructureDefinition-us-quality-core-substance.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
