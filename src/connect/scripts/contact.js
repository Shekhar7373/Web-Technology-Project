function validate() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let messagePattern = /^[a-zA-Z0-9\s.,!?'"()\-]+$/;

    if(email != "" && message != "") {
        if(email.match(emailPattern) && message.match(messagePattern)) {
            return true;
        }else {
            alert("invalid Pattern of input fields");
            return false;
        }
    }else {
        alert("Invalid input fields");
        return false;
    }
}