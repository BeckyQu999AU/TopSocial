const axios = require('axios');
const USER_PROFILES_API_URL = 'http://localhost:8000/userProfiles'

const getUserProfileById = async function(req, res) {  //async是调用数据的固定写法
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
        console.error(error);
    };
};

module.exports = {getUserProfileById};