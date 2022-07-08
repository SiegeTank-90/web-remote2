import React, { useState } from "react";


function AppButton({ logo, message, name }) {
    const [description, setSecretMessage] = useState('hidden')
    const [animate, setAnimate] = useState('')

    function toggleMessage() {
        if (description === 'hidden') {
            setSecretMessage('')
            setAnimate('animate__animated animate__fadeInUp')
        } else {
            setSecretMessage('hidden')
            setAnimate('')
        }
    }


    return (
        <button onFocus={toggleMessage} onBlur={toggleMessage} className="AppsGallery--Button">
            <img className={`AppsGallery--Logo ${animate}`} src={logo} alt={`${logo} ${name}`} />
            <p className={`AppsGallery--Message ${description} ${animate}`}>{message}</p>
        </button>
    )
}


export default AppButton