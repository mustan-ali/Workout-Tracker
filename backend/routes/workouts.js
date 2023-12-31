const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')


// GET / - Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' })
})


// GET /:id - Get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'Get a single workout' })
})


// POST / - Create a workout
router.post('/', (req, res) => {
    res.json({ message: 'Create a workout' })
})


// DELETE /:id - Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete a workout' })
})


// PATCH /:id - Update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'Update a workout' })
})


module.exports = router