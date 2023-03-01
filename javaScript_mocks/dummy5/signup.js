const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    // Check if the user already exists
    const response = await fetch(
      `http://localhost:3000/users?email=${user.email}`
    );
    const existingUser = await response.json();

    if (existingUser.length > 0) {
      alert("User already exists!");
      return;
    }

    // Add the new user
    const addUserResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (addUserResponse.ok) {
      alert("Registration successful!");
      window.location.href = "signin.html";
    } else {
      alert("Registration failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Registration failed.");
  }
});
