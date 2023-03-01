// Get the login form and button
const loginForm = document.querySelector("form");
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        alert("Login successful");
        localStorage.setItem("user", data.username);
        localStorage.setItem("token", user.email);
        window.location.href = "blog.html";
      } else {
        alert("Login failed");
      }
    });
});
