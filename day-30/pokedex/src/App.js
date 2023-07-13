import { useState } from 'react';
import './App.css';
import Search from "./conponents/SearchTab"


function App() {

  const [allPokemon, setPokemon] = useState([]);
  const 

  const getPokemon = async() => {
    const pokeData = await fetch()
  }

  return (
    <div>
      <div className='header'>
        <h2>Hellow rolf</h2>
        <Search />
      </div>
      <div className="container">
        <div className="pokemon-container">
          <div className="all-container">
            <h2>Helow orld</h2>
          </div>
          <button className='load-more'>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
