const apiUrl = "http://localhost:5000/api/users";

// Register a new user
async function register() {
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    alert(result.message);
}

// Login user
async function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (response.ok) {
        alert("Login successful");
        // console.log("Token:", result.token); // Use the token for subsequent requests
    } else {
        alert(result.message);
    }
}

// Forgot password
async function forgotPassword() {
    const email = document.getElementById("forgotEmail").value;

    const response = await fetch(`${apiUrl}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });
    console.log(`${apiUrl}/forgot-password`);


    const result = await response.json();
    alert(result.message);
}