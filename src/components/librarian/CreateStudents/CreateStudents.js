import React, { useContext } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import httpClient from "../../../services/services";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";

const CreateStudents = () => {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      role: 2,
    },
    onSubmit: (values) => {
      httpClient
        .post("librarian/createUsers", values, {
          Authorization: `JWT ${user.token}`,
        })
        .then((res) => {
          const { message } = res.data;
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
            navigate("/librarian/");
          }, 2000);
          loadProgressBar();
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

  return (
    <div className="px-8 py-5 w-full">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-full justify-center items-center mt-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="focus:border-green focus:ring-1 focus:ring-green focus:outline-none
                    w-1/2
                    text-base text-black
                    placeholder-gray-500
                    border border-gray-200
                    rounded-md
                    py-2
                    px-2
                    my-4"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            className="focus:border-green focus:ring-1 focus:ring-green focus:outline-none
                    w-1/2
                    text-base text-black
                    placeholder-gray-500
                    border border-gray-200
                    rounded-md
                    py-2
                    px-2
                    my-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="focus:border-green focus:ring-1 focus:ring-green focus:outline-none
                    w-1/2
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
                    w-1/2
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
            className="focus:bg-primary-400 py-2 px-12 rounded bg-primary text-white mt-4 w-1/2"
          >
            Create
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateStudents;
