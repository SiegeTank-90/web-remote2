import React from "react";
import 'animate.css'

function ToggleButton({ state, action }) {


    //Demo Toggling Appearance
    function ToggleAction() {
        if (state === 'On') {
            action('Off')
        } else action('On')
    }


    return (
        <button onClick={ToggleAction} className="ToggleButton">
            <div className={`ToggleBackground-${state}`} >
                <div className={`ToggleNode-${state}`} >
                </div>
            </div>
        </button>
    )
}

export default ToggleButton