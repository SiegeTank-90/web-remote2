import React, { useState } from "react";
import Channel from '../guide/channel.jsx';
import ChannelData from './channeldata.json';
import GuideAdvertistment from "../guide/guideAdvertisement.jsx";
import GuideAppButton from '../guide/guideAppButton.jsx';
// Non-Dynamic Demo Advertisement & App
import addImg from '../../images/addImg.png';
import appImg from '../../images/youTubeLogo.svg';

function LiveView() {
    let [guideIndex, setGuideIndex] = useState(1);

    let GuideChannels = [];

    for (let i = 0; i < ChannelData.length; i += 1) {
        if (i % 10 === 0 && i !== 0) {
            GuideChannels.push(<GuideAdvertistment
                image={addImg}
                title={'Watch Now!'}
                message={'Mandalorians are fictional people associated with the planet Mandalore in the Star Wars universe'}

            />)
        }
        GuideChannels.push(<Channel
            num={i + 1}
            stationName={ChannelData[i].station}
            icon={`/channelIcons/${ChannelData[i].icon}`}
            index={guideIndex}
            setGuideIndex={setGuideIndex} />)
        if (i % 12 === 0 && i !== 0) {
            GuideChannels.push(<GuideAppButton
                logo={appImg}
                message={'Netflix is a streaming service that offers a wide variety of award-winning TV shows and movies.'}
                name={'YouTube'}
            />)

        }
    }


    return (
        <div className="LiveView--Guide">
            {GuideChannels}
        </div>
    )
}

export default LiveView