import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLongPress } from 'use-long-press';

function BigButton({ feature, action }) {

    const [activeState, setActiveState] = useState('defaultstate');

    const BigButtonCallback = useCallback(event => {
        setActiveState('activestate')
        //Do Action
    }, [])

    const bindButton = useLongPress(
        BigButtonCallback, {
        onFinish: () => setActiveState('defaultstate'),
        threshold: 60

    });

    return (
        <button {...bindButton()} className="Big-Buttton">
            <FontAwesomeIcon icon={feature} className={activeState} />
        </button>
    )
}

export default BigButton