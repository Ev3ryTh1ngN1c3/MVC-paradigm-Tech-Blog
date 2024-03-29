// import the required modules
const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const homeRoutes = require("./home-routes");

// set up the routes
router.use("/users", userRoutes); // routes for user-related functionality
router.use("/posts", postRoutes); // routes for post-related functionality
router.use("/comments", commentRoutes); // routes for comment-related functionality
router.use("/", homeRoutes);
// export the router
module.exports = router;