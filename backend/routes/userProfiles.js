// 创建路由模块
const express =require('express');
const axios = require('axios');
const {getUserProfileById, getUserProfiles, patchUserProfilesById} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

// GET get UserProfile by id/api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);
module.exports = userProfilesRouter;
// 导入控制器模块

// GET get user profiles    /api/userProfiles
userProfilesRouter.get('/', getUserProfiles);

// PATCH update user profile by id    web api的patch  /api/userProfiles/:userId
userProfilesRouter.patch('/:userId', patchUserProfilesById);
