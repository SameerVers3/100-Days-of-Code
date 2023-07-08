import React from "react"
import image from "../images/icon.png"

export default function Nav(){
    return(
        <nav className="nav">
            <div className="logo">
                <img src={image} alt="logo" />
                <h3>Meme Generator</h3>
            </div>
            <p className="para">Have fun</p>
        </nav>
    )
}