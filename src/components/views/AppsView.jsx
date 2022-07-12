import React from "react";
import AppButton from '../buttons/appButton'
import YouTubeLogo from '../../images/youTubeLogo.svg';
import BlueToothLogo from '../../images/BluetoothLogo.png';
import CrackleLogo from '../../images/crackleLogo.svg';
import HuluLogo from '../../images/hululogo.svg';
import ShowtimeLogo from '../../images/showtimeLogo.svg';
import NetflixLogo from '../../images/netflixLogo.svg';



function AppsView() {
    const AppsGallery = [];
    const TestApps = [
        {
            logo: YouTubeLogo,
            name: 'YouTube',
            id: 1,
            message: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
            logo: CrackleLogo,
            name: 'Crackle',
            id: 2,
            message: 'On Crackle, watch Hollywood movies for free-uncut and unedited. From your favorite genres like Action, Horror, Sci-Fi, Crime and Comedy. Just press Play.'
        }, {
            logo: HuluLogo,
            name: 'Hulu',
            id: 3,
            message: 'Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.'
        }, {
            logo: NetflixLogo,
            name: 'NetFlix',
            id: 4,
            message: 'Netflix, Inc. is an American subscription streaming service and production.'
        }, {
            logo: BlueToothLogo,
            name: 'BlueTooth',
            id: 5,
            message: 'Connect your devices VIA bluetooth'
        }, {
            logo: ShowtimeLogo,
            name: 'Showtime',
            id: 6,
            message: 'Enjoy Unlimited Streaming Of Every Series and Entire Seasons On SHOWTIME.'
        }
    ]


    TestApps.forEach((element) => {
        AppsGallery.push(
            <AppButton key={element.id} logo={element.logo} message={element.message} name={element.name} />
        )
    })




    return (
        <div className="AppsView">
            <div className="AppsView--AppsGallery">
                {AppsGallery}
            </div>
        </div>
    )
}

export default AppsView