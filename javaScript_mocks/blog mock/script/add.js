import Navbar from "../component/Navbar.js";
import PrivateRoute from "../component/PrivateRoute.js";

document.querySelector(".navbar").innerHTML = Navbar();

PrivateRoute();

const form = document.querySelector("form");

form.addEventListener("submit", myForm);

let getname = localStorage.getItem("user");

form.username.value = getname;
function myForm(e) {
  e.preventDefault();
  let username = form.username.value;

  let content = form.content.value;
  let category = form.category.value;
  let date = form.date.value;
  let comments = [];
  let likes = 0;

  let obj = { username, content, category, date, comments, likes };
  console.log(obj);

  fetch("http://localhost:8000/blogs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => {
      alert("post succesfully");
      // console.log(res)
    })
    .catch((err) => console.log(err));
}
