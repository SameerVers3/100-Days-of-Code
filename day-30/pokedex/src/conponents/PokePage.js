import React from "react"
import "../css/detailCard.css"
import { useParams } from "react-router-dom"

export default function PokePage(props){

    const { name } = useParams();

    return(
        <>
            <h1>Hey its {name}</h1>
        </>
    )
}