 // import necessary dependencies
console.log("Sequelize version:", require('sequelize').version);
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcrypt');

// define the user model by extending the sequelize model class
class User extends Model {
  /**
   * checks if the provided password matches the user's password
   * @param {string} loginPw - the password to compare
   * @returns {boolean} - true if the password matches, false otherwise
   */
  checkPassword(loginPw) {
    return bcryptjs.compareSync(loginPw, this.password);
  }
}

// initialize the user model with the specified attributes & options
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // hashes the user's password before creating a new user
      async beforeCreate(newUser) {
        newUser.password = await bcryptjs.hash(newUser.password, 10);
        return newUser;
      },
      // hashes the user's password before updating the user
      async beforeUpdate(updatedUser) {
        updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
        return updatedUser;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

// export the user model
module.exports = User;