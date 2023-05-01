import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <Link class="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
        
        
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar