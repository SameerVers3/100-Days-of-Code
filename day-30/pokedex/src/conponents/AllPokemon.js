import React, {useState, useEffect} from "react"
import SearchTab from "./SearchTab";
import "../css/search.css"
import PokeCard from "./PokeCard";

export default function AllPokemon(){

    const [allPokemon, setPokemon] = useState([]);
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=10")
    const [loading, setLoading] = useState(undefined);
  
    const getPokemon = async () => {
      const res = await fetch(loadMore)
      const pokeData = await res.json()
  
      const promises = pokeData.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });

      Promise.all(promises).then((pokemonData) => {
        setPokemon((prevPoke) => [...prevPoke, ...pokemonData]);
      });
      setLoading(false)
      setLoadMore(pokeData.next)
    }

    useEffect(() => {
        setTimeout(() => {
          getPokemon();
        }, 1500)
    }, [])

    return(
        <>
        <SearchTab />
        <div className="container">
          {!loading? <CircleLoader
            color={"#ff3f05"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            />:
          ( <div className="pokemon-container">
            <div className="all-container">
             {allPokemon.map(pokemon => {
                return <PokeCard data={pokemon} key={pokemon.species.name}/>
              })}
            </div>
            </div>
          <button className='load-more' onClick={() => getPokemon()}>Load More</button>
          )  
        }
        </div>
      </>
    )
}