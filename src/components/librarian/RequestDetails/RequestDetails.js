import React from "react";

const RequestDetails = () => {
  return (
    <div className="px-8 py-5 w-screen h-screen">
      <div className="lg:w-9/10 w-full p-8 flex flex-col lg:flex-row lg:h-96 h-auto mx-auto justify-evenly">
        <div className="lg:w-5/12 w-full">
          <img
            className="w-full lg:h-full h-64 object-cover lg:rounded-l-lg mb-4 lg:mb-0"
            src="https://picsum.photos/200/300"
          />
        </div>
        <div className="lg:w-5/12 h-full w-full">
          <div className="flex flex-col h-full justify-between">
            <h3 className="text-2xl font-bold">
              The Lord of the Rings: The Fellowship of the Ring
            </h3>
            <p className="text-gray-600 text-base">
              author: J.R.R. Tolkien, Genre: Collins, Year: 1954
            </p>
            <p className="text-gray-600 text-base">
              Request date: 2020-05-05, Return date: 2020-05-10
            </p>
            <p className="text-gray-600 text-base">
              Status: <span className="text-green-500">approved</span>
            </p>
            <p className="text-gray-600 text-base">
              Student: <span className="text-green-500">John Doe</span>
            </p>

            <button className="border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 border-2 text-lg font-bold py-2 px-4 rounded w-full h-12 mt-4">
              Return book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
