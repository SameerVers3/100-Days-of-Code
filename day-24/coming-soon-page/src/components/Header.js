import React from "react"
import logo from "../images/EdSpace Logo Final-03.png"

export default function Header(){
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="edspace logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>About Us</li>
                    <li><button className="btn">Join Waitlist</button></li>
                </ul>
            </div>
        </div>
    )
}