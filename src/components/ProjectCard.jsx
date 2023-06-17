// eslint-disable-next-line no-unused-vars
import React from "react";
import githubLogo from "../images/github.png";

function ProjectCard({
  projectTitle,
  projectImage,
  projectUrl,
  projectDescription,
  gitHubUrl,
}) {
  return (
    <>
      <div className="project-card-container">
        <a href={projectUrl}>
          <img src={projectImage} className="project-image" />
        </a>
        <div className="project-card-text">
          <a href={projectUrl} className="project-title-link">
            <h2 className="project-title">{projectTitle}</h2>
          </a>
          <p className="project description">{projectDescription}</p>
          <div className="githib-link-wrapper">
            <a href={gitHubUrl} className="project-github-link">
              <img
                src={githubLogo}
                alt="A logo for Github"
                className="project-github-logo"
              />
            </a>
            <a href={gitHubUrl} className="card-github-button">
              <span>GitHub repo</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
