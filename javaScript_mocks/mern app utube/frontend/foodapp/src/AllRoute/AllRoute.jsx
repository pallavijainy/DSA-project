import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'

const AllRoute = () => {
  return (
<>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    

</Routes>
</>
  )
}

export default AllRoute