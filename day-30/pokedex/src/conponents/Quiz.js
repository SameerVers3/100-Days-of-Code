import React, { useEffect, useState } from "react";

export default function Quiz(prop) {
    const [pokemonData, setPokemonData] = useState([]);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        setAnswerSelected(false)
        fetchPokemons();
    }, []);

    useEffect(() => {
        if (!answerSelected) {
            const timeout = setTimeout(() => {
                autoSelectCorrectAnswer();
            }, 15000);

            return () => clearTimeout(timeout);
        }
    }, [answerSelected]);

    const fetchPokemons = async () => {
        const pokemon = await getPokemon();
        setPokemonData(pokemon);
        setRandomIndex(getRandom());
        setAnswerSelected(false);
        prop.start();
    };

    const getRandomArray = (num) => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(Math.floor(Math.random() * 1000) + 1);
        }
        return arr;
    };

    const getRandom = () => {
        return Math.floor(Math.random() * 4) + 1;
    };

    const getPokemon = async () => {
        const ids = getRandomArray(4);
        const promises = ids.map(async (id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            return data;
        });
        return Promise.all(promises);
    };

    const autoSelectCorrectAnswer = () => {
        if (!answerSelected && pokemonData[randomIndex]) {
            const correctAnswerName = pokemonData[randomIndex].species.name;
            const correctOption = document.querySelector(`.option[data-name="${correctAnswerName}"]`);
    
            if (correctOption) {
                correctOption.style.backgroundColor = "green";
                const options = document.querySelectorAll(".option");
                options.forEach((option) => option.classList.add("disable-hover"));
                prop.inc();
                prop.stop();
                setAnswerSelected(true);
            }
        }
    };
    
    const handleOptionsClick = (e) => {
        if (answerSelected) {
            return;
        }

        let name = e.target.textContent;

        if (name === pokemonData[randomIndex].species.name) {
            prop.inc();
            e.target.style.backgroundColor = "green";
            const options = document.querySelectorAll(".option");
            options.forEach((option) => option.classList.add("disable-hover"));
            prop.stop()
            setAnswerSelected(true);
            
        }
        else {
            e.target.style.backgroundColor = "red";
        }
    };

    const handleNext = () => {
        fetchPokemons();
    };

    const renderGame = () => {

        return (
            <>
                {pokemonData.length > 0 && pokemonData[randomIndex]?.sprites?.other?.["official-artwork"]?.front_default && (
                    <div className="guess-img">
                        <img
                            className={answerSelected ? "" : "hidden"}
                            id="imggg"
                            src={pokemonData[randomIndex].sprites.other["official-artwork"].front_default}
                            alt="guess it!"
                        />
                    </div>
                )}
                <div className="options-container">
                    {pokemonData.map((pokemon, index) => {
                        return (
                            <div
                                className={`option ${answerSelected ? "disable-hover" : ""}`}
                                key={pokemon.species.name}
                                onClick={(e) => handleOptionsClick(e)}
                            >
                                {pokemon.species.name}
                            </div>
                        );
                    })}
                </div>
                {answerSelected && (
                    <div className="next" onClick={handleNext}>
                        Next
                    </div>
                )}
            </>
        );
    };

    return <>{renderGame()}</>;
}
