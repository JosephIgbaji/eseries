import React from "react";

const Button = ({ value, bgcol, color }) => {
  const style = {
    backgroundColor: bgcol,
    color: color,
  };
  return (
    <div>
      <button className="btn-nav" style={style}>
        {value}
      </button>
    </div>
  );
};

export default Button;
