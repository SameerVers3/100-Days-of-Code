import React, { useState } from "react"
import "../css/stats.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Stat(pokeData){
    const [pd, setPd] = useState(pokeData.data)

    const getStat = () => {
        let pathColor, trailColor, col;
        return pd.stats.map(stat => {
            if (stat.base_stat < 36) {
                pathColor = '#e86056';
                trailColor = '#f7c8c8';
                col = '#e86056'
            } else if (stat.base_stat > 85) {
                pathColor = '#3ca63a';
                trailColor = '#ccf2cb';
                col = "#3ca63a";
            } else {
                // Default colors if value is between 31 and 100
                pathColor = `rgba(62, 152, 199)`;
                trailColor = '#b5dbeb';
                col = "rgba(62, 152, 199)"
            }

            if (stat.stat.name.includes("-")){
                stat.stat.name = stat.stat.name.replace("-", " ")
            }
            return (
            <div className="stat">
            <CircularProgressbar 
                key={stat.stat.name} 
                value={stat.base_stat} 
                maxValue={150} 
                text={`${stat.base_stat}`}
                styles={{
                    path: { stroke: pathColor },
                    trail: { stroke: trailColor },
                    text: { fill: col, fontSize: '25px', textTransform: "capitalize", fontWeight: "600" },
                    background: { fill: 'transparent' },
                    
                }}
            />
            <h3>{stat.stat.name}</h3>
            </div>
            )
        });
    };

    return (
        <div className="stat-container">
            <h2>Stat</h2>
                <div className="stat-cont">
                    {getStat()}
                </div>
        </div>
    )
}