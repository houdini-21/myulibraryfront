import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/librarian/UI/Navbar";
import HomeLibrarian from "../components/librarian/Home/HomeLibrarian";

const RoutesLibrarian = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLibrarian />} />
        <Route path="/createStudents" element={<HomeLibrarian />} />
        <Route path="/createBooks" element={<HomeLibrarian />} />
        <Route path="*" element={<HomeLibrarian />} />
      </Routes>
    </>
  );
};

export default RoutesLibrarian;
