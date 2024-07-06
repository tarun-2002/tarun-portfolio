import React from "react";
import "./Footer.css";
const Footer = () => {
  const icons = {
    twitter: (
      <svg
        className="s1mpson-twitter-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
      >
        <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
      </svg>
    ),
    github: (
      <svg
        className="s1mpson-github-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path>
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "64px", height: "64px" }}
        className="s1mpson-twitter-icon"
        viewBox="0 0 17 17"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  };
  return (
    <>
      <div className="footer-wrapper">
        <div className="function-footer-wrapper">
          <h1 className="function-text">How I function?</h1>
        </div>
        <div className="coffee-wrapper">
          <h1 className="coffee-text">Sippin' mild coffee to work hard</h1>
        </div>
        <div className="talk-wrapper">
          <h1 className="talk-text">Let's talk:</h1>
        </div>
        <div style={{ width: "254px", marginTop: "4px" }}>
          <h1 className="email-footer-text">tarunstar2002@gmail.com</h1>
        </div>
        <nav className="s1mpson">
          <a
            className="s1mpson-twitter"
            href="https://twitter.com/s1mpson4real"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.twitter}
          </a>
          <a
            className="s1mpson-github"
            href="https://github.com/s1mpson"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icons.github}
          </a>
          <a
            className="s1mpson-twitter"
            href="https://github.com/s1mpson"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "16px" }}
          >
            {icons.linkedin}
          </a>
        </nav>
      </div>
    </>
  );
};

export default Footer;
