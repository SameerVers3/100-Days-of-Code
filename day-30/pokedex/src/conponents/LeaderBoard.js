import React from "react"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

export default function LeaderBoard() {
    const navigate = useNavigate()
    const {user} = UserAuth()

    return (
        <>
            {!user && navigate("/signup")}
            <h2>hello shit</h2>
        </>
    )
}