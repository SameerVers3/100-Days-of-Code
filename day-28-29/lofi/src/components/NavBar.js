import React, {useState, useEffect}from "react"
import NavElements from "./NavElements"
import { faEnvelope, faMusic, faSliders, faImage, faGear} from '@fortawesome/free-solid-svg-icons'
import DropDownMenu from "./DropDownMenu"

export default function NavBar(){

    return (
        <div className="nav-bar glass">
            <NavElements icon={faEnvelope}/>
            <NavElements icon={faMusic}/>
            <NavElements icon={faSliders}/>
            <NavElements icon={faImage}>
                <DropDownMenu/>
            </NavElements>
            <NavElements icon={faGear}>
                <DropDownMenu />
            </NavElements> 
        </div>
    )
}