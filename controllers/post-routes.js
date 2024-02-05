const { Router } = require("express");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// function to handle error responses
const handleErrorResponse = (res, err) => {
  res.status(500).json(err);
};

const router = Router();

// get all posts with associated username
router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postsData);
  } catch (err) {
    handleErrorResponse(res, err);
  }
});

// get one post by ID with associated username and comments
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    handleErrorResponse(res, err);
  }
});

// create a new post with authenticated user
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update an existing post with authenticated user
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedPost[0]) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    handleErrorResponse(res, err);
  }
});

// delete a post with authenticated user
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // delete all comments related to the post
    await Comment.destroy({
      where: { post_id: req.params.id },
    });

    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    handleErrorResponse(res, err);
  }
});

module.exports = router;