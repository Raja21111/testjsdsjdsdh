document.getElementById('login-btn').addEventListener('click', function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error-msg');

    // VULNERABILITY 1: Hardcoded Client-Side Authentication
    // Anyone can read this logic and see exactly what the valid credentials are.
    if (user === "admin" && pass === "AdminPass2026!") {
        error.innerText = "Login Successful! Redirecting...";
        
        // VULNERABILITY 2: The 'eval()' Sink (Remote Code Execution)
        // Instead of using a safe function, the dev uses eval() to "process" 
        // a success command. An attacker can type code into the username 
        // box to execute it.
        const command = "console.log('User " + user + " logged in')";
        eval(command); 
        
    } else {
        error.innerText = "Invalid Login!";
    }
});