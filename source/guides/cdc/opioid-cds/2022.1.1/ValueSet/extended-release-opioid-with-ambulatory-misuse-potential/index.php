<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.html');
else 
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/ValueSet-extended-release-opioid-with-ambulatory-misuse-potential.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
