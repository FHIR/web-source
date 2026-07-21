<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.html');
else 
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/Parameters-MakeCoffee.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
