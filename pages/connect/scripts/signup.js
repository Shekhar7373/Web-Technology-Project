const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// For Demo purpose one student details is added to validate & verify
var name = "a"
var usn = "a"
var mobile = "1234"
var email = "sdm@gmail.com"
var password = "a"

function checkpassword(){
  var passwd = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if(passwd != confirmPassword){
    alert("Enter both password is not matching! correct it");
  }
}

function validateAndStore() {
    const name = document.getElementById('name').value;
    const usn = document.getElementById('usn').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    var option1 = document.getElementById('deptdropdown').value;
    console.log(name, usn , mobile, password, confirmPassword, option1);
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    alert("Registration successful!");
    return false; // Prevent form submission for demonstration
}

function verify(){
  var enteredusn = document.getElementById("chkusn").value;
  var enteredpasswd = document.getElementById("chkpasswd").value;
  if(enteredusn != usn || enteredpasswd != password){
    alert("Invalid login details! try again");
  }
  else{
    alert("Logged in successfully!Redirected to next page");
    document.write("Successfull Login Test!!");
  }
}
function checkallfields(){
  var chkusn = document.getElementById("chkusn").value;
  var chkpasswd = document.getElementsByTagName("chkpasswd").value;
  var btn = document.getElementById("loginbtn");
  if(chkpasswd == "" || chkusn == ""){
    btn.disabled = true;
  }
  else{
    btn.disabled = false;
  }
}