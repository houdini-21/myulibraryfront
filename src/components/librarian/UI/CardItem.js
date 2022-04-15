import React, { useContext } from "react";
import Moment from "react-moment";

const CardItem = ({
  idBook,
  title,
  author,
  publishedYear,
  genre,
  stock,
  dateRequest,
  dateReturn,
  userRequest,
  status,
  idUser
}) => {
  return (
    <div
      className="
          sm:h-56
          w-full
          md:w-1/2 lg:w-1/3 xl:w-1/3
          my-4
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
            <h1 className="text-lg font-normal mb-2 text-gray-600 font-sans">
              {title} - {publishedYear}
            </h1>
            <p className="text-sm text-indigo-300 mb-1 font-bold">
              Author: <span className="font-normal">{author}</span>
            </p>
            <p className="text-sm text-indigo-300 mb-1 font-bold">
              Genre: <span className="font-normal">{genre}</span>
            </p>
            {dateRequest && (
              <p className="text-sm text-indigo-300 mb-1 font-bold">
                Request date:
                <span className="font-normal">
                  <Moment format="YYYY-MM-DD HH:mm">{dateRequest}</Moment>
                </span>
              </p>
            )}
            {dateReturn && (
              <p className="text-sm text-indigo-300 mb-1 font-bold">
                Returned date:
                <span className="font-normal">
                  <Moment format="YYYY-MM-DD HH:mm">{dateReturn}</Moment>
                </span>
              </p>
            )}
            {dateRequest && (
              <p className="text-sm text-indigo-300 mb-1 font-bold">
                Status:
                <span className="font-normal">
                  {status ? "returned" : "provided"}
                </span>
              </p>
            )}

            {userRequest && (
              <p className="text-sm text-indigo-300 mb-1 font-bold">
                User:
                <span className="font-normal">{userRequest}</span>
              </p>
            )}
            {idUser && (
              <p className="text-sm text-indigo-300 mb-1 font-bold">
                User id:
                <span className="font-normal">{idUser}</span>
              </p>
            )}
          </div>
          <div className="w-full flex justify-between items-start flex-col">
            {stock != null && (
              <p className="font-bold text-gray-500">
                Stock:
                <span className="font-normal">
                  {stock === 0 ? "Out Stock" : stock}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
