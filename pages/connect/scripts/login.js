function validateForm() {
  var usn = document.getElementById("usn").value;
  var password = document.getElementById("password").value;
  var storedData = localStorage.getItem(usn);

  if (!storedData) {
    alert("No user found with this USN");
    return false;
  }

  var userData = JSON.parse(storedData);

  if (password === userData.password) {
    alert("Login successful!");
    return true;
  } else {
    alert("Incorrect password");
    return false;
  }
}
