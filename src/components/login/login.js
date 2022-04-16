import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import httpClient from "../../services/services";
import { ToastContainer, toast } from "react-toastify";
import { loadProgressBar } from "axios-progress-bar";
import avatar from "./assets/avatar-login.svg";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import "axios-progress-bar/dist/nprogress.css";
import "./assets/login.css";

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
            const { userId, role } = jwt_decode(token);
            dispatch({
              type: types.login,
              payload: { token, email, userId, role },
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
              if (role === 1) {
                navigate("/librarian");
              } else {
                navigate("/student");
              }
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
    loadProgressBar();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-login">
      <div className="w-auto h-auto px-9 py-8">
        <form
          onSubmit={formik.handleSubmit}
          className="h-full flex flex-col justify-evenly items-center"
        >
          <img className="w-32 h-32 my-3" src={avatar} alt="logo" />
          <h3 className="text-center my-3 text-3xl text-gray-900 font-semibold">
            Welcome back!
          </h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="focus:border-green focus:ring-1 focus:ring-green focus:outline-none
            w-full
            text-base text-black
            placeholder-gray-500
            border border-gray-200
            rounded-md
            py-2
            px-2
            my-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="focus:border-green focus:ring-1 focus:ring-green focus:outline-none
            w-full
            text-base text-black
            placeholder-gray-500
            border border-gray-200
            rounded-md
            py-2
            px-2
            my-4"
          />
          <button
            type="submit"
            className="focus:bg-primary-400 py-2 px-12 rounded bg-primary text-white mt-4"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
