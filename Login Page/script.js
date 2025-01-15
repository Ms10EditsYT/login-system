// Handle sign-up functionality
if (document.getElementById("signupForm")) {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        // Save user data to localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            document.getElementById("message").textContent = "Username already exists.";
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("message").style.color = "green";
            document.getElementById("message").textContent = "Sign-up successful! Redirecting to login...";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
    });
}

// Handle login functionality
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve user data from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            document.getElementById("message").style.color = "green";
            document.getElementById("message").textContent = "Login successful!";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to dashboard
            }, 1000);
        } else {
            document.getElementById("message").style.color = "red";
            document.getElementById("message").textContent = "Invalid username or password.";
        }
    });
}
