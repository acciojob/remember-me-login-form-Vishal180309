document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block";
    }

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for demo purposes

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberCheckbox.checked) {
            // Save credentials
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        }

        alert("Logged in successfully!");
    });

    // Handle login as existing user
    existingButton.addEventListener("click", function () {
        if (savedUsername && savedPassword) {
            usernameInput.value = savedUsername;
            passwordInput.value = savedPassword;
            alert("Logged in as existing user!");
        }
    });
});
