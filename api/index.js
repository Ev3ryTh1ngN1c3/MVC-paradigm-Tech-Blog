const express = require("express");
const app = express();

// import necessary modules and routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// set up routes
app.use("/api", apiRoutes);
app.use("/", homeRoutes);

// start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});