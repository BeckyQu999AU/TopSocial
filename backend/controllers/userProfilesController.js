const axios = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles'

const getUserProfileById = async function(req, res, next) {  //async是调用数据的固定写法
    console.log('userPost', req.params.userId);
    const id = req.params.userId;
    if(!id) {
        return res.status(400).send('user id is required');
    };
    try {
        const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);
        const userProfile = response.data;
        res.status(200).json({
            msg:'Get userProfile succeed',
            data:userProfile
        });
    }catch(error) {
        next(error);
    };
};

const getUserProfiles = async function(req, res, next) {
    console.log('getUserProfiles');
    try {
        const response = await axios.get(USER_PROFILES_API_URL);
        const userProfiles = response.data;
        res.status(200).json({
            msg:"Get userProfiles succeed",
            data: userProfiles
        })
    } catch(error){
        next(error);
    }
};

const patchUserProfilesById = async function(req, res, next) {
    const id = req.params.userId;
    if(!id){
        return res.status(400).send('Id is required');
    }
    const newUserProfileData = req.body;
    try {
        const response = await axios.patch(`${USER_PROFILES_API_URL}/${id}`, newUserProfileData);
        const updatedUserProfile = response.data;
        res.status(200).json({
            msg:"Update user profile succeed",
            data: updatedUserProfile
        })
    }catch(error) {
        next(error);
    }
}


module.exports = {getUserProfileById, getUserProfiles, patchUserProfilesById};