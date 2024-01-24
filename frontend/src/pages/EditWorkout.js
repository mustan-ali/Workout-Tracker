import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'


const EditWorkout = (workout) => {
    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const fetchWorkout = async () => {
            const res = await fetch(`http://localhost:4000/api/workouts/${id}`)
            const data = await res.json()

            setTitle(data.title)
            setWeight(data.weight)
            setReps(data.reps)
        }
        fetchWorkout()
    }, [])


    const handleEditWorkout = async (e) => {
        e.preventDefault()

        const workout = { title, weight, reps }

        const res = await fetch(`http://localhost:4000/api/workouts/${id}`, {
            method: 'PATCH',
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
        navigate('/')
    }

    return (
        <form className='create' onSubmit={handleEditWorkout}>
            <h3>Update Workout</h3>

            <label>Excercise Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Weight (in Kg.)</label>
            <input type='text' onChange={(e) => setWeight(e.target.value)} value={weight} />

            <label>Reps</label>
            <input type='text' onChange={(e) => setReps(e.target.value)} value={reps} />

            <button>Update Workout</button>
            {error && <div className='error'>{error}</div>}
        </form >
    )
}


export default EditWorkout