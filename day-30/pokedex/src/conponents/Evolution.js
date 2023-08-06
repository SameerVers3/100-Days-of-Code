import React, { useState, useEffect } from "react";
import "../css/evolve.css"
import { useNavigate } from "react-router-dom"


export default function Evolution(pokeData) {
  const [pd2, setpd2] = useState(pokeData.data2);
  const [pd, setpd] = useState(pokeData.data);
  const [evolutionData, setEvolutionData] = useState([]);

  const navigate = useNavigate();

  const displayDetails =  (name) => {
    navigate(`/pokemon/${name}`);
    window.location.reload();
  }

  useEffect(() => {
    const fetchEvolutionData = async () => {
      const res = await fetch(pd2.evolution_chain.url);
      const data = await res.json();

      let chainName = [];

      let pokeName = data.chain.species.name;
      chainName.push(pokeName);

      if (data.chain.evolves_to[0]) {
        pokeName = data.chain.evolves_to[0].species.name;
        chainName.push(pokeName);
        if (data.chain.evolves_to[0].evolves_to[0]) {
          pokeName = data.chain.evolves_to[0].evolves_to[0].species.name;
          chainName.push(pokeName);
        }
      }

      const promises = chainName.map(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();
        return data;
      });

      const resolvedData = await Promise.all(promises);
      setEvolutionData(resolvedData);
    };

    fetchEvolutionData();
  }, [pd2.evolution_chain.url]);

  const getBackground = () => {
    if (pd.types && pd.types.length > 0) {
      return `evolve-box ${pd.types[0].type.name}`
    }
    return "evolve-box"
  }

  return (
    <div className="ev">
      {evolutionData.map((data) => (
        <div className="evolve" key={data.id}>
          <div className={getBackground()} onClick={() => displayDetails(data.species.name)}>
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.species.name}
              className="evolve-img"
            />
          </div>
          <h3 className="evolveName">{data.species.name}</h3>
        </div>
        
      ))}
    </div>
  );
}
