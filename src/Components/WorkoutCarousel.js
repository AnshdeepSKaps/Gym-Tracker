export default function WorkoutCarousel(props) {

    const textStyle = {
        color: "white"
    }

    return (
        <div style={
            {
                // border: "2px solid red",
                height: "50vh",
                background: "rgba(0,0,0,0.7)",
                boxShadow: "rgba(255,255,255,0.2) 0px 0px 20px",
                borderRadius: "20px",

            }} className="w-50 mx-auto my-5 py-2">

            <h2 className='mt-3 mb-5 text-white text-center'>Date: {props.workout.Date.substring(0, 10)}</h2>

            <div style={{ border: "2px solid red" }} className="ps-4">

                <div className="row mb-3">
                    <div className="col-3 text-white text-center">Exercise</div>
                    <div className="col-1 text-white text-center">Sets</div>
                    <div className="col-1 text-white text-center">Reps</div>
                    <div className="col-1 text-white text-center">Weight(kg)</div>
                    <div className="col-6 text-white text-center">Remarks</div>
                </div>
                <div>
                    {props.workout.Exercises.map((e, i) => {

                        return <div className='row mb-3'>
                            <div style={{ borderRadius: "5px", height: "5vh" }} className='d-flex bg-danger text-white col-3 align-items-center justify-content-center '>{e}</div>
                            <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Sets[i]}</div>
                            <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Reps[i]}</div>
                            <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Weights[i]}</div>
                            <div style={textStyle} className='col-6 d-flex align-items-center justify-content-center'>{props.workout.Remarks[i]}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
