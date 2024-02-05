const { Comment } = require("../models");

// data for seeding comments
const commentData = [
  {
    comment_text: "this article is insightful & well-written",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I share this perspective & view point",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "while I respect your opinion, I have a different viewpoint",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "I share this perspective & view point",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "while I respect your opinion, I have a different viewpoint",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "this article is insightful & well-written",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I share this perspective & view point",
    user_id: 2,
    post_id: 2,
  }
];

// function to seed comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;