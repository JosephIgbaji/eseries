import React from "react";
import Button from "./ButtonNav";

const Navbar = () => {
  return (
    <div className="navbar flex-container flex-sp-between">
      <div className="nav-logo">Logo</div>
      <div>
        <ul className="flex-container nav-links">
          <li>Home</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="flex-container nav-btn-links">
        <Button value="Login" bgcol="#ffffff" color="#232323" />
        <Button value="Sign Up" bgcol="#2BA89D" color="#ffffff" />
      </div>
    </div>
  );
};

export default Navbar;
