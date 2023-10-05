import React from "react";

const HeaderSub = ({ orangeText, greenText, content }) => {
  return (
    <div className="header-sub flex-container-col">
      <div>
        <h2 style={{ color: "#2BA89D" }}>
          <span style={{ color: "#F58A06" }}>{orangeText} </span>
          {greenText}
        </h2>
      </div>
      <p className="header-sub-content">{content}</p>
    </div>
  );
};

export default HeaderSub;
