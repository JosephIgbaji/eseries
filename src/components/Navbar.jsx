import React, { useState } from "react";
import Button from "./ButtonNav";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function handleToggle() {
    setShowMobileNav(!showMobileNav);
  }
  return (
    // <div className="navbar flex-container flex-sp-between">
    <div className="relative flex bg-green-700 justify-between w-screen h-[80px] items-center px-5">
      <div className="nav-logo text-white">Eseries</div>
      <div className="hidden lg:block text-white">
        <ul className="flex gap-5 text-lg">
          <li>Home</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Button value="Login" bgcol="#ffffff" color="#232323" />
        <Button value="Sign Up" bgcol="#2BA89D" color="#ffffff" />
      </div>
      <div className="lg:hidden">
        <svg
          onClick={handleToggle}
          className="cursor-pointer "
          width="40"
          height="34"
          viewBox="0 0 40 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33337 8.50001C3.33337 7.71761 4.07957 7.08334 5.00004 7.08334H35C35.9205 7.08334 36.6667 7.71761 36.6667 8.50001C36.6667 9.28241 35.9205 9.91668 35 9.91668H5.00004C4.07957 9.91668 3.33337 9.28241 3.33337 8.50001Z"
            fill="#fff"
          />
          <path
            d="M3.33337 17C3.33337 16.2176 4.07957 15.5833 5.00004 15.5833H35C35.9205 15.5833 36.6667 16.2176 36.6667 17C36.6667 17.7824 35.9205 18.4167 35 18.4167H5.00004C4.07957 18.4167 3.33337 17.7824 3.33337 17Z"
            fill="#fff"
          />
          <path
            d="M5.00004 24.0833C4.07957 24.0833 3.33337 24.7176 3.33337 25.5C3.33337 26.2824 4.07957 26.9167 5.00004 26.9167H35C35.9205 26.9167 36.6667 26.2824 36.6667 25.5C36.6667 24.7176 35.9205 24.0833 35 24.0833H5.00004Z"
            fill="#fff"
          />
        </svg>
      </div>
      {showMobileNav && (
        <div className="absolute right-4 top-20 z-10 flex gap-2 flex-col text-right">
          <div className="">
            <ul className="flex flex-col gap-2 text-lg">
              <li className="cursor-pointer pr-2 hover:bg-green-300 rounded-lg">
                Home
              </li>
              <li className="cursor-pointer pr-2 hover:bg-green-300 rounded-lg">
                Careers
              </li>
              <li className="cursor-pointer pr-2 hover:bg-green-300 rounded-lg">
                Blog
              </li>
              <li className="cursor-pointer pr-2 hover:bg-green-300 rounded-lg">
                About Us
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Button value="Login" bgcol="#ffffff" color="#232323" />
            <Button value="Sign Up" bgcol="#2BA89D" color="#ffffff" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
