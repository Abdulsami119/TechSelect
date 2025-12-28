function validateSignup() {

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");


    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    let isValid = true;

    if (fname.value.trim() === "") {
        document.getElementById("fnameError").innerText = "First name is required";
        isValid = false;
    }

    if (lname.value.trim() === "") {
        document.getElementById("lnameError").innerText = "Last name is required";
        isValid = false;
    }

    if (username.value.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    }
    else if (!email.value.includes("@") || !email.value.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    if (password.value.length < 8) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 8 characters";
        isValid = false;
    }

    if (confirm.value !== password.value) {
        document.getElementById("confirmError").innerText =
            "Passwords do not match";
        isValid = false;
    }


    if (isValid) {
        alert("Account created successfully ");
    }

    return false; }