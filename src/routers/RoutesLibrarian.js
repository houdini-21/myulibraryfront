import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/librarian/UI/Navbar";
import HomeLibrarian from "../components/librarian/Home/HomeLibrarian";
import CreateStudents from "../components/librarian/CreateStudents/CreateStudents";
import RequestsBooks from "../components/librarian/RequestedsBooks/RequestedsBooks";
import CreateBooks from "../components/librarian/CreateBooks/CreateBooks";
import RequestsDetails from "../components/librarian/RequestDetails/RequestDetails";
import BooksDetails from "../components/librarian/BooksDetails/BooksDetails";
import Test from "../components/librarian/Test"

const RoutesLibrarian = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLibrarian />} />
        <Route path="/createStudents" element={<CreateStudents />} />
        <Route path="/createBooks" element={<CreateBooks />} />
        <Route path="/requestedsBooks" element={<RequestsBooks />} />
        <Route path="/requestdetail/:idRequest" element={<RequestsDetails />} />
        <Route path="/booksdetail/:idBook" element={<BooksDetails />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<HomeLibrarian />} />
      </Routes>
    </>
  );
};

export default RoutesLibrarian;
