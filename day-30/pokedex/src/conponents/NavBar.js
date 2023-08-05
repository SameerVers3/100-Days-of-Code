import React from "react"
import "../css/nav.css"
import SignBtn from "./SignBtn"
import { Link } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import NavUser from "./NavUser"

export default function NavBar(){

    const {user, logOut} = UserAuth()

    return(
        <nav className="nav">
            <Link to="/" className="link" >
                <div className="logo">
                    <h2>Pokédex</h2>
                </div>
            </Link>
            <div className="content">
                <ul>
                    <li><Link to="/" className="link" >All Pokemon</Link></li>
                    <li><Link to="/play" className="link">Play</Link></li>
                    <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
                    <li><Link to="/my-list" className="link">My List</Link></li>
                </ul>
                {user? <NavUser/>: <Link to="/signup" className="link"><SignBtn /></Link>}
            </div>
        </nav>
    )
}