import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavElements(props){

    const [open, setOpen] =useState(false);

    const handleMouseEnter = () => {
        setOpen(true)
    }

    const handleMouseLeave = () => {
        setOpen(false)
    }

    return (
        <div className="icons" 
            onHover={() => setOpen(e => !e)} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <FontAwesomeIcon icon={props.icon} />
            {open && props.children}
        </div>
    )
}