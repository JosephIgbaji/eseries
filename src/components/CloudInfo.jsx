import React from "react";

const CloudInfo = ({ icon, heading, content }) => {
  return (
    <div className="cloud-info flex-container-col">
      <div className="cloud-info-icon">{icon}</div>
      <h2 className="mt-4">{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CloudInfo;
