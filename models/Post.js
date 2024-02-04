const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// define the post model by extending the sequelize model class
class Post extends Model {}

// initialize the Post model with the specified attributes & options
Post.init(
  {
    id: {
      // the ID of the post
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      // the title of the post
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      // the content of the post
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1], // ensure the content is at least 1 character long
      },
    },
    user_id: {
      // the ID of the user who made the post
      type: DataTypes.INTEGER,
      references: {
        model: "user", // references the user model
        key: "id", // references the ID column in the user model
      },
    },
  },
  {
    sequelize,
    timestamps: true, // adds createdAt & updatedAt columns to the table
    freezeTableName: true, // prevents sequelize from pluralizing the table name
    underscored: true, // uses snake_case for the table & column names
    modelName: "post", // sets the model name to "post"
  }
);

module.exports = Post;