import React, { useEffect, useReducer } from "react";
import App from "./routers/App";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";


const init = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { logged: false };
  return user;
};

const MiULibrary = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <App />
    </AuthContext.Provider>
  );
};

export default MiULibrary;
