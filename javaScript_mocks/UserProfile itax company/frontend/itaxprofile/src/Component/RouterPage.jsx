import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSide from "../AdminSide";
import Form from "../Form";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/admin" element={<AdminSide />}></Route>
    </Routes>
  );
};

export default RouterPage;
