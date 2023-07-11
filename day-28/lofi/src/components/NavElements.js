import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavElements(props){
    return (
        <div className="icons">
            <FontAwesomeIcon icon={props.icon} />
        </div>
    )
}