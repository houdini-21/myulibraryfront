import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/librarian/UI/Navbar";
import HomeLibrarian from "../components/librarian/Home/HomeLibrarian";
import CreateStudents from "../components/librarian/CreateStudents/CreateStudents";
import RequestsBooks from "../components/librarian/RequestedsBooks/RequestedsBooks";
import CreateBooks from "../components/librarian/CreateBooks/CreateBooks";

const RoutesLibrarian = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLibrarian />} />
        <Route path="/createStudents" element={<CreateStudents />} />
        <Route path="/createBooks" element={<CreateBooks />} />
        <Route path="/requestedsBooks" element={<RequestsBooks />} />
        <Route path="*" element={<HomeLibrarian />} />
      </Routes>
    </>
  );
};

export default RoutesLibrarian;
