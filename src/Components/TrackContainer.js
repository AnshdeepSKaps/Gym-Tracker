import React from 'react'
import SevenDays from './6daysCard'
import MonthWeek from './MonthWeekCard'

export default function TrackContainer() {
    return (
        <div className="container">
            <div className="row d-flex flex-row justify-content-around">
                <SevenDays />
                <MonthWeek />
            </div>
        </div>
    )
}
