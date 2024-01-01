const express = require('express')
const router = express.Router()
const controller = require('../controllers/workoutController')


// GET / - Get all workouts
router.get('/', controller.getWorkouts)


// GET /:id - Get a single workout
router.get('/:id', controller.getSingleWorkout)


// POST / - Create a workout
router.post('/', controller.createWorkout)


// DELETE /:id - Delete a workout
router.delete('/:id', controller.deleteWorkout)


// PATCH /:id - Update a workout
router.patch('/:id', controller.updateWorkout)


module.exports = router