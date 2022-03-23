
/**
 * @description Register new user
 * @route POST /api/users
 * @access Public
 */

const registerUser = (req, res)=>{
    res.json({message:"register user"})
}


/**
 * @description Authencticate User
 * @route POST /api/user/login
 * @access Public
 */

 const loginUser = (req, res)=>{
    res.json({message:"Login user"})
}



/**
 * @description GET User Data
 * @route POST /api/user/me
 * @access Public
 */

 const getMe = (req, res)=>{
    res.json({message:"user data"})
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}