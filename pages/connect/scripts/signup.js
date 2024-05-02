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
