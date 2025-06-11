// 创建路由模块
const express =require('express');
const axios = require('axios');
const {getUserProfileById} = require('../controllers/userProfilesController');
const userProfilesRouter = express.Router();

// GET get UserProfile by id/api/userProfiles/:userId
userProfilesRouter.get('/:userId', getUserProfileById);
module.exports = userProfilesRouter;
// 导入控制器模块