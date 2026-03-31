const express = require("express");

const controller = require("../controllers/posts.controller");

const router = express.Router();

router.get("/",controller.getAllPosts);

router.get("/:postId",controller.getPostById);

module.exports = router;
