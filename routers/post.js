import express from "express";
import { Post, validate } from "../models/Post";
const router = express.Router();

router.get("/", async (req, res) => {
    const posts = await Post.find().sort("title");
    res.send(posts);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post = await post.save();
    res.send(post);
});

module.exports = router;
