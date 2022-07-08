import React from "react";

function Channel({ num, stationName, icon, index, setGuideIndex }) {

    let activeState = 'Channel--Content'
    if (index === num) {
        activeState = "Channel--Content--Active"
    }
    function SetIndex(num) {
        setGuideIndex(num)
    }

    return (
        <button onClick={() => SetIndex(num)} className="Channel">
            <h4 className="Channel--Number">{num}</h4>
            <div className={activeState}>
                <img className="Channel--Content--Icon" src={icon} alt={`${stationName} Icon`} />
                <h3 className="Channel--Content--Station">{stationName}</h3>
                <h3 className="Channel--Content--Time">1:30 PM</h3>

            </div>
        </button>
    )
}

export default Channel