import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// TEST DATA

const InUseInputs = [
    {
        name: 'HDMI 1',
        active: true
    },
    {
        name: 'HDMI 2',
        inuse: false
    }
]

function Accordian({ name }) {

    const [isOpen, setIsOpen] = useState(false)
    let InputsGallery = [];

    for (let i = 0; i < InUseInputs.length; i++) {
        InputsGallery.push(
            <button className="Nav--collapsible--open-settings--setting--accordian">
                <h2 className="Nav--collapsible--open-settings--setting--title">{InUseInputs[i].name}</h2>
            </button>


        )
    }

    function ToggleInput() {
        if (isOpen === true) {
            setIsOpen(false)
        } else (setIsOpen(true))
    }







    return (
        <>
            <button onClick={ToggleInput} className="Nav--collapsible--open-settings--setting--accordian">
                <h2 className="Nav--collapsible--open-settings--setting--title">{name}</h2>
                <div className="Nav--collapsible--open-settings--spacer">
                    {isOpen ? <FontAwesomeIcon className="Nav-collapsible--open-settings-arrow" icon={faChevronDown} /> : <FontAwesomeIcon className="Nav-collapsible--open-settings-arrow" icon={faChevronRight} />}
                </div>
            </button>
            {isOpen ? <div className={`Nav--collapsible--open-settings--settings--accordian-open ${isOpen}`}>
                {InputsGallery}
            </div>
                : null}
        </>

    )
}

export default Accordian