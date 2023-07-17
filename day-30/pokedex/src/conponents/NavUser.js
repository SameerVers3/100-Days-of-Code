import React from "react"
import { UserAuth } from "../context/AuthContext"


export default function NavUser() {
    
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="nav-user">
            <div className="user-image">
                <img src={user.photoURL} alt={user.displayName} />
            </div>
            <div className="name"><h4>{user.displayName}</h4></div>
            <div className="sign-out" onClick={handleSignOut}>
                Sign Out
            </div>
        </div>
    )
}