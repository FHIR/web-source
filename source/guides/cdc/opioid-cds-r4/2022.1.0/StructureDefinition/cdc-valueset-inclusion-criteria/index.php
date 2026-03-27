<?php
function Redirect($url)
{
  header('Location: ' . $url, true, 302);
  exit();
}

$accept = $_SERVER['HTTP_ACCEPT'];
if (strpos($accept, 'application/json+fhir') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.json2');
elseif (strpos($accept, 'application/fhir+json') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.json1');
elseif (strpos($accept, 'json') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.json');
elseif (strpos($accept, 'application/xml+fhir') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.xml2');
elseif (strpos($accept, 'application/fhir+xml') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.xml1');
elseif (strpos($accept, 'html') !== false)
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.html');
else 
  Redirect('http://fhir.org/guides/cdc/opioid-cds-r4/2022.1.0/StructureDefinition-cdc-valueset-inclusion-criteria.xml');
?>
    
You should not be seeing this page. If you do, PHP has failed badly.
