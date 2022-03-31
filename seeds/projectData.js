const Project = require("../models");

const projectData = [
  {
    project_type: "Property Listings",
    project_title: "Tenantive.ly",
    project_description:
      "Tenantive.ly is a property-listing website that makes it easy for landlords to get their properties out there. It allows landlords to create an account and list, edit, and remove properties. Potential tenants can then view the listings posted on the site, which contain information about the property and contact details for the landlord.",
    technologies_used: "Node / AWS s3 Bucket / Sequelize",
    screenshot_filename: "tenantively.png",
    project_focus: "full-stack",
    github_repo: "https://github.com/SpencerHulse/tenantively-maybe-probably",
    deployed_link: "https://glacial-temple-16968.herokuapp.com/",
  },
  {
    project_type: "Job Aggregator",
    project_title: "newJobs(you)",
    project_description:
      "The newJobs(you) aggregator uses The Muse API and the Ziptastic API to find local and remote software engineering jobs. The website design is simple, and it uses Materialize for a mobile-first responsive design. There is pagination at the bottom, and it was accomplished with a small team of developers.",
    technologies_used: "JavaScript / jQuery / Materialize",
    screenshot_filename: "newjobsyou-screenshot.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/newJobs-you",
    deployed_link:
      "https://spencerhulse.github.io/newJobs-you/landingpage.html",
  },
  {
    project_type: "Blog",
    project_title: "Say What You Will",
    project_description:
      "Say What You Will is a simple blog site that allows users to make an account, leave posts, and comment on the posts of others. It uses handlebars.js as its template engine, and I built the entire stack from the ground up. It also features session data and sequelize for an SQL database.",
    technologies_used: "JavaScript / Node",
    screenshot_filename: "say-what-you-will.png",
    project_focus: "full-stack",
    github_repo: "https://github.com/SpencerHulse/say-what-you-will",
    deployed_link: "https://quiet-caverns-00317.herokuapp.com/",
  },
  {
    project_type: "Note Taker",
    project_title: "So On That Note",
    project_description:
      "This note-taker app makes it easy to store simple notes for day-to-day use. I wrote the back-end, including the use of full CRUD and a non-relational database: MongoDB. It features express and mongoose, along with dotenv for privacy and security.",
    technologies_used: "JavaScript / Node",
    screenshot_filename: "so-on-that-note.png",
    project_focus: "back-end",
    github_repo: "https://github.com/SpencerHulse/so-on-that-note",
    deployed_link: "https://mysterious-woodland-45975.herokuapp.com/",
  },
  {
    project_type: "Weather Dashboard",
    project_title: "Weather Dashboard",
    project_description:
      "The Weather Dashboard uses HTML, CSS, and JavaScript basics to make it easy for people to find the weather in their area. It delivers a simple mobile-first responsive interface for a five-day forecast. One Call API and Geocoding API from OpenWeather were used to do this. The project also features Luxon.",
    technologies_used: "JavaScript / jQuery / Bootstrap",
    screenshot_filename: "weather-dashboard.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/the-weather-of-today",
    deployed_link: "https://spencerhulse.github.io/the-weather-of-today/",
  },
  {
    project_type: "Kanban Board",
    project_title: "Taskmaster Pro",
    project_description:
      "The goal of Taskmaster Pro is to make it simple to keep track of a task during its life cycle. The kanban board is simple to use and has a sleek UI. It uses jQuery and Bootstrap for smooth logic and a responsive design.",
    technologies_used: "JavaScript / jQuery / Bootstrap",
    screenshot_filename: "taskmaster-pro.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/taskmaster-pro",
    deployed_link: "https://spencerhulse.github.io/taskmaster-pro/",
  },
  {
    project_type: "Scheduler",
    project_title: "Work Day Scheduler",
    project_description:
      "The app is a great way to keep track of tasks during a single business day. The hours range from 9AM to 5PM, and the time slots can be edited and saved until the hour passes. Once the hour passes, they are locked. The application utilizes Moment.js for the time.",
    technologies_used: "JavaScript / jQuery / Bootstrap",
    screenshot_filename: "work-day-scheduler.png",
    project_focus: "front-end",
    github_repo:
      "https://github.com/SpencerHulse/the-only-work-day-scheduler-you-need",
    deployed_link:
      "https://spencerhulse.github.io/the-only-work-day-scheduler-you-need/",
  },
  {
    project_type: "Quiz",
    project_title: "JavaScript Code Quiz",
    project_description:
      "While only containing a few questions, this JavaScript code game is designed to automatically adjust time and scoring based on the number of questions created. While one of my earlier projects, it remains a favorite due to the smooth UI, responsiveness, and use of sound for correct and incorrect answers.",
    technologies_used: "JavaScript",
    screenshot_filename: "js-code-quiz.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/the-ultimate-js-code-quiz",
    deployed_link: "https://spencerhulse.github.io/the-ultimate-js-code-quiz/",
  },
  {
    project_type: "Tribute Page",
    project_title: "Alexander the Great Tribute Page",
    project_description:
      "An early success, this Alexander the Great Tribute Page came together through both research and hard HTML and CSS work. There is even a bit of JS for the navigation aspect.",
    technologies_used: "JavaScript",
    screenshot_filename: "alexander-the-great.png",
    project_focus: "front-end",
    github_repo: "https://github.com/SpencerHulse/alexander-tg-tribute",
    deployed_link: "https://spencerhulse.github.io/alexander-tg-tribute/",
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
