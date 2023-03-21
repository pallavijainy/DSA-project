import Navbar from "../component/Navbar.js";
import PrivateRoute from "../component/PrivateRoute.js";

document.querySelector(".navbar").innerHTML = Navbar();

PrivateRoute();

const form = document.querySelector("form");

form.addEventListener("submit", myForm);

function myForm(e) {
  e.preventDefault();
  let email = form.email.value;
  let password = form.password.value;

  fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((res) => {
      let user = res.find((el) => el.email == email && el.password == password);
      console.log(user);

      if (user) {
        localStorage.setItem("login", true);
        localStorage.setItem("user", user.username);
        alert("login success");
        window.location.href = "/BlogPage.html";
      } else {
        alert("login failed");
      }
    })
    .catch((err) => console.log(err));
}
