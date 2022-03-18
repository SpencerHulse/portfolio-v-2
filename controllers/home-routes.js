const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {});
});

router.get("/:id", (req, res) => {
  res.render("project-page", {});
});

module.exports = router;
