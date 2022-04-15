import React, { useContext } from "react";
import httpClient from "../../../services/services";
import { AuthContext } from "../../../auth/AuthContext";

const Cards = ({ idBook, title, author, publishedYear, genre, stock }) => {
  const { user } = useContext(AuthContext);

  const requestBooking = (idBook) => {
    const body = {
      idBook,
      idStudent: user.id,
    };
    httpClient
      .post(`student/books/requestedBook`, body, {
        Authorization: `JWT ${user.token}`,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div
        className="
          sm:h-56
          w-full
          md:w-1/2 lg:w-1/3 xl:w-1/3
        "
      >
        <div
          className="
          bg-white
          shadow-md
          h-96
          rounded-3xl
          flex flex-col
          justify-center
          items-center
          overflow-hidden
          sm:flex-row 
          w-11/12 sm:h-56
          "
        >
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
            alt="image"
          />

          <div
            className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
        
            px-4
            sm:h-full sm:items-baseline sm:w-1/2
          "
          >
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                {title} - {publishedYear}
              </h1>
              <p className="text-sm text-indigo-300 mt-0 font-bold">
                Author: <span className="font-normal">{author}</span>
              </p>
              <p className="text-sm text-indigo-300 mt-0 font-bold">
                Genre: <span className="font-normal">{genre}</span>
              </p>
            </div>
            <div className="w-full flex justify-between items-start flex-col">
              <h3 className="font-bold text-gray-500">
                Stock:{" "}
                <span className="font-normal">
                  {stock == 0 ? "Out Stock" : stock}
                </span>
              </h3>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded mt-3.5 w-full disabled:bg-blue-300 disabled:hover:bg-blue-400 disabled:cursor-not-allowed"
                disabled={stock == 0}
                onClick={() => requestBooking(idBook)}
              >
                Rent
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
