import React, { useEffect, useState, lazy, Suspense } from "react";
import Play from "./Play";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { signal } from "@preact/signals-react";

const Quiz = lazy(() => import('./Quiz'));

function Game(prop) {
    const [timeRunning, setTimeRunning] = useState(true); // Use state to manage timer

    function stopTimer() {
        console.log("time stopped");
        setTimeRunning(false);
    }

    const showTimer = (time) => {
        return (
            <div className="timer">
                <CountdownCircleTimer
                    key={timeRunning} // Use state variable as the key
                    isPlaying={timeRunning}
                    duration={time}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                    size={100}
                    strokeWidth={8}
                    onComplete={() => {
                        stopTimer();
                    }}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>
        );
    };

    function incSc() {
        prop.scoreFunction();
    }

    function startTimer() {
        console.log("time started");
        setTimeRunning(true);
    }

    return (
        <>
            <div className="header">
                {prop.showLives()}
                {prop.dScore()}
                {showTimer(15)}
            </div>
            <div className="game-window">
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Quiz inc={incSc} stop={stopTimer} start={startTimer} />
                </Suspense>
            </div>
        </>
    );
}

export default React.memo(Game);
