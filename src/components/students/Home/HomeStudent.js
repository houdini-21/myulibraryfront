import React, { useEffect, useState, useContext } from "react";
import httpClient from "../../../services/services";
import { AuthContext } from "../../../auth/AuthContext";
import Cards from "../UI/Cards";
import { ToastContainer } from "react-toastify";
import { loadProgressBar } from "axios-progress-bar";

const HomeStudent = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const body = {};

    httpClient
      .post(`student/books/search/${page}`, body, {
        Authorization: `JWT ${user.token}`,
      })
      .then((res) => {
        setBooks((books) => books.concat(res.data.books));
        loadProgressBar();
      });
    console.log(books);
  }, [page]);

  return (
    <div className="px-8 py-5 w-full">
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
