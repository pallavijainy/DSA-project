import Navbar from "../component/Navbar.js";
import PrivateRoute from "../component/PrivateRoute.js";

document.querySelector(".navbar").innerHTML = Navbar();

const form = document.querySelector("form");

form.addEventListener("submit", myForm);


PrivateRoute()

function myForm(e){
    e.preventDefault();
    let username = form.username.value;
    let avatar = form.avatar.value;
    let email = form.email.value;
    let password = form.password.value;
  
    let obj = { username, avatar, email, password };
    console.log(obj)
  
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("register succesfully")
        // console.log(res)
        window.location.href="/signin.html"
      })
      .catch((err) => console.log(err));
}
