import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Data from "../Pages/Data";
import HomePage from "../Pages/HomePage";
import Reports from "../Pages/Reports";
import User from "../Pages/User";
import PrivateRoute from "./PrivateRoute";


const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route
        path="/data"
        element={
          <PrivateRoute>
            <Data />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/report"
        element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutePage;
