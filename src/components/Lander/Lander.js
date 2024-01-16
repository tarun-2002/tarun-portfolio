import React from "react";
import "./Lander.css";
const Lander = () => {
  return (
    <>
      <div className="lander-wrapper">
        <img
          src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/ellipse-left.png?updatedAt=1703216802174"
          alt="left-ellipse"
          className="ellipse-left"
        />
        <img
          src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/ellipse-right-top.png?updatedAt=1703216802166"
          alt="top-right-ellipse"
          className="ellipse-right-top"
        />
        <img
          src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/ellipse-right-bottom.png?updatedAt=1703216802171"
          alt="bottom-right-ellipse"
          className="ellipse-right-bottom"
        />
        <div className="blur-rect">
          <svg
            width="1440"
            height="1015"
            viewBox="0 0 1440 1015"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_1_1629)">
              <path
                d="M0 -9H1440V1015H0V-9Z"
                fill="#010101"
                fill-opacity="0.03"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1_1629"
                x="-26"
                y="-35"
                width="1492"
                height="1076"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="13" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_1629"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1_1629"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        {/* <img
          src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/Group%201171275224.png?updatedAt=1703302745384"
          alt="dev"
          className="dev-img"
        ></img> */}
        <div className="dev-img">
          <svg
            className="dev-shadow"
            width="164"
            height="184"
            viewBox="0 0 164 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="82"
              cy="92"
              rx="82"
              ry="92"
              fill="url(#paint0_radial_21_1625)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_21_1625"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(82 92) rotate(90) scale(92 82)"
              >
                <stop stop-color="#763CAC" />
                <stop offset="1" stop-color="#320F85" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            className="dev-shadow-2"
            width="111"
            height="112"
            viewBox="0 0 111 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="55.5174"
              cy="55.9836"
              rx="55.0719"
              ry="55.2854"
              fill="url(#paint0_radial_21_1627)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_21_1627"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(55.5174 55.9836) rotate(90) scale(55.2854 55.0719)"
              >
                <stop offset="0.177083" stop-color="white" />
                <stop offset="1" stop-color="#434343" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <img
            src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/image%201.png?updatedAt=1703304217410"
            alt="dev"
            className="dev"
          ></img>
        </div>
        <div className="oppurtunities-wrapper">
          <div className="oppurtunities">
            <svg
              className="oppurtunities-svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.301396">
                <path
                  d="M22.0635 11.5C22.0635 17.4118 17.2635 22.2118 11.3516 22.2118C5.43976 22.2118 0.639771 17.4118 0.639771 11.5C0.639771 5.58808 5.43976 0.788086 11.3516 0.788086C17.2635 0.788086 22.0635 5.58808 22.0635 11.5Z"
                  fill="#DB0000"
                />
              </g>
              <path
                d="M16.7892 11.4995C16.7892 14.5005 14.3526 16.937 11.3517 16.937C8.35073 16.937 5.91418 14.5005 5.91418 11.4995C5.91418 8.49856 8.35073 6.06201 11.3517 6.06201C14.3526 6.06201 16.7892 8.49856 16.7892 11.4995Z"
                fill="#DB0000"
              />
            </svg>
            <h1 className="oppurtnities-text">Available for Opportunities</h1>
          </div>
          <div className="name">
            <h1>Hi I am Tarun.</h1>
          </div>
          <div className="developer">
            <h1>Developer Based In India</h1>
          </div>
          <div className="lander-head">
            <h1>From concept to product, making ideas come to life.</h1>
          </div>
          <button className="connect-button">Let’s Connect</button>
        </div>
      </div>
    </>
  );
};

export default Lander;
