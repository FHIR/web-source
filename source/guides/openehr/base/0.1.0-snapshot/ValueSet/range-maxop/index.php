<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.html');
else 
  Redirect('http://fhir.org/guides/openehr/base/0.1.0-snapshot/ValueSet-range-maxop.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
