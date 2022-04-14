import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { dispatch } = useContext(AuthContext);
  let navigate = useNavigate();
  
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        logged: true,
      },
    });

    navigate("/private");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
