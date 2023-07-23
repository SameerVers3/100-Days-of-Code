import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Type from "./Type"
import PokePageComp from "./PokePageComp";
import CircleLoader from "react-spinners/CircleLoader"

export default function PokePage() {
  const [pokeData, setPokeData] = useState({});
  const [pokeData2, setPokeData2] = useState({});
  const [done, setDone] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    getPokemon()
    setTimeout(()=> {
      setDone(true);
    }, 1000)
  }, []);

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
    const data2 = await res2.json();
    setPokeData(data);
    setPokeData2(data2);
  };

  return (
    <div className="pokePage">
      {!done? <CircleLoader
        color={"#ff3f05"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: 
      <PokePageComp data={pokeData} data2={pokeData2} key={pokeData.species}/>
    }
    </div>
    
  );
}
