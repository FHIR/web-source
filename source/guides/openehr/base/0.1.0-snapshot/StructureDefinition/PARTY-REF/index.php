<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.html');
else 
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/StructureDefinition-PARTY-REF.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
