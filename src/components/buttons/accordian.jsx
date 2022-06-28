import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function accordian({ name }) {

    return (
        <>
            <button className="Nav--collapsible--open-settings--setting--accordian">
                <h2 className="Nav--collapsible--open-settings--setting--title">{name}</h2>
                <div className="Nav--collapsible--open-settings--spacer">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </button>
        </>

    )
}

export default accordian