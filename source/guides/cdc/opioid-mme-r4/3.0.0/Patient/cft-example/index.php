<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.html');
else 
  Redirect('http://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Patient-cft-example.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
