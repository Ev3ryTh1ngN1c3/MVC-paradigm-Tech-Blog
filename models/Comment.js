const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// define the comment model by extending the sequelize model class
class Comment extends Model {}

// initialize the comment model with the specified attributes & options
Comment.init(
  {
    id: {
      // the ID of the comment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      // the text of the comment
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1], // ensures the comment_text is at least 1 character long
      },
    },
    user_id: {
      // the ID of the user who made the comment
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user", // references the user model
        key: "id", // references the ID column in the user model
      },
    },
    post_id: {
      // the ID of the post that the comment belongs to
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post", // references the post model
        key: "id", // references the ID column in the post model
      },
    },
  },
  {
    sequelize,
    timestamps: true, // adds createdAt & updatedAt columns to the table
    freezeTableName: true, // prevents sequelize from pluralizing the table name
    underscored: true, // uses snake_case for the table & column names
    modelName: "comment", // sets the model name to "comment"
  }
);

module.exports = Comment;