import React, { useState } from "react";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function UpDownButton({ feature }) {

    const [activeStateIconUp, setActiveStateIconUp] = useState(faChevronUp)
    const [activeStateBackgroundUp, setActiveStateBackgroundUp] = useState('')
    const [activeStateIconDwn, setActiveStateIconDwn] = useState(faChevronUp)
    const [activeStateBackgroundDwn, setActiveStateBackgroundDwn] = useState('')

    let iconStateUp = '';
    let iconStateDwn = '';
    if (activeStateIconUp === faCaretUp) {
        iconStateUp = 'IconStateOnline';
        iconStateDwn = 'IconStateOffline'

    }
    if (activeStateIconDwn === faCaretUp) {
        iconStateDwn = 'IconStateOnline';
        iconStateUp = 'IconStateOffline'
    }


    function handleClickUp() {
        if (activeStateIconUp === faChevronUp) {
            setActiveStateIconUp(faCaretUp)
            setActiveStateBackgroundUp('UpDownButtonActiveUp')
            setActiveStateBackgroundDwn('')
            setActiveStateIconDwn(faChevronUp)



        } else {
            setActiveStateIconUp(faChevronUp)
            setActiveStateBackgroundUp('')
        }
    }

    function handleClickDwn() {
        if (activeStateIconDwn === faChevronUp) {
            setActiveStateIconDwn(faCaretUp)
            setActiveStateBackgroundDwn('UpDownButtonActiveDwn')
            setActiveStateBackgroundUp('')
            setActiveStateIconUp(faChevronUp)



        } else {
            setActiveStateIconDwn(faChevronUp)
            setActiveStateBackgroundDwn('')

        }
    }


    return (
        <div className="UpDownButton">
            <button onClick={handleClickUp} className={'UpDownButton--Up'}>
                <div className={`${activeStateBackgroundUp}`}>
                    <FontAwesomeIcon icon={activeStateIconUp} className={iconStateUp} />
                </div>

            </button>
            <p className="UpDownButton--Function">{feature}</p>
            <button onClick={handleClickDwn} className={'UpDownButton--Down'}>
                <div className={activeStateBackgroundDwn}>
                    <FontAwesomeIcon icon={activeStateIconDwn} transform={{ rotate: 180 }} className={iconStateDwn} />
                </div>
            </button>
        </div>
    )

}

export default UpDownButton