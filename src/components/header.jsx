import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../images/logo.svg';
import powerButton from '../images/powerbutton.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (
        <div className="Nav">
            <div className="Nav--background" />
            <div className="Nav--collapseible">
                <img src={powerButton} alt='power' />
                <img src={logo} alt='logo' />
                <button className="Nav--Menu"> <FontAwesomeIcon icon={faBars} /></button>
            </div>
        </div>

    )
}

export default Header