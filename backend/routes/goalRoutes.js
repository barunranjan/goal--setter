const express = require('express')
const { getGoals, deleteGoal, createGoal, updateGoal } = require('../controllers/goalControllers')

const router = express.Router()

router.get('/',getGoals)
router.post('/', createGoal)
router.put('/:id',updateGoal)
router.delete('/:id',deleteGoal)

module.exports = router