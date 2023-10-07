import React from "react";
import Button from "./ButtonNav";

const Footer = () => {
  return (
    <div className="footer flex-container-col pb-5">
      <div className="footer-data mb-4">
        <input type="email" placeholder="Your Email" />
        <Button value="Subscribe" bgcol="#ffffff" color="#232323" />
      </div>
      <p className="fs-1-25 mb-1">
        Careers | Privacy Policy | Terms & Conditions
      </p>
      <p className="fs-1-25">@2023 Eseries Technology Inc.</p>
    </div>
  );
};

export default Footer;
