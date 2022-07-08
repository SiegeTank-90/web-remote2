import React from "react";


function GuideAdvertistment({ image, message, title }) {

    return (
        <div className="Guide--Advertisement">
            <img className="Guide--Advertisement-img" src={image} alt={'advertisement'} />
            <div className="Guide--Advertisement-message">
                <h3 className="Guide--Advertisement-title">{title}</h3>
                <h3 className="Guide--Advertisement-paragraph">{message}</h3>
            </div>
        </div>
    )
}

export default GuideAdvertistment