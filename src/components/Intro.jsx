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
          <h1 className="intro-headline">Hi! I&apos;m Charlotte</h1>
          <p className="intro-text">
            I am a software engineer specialising in JavaScript, React and Node.
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
              <span className="intro-link-individual linked-in-link">
                LinkedIn
              </span>
            </a>
            <a className="intro-link" href="https://github.com/ctennant718">
              <span className="intro-link-individual git-hub-link">GitHub</span>
            </a>
            <a className="intro-link" href="src/assets/charlottetennant.pdf" download>
              <span className="intro-link-individual cv-link">CV</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
