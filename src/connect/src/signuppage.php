<?php

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
// Till here Connection is succefull...

//Fetch data that to be stored in Database
$name = $_POST["name"];
$usn = $_POST["usn"];
$mobile = $_POST["mobile"];
$branch = $_POST["branch"];
$email = $_POST["email"];
$password = $_POST["password"];
$sql = "INSERT INTO `signup data` (`Name`, `USN`, `Mobile No` , `Branch`, `Email` , `Password`) VALUES ('$name', '$usn', '$mobile', '$branch' , '$email' , '$password' );";
$result = mysqli_query($conn, $sql);
// Displaying inserted values
echo "$name , $usn, $mobile, $branch, $email, $password";
echo "<br/>";



$sql = "SELECT * From `signup data`";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
    echo "<h2>";
    echo "Name : " . $row["Name"] . " USN : " . $row["USN"] . " Branch : " . " Password :" . $row["Password"] . " Mobile No :" . $row["Mobile No"] . " Email :" . $row["Email"];
    echo "</h2><br/>";
}
echo "<br/>";
?>