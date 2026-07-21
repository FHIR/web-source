<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.html');
else 
  Redirect('https://fhir.org/guides/cdc/opioid-mme-r4/3.0.0/Library-ConversionFactorsTests.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
