import React from "react";

const Results = () => {
  return (
    <div className="results pt-4 grid grid-cols-1 gap-4 rounded-b-xl md:rounded-md">
      <div className="header items-center text-center">
        <h1 className="text-lightLavender font-bold text-3xl">Your result</h1>
      </div>

      {/* Circle */}
      <div className="circle flex items-center justify-center mx-auto rounded-full w-36 h-36 results">
        <h1 className="text-white text-xl items-center justify-center text-center">
          76 <br />
          <span className="pl-2 text-lightLavender ">out of 100</span>
        </h1>
      </div>
      <div className="rate flex flex-col justify-center items-center my-4">
        <h2 className="text-white text-3xl">Great</h2>
        <p className="text-center text-lightLavender mt-2 mx-6">
          Your performance exceeded 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};

export default Results;
