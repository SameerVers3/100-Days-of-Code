import React from "react"
import Play from "./Play";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Game() {
    const showTimer = (time) => {
        return  (
            (
                <div className="timer">
                    <CountdownCircleTimer
                    isPlaying
                    duration={time}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={100}
                    strokeWidth={8}
                    >
                    {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div>
              )
        )
    }
    
    const getRandomArray = (num) => {
        let arr = [];
        for (let i=0; i< num ; i++){
            arr.push(Math.floor(Math.random() * 1000) + 1)
        }

        return arr;
    }

    const getPokemon = async () => {
        const ids = getRandomArray(5);
        const promises = ids.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          return data;
        });
    
        return Promise.all(promises);
    };

    const fetchPokemons = async () => {
        const pokemonData = await getPokemon();
        return pokemonData;
    };

    const renderGame = () => {
        const pokemon = fetchPokemons();
        console.log(pokemon)
        let id = 0;
        return (
            pokemon.map((pokemon) => {
                if (id == 0 ){
                    return (
                        <div className="guess-img">
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="guesa it!" />
                        </div>
                    )
                } else {
                    return (
                        <div className="option"></div>
                    )
                }
            })
        )
    }


    const pokemon = fetchPokemons()
    console.log(pokemon)

    return (
        <>
            {showTimer(15)}  
            {renderGame()}
        </>
    )
}