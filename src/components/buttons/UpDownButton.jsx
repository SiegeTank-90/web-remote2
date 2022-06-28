import React, { useState, useCallback } from "react";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLongPress } from 'use-long-press';



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

    const callback = useCallback(event => {
        //Change channel
    }, [])

    const bindUp = useLongPress(
        callback, {
        onStart: () => {
            setActiveStateBackgroundUp('UpDownButtonActiveUp')
            setActiveStateIconUp(faCaretUp)
        }
        ,
        onFinish: () => {
            setActiveStateBackgroundUp('')
            setActiveStateIconUp(faChevronUp)
        }
        ,
        onCancel: () => {
            setActiveStateBackgroundUp('')
            setActiveStateIconUp(faChevronUp)
        },
        threshold: 60
    });

    const bindDwn = useLongPress(
        callback, {
        onStart: () => {
            setActiveStateBackgroundDwn('UpDownButtonActiveDwn')
            setActiveStateIconDwn(faCaretUp)
        }
        ,
        onFinish: () => {
            setActiveStateBackgroundDwn('')
            setActiveStateIconDwn(faChevronUp)
        }
        ,
        onCancel: () => {
            setActiveStateBackgroundDwn('')
            setActiveStateIconDwn(faChevronUp)
        },
        threshold: 60
    });



    return (
        <div className="UpDownButton">
            <button {...bindUp()} className={'UpDownButton--Up'}>
                <div className={`${activeStateBackgroundUp}`}>
                    <FontAwesomeIcon icon={activeStateIconUp} className={iconStateUp} />
                </div>

            </button>
            <p className="UpDownButton--Function">{feature}</p>
            <button {...bindDwn()} className={'UpDownButton--Down'}>
                <div className={activeStateBackgroundDwn}>
                    <FontAwesomeIcon icon={activeStateIconDwn} transform={{ rotate: 180 }} className={iconStateDwn} />
                </div>
            </button>
        </div>
    )

}

export default UpDownButton