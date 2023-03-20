import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/task">Task</Link>
    </div>
  );
};

export default Navbar;
