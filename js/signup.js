document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const password = document.getElementById("password").value;

    // Create a user object
    const user = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
    };

    // POST request to save user data to db.json
    fetch("https://wool-massive-beach.glitch.me/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((response) => {
        if (response.ok) {
            alert("Signup successful! Redirecting to login page...");
            // Redirect to the login page
            window.location.href = "login.html"; // Replace with the actual path to your login page
        } else {
            alert("Signup failed. Please try again.");
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});

