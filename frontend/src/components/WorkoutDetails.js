import { Link } from 'react-router-dom'

const WorkoutDetails = ({ workout }) => {

    const handleClick = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/${workout._id}`, { method: 'DELETE' })
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Weight (kg): </strong>{workout.weight}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p><strong>Date Created: </strong>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
            <Link to={`/edit/${workout._id}`}><span>Edit</span></Link>
        </div>
    )
}

export default WorkoutDetails