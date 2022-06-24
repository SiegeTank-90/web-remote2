import React, { useState } from "react";
import Arrow from "./arrow";

function NavPad() {

    const [Direction, setDirection] = useState('')



    function handleTouch(e) {

        if (e.target.closest('button').className === "NavPad--Direction--Up") {
            setDirection('highlight-up')
        }
        if (e.target.closest('button').className === "NavPad--Direction--Left") {
            setDirection('highlight-left')
        }
        if (e.target.closest('button').className === "NavPad--Direction--Right") {
            setDirection('highlight-right')
        }
        if (e.target.closest('button').className === "NavPad--Direction--Down") {
            setDirection('highlight-down')
        }

    }

    return (
        <div className="NavPad">
            <div className={`NavPad--Direction ${Direction}`}>
                <div className="NavPad--Direction--Grid">
                    <button onPressIn={handleTouch} onPressOut={handleTouch} className="NavPad--Direction--Enter" > <div className="NavPad--Direction--Enter-Icon"></div></button>
                    <button onPressIn={handleTouch} onPressOut={handleTouch} className="NavPad--Direction--Up"> <Arrow rotate={0} /></button>
                    <button onPressIn={handleTouch} onPressOut={handleTouch} className="NavPad--Direction--Left"> <Arrow rotate={270} /></button>
                    <button onPressIn={handleTouch} onPressOut={handleTouch} className="NavPad--Direction--Right"> <Arrow rotate={90} /></button>
                    <button onPressIn={handleTouch} onPressOut={handleTouch} className="NavPad--Direction--Down"> <Arrow rotate={180} /></button>

                </div>
            </div>
        </div >
    )
}

export default NavPad