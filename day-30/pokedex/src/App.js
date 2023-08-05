import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './conponents/PokeCard';
import NavBar from './conponents/NavBar';
import AllPokemon from './conponents/AllPokemon';
import { Routes , Route} from 'react-router-dom';
import Play from './conponents/Play';
import PokePage from "./conponents/PokePage"
import { AuthContextProvider } from './context/AuthContext';
import SignInPage from './conponents/SignInPage';
import LeaderBoard from './conponents/LeaderBoard';
import FavList from './conponents/FavList';

function App() {

  return (
    <>
    <AuthContextProvider>
      <div className='header'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<AllPokemon />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/pokemon/:name" element={<PokePage />}></Route>
        <Route path="/signup" element={<SignInPage/>}></Route>
        <Route path="/leaderboard" element={<LeaderBoard/>}></Route>
        <Route path="/my-list" element={<FavList/>}></Route>
      </Routes>
    </AuthContextProvider>

    </>
  );
}

export default App;
