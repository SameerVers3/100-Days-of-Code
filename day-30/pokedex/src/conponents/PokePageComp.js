import react, {useEffect, useState} from "react"
import Type from "./Type"
import "../css/pokepage.css";
import Stat from "../conponents/Stat"
import Evolution from "./Evolution";

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

    const calculateHeight = (h) => {
        let m = h/10;
        let f = m * 3.28084;
        let ft = Math.round(f);
        let inch = Math.round((f - ft)*10);
        if (inch < 0){
            inch += 12;
            ft--;
        }
        return (`${ft}'${inch}''`)
    }

    const getAbilities = () => {
        let ability = "";
        for (let i=0; i<pd.abilities.length; i++){
            ability += `${pd.abilities[i].ability.name}  `;
        }
        console.log(pd2);
        return  ability
    }

    console.log("here");
    console.log(pd2)

    return (
        <div className="cont">
            <div className="card-cont">
                <div className={getBackground()}>
                    <div className="id">
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

                <div className="stats">
                    <h2>Info: </h2>
                <table className="t-stat">
                    <tr>
                        <td>Genus: </td>
                        <td>{pd2.genera[7].genus}</td>
                    </tr>
                    <tr>
                        <td>Habitat: </td>
                        <td>{pd2.habitat.name}</td>
                    </tr>
                    <tr>
                        <td>Shape: </td>
                        <td>{pd2.shape.name}</td>
                    </tr>
                    <tr>
                        <td>Height: </td>
                        <td>{calculateHeight(pd.height)}</td>
                    </tr>
                    <tr>
                        <td>Abilities: </td>
                        <td>{getAbilities()}</td>
                    </tr>
                    <tr>
                        <td>Weight: </td>
                        <td>{`${Math.round((pd.weight/10) * 2.20462)} lbs`}</td>
                    </tr>
                    
                    </table>
                </div>
                
                <div className="training">
                    <h2>Training: </h2>
                <table className="t-stat">
                    <tr>
                        <td>Base Happiness: </td>
                        <td>{pd2.base_happiness}</td>
                    </tr>
                    <tr>
                        <td>Capture rate: </td>
                        <td>{pd2.capture_rate}</td>
                    </tr>
                    <tr>
                        <td>Growth rate: </td>
                        <td>{pd2.growth_rate.name}</td>
                    </tr>
                    <tr>
                        <td>Base Experience: </td>
                        <td>{pd.base_experience}</td>
                    </tr>
                    </table>
                </div>
            </div>

            <div className="desc">
                <div className="evolution-chain">
                    <h2>Evolution Chain</h2>
                    <Evolution data2={pd2} data={pd}/>
                </div>
                <Stat data={pd}/>
            </div>

        </div>
    )
}
