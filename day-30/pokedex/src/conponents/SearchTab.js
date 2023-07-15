import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchTab(){
    return (
        <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search a Pokemon"/>
            <button className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}