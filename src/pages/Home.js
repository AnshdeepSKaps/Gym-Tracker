import React from 'react'
import Background from '../Components/Background'
import TrackContainer from '../Components/TrackContainer'
import Navbar from '../Components/Navbar'
import LastWorkout from '../Components/LastWorkoutCard'

export default function Home() {

    const headerStyle = {
        fontSize: '3rem',
        marginTop: "40px",
        marginBottom: "40px",
        color: "white",
        textAlign: "center"
    }

    return (
        <div>
            <Navbar />
            <Background />
            <h1 style={headerStyle}>Your Last Workout</h1>
            <div className="container">
                <div className="row d-flex flex-row justify-content-around">
                    <LastWorkout />
                </div>
            </div>

            <h1 style={headerStyle}>Track Your Progress!</h1>
            <TrackContainer />
        </div>
    )
}
