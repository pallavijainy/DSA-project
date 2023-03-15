import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();
const form = document.querySelector("form");
const brand = form.querySelector("#brand");
const transmission = form.querySelector("#transmission");
const year = form.querySelector("#year");
const km = form.querySelector("#km");
const description = form.querySelector("#description");
const price = form.querySelector("#price");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    brand.value === "" ||
    transmission.value === "" ||
    year.value === "" ||
    km.value === "" ||
    description.value === "" ||
    price.value === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const ad = {
    brand: brand.value,
    transmission: transmission.value,
    year: year.value,
    km: km.value,
    description: description.value,
    price: price.value,
  };
  fetch("https://mock-link.onrender.com/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("car added sucessfully");
      //   document.querySelector("form").reset();
    })
    .catch((err) => {
      console.log("error", err);
    });
  //   console.log(ad);
});
