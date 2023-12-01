import React from "react";
import book1 from "../images/diffColorbooks.png";
import Button from "./ButtonNav";

const Hero = () => {
  return (
    <div className="bg-white flex flex-col-reverse items-center md:flex-row md:justify-between mt-3 w-screen px-3">
      <div className="text-center flex flex-col items-center md:text-left md:w-1/2 md:h-1/2 px-3">
        <h1 className="text-green-700 mb-3 text-5xl font-bold">
          One App, all of your exams in
          <span className="text-orange-600"> e-series</span>
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="flex items-center">
          <Button value="Join for free" bgcol="#2BA89D" color="#ffffff" />
          <span onClick={() => {}} className="flex items-center">
            <svg
              width="158"
              height="158"
              viewBox="0 0 158 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_22)">
                <circle cx="79" cy="71" r="29" fill="white" />
                <path
                  d="M91.0485 70.9999L73.0906 81.4648L73.0066 60.6804L91.0485 70.9999Z"
                  fill="#F48C07"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_22"
                  x="0"
                  y="0"
                  width="158"
                  height="158"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="25" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_22"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_22"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p className="hidden lg:block" style={{ width: "10rem" }}>
              Watch how it works
            </p>
          </span>
        </div>
      </div>
      <div className="self-center">
        <img src={book1} width="" alt="different color books" />
      </div>
    </div>
  );
};
export default Hero;
