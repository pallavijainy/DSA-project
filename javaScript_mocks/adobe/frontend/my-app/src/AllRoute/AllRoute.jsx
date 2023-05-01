import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserForm from './../component/UserForm';
import Login from './../component/Login';
import UserList from '../component/UserList';

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/register' element={<UserForm/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/usersall' element={<UserList/>}></Route>
    </Routes>
  )
}

export default AllRoute