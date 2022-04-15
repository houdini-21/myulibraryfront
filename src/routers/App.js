import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import HomeStudent from "../components/students/HomeStudent";
import HomeLibrarian from "../components/librarian/HomeLibrarian";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/ui/login";


const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/private"
          element={
            <PrivateRoute user={user}>
              <HomeStudent title="Home" />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
