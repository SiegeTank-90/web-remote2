import React, { useState } from "react";


function AppButton({ logo, message, name }) {
    const [description, setDescription] = useState('hidden')

    function toggleMessage() {
        if (description === 'hidden') {
            setDescription('')
        } else setDescription('hidden')
    }


    return (
        <button onFocus={toggleMessage} onBlur={toggleMessage} className="AppsGallery--Button">
            <img className="AppsGallery--Logo" src={logo} alt={`${logo} ${name}`} />
            <p className={`AppsGallery--Message ${description}`}>{message}</p>
        </button>
    )
}


export default AppButton