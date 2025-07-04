<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.html');
else 
  Redirect('http://fhir.org/guides/hrsa/uds-plus/STU2/CodeSystem-udsplus-agriculture-worker-status-codes.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
