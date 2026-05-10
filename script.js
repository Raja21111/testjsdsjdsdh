document.getElementById('login-btn').addEventListener('click', function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error-msg');

    if (user === "admin" && pass === "AdminPass2026!") {
        error.innerText = "Login Successful! Redirecting...";

        const command = "console.log('User " + user + " logged in')";
        eval(command); 
        
    } else {
        error.innerText = "Invalid Login!";
    }
});
