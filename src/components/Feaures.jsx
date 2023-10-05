import React from "react";
import HeaderSub from "./HeaderSub";

const Feaures = () => {
  return (
    <div className="flex-container-col mt-6">
      <section className="flex-container flex-gap-6 mb-6">
        <div className="width-30 text-side">
          <h2>
            Everything You can do in a physical classroom you can do with
            e-series
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <a href="/">Learn more</a>
        </div>
        <div className="feature-play-image image-side">
          <svg
            width="158"
            height="158"
            viewBox="0 0 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_287)">
              <circle cx="79" cy="71" r="29" fill="white" />
              <path
                d="M91.0485 70.9999L73.0906 81.4648L73.0066 60.6804L91.0485 70.9999Z"
                fill="#F48C07"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_287"
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
                  result="effect1_dropShadow_1_287"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_287"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </section>
      <HeaderSub
        orangeText="Our"
        greenText="Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      />
      <section className="flex-container flex-gap-6 mb-6 ml-3 mr-2">
        <div className="customer-care-image image-side"></div>
        <div className="width-3 text-side">
          <h2 className="orange-text">
            A <span className="green-text">User interface</span> designed <br />
            for the classroom
          </h2>
          <div>
            <UserInterfaceMini />
            <UserInterfaceMini />
            <UserInterfaceMini />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Feaures;

function UserInterfaceMini() {
  //   const style = {
  //     width: "28.4375rem",
  //     height: "5rem",
  //     fontSize: "1rem",
  //     fontWeight: 500,
  //   };
  return (
    <div className="flex-container flex-gap ">
      <div>
        <svg
          width="100"
          height="100"
          filter="drop-shadow(0px 8px 50px rgba(0, 0, 0, 0.16))"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_328)">
            <g filter="url(#filter1_d_1_328)">
              <circle cx="71" cy="63" r="21" fill="white" />
            </g>
            <path
              d="M62.1 55H78.9C80.055 55 81 55.945 81 57.1V69.7C81 70.855 80.055 71.8 78.9 71.8H62.1C60.945 71.8 60 70.855 60 69.7V57.1C60 55.945 60.945 55 62.1 55Z"
              fill="#E0E0E0"
              stroke="#2BA89D"
              strokeWidth="2.14324"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M81 59L70.5 66.35L60 59" fill="#E0E0E0" />
            <path
              d="M81 59L70.5 66.35L60 59"
              stroke="#2BA89D"
              strokeWidth="2.14324"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_328"
              x="0"
              y="0"
              width="142"
              height="142"
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
                result="effect1_dropShadow_1_328"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_328"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_1_328"
              x="0"
              y="0"
              width="142"
              height="142"
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
                result="effect1_dropShadow_1_328"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_328"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqu.
      </p>
    </div>
  );
}
