const asyncHandler = require('express-async-handler')
/**
 * @description GET goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({message:"get the goal"})
})
/**
 * @description POST goals
 * @route GET /api/goals
 * @access Private
 */
 const createGoal = asyncHandler(async(req, res)=>{
     if(!req.body.text){
         /**
          * default error handler
          */
        // res.status(400).json({message:"Please add a valid text"})

        res.status(400)
        throw new Error("Please add valid text")

     }
    res.status(200).json({message:"set the goal"})
})
/**
 * @description PUT goals
 * @route PUT /api/goals/:id
 * @access Private
 */
 const updateGoal = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`update ${req.params.id} the goal`})
})
/**
 * @description DELETE goals
 * @route DELETE /api/goals/:id
 * @access Private
 */
 const deleteGoal = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`delete ${req.params.id} goal`})
})

module.exports={
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}