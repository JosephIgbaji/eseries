import React from "react";
// import svgBg from "../images/svg-hero-bg-new.png";
import book1 from "../images/diffColorbooks.png";
import Button from "./ButtonNav";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-text-width pt-4">
        {/* <img src={svgBg} width="100%" height="837" alt="svg background" /> */}
        <h1 className="green-text mb-3">
          One App, all of your <br /> exams in
          <span className="orange-text"> e-series</span>
        </h1>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="flex-container">
          <Button value="Join for free" bgcol="#2BA89D" color="#ffffff" />
          <span onClick={() => {}} className="flex-container">
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
            <p style={{ width: "15rem" }}>Watch how it works</p>
          </span>
        </div>
      </div>
      <div className="hero-books-1">
        <img src={book1} width="530px" alt="different color books" />
      </div>
    </div>
  );
};
export default Hero;
