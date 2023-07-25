import React, { useState, useEffect } from "react";
import "../css/evolve.css"


export default function Evolution(pokeData) {
  const [pd, setpd] = useState(pokeData.data);
  const [evolutionData, setEvolutionData] = useState([]);

  useEffect(() => {
    const fetchEvolutionData = async () => {
      const res = await fetch(pd.evolution_chain.url);
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
  }, [pd.evolution_chain.url]);

  return (
    <>
      {evolutionData.map((data) => (
        <div className="evolve" key={data.id}>
          <div className="evolve-box">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt={data.species.name}
              className="evolve-img"
            />
            <h3 className="evolveName">{data.species.name}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
