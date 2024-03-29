import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}`)
            const data = await res.json()

            console.log(data)

            if (res.ok) {
                setWorkouts(data)
            }
        }

        fetchWorkouts()
    }, [workouts])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home