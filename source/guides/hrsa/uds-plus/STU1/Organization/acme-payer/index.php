<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.html');
else 
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU1/Organization-acme-payer.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
