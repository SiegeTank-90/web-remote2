import React, { useRef, useState } from "react";
import ClickedOutside from "../hooks/ClickedOutside";
import Arrow from "./arrow";

function NavPad() {

    const [Direction, setDirection] = useState('')
    const [directionalIndex, setDirectionalIndex] = useState(0)

    const NavPad = useRef();
    let InUse = '';
    if (Direction !== '') {
        InUse = 'highlightEnter'
    }

    ClickedOutside(NavPad, setDirection, setDirectionalIndex);



    function handleTouch(e) {
        if (e.target.closest('button').className === "NavPad--Direction--Up") {
            setDirection('highlight-up')
            setDirectionalIndex(1)
        }
        if (e.target.closest('button').className === "NavPad--Direction--Left") {
            setDirection('highlight-left')
            setDirectionalIndex(2)
        }
        if (e.target.closest('button').className === "NavPad--Direction--Right") {
            setDirection('highlight-right')
            setDirectionalIndex(3)
        }
        if (e.target.closest('button').className === "NavPad--Direction--Down") {
            setDirection('highlight-down')
            setDirectionalIndex(4)
        }

    }



    return (
        <div ref={NavPad} className="NavPad">
            <div className={`NavPad--Direction ${Direction}`}>
                <div className="NavPad--Direction--Grid">
                    <button onMouseDown={handleTouch} className='NavPad--Direction--Enter' > <div className={`NavPad--Direction--Enter-Icon ${InUse}`}></div></button>
                    <button onMouseDown={handleTouch} className="NavPad--Direction--Up"> <Arrow rotate={0} index={1} directionIndex={directionalIndex} /></button>
                    <button onMouseDown={handleTouch} className="NavPad--Direction--Left"> <Arrow rotate={270} index={2} directionIndex={directionalIndex} /></button>
                    <button onMouseDown={handleTouch} className="NavPad--Direction--Right"> <Arrow rotate={90} index={3} directionIndex={directionalIndex} /></button>
                    <button onMouseDown={handleTouch} className="NavPad--Direction--Down"> <Arrow rotate={180} index={4} directionIndex={directionalIndex} /></button>

                </div>
            </div>
        </div >
    )
}

export default NavPad