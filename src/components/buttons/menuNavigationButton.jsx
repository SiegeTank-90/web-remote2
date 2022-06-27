import React from "react";


function MenuNavigationButton({ icon, iconActive, index, menuIndex, setMenuIndex, name }) {

    let img = icon
    let active = ''
    let activetext = ''
    if (index === menuIndex) {
        active = 'NavMenu-Active'
        activetext = 'NavMenu-Active-Text'
        img = iconActive

    }



    return (
        <button onClick={() => setMenuIndex(index)} className={`Menu--Navigation--Button `}>
            <img src={img} className={`Menu--Navigation--Button-Icon ${active}`} alt={name} />
            <p className={`Menu--Navigation--Button-Name ${activetext}`} >{name}</p>
        </button>
    )

}

export default MenuNavigationButton