import Navbar from "./navbar.js";

document.getElementById("nav").innerHTML = Navbar()


const url =
"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

fetch(url)
.then((res) => res.json())
.then((res) => console.log(res.data))
.catch((err) => console.log(err));