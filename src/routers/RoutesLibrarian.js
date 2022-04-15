import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLibrarian from "../components/librarian/HomeLibrarian";

const RoutesLibrarian = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLibrarian />} />
    </Routes>
  );
};

export default RoutesLibrarian;
