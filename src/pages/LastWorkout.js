import React, { useState, useEffect } from 'react'
import Background from '../Components/Background'
import WorkoutCarousel from '../Components/WorkoutCarousel'
import Navbar from '../Components/Navbar'

export default function LastWorkout() {

    let [workout, setWorkout] = useState(null)

    const fetchLastWorkout = async () => {
        console.log("Calling")
        const last = await fetch('https://trackaps.herokuapp.com/fetch/last')
        const data = await last.json()
        setWorkout(data[0])
    }

    useEffect(() => {
        fetchLastWorkout()
    }
        , [])

    return (
        <div>
            <Navbar />
            <Background />
            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "50px"
            }}>Your Last Workout</h1>
            {workout && <WorkoutCarousel workout={workout} />}
        </div >
    )
}
