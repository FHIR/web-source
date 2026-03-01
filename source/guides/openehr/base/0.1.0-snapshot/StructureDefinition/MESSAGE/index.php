<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.html');
else 
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-MESSAGE.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
