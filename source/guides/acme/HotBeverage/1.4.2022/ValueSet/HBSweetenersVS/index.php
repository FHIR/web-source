<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.html');
else 
  Redirect('http://fhir.org/guides/acme/HotBeverage/1.4.2022/ValueSet-HBSweetenersVS.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
