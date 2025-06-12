const express = require('express');
const { getUserPosts, getUserPostsById, addUserPost, deleteUserPostById, updateUserPost} = require('../controllers/userPostsController');
const userPostsRouter = express.Router();

// GET get all user posts  /api/userPosts
userPostsRouter.get("/", getUserPosts);

// GET get a user post by id   /api/userPosts/:post_id
userPostsRouter.get('/:post_id', getUserPostsById);

// POST post a user post  /api/userPosts
userPostsRouter.post("/", addUserPost);

// PUT update a user by id   /api/userPosts/:post_id
userPostsRouter.put('/:post_id', updateUserPost)

// DELETE delete a user post by id   /api/userPosts/:post_id
userPostsRouter.delete('/:post_id', deleteUserPostById)

module.exports = userPostsRouter;