//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const existingButton = document.getElementById('existing');

    // Check if credentials are saved in localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    });

    existingButton.addEventListener('click', function() {
        alert(`Logged in as ${savedUsername}`);
    });
});
