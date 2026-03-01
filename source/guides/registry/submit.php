<?php
// submit-ig.php
// Process FHIR IG submission form and email to fhir-director@hl7.org

// Configuration
$to_email = 'fhir-director@hl7.org';
$subject = 'New FHIR IG Registry Submission: ';

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: submit-ig.html');
    exit;
}

// Collect and sanitize form data
$data = [
    'name' => trim($_POST['name'] ?? ''),
    'npm-name' => trim($_POST['npm-name'] ?? ''),
    'description' => trim($_POST['description'] ?? ''),
    'authority' => trim($_POST['authority'] ?? ''),
    'category' => trim($_POST['category'] ?? ''),
    'country' => strtolower(trim($_POST['country'] ?? '')),
    'language' => trim($_POST['language'] ?? 'en'),
    'canonical' => trim($_POST['canonical'] ?? ''),
    'history' => trim($_POST['history'] ?? ''),
    'ci-build' => trim($_POST['ci-build'] ?? ''),
    'edition-name' => trim($_POST['edition-name'] ?? ''),
    'ig-version' => trim($_POST['ig-version'] ?? ''),
    'package' => trim($_POST['package'] ?? ''),
    'fhir-version' => trim($_POST['fhir-version'] ?? ''),
    'edition-url' => trim($_POST['edition-url'] ?? '')
];

// Validate required fields
$required = ['name', 'npm-name', 'description', 'authority', 'category', 
             'country', 'language', 'canonical', 'edition-name', 'ig-version', 
             'package', 'fhir-version', 'edition-url'];

$missing = [];
foreach ($required as $field) {
    if (empty($data[$field])) {
        $missing[] = $field;
    }
}

if (!empty($missing)) {
    die('Error: Missing required fields: ' . implode(', ', $missing));
}

// Build the JSON structure
$json_entry = [
    'name' => $data['name'],
    'category' => $data['category'],
    'npm-name' => $data['npm-name'],
    'description' => $data['description'],
    'authority' => $data['authority'],
    'product' => ['fhir'],
    'country' => $data['country'],
    'language' => [$data['language']]
];

// Add optional URLs if provided
if (!empty($data['history'])) {
    $json_entry['history'] = $data['history'];
}

$json_entry['canonical'] = $data['canonical'];

if (!empty($data['ci-build'])) {
    $json_entry['ci-build'] = $data['ci-build'];
}

// Add edition information
$json_entry['editions'] = [
    [
        'name' => $data['edition-name'],
        'ig-version' => $data['ig-version'],
        'package' => $data['package'],
        'fhir-version' => [$data['fhir-version']],
        'url' => $data['edition-url']
    ]
];

// Format as pretty JSON
$json_output = json_encode($json_entry, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

// Update subject with IG name
$subject .= $data['name'];

// Prepare email body
$email_body = "New FHIR Implementation Guide submission received.\n\n";
$email_body .= "=== SUBMISSION DETAILS ===\n\n";
$email_body .= "Name: " . $data['name'] . "\n";
$email_body .= "NPM Package: " . $data['npm-name'] . "\n";
$email_body .= "Authority: " . $data['authority'] . "\n";
$email_body .= "Category: " . $data['category'] . "\n";
$email_body .= "Country: " . $data['country'] . "\n";
$email_body .= "Language: " . $data['language'] . "\n";
$email_body .= "Edition: " . $data['edition-name'] . " (v" . $data['ig-version'] . ")\n";
$email_body .= "FHIR Version: " . $data['fhir-version'] . "\n\n";
$email_body .= "=== JSON ENTRY TO ADD ===\n\n";
$email_body .= $json_output . "\n\n";
$email_body .= "=== INSTRUCTIONS ===\n\n";
$email_body .= "To add this entry to the registry:\n";
$email_body .= "1. Review the submission for accuracy and completeness\n";
$email_body .= "2. Add the JSON entry to the 'guides' array in fhir-ig-list.json\n";
$email_body .= "3. Commit and push to the repository\n\n";
$email_body .= "Submitted from: " . $_SERVER['REMOTE_ADDR'] . "\n";
$email_body .= "Timestamp: " . date('Y-m-d H:i:s T') . "\n";

// Prepare headers
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to_email, $subject, $email_body, $headers);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission <?php echo $mail_sent ? 'Successful' : 'Failed'; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            line-height: 1.6;
        }
        .success {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 20px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .error {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 20px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .json-preview {
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 20px 0;
        }
        pre {
            margin: 0;
            font-family: 'Courier New', monospace;
            font-size: 12px;
        }
        .button-group {
            margin: 20px 0;
        }
        a.button {
            display: inline-block;
            background: #0066cc;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            margin-right: 10px;
        }
        a.button:hover {
            background: #0052a3;
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #0066cc;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Submission <?php echo $mail_sent ? 'Successful' : 'Failed'; ?></h1>
    
    <?php if ($mail_sent): ?>
        <div class="success">
            <h2>✓ Your submission has been sent!</h2>
            <p>Your FHIR Implementation Guide submission for <strong><?php echo htmlspecialchars($data['name']); ?></strong> has been emailed to fhir-director@hl7.org.</p>
            <p>The FHIR team will review your submission and add it to the registry if approved.</p>
        </div>
        
        <h3>Submitted JSON Entry:</h3>
        <div class="json-preview">
            <pre><?php echo htmlspecialchars($json_output); ?></pre>
        </div>
    <?php else: ?>
        <div class="error">
            <h2>✗ Submission Failed</h2>
            <p>There was an error sending your submission. This could be due to server email configuration.</p>
            <p>Please try one of these alternatives:</p>
            <ul>
                <li>Email the details manually to <a href="mailto:fhir-director@hl7.org">fhir-director@hl7.org</a></li>
                <li>Submit a pull request to the <a href="https://github.com/FHIR/ig-registry/blob/master/fhir-ig-list.json" target="_blank">GitHub repository</a></li>
            </ul>
        </div>
        
        <h3>Your JSON Entry (for manual submission):</h3>
        <div class="json-preview">
            <pre><?php echo htmlspecialchars($json_output); ?></pre>
        </div>
    <?php endif; ?>
    
    <div class="button-group">
        <a href="submit-ig.html" class="button">Submit Another IG</a>
        <?php if (!$mail_sent): ?>
            <a href="mailto:fhir-director@hl7.org?subject=<?php echo urlencode($subject); ?>&body=<?php echo urlencode($json_output); ?>" class="button">Email Manually</a>
        <?php endif; ?>
    </div>
</body>
</html>
