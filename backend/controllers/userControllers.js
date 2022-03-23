const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler  = require('express-async-handler')
const User = require('../models/userModel')
/**
 * @description Register new user
 * @route POST /api/users
 * @access Public
 */

const registerUser = asyncHandler(async(req, res)=>{
    const {email, name, password}=req.body
    if(!email||!name||!password){
        res.status(400)
        throw new Error("Please add all field")
    }

    //check if user exist

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exist')
    }
    //Hash the password
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })
    if(user){
        res.status(200).json({
            _id:user._id,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})


/**
 * @description Authencticate User
 * @route POST /api/user/login
 * @access Public
 */

 const loginUser = asyncHandler(async(req, res)=>{
     const {email, password} = req.body
     const user = await User.findOne({email})
     if(user&&(await bcrypt.compare(password,user.password))){
         res.json({
             _id:user.id,
             name:user.name,
             token:generateToken(user._id)
         })
     }else{
         res.status(400)
         throw new Error('Invalid credentials')
     }
})



/**
 * @description GET User Data
 * @route POST /api/user/me
 * @access Public
 */

 const getMe = asyncHandler(async(req, res)=>{
    const {name,email,id} = await User.findById(req.user.id)
    res.status(200).json({
        _id:id,
        name,
        email
    })

})

/**
 * Generate Token
 */

const generateToken = (id)=>{
   return jwt.sign({id}, process.env.JWT_SECRET,{
       expiresIn:'30d'
   }) 
}


module.exports = {
    registerUser,
    loginUser,
    getMe
}