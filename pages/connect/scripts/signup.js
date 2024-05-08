const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});



function validateAndStore() {
    const name = document.getElementById('name').value;
    const usn = document.getElementById('usn').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    const userData = {
        name: name,
        mobile: mobile,
        password: password
    };

    localStorage.setItem(usn, JSON.stringify(userData));
    alert("Registration successful!");
    return false; // Prevent form submission for demonstration
}
