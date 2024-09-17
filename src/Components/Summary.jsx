import React from "react";
import data from "../../data.json";

// Function to determine the background color based on the category

const getBackgroundColor = (category) => {
  switch (category) {
    case "Reaction":
      return "bg-red-50";
    case "Memory":
      return "bg-yellow-50";
    case "Verbal":
      return "bg-green-100";
    case "Visual":
      return "bg-blue-50";
    default:
      return "bg-gray-200";
  }
};

// Function to change the colour of the category based on the catgeory
const getCategoryColor = (category) => {
  switch (category) {
    case "Reaction":
      return "text-red-500"
    case "Memory":
      return "text-yellow-500"
    case "Verbal":
      return "text-green-500";
    case "Visual":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

const Summary = () => {
  return (
    <div className=" mx-8 md:mr-8 md:mx-0">
      <h1 className=" text-darkGrayBlue font-bold text-2xl py-4 ">Summary</h1>
      {data.map((result, index) => {
        return (
          <button
            key={index}
            className={`flex flex-row justify-between items-center border rounded-lg w-full mb-4 ${getBackgroundColor(result.category)}`}
          >
            <div className="reaction flex flex-row items-center">
              <img src={result.icon} alt="icon" className="h-12 w-12 px-4" />
              <h1 className={` ${getCategoryColor(result.category)}`}>
                {result.category}
              </h1>
            </div>
            <div className="score px-4">
              <p className="text-darkGrayBlue font-bold">
                {result.score}  <span className=" font-normal opacity-40"> / 100 </span>{" "}
              </p>
            </div>
          </button>
        );
      })}
      <div className="flex justify-center items-center">
        <button className=" text-white px-3 p-2 w-full md:w-1/2 rounded-full my-4 bg-darkGrayBlue hover:bg-blue-700">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Summary;
