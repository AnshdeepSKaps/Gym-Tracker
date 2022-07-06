import React, { useState, useEffect } from 'react'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'
import WorkoutCarousel from '../Components/WorkoutCarousel'

export default function LastWeek() {

    const [workouts, setWorkouts] = useState(null)

    const fetchWorkouts = async () => {

        const resp = await fetch('https://trackaps.herokuapp.com/fetch/week')
        const data = await resp.json()
        setWorkouts(data)
        console.log(data)
    }

    const textStyle = {
        color: "white",
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])

    return (
        <div>
            <Navbar />
            <Background />
            <h1 className='mt-5 text-center' style={textStyle}>Last 6 Workouts</h1>
            <div className="row">
                {workouts && workouts.map((e, i) => {
                    return <div className="col-md-6">
                        <WorkoutCarousel workout={e} />
                    </div>
                })}
            </div>
        </div>
    )
}




