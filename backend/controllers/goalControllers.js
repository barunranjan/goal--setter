const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require('../models/userModel')

/**
 * @description GET goals
 * @route GET /api/goals
 * @access Private
 */

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user:req.user.id});
  res.status(200).json(goals);
});



/**
 * @description POST goals
 * @route GET /api/goals
 * @access Private
 */

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add valid text");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user:req.user.id
  });
  res.status(200).json(goal);
});



/**
 * @description PUT goals
 * @route PUT /api/goals/:id
 * @access Private
 */

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
  }
  const user = await User.findById(req.user.id)
  if(!user){
    res.status(401)
    throw new Error("user not found")
  }

  if(goal.user.toString()!==user.id){
    res.status(401)
    throw new Error('user not authorized')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
      new:true
  })
  res.status(200).json(updatedGoal);
});



/**
 * @description DELETE goals
 * @route DELETE /api/goals/:id
 * @access Private
 */

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
  const user = await User.findById(req.user.id)
  if(!user){
    res.status(401)
    throw new Error("user not found")
  }

  if(goal.user.toString()!==user.id){
    res.status(401)
    throw new Error('user not authorized')
  }
    // await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()
   
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
