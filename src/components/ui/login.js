import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import httpClient from "../../services/services";
import { ToastContainer, toast } from "react-toastify";
import { loadProgressBar } from 'axios-progress-bar'

import "react-toastify/dist/ReactToastify.css";
import 'axios-progress-bar/dist/nprogress.css'

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      httpClient
        .post("auth/login", { email, password })
        .then(({ data }) => {
          const { token, message } = data;
          if (token) {
            dispatch({
              type: types.login,
              payload: { token },
            });
            toast.success(message, {
              position: "top-center",
              autoClose: 1400,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              navigate("/private");
            }, 2000);
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        });
    },
  });

  useEffect(() => {
    loadProgressBar()
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
