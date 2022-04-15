import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import httpClient from "../../../services/services";
import CardItem from "../UI/CardItem";

const HomeLibrarian = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const getAllBooks = () => {
    httpClient
      .get(`librarian/getBooks/${page}`, {
        Authorization: `JWT ${user.token}`,
      })
      .then((res) => {
        setBooks((books) => books.concat(res.data.books));
      });
  };

  useEffect(() => {
    getAllBooks();
  }, [page]);

  return (
    <div className="px-8 py-5 w-full">
      <div className="flex flex-row w-full flex-wrap justify-around mt-4 mb-4">
        {books.map((book) => (
          <CardItem
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
    </div>
  );
};

export default HomeLibrarian;
