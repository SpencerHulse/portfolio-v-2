const router = require("express").Router();
const Project = require("../models");

router.get("/", (req, res) => {
  Project.findAll()
    .then((data) => {
      const projects = data.map((project) => project.get({ plain: true }));

      res.render("homepage", { projects });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/project/:id", (req, res) => {
  res.render("project-page", {});
});

module.exports = router;
