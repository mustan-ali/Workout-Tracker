const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const workoutRoutes = require('./routes/workouts')


app.use(express.json())
app.use('/api/workouts', workoutRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})