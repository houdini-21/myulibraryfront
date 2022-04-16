import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import httpClient from "../../../services/services";
import { loadProgressBar } from "axios-progress-bar";
import CardItem from "../UI/CardItem";

const RequestsBooks = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({});
  const { user } = useContext(AuthContext);
  const [numPages, setNumPages] = useState(1);

  const loadBooks = async () => {
    httpClient
      .post(`librarian/getRequestedBooks/${page}`, body, {
        Authorization: `JWT ${user.token}`,
      })
      .then((res) => {
        setBooks((books) => books.concat(res.data.books));
        setNumPages(res.data.numPages);
        console.log(res.data.books);
        loadProgressBar();
      });
  };

  const loadMore = () => {
    if (page < numPages) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [page, body]);

  return (
    <div className="px-8 py-5 w-full">
      <div className="flex flex-row w-full flex-wrap justify-around mt-4 mb-4">
        {books.map((book) => (
          <CardItem
            key={book._id}
            idBook={book._id}
            title={book.idBook.title}
            author={book.idBook.author}
            publishedYear={book.idBook.publishedYear}
            genre={book.idBook.genre}
            dateRequest={book.dateRequest}
            status={book.status}
            dateReturn={book.dateReturn}
            userRequest={book.idStudent.name}
            idUser={book.idStudent._id}
          />
        ))}
      </div>
      {page < numPages && (
        <button
          className="border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 border-2 text-lg font-bold py-2 px-4 rounded w-full h-12 mt-4"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default RequestsBooks;
