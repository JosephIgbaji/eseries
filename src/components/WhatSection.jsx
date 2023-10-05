import React from "react";
import HeaderSub from "./HeaderSub";
import ButtonOutline from "./ButtonOutline";
// import Button from "./ButtonNav";

const WhatSection = () => {
  return (
    <div className="flex-container-col mt-3">
      <HeaderSub
        orangeText="What is"
        greenText="e-series"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      />
      <div className="what-section-img flex-gap">
        <div className="what-img-1 flex-container-col">
          <h3>FOR INSTRUCTORS</h3>
          <ButtonOutline label="Start a class today" color="#fff" />
        </div>
        <div className="what-img-2 flex-container-col">
          <h3>FOR STUDENTS</h3>
          <button>Enter access code</button>
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
