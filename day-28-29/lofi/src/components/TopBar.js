import React from "react";
import NavElements from "./NavElements";
import { faPlay, faForwardStep, faSliders, faBackwardStep} from '@fortawesome/free-solid-svg-icons'



export default function TopBar(){
    return (
        <div className="glass nav-bar">
            <NavElements icon={faBackwardStep}/>
            <NavElements icon={faPlay}/>
            <NavElements icon={faForwardStep}/>
            <NavElements icon={faSliders}/>
        </div>
    )
}