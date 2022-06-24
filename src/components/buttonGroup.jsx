import React from "react";
import BigButton from "./buttons/BigButton";
import MediumButton from "./buttons/MediumButton"
import UpDownButton from "./buttons/UpDownButton"
import { faCaretLeft, faShuffle, faVolumeXmark, faHouse, faBorderAll } from '@fortawesome/free-solid-svg-icons';

function ButtonGroup() {

    return (
        <div className="ButtonGroup">
            <div className="ButtonGroup--Narrow">
                <BigButton feature={faCaretLeft} />
                <UpDownButton feature={'VOL'} />
            </div>
            <div className="ButtonGroup--Wide">
                <div className="ButtonGroup--Wide--Border">
                    <MediumButton feature={faBorderAll} />
                    <MediumButton feature={faVolumeXmark} />
                    <MediumButton feature={faHouse} />
                </div>
            </div>

            <div className="ButtonGroup--Narrow">
                <BigButton feature={faShuffle} />
                <UpDownButton feature={'CH'} />
            </div>

        </div>

    )
}

export default ButtonGroup