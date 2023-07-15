import React from "react"
import "../css/nav.css"
import SignBtn from "./SignBtn"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="nav">
            <div className="logo">
                <h2>Pokédex</h2>
            </div>
            <div className="content">
                <ul>
                    <li><Link to="/" className="link" >All Pokemon</Link></li>
                    <li><Link to="/play" className="link">Play</Link></li>
                    <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
                    <li><Link to="my-favourites" className="link">My List</Link></li>
                </ul>
                <SignBtn />
            </div>
        </nav>
    )
}