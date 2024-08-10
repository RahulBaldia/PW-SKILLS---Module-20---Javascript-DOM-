document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length >= 3 && password.length >= 8) {
        alert("Form Validation Successful!");
    } else {
        alert("Form Validation Failed!");
    }
});
