<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.html');
else 
  Redirect('https://fhir.org/guides/acme/HotBeverage/1.4.2022/ConceptMap-StarSizeVsDrinkSize.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
