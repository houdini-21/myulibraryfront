import React, { useEffect, useState, useContext } from "react";
import httpClient from "../../../services/services";
import { AuthContext } from "../../../auth/AuthContext";
import Cards from "../UI/Cards";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import { loadProgressBar } from "axios-progress-bar";

const HomeStudent = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({});
  const { user } = useContext(AuthContext);

  const Formik = useFormik({
    initialValues: {
      title: "",
      publishedYear: "",
      genre: "",
      author: "",
    },
    onSubmit: (values) => {
      setBody(values);
      setPage(1);
      setBooks([]);
    },
  });

  const loadBooks = async () => {
    const { data } = await httpClient.post(
      `student/books/search/${page}`,
      body,
      {
        Authorization: `JWT ${user.token}`,
      }
    );
    setBooks((books) => books.concat(data.books));
    loadProgressBar();
  };

  useEffect(() => {
    loadBooks();
  }, [page, body]);

  return (
    <div className="px-8 py-5 w-full">
      <div className="flex flex-col items-center">
        <form
          onSubmit={Formik.handleSubmit}
          className="flex flex-col md:flex-row md:flex-wrap lg:flex-row xl:flex-row md:justify-between mb-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full md:w-48 lg:w-1/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full md:w-48 lg:w-1/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="publishedYear"
            placeholder="Published Year"
            className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full md:w-48 lg:w-1/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full md:w-48 lg:w-1/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            onChange={Formik.handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 md:w-full lg:w-1/6 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-row w-full flex-wrap justify-around mt-4 mb-4">
        {books.map((book) => (
          <Cards
            key={book._id}
            idBook={book._id}
            title={book.title}
            author={book.author}
            publishedYear={book.publishedYear}
            genre={book.genre}
            stock={book.stock}
          />
        ))}
      </div>
      <button
        className="border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 border-2 text-lg font-bold py-2 px-4 rounded w-full h-12 mt-4"
        onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
      <ToastContainer />
    </div>
  );
};

export default HomeStudent;
