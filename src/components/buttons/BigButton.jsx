import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function BigButton({ feature }) {

    const [activeState, setActiveState] = useState('defaultstate')

    function handleClick() {
        if (activeState === 'defaultstate') {
            setActiveState('activestate')
        } else { setActiveState('defaultstate') }
    }

    return (
        <button onClick={handleClick} className="Big-Buttton">
            <FontAwesomeIcon icon={feature} className={activeState} />
        </button>
    )
}

export default BigButton