import React from "react"

export default function From(){
    return(
        <div className="container">
            <form action="">
                <input type="text" placeholder="Enter email" className="form"/>
            </form>
            <span><i class="fa-solid fa-envelope"></i></span>
        </div>
    )
}