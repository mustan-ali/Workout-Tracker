import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"


const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('http://localhost:4000/api/workouts')
            const data = await res.json()

            console.log(data)

            if (res.ok) {
                setWorkouts(data)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
        </div>
    )
}

export default Home