import React from "react";
import data from "../../data.json";

const Summary = () => {
  return (
    <div className=" mx-8 md:mr-10 md:mx-0">
      <h1 className=" text-darkGrayBlue font-bold text-2xl py-4">Summary</h1>
      {data.map((result, index) => {
        return (
          <button key={index} className="flex flex-row justify-between items-center border rounded-lg w-full mb-4">
            <div className="reaction flex flex-row items-center">
              <img src={result.icon} alt="icon" className="h-12 w-12 px-4" />
              <h1 className=" text-red-400">{result.category}</h1>
            </div>
            <div className="score px-4">
              <p>
                {result.score} / <span> 100 </span>{" "}
              </p>
            </div>
          </button>
        );
      })}
      <div className="flex justify-center items-center">
        <button className="results text-white px-3 p-2 w-full md:w-1/2 rounded-full my-4 hover:bg-darkGrayBlue">Continue</button>
      </div>
    </div>
  );
};

export default Summary;
