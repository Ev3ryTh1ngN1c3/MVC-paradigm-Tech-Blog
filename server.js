 // importing required modules & dependencies
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

// creating express app & setting port
const app = express();
const PORT = process.env.PORT || 3001;

// setting up session object with secret, cookie & store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// using session middleware with session object
app.use(session(sess));

// parsing incoming JSON & URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving static files such as images from public directory
app.use(express.static("public"));

// setting up handlebars as the template engine
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// using routes from controller
app.use(routes);

// syncing sequelize models with database & starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
