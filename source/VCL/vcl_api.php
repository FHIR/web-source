<?php
// vcl-api.php - Place this in your VCL directory

// Check if this is an API request
$acceptHeader = $_SERVER['HTTP_ACCEPT'] ?? '';
$isApiRequest = strpos($acceptHeader, 'application/fhir+json') !== false || 
                strpos($acceptHeader, 'application/json') !== false;

if (!$isApiRequest) {
    // Not an API request, return 404 to let .htaccess handle it
    http_response_code(404);
    exit();
}

// Extract VCL expression from URL
$requestUri = $_SERVER['REQUEST_URI'];
$vclPath = preg_replace('#^/VCL/#', '', parse_url($requestUri, PHP_URL_PATH));

if (empty($vclPath)) {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'No VCL expression provided']);
    exit();
}

try {
    $vclExpression = urldecode($vclPath);
} catch (Exception $e) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Invalid URL encoding']);
    exit();
}

// Check if V8js is available
if (!class_exists('V8Js')) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'V8js extension not available']);
    exit();
}

try {
    // Create V8 context
    $v8 = new V8Js();
    
    // Load the VCL parser
    $vclParserCode = file_get_contents(__DIR__ . '/vcl-parser.js');
    if ($vclParserCode === false) {
        throw new Exception('Could not load VCL parser');
    }
    
    // Execute the parser code
    $v8->executeString($vclParserCode);
    
    // Parse the VCL expression
    $result = $v8->executeString("
        try {
            VCLParser.parseVCL(" . json_encode($vclExpression) . ");
        } catch (error) {
            throw new Error('VCL Parse Error: ' + error.message);
        }
    ");
    
    // Return the result as JSON
    header('Content-Type: application/fhir+json');
    echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    
} catch (V8JsException $e) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => 'VCL Parse Error',
        'message' => $e->getMessage()
    ]);
} catch (Exception $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => 'Internal Server Error',
        'message' => $e->getMessage()
    ]);
}
?>