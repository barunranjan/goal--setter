const express = require('express')
const { getGoals, deleteGoal, createGoal, updateGoal } = require('../controllers/goalControllers')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', protect, getGoals)
router.post('/', protect,createGoal)
router.put('/:id',protect,updateGoal)
router.delete('/:id',protect,deleteGoal)

module.exports = router