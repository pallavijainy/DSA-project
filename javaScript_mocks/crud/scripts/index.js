import Navbar from "../component/Navbar.js";

document.querySelector(".navbar").innerHTML = Navbar();

const form = document.querySelector("form");
const brand = document.querySelector("#brand");
const manual = document.querySelector("#manual");
const year = document.querySelector("#year");

const km = document.querySelector("#km");


const des = document.querySelector("#description");
const price = document.querySelector("#price");

const submit = document.querySelector("#submit");

form.addEventListener("submit", submitFun);

function submitFun(e) {
  e.preventDefault();
  let obj = {
    brand: brand.value,
    type: manual.value,
    year: year.value,
    km:km.value,
    description: des.value,
    price: price.value,
  };

     console.log(obj)

  fetch("https://revision3.onrender.com/mobile", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        alert("data added")
    })
    .catch((err) => console.log(err));
}
