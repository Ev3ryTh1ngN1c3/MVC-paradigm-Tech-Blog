 // importing the seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// importing the sequelize connection from ../config/connection
const sequelize = require("../config/connection");

// function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {
  try {
    // syncing the sequelize models & wiping out the tables
    await sequelize.sync({ force: true });

    // calling each of the seed data functions
    await seedUsers();
    await seedPosts();
    await seedComments();

    console.log("database seeded successfully");
  } catch (error) {
    console.error("error seeding the database", error);
  }

  // exiting the process with a successful exit code
  process.exit(0);
};

// calling the seedAll function to seed the database
seedAll();