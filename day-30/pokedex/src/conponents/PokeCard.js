import React from "react"

export default function PokeCard(PokeData){

    return (
         <div className="card-container">
            <div className="img-container">
            <div className="number">
                <small>#0{PokeData.data.id}</small>
            </div>
            <img src={PokeData.data.sprites.other.dream_world.front_default} alt={PokeData.data.species.name} />
            </div>
            <div className="details">
                <h3>{PokeData.data.species.name}</h3>
                <small>Type:{PokeData.data.types.map(type => type.type.name + " ")}</small>
            </div>
         </div>
    )
}   
