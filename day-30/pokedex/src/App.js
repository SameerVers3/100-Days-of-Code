import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './conponents/PokeCard';
import NavBar from './conponents/NavBar';
import AllPokemon from './conponents/AllPokemon';
import { Routes , Route} from 'react-router-dom';
import Play from './conponents/Play';
import PokePage from "./conponents/PokePage"

function App() {

  return (
    <>
    <div className='header'>
      <NavBar />
    </div>
    <Routes>
      <Route path="/" element={<AllPokemon />}></Route>
      <Route path="/play" element={<Play />}></Route>
      <Route path="/pokemon/:name" element={<PokePage />}></Route>
    </Routes>
    </>

    // <div>
    //   <AllPokemon/>
    // </div>
  );
}

export default App;
