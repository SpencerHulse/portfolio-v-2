const Project = require("../models");

const projectData = [
  {
    project_title: "Weather Dashboard",
    project_description:
      "This is a project done using HTML, CSS, and JavaScript basics. It is something I worked on early into my coding journey. The project looks to make it easy for people to find the weather in their area, delivering a simple mobile-first responsive interface for a five-day forecast. To do this, One Call API and Geocoding API from OpenWeather were used. The project also features Luxon.",
    technologies_used: "HTML / CSS / JS / jQuery / Bootstrap",
    screenshot_filename: "weather-dashboard.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/the-weather-of-today",
    deployed_link: "https://spencerhulse.github.io/the-weather-of-today/",
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
