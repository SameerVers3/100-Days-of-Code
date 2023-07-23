import react, {useEffect, useState} from "react"
import Type from "./Type"
import "../css/pokepage.css";

export default function PokePageComp(PokeData){
    const [pd, setpd] = useState(PokeData.data);
    const [pd2, setpd2] = useState(PokeData.data2);

    if (!PokeData || !PokeData.data || !PokeData.data.sprites) {
        return <h1>Not Found</h1>;
    }

    const getBackground = () => {
        if (pd.types && pd.types.length > 0) {
          return `img-cont ${pd.types[0].type.name}`
        }
        return "img-cont"
    }

    return (
        <div className="cont">
            <div className="card-cont">
                <div className={getBackground()}>
                    <div className="number">
                        <h2>#0{pd.id}</h2>
                    </div>
                    <img src={pd.sprites.other["official-artwork"].front_default} alt={pd.species.name} className="pokemon-image"/>
                </div>
                    <div className="det">
                        <h3>{pd.species.name}</h3>

                        <div className="t"><h2>Type: </h2>
                        <Type typ={pd.types}/>
                        </div>
                    </div>
                </div>
            <div className="desc">
                <div className="bio">
                    <h2>Bio: </h2>
                    <p>{pd2.flavor_text_entries[0].flavor_text}</p>
                </div>
            </div>
        </div>
    )
}
