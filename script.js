document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.querySelector('.login-form');
    const showLoginLink = document.getElementById('showLogin');
    const showSignupLink = document.getElementById('showSignup');
    const loginNav = document.getElementById('login-nav');

    // Toggle forms
    function flipToLogin() {
        loginFormContainer.classList.add('flipped');
    }

    function flipToSignup() {
        loginFormContainer.classList.remove('flipped');
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            flipToLogin();
        });
    }

    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            flipToSignup();
        });
    }

    if (loginNav) {
        loginNav.addEventListener('click', (e) => {
            e.preventDefault();
            flipToLogin();
        });
    }

    // Signup form validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let name = document.getElementById('Name').value.trim();
            let username = document.getElementById('UserName').value.trim();
            let password = document.getElementById('Password').value;
            let cpassword = document.getElementById('CPassword').value;
            let dob = document.getElementById('dob').value;
            let psp = document.getElementById('psp').files;
            let gender = document.querySelector('input[name="gender"]:checked');
            let termsChecked = document.getElementById('P1').checked;

            if (!name) {
                alert("Please enter your name");
                document.getElementById('Name').focus();
            } else if (!username) {
                alert("Please enter your username");
                document.getElementById('UserName').focus();
            } else if (!password) {
                alert("Please enter your password");
                document.getElementById('Password').focus();
            } else if (!cpassword) {
                alert("Please confirm your password");
                document.getElementById('CPassword').focus();
            } else if (password !== cpassword) {
                alert("Passwords do not match");
                document.getElementById('CPassword').focus();
            } else if (!dob) {
                alert("Please enter your date of birth");
                document.getElementById('dob').focus();
            } else if (psp.length === 0) {
                alert("Please upload your photo");
                document.getElementById('psp').focus();
            } else if (!gender) {
                alert("Please select your gender");
                document.querySelector('input[name="gender"]').focus();
            } else if (!termsChecked) {
                alert("Please agree to the Terms & Conditions");
                document.getElementById('P1').focus();
            } else {
                alert("Sign Up form submitted successfully!");
            }
        });
    }

    // Login form validation (a simple example)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let username = document.getElementById('login-username').value.trim();
            let password = document.getElementById('login-password').value;

            if (!username) {
                alert("Please enter your username");
                document.getElementById('login-username').focus();
            } else if (!password) {
                alert("Please enter your password");
                document.getElementById('login-password').focus();
            } else {
                alert("Login successful!");
            }
        });
    }
});