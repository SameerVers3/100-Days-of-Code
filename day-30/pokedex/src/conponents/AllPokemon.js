import React, {useState, useEffect} from "react"
import PokeCard from "./PokemonData"
import SearchTab from "./SearchTab";
import "../css/search.css"

export default function AllPokemon(){

    const [allPokemon, setPokemon] = useState([]);
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
  
  
    const getPokemon = async () => {
      const res = await fetch(loadMore)
      const pokeData = await res.json()
  
      function createPokemonArray(result) {
        result.forEach( async (pokemon) => {
          
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()
   
          setPokemon(prevPoke => [...prevPoke, data])
        })
      }
  
      createPokemonArray(pokeData.results)
      setLoadMore(pokeData.next)
    }
  
    useEffect(() => {
      getPokemon();
    }, [])

    return(
        <>
        <SearchTab />
        <div className="container">
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemon.map(pokemon => {
              return <PokeCard data={pokemon} key={pokemon.id}/>
            })}
          </div>
        </div>
        <button className='load-more' onClick={() => getPokemon()}>Load More</button>
      </div>
      </>
    )
}