const WorkoutDetails = ({ workout }) => {

    const handleClick = async () => {
        await fetch('http://localhost:4000/api/workouts/' + workout._id, { method: 'DELETE' })
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Weight (kg): </strong>{workout.weight}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p><strong>Date Created: </strong>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails