<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.html');
else 
  Redirect('https://fhir.org/guides/cdc/opioid-cds/2022.1.1/Library-OpioidCDSREC04And05.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
