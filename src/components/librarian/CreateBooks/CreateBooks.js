import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import httpClient from "../../../services/services";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";

const CreateBooks = () => {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publishedYear: "",
      genre: "",
      stock: "",
    },
    onSubmit: (values) => {
      httpClient
        .post("librarian/add", values, {
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
          console.log(err);
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
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            value={formik.values.title}
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
            name="author"
            placeholder="Author"
            onChange={formik.handleChange}
            value={formik.values.author}
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
            name="publishedYear"
            placeholder="Published Year"
            onChange={formik.handleChange}
            value={formik.values.publishedYear}
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
            name="genre"
            placeholder="Genre"
            onChange={formik.handleChange}
            value={formik.values.genre}
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
            name="stock"
            placeholder="Stock"
            onChange={formik.handleChange}
            value={formik.values.stock}
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
            className="focus:bg-primary-400 py-2 px-12 rounded bg-primary text-white mt-4"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBooks;
