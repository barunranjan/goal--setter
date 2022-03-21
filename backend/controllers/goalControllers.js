
/**
 * @description GET goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = (req, res)=>{
    res.status(200).json({message:"get the goal"})
}
/**
 * @description POST goals
 * @route GET /api/goals
 * @access Private
 */
 const createGoal = (req, res)=>{
    res.status(200).json({message:"set the goal"})
}
/**
 * @description PUT goals
 * @route PUT /api/goals/:id
 * @access Private
 */
 const updateGoal = (req, res)=>{
    res.status(200).json({message:`update ${req.params.id} the goal`})
}
/**
 * @description DELETE goals
 * @route DELETE /api/goals/:id
 * @access Private
 */
 const deleteGoal = (req, res)=>{
    res.status(200).json({message:`delete ${req.params.id} goal`})
}

module.exports={
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}