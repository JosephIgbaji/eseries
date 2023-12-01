import React from "react";
import HeaderSub from "./HeaderSub";
import ButtonOutline from "./ButtonOutline";
// import Button from "./ButtonNav";

const WhatSection = () => {
  return (
    <div className="flex flex-col mt-3">
      <HeaderSub
        orangeText="What is"
        greenText="e-series"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      />
      <div className="flex flex-col gap-5 lg:flex-row mt-3">
        <div className="what-img-1 flex-container-col">
          <h3 className="text-2xl text-white">FOR INSTRUCTORS</h3>
          <ButtonOutline label="Start a class today" color="#fff" />
        </div>
        <div className="what-img-2 flex-container-col">
          <h3 className="text-2xl text-white">FOR STUDENTS</h3>
          <button>Enter access code</button>
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
