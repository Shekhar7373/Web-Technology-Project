<?php

// Below steps to build connection between DB & PHP
$servername = "localhost";
$username = "root";
$password = "";
$database = "nexus student data";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Sorry unable to connect!!! " . mysqli_connect_error());
}
echo "Connection succefull";
echo "<br/>";
// Connection built successfully..............

//Verify the user that entered user is in Database using USN & Passwd
$password = $_POST["password"];
$usn = $_POST["usn"];
$sql = "SELECT * FROM `signup data` WHERE `USN` LIKE '$usn' AND `Password` LIKE '$password'";
$result = mysqli_query($conn, $sql);
// If User is found than result variable hold complete row of that usn, if not than "null"
if (mysqli_num_rows($result) > 0) {
    echo "Student Data Found...!!!<br/>";
    // This below line converts or breaks into associative array from that we can access individual column using column name (Present at top of table)
    $row = mysqli_fetch_assoc($result);
    echo "Name : " . $row["Name"] . " USN : " . $row["USN"] . " Branch : " . " Password :" . $row["Password"] . " Mobile No :" . $row["Mobile No"] . " Email :" . $row["Email"];

    header("Location: CredentialCenter.html?name=$name&usn=$usn&branch=$branch&password=$password&mobile_no=$mobile_no&email=$email");
} else {
    echo "Data not found" . mysqli_error($conn);
}

?>
