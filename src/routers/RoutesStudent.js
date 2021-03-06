import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/students/UI/Navbar";
import HomeStudent from "../components/students/Home/HomeStudent";
import RequestStudent from "../components/students/Requests/RequestStudent";
import BooksDetails from "../components/students/BooksDetails/BooksDetails";

const RoutesStudent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeStudent />} />
        <Route path="request" element={<RequestStudent />} />
        <Route path="/details/:idBook" element={<BooksDetails />} />
        <Route path="*" element={<HomeStudent />} />
      </Routes>
    </>
  );
};

export default RoutesStudent;
