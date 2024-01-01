const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// Get all workouts
const getWorkouts = async (req, res) => {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(allWorkouts)
}


// Get a single workout
const getSingleWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    const singleWorkout = await Workout.findById(id)

    if (!singleWorkout) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    return res.status(200).json(singleWorkout)
}


// Create a workout
const createWorkout = async (req, res) => {
    const { title, weight, reps } = req.body

    try {
        const newWorkout = await Workout.create({ title, weight, reps })
        res.status(200).json(newWorkout)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


// Delete a workout
const deleteWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    const deletedWorkout = await Workout.findByIdAndDelete(id)

    if (!deletedWorkout) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    return res.status(200).json({ message: 'Workout deleted successfully' })
}


// Update a workout
const updateWorkout = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    const { title, weight, reps } = req.body

    const updatedWorkout = await Workout.findByIdAndUpdate(id, { title, weight, reps })

    if (!updatedWorkout) {
        return res.status(404).json({ message: 'Workout not found' })
    }

    return res.status(200).json({ message: 'Workout updated successfully' })
}


module.exports = { getWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout }
