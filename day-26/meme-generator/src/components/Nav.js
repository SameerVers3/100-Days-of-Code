import React from "react"
import icon from "../images/icon.png"


export default function Header() {
    return (
        <header className="header">
            <img 
                src={icon}
                className="header--image"
                alt="icon"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Have Fun</h4>
        </header>
    )
}