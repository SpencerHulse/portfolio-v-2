const path = require("path");
// Load and start express
const express = require("express");
const app = express();

// Express handlebars template engine
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
// Setting the handlebars engine
app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./controllers"));

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
