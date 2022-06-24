import React, { useState } from "react";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function UpDownButton({ feature }) {

    const [activeStateIconUp, setActiveStateIconUp] = useState(faChevronUp)
    const [activeStateIconDwn, setActiveStateIconDwn] = useState(faChevronUp)
    const [activeStateBackgroundUp, setActiveStateBackgroundUp] = useState(faChevronUp)
    const [activeStateBackgroundDwn, setActiveStateBackgroundDwn] = useState(faChevronUp)



    function handleClickUp() {
        if (activeStateIconUp === faChevronUp) {
            setActiveStateIconUp(faCaretUp)
            setActiveStateBackgroundUp('UpDownButtonActive')
        } else {
            setActiveStateIconUp(faChevronUp)
            setActiveStateBackgroundUp('')
        }
    }

    function handleClickDwn() {
        if (activeStateIconDwn === faChevronUp) {
            setActiveStateIconDwn(faCaretUp)
            setActiveStateBackgroundDwn('UpDownButtonActive')

        } else {
            setActiveStateIconDwn(faChevronUp)
            setActiveStateBackgroundDwn('')

        }
    }


    return (
        <div className="UpDownButton">
            <button onClick={handleClickUp} className={`UpDownButton--Up ${activeStateBackgroundUp}`}>
                <FontAwesomeIcon icon={activeStateIconUp} />
            </button>
            <p className="UpDownButton--Function">{feature}</p>
            <button onClick={handleClickDwn} className={`UpDownButton--Down ${activeStateBackgroundDwn}`}>
                <FontAwesomeIcon icon={activeStateIconDwn} transform={{ rotate: 180 }} />
            </button>
        </div>
    )

}

export default UpDownButton