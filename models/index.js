// import the necessary models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// define the relationships between the models
User.hasMany(Post, {
  foreignKey: "user_id", // set up the foreign key relationship
});

Post.belongsTo(User, {
  foreignKey: "user_id", // set up the foreign key relationship
});

Comment.belongsTo(User, {
  foreignKey: "user_id", // set up the foreign key relationship
});

Comment.belongsTo(Post, {
  foreignKey: "post_id", // set up the foreign key relationship
});

Post.hasMany(Comment, {
  foreignKey: "post_id", // set up the foreign key relationship
});

User.hasMany(Comment, {
  foreignKey: "user_id", // set up the foreign key relationship
});

// export the models
module.exports = { User, Post, Comment };