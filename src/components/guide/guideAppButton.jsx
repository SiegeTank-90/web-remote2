import React from "react";

function GuideAppButton({ logo, message, name }) {
    return (
        <button className="Guide--Application-Button">
            <img className="Guide--Application-logo" src={logo} alt={`${name} button`} />
            <h3 className="Guide--Application-paragraph">{message}</h3>
        </button>
    )
}

export default GuideAppButton