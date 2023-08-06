import React, {useState, useEffect} from "react"
import { UserAuth } from "../context/AuthContext"
import PokeCard from "./PokeCard"

export default function FavList() {

    const {userData} = UserAuth();

    const [allPokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    if (userData.favorites.length >= 1) {
    const promises = userData.favorites.map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    });

    Promise.all(promises).then((pokemonData) => {
      setPokemon(pokemonData);
    });
    }
  };

    useEffect(() => {
        // setPokemon([]);
        getPokemon();
    }, [userData]);

    return (
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon) => {
            return <PokeCard data={pokemon} key={pokemon.species.name} />;
           
          })}   
        </div>
    </div>
    )
}