import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Link to={"/pokemon"}>Pokemon Page</Link>
      <Link to={"/types"}>Types Page</Link>
      <Link to={"/favourites"}>Favourites Page</Link>
    </>
  )
}

export default Navbar
