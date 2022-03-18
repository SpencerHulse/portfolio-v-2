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

// Sequelize and Session Cookies
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// Session
app.use(session(sess));

// Routes
app.use(require("./controllers"));

// Database and Server
const PORT = process.env.PORT || 3001;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
});
