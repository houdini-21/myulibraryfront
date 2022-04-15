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
        <form onSubmit={Formik.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="publishedYear"
            placeholder="Published Year"
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={Formik.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="flex flex-row w-full flex-wrap justify-around">
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
      <ToastContainer />
    </div>
  );
};

export default HomeStudent;
