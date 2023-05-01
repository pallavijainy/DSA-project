import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../component/Admin'
import Gallery from '../component/Gallery'
import Home from '../component/Home'

const RouterPage = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/data' element={<Admin/>}></Route>
    </Routes>
  )
}

export default RouterPage