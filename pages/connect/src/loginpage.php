<?php
// Assuming you have a database connection established already

// Retrieve form data
$usn = $_POST['usn'];
$password = $_POST['password'];
echo'$usn';
// Validate login credentials (replace with your actual logic)
if ($usn === "a" && $password === "a") {
    // Redirect to landing page upon successful login
    header("Location: landingpage.html");
} else {
    // Redirect back to sign-in page if login fails
    header("Location: CredentialCenter.html"); // Change 'signin.html' to your actual sign-in page
}
?>