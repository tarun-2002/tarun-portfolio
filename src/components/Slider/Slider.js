import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";
const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000, // Increase the delay to 3000 milliseconds (3 seconds)
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={120}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="test-wrapper">
            <div className="test-img-wrapper">
              {" "}
              <img
                className="userImg"
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
              ></img>
            </div>

            <div className="user-wrapper">
              <h1>Dan Elkaim</h1>
              <p>CEO & Co-founder @Topo.io</p>
            </div>

            <div className="review-wrapper">
              <p>
                It was great to work with Kevin on a UI redesign of our product
                from A to Z. He is fast, accurate and expert on SaaS topics. I
                recommend him!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="linkdin-wrapper">
                <svg
                  style={{ display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_319_6170)">
                    <path
                      d="M0.21875 2.28823C0.21875 1.54384 0.829359 0.940032 1.58262 0.940032H17.311C18.0642 0.940032 18.6749 1.54384 18.6749 2.28823V18.4125C18.6749 19.1572 18.0642 19.7607 17.311 19.7607H1.58262C0.829359 19.7607 0.21875 19.1572 0.21875 18.4125V2.28823Z"
                      fill="#3963A4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.8118 16.6953V8.19671H3.02416V16.6953H5.8118ZM4.41797 7.03637C5.39007 7.03637 5.99513 6.38377 5.99513 5.56821C5.97701 4.7343 5.39007 4.09981 4.43641 4.09981C3.48284 4.09981 2.85938 4.7343 2.85938 5.56821C2.85938 6.38377 3.4643 7.03637 4.3998 7.03637H4.41797Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.35156 16.6943H10.1392V11.9484C10.1392 11.6944 10.1573 11.4406 10.2309 11.259C10.4324 10.7516 10.8911 10.226 11.6612 10.226C12.6699 10.226 13.0734 11.0053 13.0734 12.1478V16.6943H15.8608V11.8214C15.8608 9.21097 14.4855 7.99631 12.6515 7.99631C11.1476 7.99631 10.4874 8.84808 10.1206 9.42825H10.1392V8.19573H7.35164C7.38822 8.99318 7.35156 16.6943 7.35156 16.6943Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_319_6170">
                      <rect
                        width="19"
                        height="19.5"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="txt-wrapper-linkedin">LinkedIn</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <div className="test-img-wrapper">
              {" "}
              <img
                className="userImg"
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
              ></img>
            </div>

            <div className="user-wrapper">
              <h1>Dan Elkaim</h1>
              <p>CEO & Co-founder @Topo.io</p>
            </div>

            <div className="review-wrapper">
              <p>
                It was great to work with Kevin on a UI redesign of our product
                from A to Z. He is fast, accurate and expert on SaaS topics. I
                recommend him!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="linkdin-wrapper">
                <svg
                  style={{ display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_319_6170)">
                    <path
                      d="M0.21875 2.28823C0.21875 1.54384 0.829359 0.940032 1.58262 0.940032H17.311C18.0642 0.940032 18.6749 1.54384 18.6749 2.28823V18.4125C18.6749 19.1572 18.0642 19.7607 17.311 19.7607H1.58262C0.829359 19.7607 0.21875 19.1572 0.21875 18.4125V2.28823Z"
                      fill="#3963A4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.8118 16.6953V8.19671H3.02416V16.6953H5.8118ZM4.41797 7.03637C5.39007 7.03637 5.99513 6.38377 5.99513 5.56821C5.97701 4.7343 5.39007 4.09981 4.43641 4.09981C3.48284 4.09981 2.85938 4.7343 2.85938 5.56821C2.85938 6.38377 3.4643 7.03637 4.3998 7.03637H4.41797Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.35156 16.6943H10.1392V11.9484C10.1392 11.6944 10.1573 11.4406 10.2309 11.259C10.4324 10.7516 10.8911 10.226 11.6612 10.226C12.6699 10.226 13.0734 11.0053 13.0734 12.1478V16.6943H15.8608V11.8214C15.8608 9.21097 14.4855 7.99631 12.6515 7.99631C11.1476 7.99631 10.4874 8.84808 10.1206 9.42825H10.1392V8.19573H7.35164C7.38822 8.99318 7.35156 16.6943 7.35156 16.6943Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_319_6170">
                      <rect
                        width="19"
                        height="19.5"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="txt-wrapper-linkedin">LinkedIn</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <div className="test-img-wrapper">
              {" "}
              <img
                className="userImg"
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
              ></img>
            </div>

            <div className="user-wrapper">
              <h1>Dan Elkaim</h1>
              <p>CEO & Co-founder @Topo.io</p>
            </div>

            <div className="review-wrapper">
              <p>
                It was great to work with Kevin on a UI redesign of our product
                from A to Z. He is fast, accurate and expert on SaaS topics. I
                recommend him!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="linkdin-wrapper">
                <svg
                  style={{ display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_319_6170)">
                    <path
                      d="M0.21875 2.28823C0.21875 1.54384 0.829359 0.940032 1.58262 0.940032H17.311C18.0642 0.940032 18.6749 1.54384 18.6749 2.28823V18.4125C18.6749 19.1572 18.0642 19.7607 17.311 19.7607H1.58262C0.829359 19.7607 0.21875 19.1572 0.21875 18.4125V2.28823Z"
                      fill="#3963A4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.8118 16.6953V8.19671H3.02416V16.6953H5.8118ZM4.41797 7.03637C5.39007 7.03637 5.99513 6.38377 5.99513 5.56821C5.97701 4.7343 5.39007 4.09981 4.43641 4.09981C3.48284 4.09981 2.85938 4.7343 2.85938 5.56821C2.85938 6.38377 3.4643 7.03637 4.3998 7.03637H4.41797Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.35156 16.6943H10.1392V11.9484C10.1392 11.6944 10.1573 11.4406 10.2309 11.259C10.4324 10.7516 10.8911 10.226 11.6612 10.226C12.6699 10.226 13.0734 11.0053 13.0734 12.1478V16.6943H15.8608V11.8214C15.8608 9.21097 14.4855 7.99631 12.6515 7.99631C11.1476 7.99631 10.4874 8.84808 10.1206 9.42825H10.1392V8.19573H7.35164C7.38822 8.99318 7.35156 16.6943 7.35156 16.6943Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_319_6170">
                      <rect
                        width="19"
                        height="19.5"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="txt-wrapper-linkedin">LinkedIn</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test-wrapper">
            <div className="test-img-wrapper">
              {" "}
              <img
                className="userImg"
                src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/q-f9bd42b4.png.png?updatedAt=1698526291196"
              ></img>
            </div>

            <div className="user-wrapper">
              <h1>Dan Elkaim</h1>
              <p>CEO & Co-founder @Topo.io</p>
            </div>

            <div className="review-wrapper">
              <p>
                It was great to work with Kevin on a UI redesign of our product
                from A to Z. He is fast, accurate and expert on SaaS topics. I
                recommend him!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="linkdin-wrapper">
                <svg
                  style={{ display: "inline" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_319_6170)">
                    <path
                      d="M0.21875 2.28823C0.21875 1.54384 0.829359 0.940032 1.58262 0.940032H17.311C18.0642 0.940032 18.6749 1.54384 18.6749 2.28823V18.4125C18.6749 19.1572 18.0642 19.7607 17.311 19.7607H1.58262C0.829359 19.7607 0.21875 19.1572 0.21875 18.4125V2.28823Z"
                      fill="#3963A4"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.8118 16.6953V8.19671H3.02416V16.6953H5.8118ZM4.41797 7.03637C5.39007 7.03637 5.99513 6.38377 5.99513 5.56821C5.97701 4.7343 5.39007 4.09981 4.43641 4.09981C3.48284 4.09981 2.85938 4.7343 2.85938 5.56821C2.85938 6.38377 3.4643 7.03637 4.3998 7.03637H4.41797Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.35156 16.6943H10.1392V11.9484C10.1392 11.6944 10.1573 11.4406 10.2309 11.259C10.4324 10.7516 10.8911 10.226 11.6612 10.226C12.6699 10.226 13.0734 11.0053 13.0734 12.1478V16.6943H15.8608V11.8214C15.8608 9.21097 14.4855 7.99631 12.6515 7.99631C11.1476 7.99631 10.4874 8.84808 10.1206 9.42825H10.1392V8.19573H7.35164C7.38822 8.99318 7.35156 16.6943 7.35156 16.6943Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_319_6170">
                      <rect
                        width="19"
                        height="19.5"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="txt-wrapper-linkedin">LinkedIn</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
