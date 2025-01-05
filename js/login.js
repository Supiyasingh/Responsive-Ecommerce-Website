document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Fetch users from db.json
    fetch("https://wool-massive-beach.glitch.me/user")
        .then((response) => response.json())
        .then((users) => {
            const user = users.find(
                (u) => u.email === email && u.password === password
            );

            if (user) {
                alert("Login successful!");
                // Redirect to the women.html page
                window.location.href = "women.html"; // Replace with the actual path to women.html
            } else {
                alert("Invalid email or password. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
});

