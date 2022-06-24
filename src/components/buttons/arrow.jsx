import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Arrow({ rotate }) {

    const [activeState, setActiveState] = useState(faChevronUp)
    const [size, setSize] = useState('2x')
    const [classname, setClassName] = useState('')

    function caretOn(e) {

        setActiveState(faCaretUp)
        setSize('6x')
        setClassName('highlight')
    }
    function caretOff() {
        // setActiveState(faChevronUp)
        // setSize('2x')
        // setClassName('')

    }


    return (
        <FontAwesomeIcon onMouseDown={caretOn} onMouseUp={caretOff} icon={activeState} className={classname} transform={{ rotate: rotate }} size={size} />
    )
}
export default Arrow