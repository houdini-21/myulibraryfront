import Test from "react";

const test = () => {
  return (
    <div class="flex flex-row pt-4 justify-evenly items-start w-full flex-wrap">
      <div className="w-1/2 md:w-1/2 lg:w-1/4 my-3">
        <div className="flex flex-col w-10/12 mx-auto">
          <div className="w-full">
            <img
              className="rounded shadow-md object-cover w-full h-full"
              src="https://m.media-amazon.com/images/I/51TTNGsFeAL.jpg"
            />
          </div>
          <div class="flex flex-col mt-4">
            <p className="text-sm text-blue-500 font-bold">
              The Complete Web Developer in 2020: Zero to Mastery
            </p>
            <p className="text-sm text-gray-600 mt-3 font-light">
              by Daniela Rocha, Daniela Rocha, Daniela Rocha, Daniela Rocha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
