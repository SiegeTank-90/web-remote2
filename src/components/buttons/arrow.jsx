import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Arrow({ rotate, index, directionIndex }) {



    let activeState = faChevronUp;
    let size = '2x';
    let classname = '';

    if (index === directionIndex) {
        activeState = faCaretUp;
        size = '6x';
        classname = 'highlight';
    }

    return (
        <FontAwesomeIcon icon={activeState} className={classname} transform={{ rotate: rotate }} size={size} />
    )
}
export default Arrow