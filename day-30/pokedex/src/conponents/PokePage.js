import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Type from "./Type"
import PokePageComp from "./PokePageComp";
import CircleLoader from "react-spinners/CircleLoader"

export default function PokePage() {
  const [pokeData, setPokeData] = useState({});
  const [done, setDone] = useState(undefined);

  const { name } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getPokemon();
    }, 1000);
  }, []);

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    setPokeData(data);
    setDone(true);
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
      <PokePageComp data={pokeData} key={pokeData.species}/>
      }
    </div>
  );
}
