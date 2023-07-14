import React, { useState } from "react"
import DetailCard from "./DetailCard";
import "../poketype.css"
import Type from "./Type";

export default function PokeCard(PokeData){

    const [show, setShow] = useState(false);

    const displayDetails =  () => {
        setShow(prev => {
            !prev ? document.body.classList.add('active') : document.body.classList.remove('active')
            return !prev
        });
    }

    const getBackground = () => {
        return `img-container ${PokeData.data.types[0].type.name}`
    }

    return (
        <>
         <div className="card-container" onClick={() => displayDetails()}>
            <div className={getBackground()}>
                <div className="number">
                    <h2>#0{PokeData.data.id}</h2>
                </div>
            <img src={PokeData.data.sprites.other.dream_world.front_default} alt={PokeData.data.species.name} />
            </div>
            <div className="details">
                <h3>{PokeData.data.species.name}</h3>

                <Type typ={PokeData.data.types}/>
            </div>
         </div>
         {show && <DetailCard data={PokeData.data}/>}
         </>
    )
}   
