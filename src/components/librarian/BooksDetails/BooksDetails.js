import React from "react";

const BooksDetails = () => {
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
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3">
              The Lord of the Rings: The Fellowship of the Ring
            </h3>
            <p className="text-gray-600 text-base mb-3">author: J.R.R. Tolkien</p>
            <p className="text-gray-600 text-base mb-3">Genre: Collins</p>
            <p className="text-gray-600 text-base">Year: 1954</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
