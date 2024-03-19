var passwordInput = document.getElementById("password");
var passwordMessage = document.getElementById("password-message");

function signup() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var password = passwordInput.value;  
    var confirmPassword = document.getElementById("confirmPassword").value;
    var successMessage = document.getElementById("success-message");

    if (email === "" || confirmEmail === "" || password === "" || confirmPassword === "") {
        successMessage.textContent = "Please Fill In All Fields.";
        successMessage.style.color = "red"; 
        setTimeout(function() {
            successMessage.textContent = "";
        }, 10000);
    } else if (email !== confirmEmail || password !== confirmPassword) {
        successMessage.textContent = "Emails or Passwords do not match.";
        successMessage.style.color = "red"; 
        setTimeout(function() {
            successMessage.textContent = "";
        }, 10000);
    } else if (password.length < 10 || !/[?!@,\/\\]/.test(password)) {
        successMessage.textContent = "Password must be at least 10 characters long and include special characters (?, !@, /, \\).";
        successMessage.style.color = "red";
        setTimeout(function() {
            successMessage.textContent = "";
        }, 10000);
    } else {
        successMessage.textContent = "CarChoice Pro Registration Successful!";
        successMessage.style.color = "red"; 
        sessionStorage.setItem("userEmail", email);
        sessionStorage.setItem("userPassword", password);
        setTimeout(function() {
            successMessage.textContent = "";
        }, 10000);
    }
}

passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;

    if (password.length < 10 || !/[?!@,\/\\]/.test(password)) {
        passwordMessage.textContent = "Password must be at least 10 characters long and include special characters (?, !@, /, \\).";
        passwordMessage.style.color = "red";
    } else {
        passwordMessage.textContent = "";
    }
});

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var eyeIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.innerHTML = "&#128064;"; 
    } else {
        passwordInput.type = "password";
        eyeIcon.innerHTML = "&#128065;"; 
    }
}

