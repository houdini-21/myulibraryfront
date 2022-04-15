import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/students/UI/Navbar";
import HomeStudent from "../components/students/Home/HomeStudent";

const RoutesStudent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeStudent />} />
      </Routes>
    </>
  );
};

export default RoutesStudent;
