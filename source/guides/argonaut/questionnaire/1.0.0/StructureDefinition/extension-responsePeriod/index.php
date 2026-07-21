<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.html');
else 
  Redirect('https://fhir.org/guides/argonaut/questionnaire/1.0.0/StructureDefinition-extension-responsePeriod.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
