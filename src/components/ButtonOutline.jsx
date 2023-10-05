import React from "react";

const ButtonOutline = ({ label, color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <button style={style} className="btn-outline">
      {label}
    </button>
  );
};

export default ButtonOutline;
