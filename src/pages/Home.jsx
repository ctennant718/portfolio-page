// eslint-disable-next-line no-unused-vars
import React from "react";
//components
import Header from "../components/Header";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
//styles
import "../styles/main.css";
//images
import shopfrontImage from "../images/shopfront-project.jpeg";
import hangmanImage from "../images/hangman-project.png";
import guideDogsImage from "../images/guide-dogs-project.png";
import fourCardImage from "../images/four-card-project.png";
import animalCrossingImage from "../images/animal-crossing-project.png";
import chocolateImage from "../images/chocolate-project.png";
import portfolioPageImage from "../images/portfolio-page.png";
import firebaseImage from "../images/firebase-project.png";
import apiImage from "../images/api-project.png";
import snakeImage from "../images/snake-project.png";
import reactAppImage from "../images/react-app.png"

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
          projectDescription="This full-stack app is perfect for all your hiking needs. Built using Next.js, React, MongoDB, TanStack Query, GraphQL and with Auth0 for authenticaiton."
          gitHubUrl="https://github.com/ctennant718/nextjs-shopfront-project"
        />
        <ProjectCard
          projectTitle="Hangman"
          projectImage={hangmanImage}
          projectUrl="https://typescript-hangman-ochre.vercel.app/"
          projectDescription="The familiar word game, created using React (with hooks and conditional rendering) and TypeScript. Can you guess the word in time?"
          gitHubUrl="https://github.com/ctennant718/typescript-hangman"
        />
        <ProjectCard
          projectTitle="A 90s classic!"
          projectImage={snakeImage}
          projectUrl="https://tiny-cobbler-2aa020.netlify.app/"
          projectDescription="Try your luck at this classic snake game. Built using JavaScript, I made use of local storage so the player's high score is saved after each play through."
          gitHubUrl="https://github.com/ctennant718/snake-javascript"
        />
        <ProjectCard
          projectTitle="Start your engines!"
          projectImage={reactAppImage}
          projectUrl="https://drivers-react-app.vercel.app/"
          projectDescription="A React app that consumes data from a REST API, and allows the user to perform CRUD methods. Includes a form created with React Hook form, validation with Yup and theming using MUI."
          gitHubUrl="https://github.com/ctennant718/drivers-react-app"
        />
        <ProjectCard
          projectTitle="Cats vs Dogs"
          projectImage={firebaseImage}
          projectUrl="https://lambent-kelpie-2c9984.netlify.app/"
          projectDescription="Vote on the ultimate question: are you a cat or a dog person? Realtime updates, created using JavaScript, D3.js and and the database Cloud Firestore."
          gitHubUrl="https://github.com/ctennant718/firebase-cats-dogs"
        />
        <ProjectCard
          projectTitle="My island"
          projectImage={animalCrossingImage}
          projectUrl="https://peppy-duckanoo-6f0e22.netlify.app/"
          projectDescription="Experimenting with the Animal Crossing REST API to display the villagers I have on my island using JavaScript. Who is your favourite? "
          gitHubUrl="https://github.com/ctennant718/animal-crossing-api"
        />
        <ProjectCard
          projectTitle="Good dog"
          projectImage={apiImage}
          projectUrl="https://github.com/ctennant718/dogs-api"
          projectDescription="An API of good boys built using Node, Express and MongoDB/Mongoose. Check out the Github repo below!"
          gitHubUrl="https://github.com/ctennant718/dogs-api"
        />
        <ProjectCard
          projectTitle="Guide Dogs homage"
          projectImage={guideDogsImage}
          projectUrl="https://meek-sunshine-1acdae.netlify.app/"
          projectDescription="A recreation of the Guide Dogs website, whose wonderful work I have been lucky enough to see in action. Built using semantically-valid HTML and SCSS."
          gitHubUrl="https://github.com/ctennant718/guide-dogs-homage"
        />
        <ProjectCard
          projectTitle="Four-card feature"
          projectImage={fourCardImage}
          projectUrl="https://harmonious-snickerdoodle-0c5d6e.netlify.app/"
          projectDescription="Created by following Figma design files, this responsive design was built from a challenge set by the amazing resource Frontend Mentor."
          gitHubUrl="https://github.com/ctennant718/four-card-feature"
        />

        <ProjectCard
          projectTitle="Portfolio page"
          projectImage={portfolioPageImage}
          projectUrl="https://github.com/ctennant718/portfolio-page"
          projectDescription="This portfolio page was built using React, with React Router. I was also keen to practice my CSS skills instead of using a framework. implementing both Flexbox and Grid."
          gitHubUrl="https://github.com/ctennant718/portfolio-page"
        />
        <ProjectCard
          projectTitle="Sweet tooth"
          projectImage={chocolateImage}
          projectUrl="https://sage-tartufo-7e30ee.netlify.app/"
          projectDescription="A quick Chart.js project - a simple way to visualise data using this handy JavaScript library."
          gitHubUrl="https://github.com/ctennant718/chart-js-chocolate"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
