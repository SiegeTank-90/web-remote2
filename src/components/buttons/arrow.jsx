import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Arrow({ rotate }) {

    const [activeState, setActiveState] = useState(faChevronUp)
    const [size, setSize] = useState('2x')
    const [classname, setClassName] = useState('')

    function caret(e) {
        if (classname === '') {
            setActiveState(faCaretUp)
            setSize('6x')
            setClassName('highlight')
        } else {
            setActiveState(faChevronUp)
            setSize('2x')
            setClassName('')
        }
    }

    return (
        <FontAwesomeIcon ontPressIn={caret} onPressOut={caret} icon={activeState} className={classname} transform={{ rotate: rotate }} size={size} />
    )
}
export default Arrow