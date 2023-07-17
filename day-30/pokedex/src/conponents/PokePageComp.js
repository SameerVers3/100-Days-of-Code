import react from "react"
import Type from "./Type"
import "../css/pokepage.css";

export default function PokePageComp(PokeData){

    if (!PokeData || !PokeData.data || !PokeData.data.sprites) {
        return <h1>Not Found</h1>;
    }

    const getBackground = () => {
        if (PokeData.data.types && PokeData.data.types.length > 0) {
          return `img-cont ${PokeData.data.types[0].type.name}`
        }
        return "img-cont"
    }
    
    

    return (
        <div className="cont">
            <div className="card-container">
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
            <div>
                <div>
                    <h2>Description: </h2>
                    {/* <p>{getDescription()}</p> */}
                </div>
            </div>
        </div>
    )
}