// eslint-disable-next-line no-unused-vars
import React from "react";
import Charlotte from "../images/charlotte-image.jpeg";

function Intro() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-image-wrapper">
          <img
            className="intro-image"
            src={Charlotte}
            alt="Charlotte has shoulder-length brown hair and wears glasses. She is smiling for the camera."
          />
        </div>
        <div className="intro-text-wrapper">
          <h1 className="intro-headline">
            Hi! My name is Charlotte
          </h1>
          <p className="intro-text">
            I am software engineer specialising in JavaScript, React and Node.
          </p>
          <p className="intro-text">
            I couple this with proven project management and communication
            skills.
          </p>
          <div className="intro-links-wrapper">
            <a
              className="intro-link"
              href="https://www.linkedin.com/in/charlotte-tennant-141b37274/"
            >
              &#x2022; <span className="intro-link-individual">LinkedIn</span>{" "}
              &#x2022;{" "}
            </a>
            <a className="intro-link" href="https://github.com/ctennant718">
              <span className="intro-link-individual">GitHub</span> &#x2022;{" "}
            </a>
            <a className="intro-link" href="">
              <span className="intro-link-individual">CV</span> &#x2022;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
