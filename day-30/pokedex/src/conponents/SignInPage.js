import React from "react"
import GoogleButton from "react-google-button"
import { UserAuth } from "../context/AuthContext"
import { Navigate, redirect, useNavigate } from "react-router-dom"


export default function SignInPage() {

    const navigate = useNavigate()
    const { googleSignIn } = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate("/my-list")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <GoogleButton onClick={handleGoogleSignIn}/>
        </>
    )
}