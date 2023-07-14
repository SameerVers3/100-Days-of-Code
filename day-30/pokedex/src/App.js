import { useEffect, useState } from 'react';
import './App.css';
import Search from "./conponents/SearchTab"
import PokeCard from './conponents/PokeCard';


function App() {

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

  return (
    <div>
      <div className='header'>
        <h2>Hellow rolf</h2>
        <Search />
      </div>
      <div className="container">
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemon.map(pokemon => {
              return <PokeCard data={pokemon}/>
            })}
          </div>
        </div>
        <button className='load-more' onClick={() => getPokemon()}>Load More</button>
      </div>
    </div>
  );
}

export default App;
