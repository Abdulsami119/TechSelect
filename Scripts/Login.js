function validateLogin() {

    let username = document.getElementById("loginUsername");
    let password = document.getElementById("loginPassword");


    document.getElementById("userError").innerText = "";
    document.getElementById("passError").innerText = "";

    let isValid = true;

    if (username.value.trim() === "") {
        document.getElementById("userError").innerText =
            "Username is required";
        isValid = false;
    }

    if (password.value.trim() === "") {
        document.getElementById("passError").innerText =
            "Password is required";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful ");
    }

    return false; 
}