import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClosedCaptioning, faPlayCircle, } from '@fortawesome/free-solid-svg-icons';
import { faChromecast } from '@fortawesome/free-brands-svg-icons'
import ToggleButton from "./toggleButton";

function DeviceButton({ device, setActiveDevice, index, id }) {

    const { deviceName, logo, program } = device;
    const { programName, programImg } = program
    //demo toggles
    const [isOn, setisOn] = useState('On')
    const [tvOn, setTVOn] = useState('On')
    const [chromeCast, setChromeCast] = useState('On')

    function ToggleCC() {
        if (isOn === 'On') {
            setisOn('Off')
        } else (setisOn('On'))
    }
    function ToggleTV() {
        if (tvOn === 'On') {
            setTVOn('Off')
        } else (setTVOn('On'))
    }
    function ToggleChromeCast() {
        if (chromeCast === 'On') {
            setChromeCast('Off')
        } else (setChromeCast('On'))
    }

    if (0 === index) {

        return (
            <div className="DeviceView--Device--Long">
                <div className="DeviceView--Device--Details">
                    <button onClick={ToggleChromeCast} className={`DeviceView--Device--Details-btn${chromeCast}`}><FontAwesomeIcon icon={faChromecast} size={'2x'} /></button>
                    <h3 className="DeviceView--Device--Details-name"> {deviceName} </h3>
                    <FontAwesomeIcon icon={faClosedCaptioning} size={'2x'} className={`DeviceView--Device--Details-cc${isOn}`} onClick={ToggleCC} />
                    <button onClick={ToggleTV} className={`DeviceView--Device-Details-tv${tvOn}`}>{tvOn}</button>
                </div>
                <div className="DeviceView--Device--Live">
                    <img className="DeviceView--Device--Live-Img" src={programImg} alt='live program' />
                    <div className="DeviceView--Device--Live-Content">
                        <img className="DeviceView--Device--Live-Logo" src={logo} alt='logo' />
                        <p className="DeviceView--Device--Live-program">{programName}</p>
                    </div>
                    <FontAwesomeIcon icon={faPlayCircle} className={'DeviceView--Device--PlayIcon'} />
                </div>
            </div>
        )
    } else return (
        <div className="DeviceView--Device--Short" onClick={() => setActiveDevice(id)}>
            <div className="DeviceView--Device--Details">
                <button onClick={ToggleChromeCast} className={`DeviceView--Device--Details-btn${chromeCast}`}><FontAwesomeIcon icon={faChromecast} size={'2x'} /></button>
                <FontAwesomeIcon icon={faClosedCaptioning} size={'2x'} className={`DeviceView--Device--Details-cc${isOn}`} onClick={ToggleCC} />
            </div>
            <div className="DeviceView--Device--Live">
                <div className="DeviceView--Device--Live-Content">
                    <h3 className="DeviceView--Device--Details-name"> {deviceName} </h3>
                    <img className="DeviceView--Device--Live-Logo" src={logo} alt='logo' />
                    <p className="DeviceView--Device--Live-program">{programName}</p>
                </div>
            </div>
        </div>

    )


}


export default DeviceButton