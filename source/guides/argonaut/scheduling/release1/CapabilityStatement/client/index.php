<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/argonaut/scheduling/release1/CapabilityStatement-client.json');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/argonaut/scheduling/release1/CapabilityStatement-client.html');
else 
  Redirect('https://fhir.org/guides/argonaut/scheduling/release1/CapabilityStatement-client.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
