import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import "../detailCard.css"
import PokemonData from "./PokemonData"

export default function DetailCard(PokeData){
    return(
        <div className="overlay">
            <div className="card">
                <div className="cross">
                <FontAwesomeIcon icon={faXmarkCircle} />
                </div>

                <div className="card">
                    <PokemonData data={console.log(PokeData)}/>
                </div>
            </div>
        </div>
    )
}