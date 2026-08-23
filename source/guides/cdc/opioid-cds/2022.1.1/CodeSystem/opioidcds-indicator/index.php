<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.html');
else 
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/CodeSystem-opioidcds-indicator.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
