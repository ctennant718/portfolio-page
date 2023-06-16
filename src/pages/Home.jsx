// eslint-disable-next-line no-unused-vars
import React from "react";
//components
import Header from "../components/Header";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
//styles
import "../styles/main.css";
//images
import shopfrontImage from "../images/shopfront-project.jpeg";
import hangman from "../images/hangman.png";

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <div className="project-cards-wrapper">
        <ProjectCard
          projectTitle="Go Outdoors!"
          projectImage={shopfrontImage}
          projectUrl="https://nextjs-shopfront-project.vercel.app/"
          projectDescription="This full-stack app is perfect for all your hiking needs. Built using Next.js, React, MongoDB, TanStack Query, GraphQL and with Auth0 for authenticaiton. The perfect representation of everything I've learnt."
          gitHubUrl="https://github.com/ctennant718/nextjs-shopfront-project"
        />
        <ProjectCard
          projectTitle="Hangman"
          projectImage={hangman}
          projectUrl="https://typescript-hangman-ochre.vercel.app/"
          projectDescription="The familiar word game, created using React and TypeScript. Can you guess the word?"
          gitHubUrl="https://github.com/ctennant718/typescript-hangman"
        />
        <ProjectCard
          projectTitle="A 90s classic!"
          projectImage={hangman}
          projectUrl="https://tiny-cobbler-2aa020.netlify.app/"
          projectDescription="Try your luck at this classic snake game. Built using JavaScript, I made use of local storage so the player's high score is saved."
          gitHubUrl="https://github.com/ctennant718/snake-javascript"
        />
        <ProjectCard
          projectTitle="Guide Dogs homage"
          projectImage={hangman}
          projectUrl="https://meek-sunshine-1acdae.netlify.app/"
          projectDescription="A homage to the Guide Dogs website whose wonderful work I have been lucky enough to see first hand. Built using semantically valid and accessible HTML, and SCSS."
          gitHubUrl="https://github.com/ctennant718/guide-dogs-homage"
        />
        <ProjectCard
          projectTitle="Cats vs Dogs"
          projectImage={hangman}
          projectUrl="https://lambent-kelpie-2c9984.netlify.app/"
          projectDescription="A homage to the Guide Dogs website whose wonderful work I have been lucky enough to see first hand. Built using semantically valid and accessible HTML, and SCSS."
          gitHubUrl="https://github.com/ctennant718/firebase-cats-dogs"
        />
        {/* <ProjectCard
          projectTitle="Sweet tooth"
          projectImage={hangman}
          projectUrl="https://sage-tartufo-7e30ee.netlify.app/"
          projectDescription="A quick Chart.js project - a simple way to visualise data using this handy JavaScript library."
          gitHubUrl="https://github.com/ctennant718/chart-js-chocolate"
        /> */}
        <ProjectCard
          projectTitle="Four-card feature"
          projectImage={hangman}
          projectUrl="https://harmonious-snickerdoodle-0c5d6e.netlify.app/"
          projectDescription="Created by following Figma design files, this was a great, responsive design to build from the resource Frontend Mentor."
          gitHubUrl="https://github.com/ctennant718/four-card-feature"
        />
        <ProjectCard
          projectTitle="My island"
          projectImage={hangman}
          projectUrl="https://peppy-duckanoo-6f0e22.netlify.app/"
          projectDescription="Experimenting with the Animal Crossing REST API to draw in a list of the villagers featured in the game. Who is your favourite? "
          gitHubUrl="https://github.com/ctennant718/animal-crossing-api"
        />
        <ProjectCard
          projectTitle="Good dog"
          projectImage={hangman}
          projectUrl="#"
          projectDescription="An API of good boys built using Node, Express and MongoDB/Mongoose. Check out the Github link!"
          gitHubUrl="https://github.com/ctennant718/dogs-api"
        />
        <ProjectCard
          projectTitle="Portfolio page"
          projectImage={hangman}
          projectUrl="#"
          projectDescription="This page was built using React, with React Router. I was also keen to practice my CSS skills instead of using a framework."
          gitHubUrl="https://github.com/ctennant718/portfolio-page"
        />
      </div>
    </>
  );
}

export default Home;
