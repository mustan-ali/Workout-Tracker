import { useState } from 'react';


const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, weight, reps }

        const res = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        })
        const json = await res.json()

        if (!reps.ok) {
            setError(json.message)
        }
        else {
            setTitle('')
            setWeight('')
            setReps('')
            setError(null)
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excercise Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Weight (in Kg.)</label>
            <input type='text' onChange={(e) => setWeight(e.target.value)} value={weight} />

            <label>Reps</label>
            <input type='text' onChange={(e) => setReps(e.target.value)} value={reps} />

            <button>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form >
    )
}


export default WorkoutForm