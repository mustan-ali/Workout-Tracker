const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')


app.use(cors())
app.use(express.json())
app.use('/api/workouts', workoutRoutes)


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database Connected & Server running on port ${PORT}`)
        })
    })
    .catch((err) => { console.log(err) })
