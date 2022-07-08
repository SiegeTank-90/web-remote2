import React from "react";
import MenuNavigationButton from "./buttons/menuNavigationButton";
import appIcon from '../images/app.svg'
import deviceIcon from '../images/devices.svg'
import remoteIcon from '../images/remote.svg'
import liveTVIcon from '../images/LiveTv.svg'
import appIconActive from '../images/app-active.svg'
import remoteIconActive from '../images/remote-active.svg'
import liveTVIconActive from '../images/liveTv-active.svg'
import deviceIconActive from '../images/devices-active.svg'

function Menu({ menuIndex, setMenuIndex }) {



    return (
        <div className="Menu">
            <div className="Menu--Navigation">
                <MenuNavigationButton iconActive={remoteIconActive} icon={remoteIcon} name='Remote' index={1} menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
                <MenuNavigationButton iconActive={appIconActive} icon={appIcon} name='Apps' index={2} menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
                <MenuNavigationButton iconActive={liveTVIconActive} icon={liveTVIcon} name='Live TV' index={3} menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
                <MenuNavigationButton iconActive={deviceIconActive} icon={deviceIcon} name='Devices' index={4} menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
            </div>
        </div>
    )
}

export default Menu