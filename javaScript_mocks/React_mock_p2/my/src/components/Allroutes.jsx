import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../pages/Login";
import SignupForm from "../pages/Signup";
import Task from "../pages/Task";
import Navbar from "./Navbar";
const Allroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
