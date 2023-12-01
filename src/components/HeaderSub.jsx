import React from "react";

const HeaderSub = ({ orangeText, greenText, content }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="mb-2 text-4xl font-bold" style={{ color: "#2BA89D" }}>
          <span style={{ color: "#F58A06" }}>{orangeText} </span>
          {greenText}
        </h2>
      </div>
      <p className="w-[350px] md:w-[500px] px-1 text-center text-lg">
        {content}
      </p>
    </div>
  );
};

export default HeaderSub;
