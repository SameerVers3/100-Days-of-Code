import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Type from "./Type"
import PokePageComp from "./PokePageComp";

export default function PokePage() {
  const [pokeData, setPokeData] = useState({});

  const { name } = useParams();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    setPokeData(data);
    console.log(pokeData[0])
  };


  return (
    <>
      <PokePageComp data={pokeData} key={pokeData.species}/>
    </>
  );
}
