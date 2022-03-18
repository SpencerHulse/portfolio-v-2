const router = require("express").Router();
const Project = require("../../models");

router.get("/", (req, res) => {
  Project.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Project.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No project found with this ID." });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Project.create({
    project_title: req.body.project_title,
    project_description: req.body.project_description,
    technologies_used: req.body.technologies_used,
    screenshot_filename: req.body.screenshot_filename,
    project_focus: req.body.project_focus,
    github_repo: req.body.github_repo,
    deployed_link: req.body.deployed_link,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Project.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No project found with this ID." });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Project.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No project found with this ID." });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
