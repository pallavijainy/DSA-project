import Navbar from "../component/Navbar.js";
import PrivateRoute from "../component/PrivateRoute.js";

document.querySelector(".navbar").innerHTML = Navbar();

PrivateRoute()