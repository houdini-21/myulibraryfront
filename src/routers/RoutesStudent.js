import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeStudent from "../components/students/HomeStudent";

const RoutesStudent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeStudent title="Home" />} />
    </Routes>
  );
};

export default RoutesStudent;
