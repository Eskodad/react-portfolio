import React from "react";
import Footer from "../Footer";
import MusicMarket from "../../assets/images/project-images/music-market.png";
import WhenToFly from "../../assets/images/project-images/when-to-fly.png";
import WeatherDashboard from "../../assets/images/project-images/weather-dashboard.png"
import Horiseon from "../../assets/images/project-images/horiseon.png"
import BudgetTracker from "../../assets/images/project-images/budget-tracker.png"
import PasswordGenerator from "../../assets/images/project-images/password-generator.png"
import MovieSearch from "../../assets/images/project-images/movie-search.png";

const Projects = () => {
  const projects = [
    {
      name: "Movie Search",
      image: MovieSearch,
      githubLink: "https://github.com/Eskodad/Interactive-MERN-SPA-Project-Three-",
      deploymentLink: "http://aqueous-reef-39758.herokuapp.com",
    },
    {
      name: "Music Market",
      image: MusicMarket,
      githubLink: "https://github.com/Eskodad/Interactive-Full-Stack-Project-Music-Market-",
      deploymentLink: "https://stark-citadel-98109.herokuapp.com",
    },
    {
      name: "When-To-Fly",
      image: WhenToFly,
      githubLink: "https://github.com/Eskodad/when-to-fly-group-project",
      deploymentLink: "https://eskodad.github.io/when-to-fly-group-project/",
    },
    {
      name: "Weather Dashboard",
      image: WeatherDashboard,
      githubLink: "https://github.com/Eskodad/weather-dashboard",
      deploymentLink: "https://eskodad.github.io/weather-dashboard/",
    },
    {
      name: "Horiseon",
      image: Horiseon,
      githubLink: "https://github.com/Eskodad/Horiseon",
      deploymentLink: "https://eskodad.github.io/Horiseon/",
    },
    {
      name: "Budget Tracker",
      image: BudgetTracker,
      githubLink: "https://github.com/Eskodad/pwa-budget-tracker",
      deploymentLink: "https://immense-escarpment-03497.herokuapp.com/",
    },
    {
      name: "Password Generator",
      image: PasswordGenerator,
      githubLink: "https://github.com/Eskodad/password-generator",
      deploymentLink: "https://eskodad.github.io/password-generator/",
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div
                className="card-group col col-lg-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center"
                key={project.name}
              >
                <div
                  className="card results-card col-sm-4 py-2 border-secondary"
                  style={{ width: "26rem", height: "25rem" }}
                >
                  <a
                    href={project.deploymentLink}
                    className="card-link"
                    target="blank"
                  >
                    <img
                      src={project.image}
                      alt="screenshot of application"
                      className="img-thumbnail card-img-top"
                    />
                  </a>
                  <div className="card-body">
                    <h2 className="card-title mb-4">{project.name}</h2>
                    <ul className="list-group list-group-flush mb-4"></ul>
                    <a
                      href={project.deploymentLink}
                      className="card-link"
                      target="blank"
                    >
                      Deployed
                    </a>{" "}
                    <a
                      href={project.githubLink}
                      className="card-link"
                      target="blank"
                    >
                      
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
