import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (
    <div>
      <header className="fixed-header nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              onClick={() => handleButtonClick("Work")}
              className={`nav-button ${
                clickedButton === "Work" ? "clicked" : ""
              }`}
            >
              <Link
                smooth
                exact
                to="#work"
                className="nav-link"
                activeClassName="active"
              >
                Work
              </Link>
            </button>
          </li>

          <li className="nav-item">
            <button
              onClick={() => handleButtonClick("About Me")}
              className={`nav-button ${
                clickedButton === "About Me" ? "clicked" : ""
              }`}
            >
              <Link
                smooth
                to="#about"
                className="nav-link"
                activeClassName="active"
              >
                About Me
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleButtonClick("Testimonials")}
              className={`nav-button ${
                clickedButton === "Testimonials" ? "clicked" : ""
              }`}
            >
              <Link
                smooth
                to="#testimonial"
                className="nav-link"
                activeClassName="active"
              >
                Testimonials
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleButtonClick("Contact")}
              className={`nav-button ${
                clickedButton === "Contact" ? "clicked" : ""
              }`}
            >
              <Link
                smooth
                to="#contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handleButtonClick("Resume")}
              className={`nav-button ${
                clickedButton === "Resume" ? "clicked" : ""
              }`}
            >
              <NavLink
                smooth
                to="https://drive.google.com/file/d/1c7DGA_6FDbs28mPhPT-MBTKtUF4oTOTd/view?usp=sharing"
                className="nav-link"
                activeClassName="active"
              >
                Resume
              </NavLink>
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
