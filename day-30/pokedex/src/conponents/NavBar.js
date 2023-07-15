import React from "react"
import "../nav.css"
import SignBtn from "./SignBtn"

export default function NavBar(){
    return(
        <nav className="nav">
            <div className="logo">
                <h2>Pokédex</h2>
            </div>
            <div className="content">
                <ul>
                    <li>All Pokemon</li>
                    <li>Play</li>
                    <li>Leaderboard</li>
                    <li>My list</li>
                </ul>
                <SignBtn />
            </div>
        </nav>
    )
}