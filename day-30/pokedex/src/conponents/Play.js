import React, { useState } from "react"
import Game from "./Game"
import "../css/game.css";

export default function Play(){
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);

    const showLives = () => {
        let live = [];

        for (let i=0; i<lives ; i++){
            live.push (
                <div className="live">
                    <img src="/images/heart.png" alt="heart" />
                </div>
            )
            console.log("hiiii")
        }

        return ( 
            <div className="lives-container">
                {live.map(l => l)}
            </div>    
        )
    }

    function incScore() {
        setScore(e => e+5);
    }

    function decLive() {
        lives.value --;
    }

    function displayScore() {
        return (
            <div className="score">
                {score}
            </div>
        )
    }

    return (
        <>
            <div className="game-container">
                <Game scoreFunction={incScore} livesFunction={decLive} showLives={showLives} dScore={displayScore}/>
            </div>
        </>
    )
}