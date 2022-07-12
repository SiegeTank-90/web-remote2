import React, { useState, useEffect } from "react";
import Device from '../buttons/deviceButton'
// Demo Programming Images 
import Netflix from '../../images/netflixLogo.svg'
import Hulu from '../../images/hululogo.svg'
import YouTube from '../../images/youTubeLogo.svg'
import Kayne from '../../images/kayneimg.svg'
import Elephants from '../../images/elephants.jpg'
import WierdAl from '../../images/weirdal.jpg'


const DevicesArray = [
    {
        deviceName: 'Living Room TV',
        logo: Netflix,
        id: 1,
        program: {
            programName: 'Jeen-yuhs: A Kayne Trilogy',
            programImg: Kayne
        }
    }
    , {
        deviceName: 'Bedroom TV',
        logo: Hulu,
        id: 2,
        program: {
            programName: 'National Geographics, Elepahants',
            programImg: Elephants
        }
    },
    {
        deviceName: 'Bathroom TV',
        logo: YouTube,
        id: 3,
        program: {
            programName: 'Weird Al : The Saga Begins ',
            programImg: WierdAl
        }
    }
]

function DeviceView() {
    const [Devices, setDevices] = useState(DevicesArray);
    let DeviceGallery = [];

    for (let i = 0; i < Devices.length; i++) {
        DeviceGallery.push(<Device
            device={Devices[i]}
            key={Devices[i].id}
            id={Devices[i].id}
            index={i}
            setActiveDevice={selectDevice}
        />)
    }

    function selectDevice(id) {
        let DevicesClone = [...Devices];
        let selectedDevice = Devices.find((element) => element.id === id)
        DevicesClone = DevicesClone.filter((element) => element !== selectedDevice)
        DevicesClone.unshift(selectedDevice)
        setDevices(DevicesClone)

    }



    return (
        <div className="DevicesView">
            {DeviceGallery}
        </div>

    )

}

export default DeviceView