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
            message: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
            logo: CrackleLogo,
            name: 'Crackle',
            message: 'On Crackle, watch Hollywood movies for free-uncut and unedited. From your favorite genres like Action, Horror, Sci-Fi, Crime and Comedy. Just press Play.'
        }, {
            logo: HuluLogo,
            name: 'Hulu',
            message: 'Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.'
        }, {
            logo: NetflixLogo,
            name: 'NetFlix',
            message: 'Netflix, Inc. is an American subscription streaming service and production.'
        }, {
            logo: BlueToothLogo,
            name: 'BlueTooth',
            message: 'Connect your devices VIA bluetooth'
        }, {
            logo: ShowtimeLogo,
            name: 'Showtime',
            message: 'Enjoy Unlimited Streaming Of Every Series and Entire Seasons On SHOWTIME.'
        },
        {
            logo: ShowtimeLogo,
            name: 'Showtime',
            message: 'Enjoy Unlimited Streaming Of Every Series and Entire Seasons On SHOWTIME.'
        }, {
            logo: ShowtimeLogo,
            name: 'Showtime',
            message: 'Enjoy Unlimited Streaming Of Every Series and Entire Seasons On SHOWTIME.'
        },
        {
            logo: ShowtimeLogo,
            name: 'Showtime',
            message: 'Enjoy Unlimited Streaming Of Every Series and Entire Seasons On SHOWTIME.'
        }

    ]


    TestApps.forEach((element) => {
        AppsGallery.push(
            <AppButton logo={element.logo} message={element.message} name={element.name} />
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