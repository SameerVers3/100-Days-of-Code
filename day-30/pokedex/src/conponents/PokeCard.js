import React, { useState } from "react"
import "../css/poketype.css"
import Type from "./Type";
import { useNavigate } from "react-router-dom"


export default function PokeCard(PokeData){

    const navigate = useNavigate();

    const displayDetails =  (name) => {
        navigate(`/pokemon/${name}`)
    }

    const getBackground = () => {
        return `img-container ${PokeData.data.types[0].type.name}`
    }

    return (
        <>
         <div className="card-container" onClick={() => displayDetails(PokeData.data.species.name)}>
            <div className={getBackground()}>
                <div className="number">
                    <h2>#0{PokeData.data.id}</h2>
                </div>
                <img src={PokeData.data.sprites.other["official-artwork"].front_default} alt={PokeData.data.species.name} />
            </div>
                <div className="details">
                    <h3>{PokeData.data.species.name}</h3>

                    <Type typ={PokeData.data.types}/>
                </div>
            </div>
         </>
    )
}   
