import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchTab(){
    return (
        <div className="nav">
            <input type="text" className="search-bar"/>
            <button className="search-btn"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}