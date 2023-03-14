import Navbar from "../components/Navbar.js";
import WishAppend from "../utils/WishAppend.js";

document.getElementById("Navbar").innerHTML = Navbar();

let localstorage = JSON.parse(localStorage.getItem("wishlist")) || []
// console.log(localstorage)


WishAppend(localstorage)