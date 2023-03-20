

function Navbar(){

let call = localStorage.getItem("login")



return ` <a href="./signup.html">SignUp</a>
<a id="logout">${call == "true"? "LOGOUT":"LOGIN"}</a>
<a id="blog">BlogPage</a>
<a id="add">Add blog page</a>
<a href="./Leader.html">Leaderboard</a>`


}
export default Navbar;

