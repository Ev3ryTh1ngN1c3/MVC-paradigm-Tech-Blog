const Sequelize = require('sequelize');
require('dotenv').config(); // import sensitive data from .env

// check if JAWSDB_URL environment variable is present
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      // this is for local
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;