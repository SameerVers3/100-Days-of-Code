import React from "react"

export default function Type(props){

    return (
        <div className="types">
        {
            props.typ.map(type => {
            const iconSrc = `/icons/${type.type.name}.svg`;
            return (
                <div className={`icon ${type.type.name}-icon`}>
                <img src={iconSrc} alt={`type-${type.type.name}`} />
                </div>
            )
            })
        }
        </div>
    )
}