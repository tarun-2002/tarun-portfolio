import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="title-wrapper">
        <h1 className="title">WORK EXPERIENCE</h1>
      </div>
      <div className="experience">
        <div className="experience-block mb-8">
          <div className="experience-item">
            <div class="flex items-center mt-2">
              <img
                src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/Group%202(2).png?updatedAt=1703818945275"
                alt="Your Image"
                className="max-w-full h-auto"
              ></img>
              <div class="ml-4">
                <span className="inline-block expi-title">
                  <h1>
                    Trusthive - <i>Full Stack Engineer</i>
                  </h1>
                </span>
                <span className="expi-dur">June 2023 – Dec 2023</span>
                <ul
                  style={{ listStyleType: "disc" }}
                  class="text-base expi-info mt-4"
                >
                  <li>
                    Lead the design and implementation of a cutting-edge threat
                    identification platform using ReactJS for dynamic front-end
                    interfaces, ReactFlow for data visualizations, and
                    NodeJS/ExpressJS for robust back-end functionalities.
                  </li>
                  <li>
                    Deployed and managed application infrastructure on Amazon
                    EC2 for high availability. Utilized DynamoDB for scalable
                    data storage, improving system performance.{" "}
                  </li>
                  <li>
                    Achieved a 20% reduction in system response time through
                    strategic optimizations, contributing to the success and
                    positive user feedback of the product.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-block mb-8">
          <div className="experience-item">
            <div class="flex items-center mt-2">
              <img
                src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/Group%202%20(1).png?updatedAt=1720865090038"
                alt="Your Image"
                style={{ width: "136.98px", height: "105.03px" }}
                className="max-w-full h-auto"
              ></img>
              <div class="ml-4">
                <span className="inline-block expi-title">
                  <h1>
                    Gamer’s Burnout - <i>Web Developer</i>
                  </h1>
                </span>
                <span style={{ marginLeft: "350px" }} className="expi-dur">
                  March 2023 – May 2023
                </span>
                <ul
                  style={{ listStyleType: "disc" }}
                  class="text-base expi-info mt-4"
                >
                  <li>
                    Led development of the website with ReactJS, MongoDB,
                    ExpressJS, ThreeJS, and NodeJS. Built and managed a Seat
                    Booking System, optimizing cafe operations and customer
                    experience.
                  </li>
                  <li>
                    Employed Figma for UI/UX design, crafting visually appealing
                    and intuitive interfaces through iterative user testing,
                    ultimately driving a successful launch and achieving a
                    remarkable 60% increase in user engagement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-block mb-8">
          <div className="experience-item">
            <div class="flex items-center mt-2">
              <img
                src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/Group%202%20(2).png?updatedAt=1721020773818"
                alt="Your Image"
                style={{ width: "136.98px", height: "105.03px" }}
                className="max-w-full h-auto"
              ></img>
              <div class="ml-4">
                <span className="inline-block expi-title">
                  <h1>
                    Sea’s Connection - <i>Web Developer</i>
                  </h1>
                </span>
                <span style={{ marginLeft: "350px" }} className="expi-dur">
                  Nov 2022 – Feb 2023
                </span>
                <ul
                  style={{ listStyleType: "disc" }}
                  class="text-base expi-info mt-4"
                >
                  <li>
                    Spearheaded the creation of marketing website with ReactJS,
                    Node.js, Express.js, and MongoDB. Enhanced performance and
                    user experience through optimizations.
                  </li>
                  <li>
                    Increased customer reach by integrating strategic features,
                    creating an engaging platform for positive user experience.
                    Applied innovative solutions to enhance interactivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
