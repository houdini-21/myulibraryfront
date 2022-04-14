import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, user, ...rest }) {
  const auth = user.logged;
  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
