// eslint-disable-next-line no-unused-vars
import React from "react";
//logos
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png"
import emailLogo from "../images/envelope-solid.png"
//styles
import "../styles/main.css"

function Header() {
  return (
    <>
      <header className="header-wrapper">
        <div className="personal-logo-wrapper">
          <p>LOGO GOES HERE</p>
        </div>
        <nav className="nav-wrapper">
          <a aria-labelledby="github-link" href="https://github.com/ctennant718">
            <img src={githubLogo} className="nav-logo" />
            <span id="github-link" hidden>Github Link</span>
          </a>
          <a aria-labelledby="linkedin-link" href="https://www.linkedin.com/in/charlotte-tennant-141b37274/">
            <img src={linkedInLogo} className="nav-logo" />
            <span id="linkedin-link" hidden>LinkedIn Link</span>
          </a>
          <a aria-labelledby="email-link" href="mailto:charlotte.tennant718@gmail.com">
            <img src={emailLogo} className="nav-logo email-logo" />
            <span id="email-link" hidden>Email Link</span>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
