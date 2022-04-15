import React, { useContext, useEffect, useState } from "react";
import httpClient from "../../../services/services";
import { AuthContext } from "../../../auth/AuthContext";
import { loadProgressBar } from "axios-progress-bar";
import { toast } from "react-toastify";
import CardItem from "../UI/CardItem";

const RequestStudent = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const requestBookingHistory = () => {
    const body = {
      idStudent: user.userId,
    };
    httpClient
      .post(`student/books/myrequests/${page}`, body, {
        Authorization: `JWT ${user.token}`,
      })
      .then((res) => {
        setBooks((books) => books.concat(res.data.books));
        loadProgressBar();
      });
  };

  useEffect(() => {
    requestBookingHistory();
  }, [page]);

  return (
    <div className="px-8 py-5 w-full">
      <div className="flex flex-row w-full flex-wrap justify-around mt-4 mb-4">
        {books.map((book) => (
          <CardItem
            key={book._id}
            idBook={book.idBook._id}
            title={book.idBook.title}
            author={book.idBook.author}
            publishedYear={book.idBook.publishedYear}
            genre={book.idBook.genre}
            dateRequest={book.dateRequest}
            status={book.status}
            dateReturn={book.dateReturn}
          />
        ))}
      </div>
      <button
        className="border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 border-2 text-lg font-bold py-2 px-4 rounded w-full h-12 mt-4"
        onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
    </div>
  );
};

export default RequestStudent;
