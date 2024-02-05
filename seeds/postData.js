const { Post } = require("../models");

// data for seeding posts
const postData = [
  {
    title: "1st Blog Post",
    content: "content of the first blog post",
    user_id: 1,
  },
  {
    title: "2nd Blog Post",
    content: "content of the second blog post",
    user_id: 2,
  },
  {
    title: "3rd Blog Post",
    content: "content of the third blog post",
    user_id: 3,
  },
  {
    title: "4th Blog Post",
    content: "content of the fourth blog post",
    user_id: 4,
  },
  {
    title: "5th Blog Post",
    content: "content of the fifth blog post",
    user_id: 5,
  }
];

// function to seed posts
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;