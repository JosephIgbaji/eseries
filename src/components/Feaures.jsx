import React from "react";
import HeaderSub from "./HeaderSub";
import Button from "./ButtonNav";
import Femalestudent from "../images/femaleStudent.png";
import ItalyLacePool from "../images/italylace.png";
import zoomCall from "../images/zoom-call.png";
import whiteblackMen from "../images/white-black-men.png";
import ButtonOutline from "./ButtonOutline";
import newsImage from "../images/news-image.png";
import OneOne from "../images/one-one.png";
import TwoTwo from "../images/two-two.png";
import ThreeThree from "../images/three-three.png";

const Feaures = () => {
  return (
    <div className="flex flex-col items-center mt-6 text-center lg:text-left">
      <section className="flex flex-col items-center lg:flex-row gap-6 mb-6">
        <div className="w-[350px] md:w-[450px]">
          <h2 className="text-xl font-semibold mb-1">
            Everything You can do in a physical classroom you can do with
            e-series
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <a className="text-lg text-green-800" href="/">
            Learn more
          </a>
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

      <section className="flex flex-col items-center lg:flex-row gap-5 mt-1">
        <div className="customer-care-image image-side"></div>
        <div className="">
          <h2 className="orange-text text-2xl font-semibold">
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

      <section className="female-student flex flex-col-reverse gap-4 lg:flex-row">
        <div className="width-30 ">
          <h2 className="green-text text-4xl font-bold">
            <span className="orange-text">Tools</span> For Teachers <br /> And
            Learners
          </h2>
          <p className="text-lg md:text-xl px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur
          </p>
        </div>
        <div className="">
          <img src={Femalestudent} alt="female student with a phone" />
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 lg:flex-row mt-3 ml-3">
        <div className="lace-italy">
          <button>Question</button>
          <h2 className="mt-2 mb-2">
            True or false? This play <br /> takes lace in italy
          </h2>
          <img src={ItalyLacePool} alt="italy lace" />
          <div className="flex items-center lace-italy-overlay">
            <svg
              width="142"
              height="142"
              viewBox="0 0 142 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_215)">
                <circle cx="71" cy="63" r="21" fill="#5A72EE" />
                <path
                  d="M66.8562 58.2405H76.2642C76.911 58.2405 77.4402 58.7616 77.4402 59.3984V66.3455C77.4402 66.9823 76.911 67.5034 76.2642 67.5034H66.8562C66.2094 67.5034 65.6802 66.9823 65.6802 66.3455V59.3984C65.6802 58.7616 66.2094 58.2405 66.8562 58.2405Z"
                  stroke="white"
                  strokeWidth="2.14324"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M77.4402 60.9976L71.5602 65.0501L65.6802 60.9976"
                  stroke="white"
                  strokeWidth="2.14324"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_215"
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
                    result="effect1_dropShadow_1_215"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_215"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p>Your answer was sent successfully</p>
          </div>
        </div>
        <div className="text-side width-33 ml-6">
          <h2 className="orange-text mb-3">
            Assessments,
            <br />
            <span className="green-text">Quizzes</span>, Tests
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </section>

      <section className="flex-container ml-3 mr-3 flex-gap-6 mt-6 class-management">
        <div className="management-text-side width-33">
          <h2 className="green-text mb-2">
            Class Management
            <br />
            <span className="orange-text">Tools for Educators</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, consectetur
          </p>
        </div>
        <div className="class-management-image">
          <img src={zoomCall} alt="female student with a phone" />
        </div>
      </section>

      <section className="flex-container ml-3 mr-3 mb-4 flex-gap-6 mt-6">
        <div className="white-black-man-image">
          <img src={whiteblackMen} alt="white black men" />
        </div>
        <div className="width-33">
          <h2 className="orange-text mb-2">
            One-On-One
            <br />
            <span className="green-text">Discussion</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </section>

      <ButtonOutline label="See more features" color="#2BA89D" />

      <section className="flex-container ml-3 mr-3 mb-4 flex-gap-6 mt-6">
        <div className="educational-tools-image">
          {/* <img src={whiteblackMen} alt="white black men" /> */}
        </div>
        <div className="width-33">
          <h2 className="orange-text mb-3">
            200+ educational tools and platform <br />
            <span className="green-text">integrations</span>
          </h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <ButtonOutline label="See All Integrations" color="#2BA89D" />
        </div>
      </section>

      <section className="reviews">
        <div className="reviews-left-section">
          <h2>What They Say?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="review-image-section">
          <div className="review-overlay">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="review-inner-flex">
              <h3>John Lawrence</h3>
              <div>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>12 reviews at yelp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-resource flex-container-col">
        <div style={{ textAlign: "center", width: "50rem" }}>
          <h2 className="mb-2">Latest News and Resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="news-resource-grid mt-6">
          <div className="width-33">
            <img
              className="mb-2"
              src={newsImage}
              width="555px"
              alt="online news call"
            />
            <Button value="News" bgcol="#2BA89D" color="#ffffff" />
            <p className="mt-1 fs-1-25 width-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-1 mb-2 width-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/">Read more</a>
          </div>
          <div>
            <LatestNews
              photo={OneOne}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid."
            />
            <LatestNews
              photo={TwoTwo}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid."
            />
            <LatestNews
              photo={ThreeThree}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feaures;

const LatestNews = ({ photo, title, details }) => {
  return (
    <div className="width-35 flex-container flex-gap mb-2">
      <div style={{ width: "222px", height: "165px" }}>
        <img
          // style={{ imageSize: "contain" }}
          width="222px"
          height="165px"
          src={photo}
          alt={title}
        />
      </div>
      <div className="">
        <p className="mb-2 fs-1-25">{title}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1436 0L12.3887 6.90983H19.6541L13.7763 11.1803L16.0214 18.0902L10.1436 13.8197L4.2657 18.0902L6.51084 11.1803L0.63299 6.90983H7.89841L10.1436 0Z"
        fill="#FCA534"
      />
    </svg>
  );
};

function UserInterfaceMini() {
  return (
    <div className="flex items-center gap-3">
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
      <p className="w-[300px] md:w-[450px] text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqu.
      </p>
    </div>
  );
}
