const WorkoutDetails = ({ workout }) => {

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Weight (kg): </strong>{workout.weight}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p><strong>Date Created: </strong>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails