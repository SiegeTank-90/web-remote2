import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css'
import React, { useState } from "react";
import logo from '../images/logo.svg';
import powerButton from '../images/powerbutton.svg';
import Accordian from "./buttons/accordian";
import ToggleButton from "./buttons/toggleButton";
import { faBars, faChevronRight, faClosedCaptioning, faStopCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [isVisible, setIsVisible] = useState(false)
    //DemoToggling
    const [isOn, setisOn] = useState('On')
    const [animateSlide, setAnimateSlide] = useState('animate__animated animate__slideOutRight')

    function Slide() {
        setIsVisible(true)
        if (animateSlide === 'animate__animated animate__slideOutRight') {
            setAnimateSlide('animate__animated animate__slideInRight');
        } else setAnimateSlide('animate__animated animate__slideOutRight');
    }

    return (
        <>
            <div className={isVisible ? `${animateSlide} Nav--collapsible--open` : 'hidden'} >
                <div className="Nav--collapsible--open-content">
                    <div className={"Nav--collapsible--open-header"}>
                        <button onClick={Slide} className="Nav--collapsible--open--closebutton"> <FontAwesomeIcon icon={faChevronRight} size='2x' /></button>
                        <img src={logo} className="Nav--collapsible--open-header-logo" alt='logo' />
                    </div>
                    <div className="Nav--collapsible--open-title-section">
                        <h1 className="Nav--collapsible--open-title-section--Title">WEB REMOTE</h1>
                        <img src={logo} className="Nav--collapsible--open-header-logo" alt='logo' />
                    </div>
                    <div className="Nav--collapsible--open-settings">
                        <div className="Nav--collapsible--open-settings--setting">
                            <h2 className="Nav--collapsible--open-settings--setting--title">Closed Caption</h2>
                            <div className="Nav--collapsible--open-settings--spacer">
                                <FontAwesomeIcon icon={faClosedCaptioning} className={`cc-${isOn}`} />
                                <ToggleButton state={isOn} action={setisOn} />
                            </div>
                        </div>
                        <Accordian name={'Change Input'} />
                        <div className="Nav--collapsible--open-settings--setting">
                            <h2 className="Nav--collapsible--open-settings--setting--title">End Device Control</h2>
                            <div className="Nav--collapsible--open-settings--spacer">
                                <FontAwesomeIcon icon={faStopCircle} className='StopCircle' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="Nav">


                <div className="Nav--background" />
                <div className="Nav--collapseible--closed">
                    <img src={powerButton} alt='power' />
                    <img src={logo} alt='logo' />
                    <button onClick={Slide} className="Nav--Menu"> <FontAwesomeIcon icon={faBars} className='Nav--collapseible--icon' /></button>
                </div>
            </div>
        </>


    )
}

export default Header