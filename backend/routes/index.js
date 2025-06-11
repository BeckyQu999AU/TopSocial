const express = require('express');
const userPostRouter = require('./userPosts');
const userProfileRouter = require('./userProfiles');

const router = express.Router();

router.use('/userPosts', userPostRouter);
router.use('/userProfiles', userProfileRouter);

module.exports = router;