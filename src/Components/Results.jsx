import React from "react";

const Results = () => {
  return (
    <div className="results pt-16 items-center flex flex-col justify-center rounded-b-xl md:rounded-md">
      <h1 className="text-lightLavender font-bold text-2xl pb-4">
        Your result
      </h1>
      {/* Circle */}
      <div className="circle rounded-full w-32 h-32 results flex items-center justify-center">
        <h1 className="text-white text-xl text-center">
          76 <br />
          <span className="pl-2 text-lightLavender ">out of 100</span>
        </h1>
      </div>
      <div className="rate flex flex-col justify-center items-center my-4">
        <h2 className="text-white text-2xl">Great</h2>
        <p className="text-center text-lightLavender mt-2 mx-16">
          Your performance exceeded 65% of the people conducting the test here.
        </p>
      </div>
    </div>
  );
};

export default Results;
