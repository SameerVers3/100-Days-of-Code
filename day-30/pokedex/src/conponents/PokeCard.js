import React, { useEffect } from "react";
import "../css/poketype.css";
import Type from "./Type";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";

export default function PokeCard(PokeData) {
  const { userData, addFavorite, removeFromFavorites } = UserAuth();
  const navigate = useNavigate();

  const displayDetails = (name) => {
    navigate(`/pokemon/${name}`);
  };

  const getBackground = () => {
    return `img-container ${PokeData.data.types[0].type.name}`;
  };

  const isFav = userData.favorites.includes(PokeData.data.id);

  function toggleFavorite() {
    if (isFav) {
      removeFromFavorites(PokeData.data.id);
    } else {
      addFavorite(PokeData.data.id);
    }
  }

  useEffect(() => {
  }, [userData.favorites]);

  return (
    <>
      <div className="card-container">
        <div className="favourite" onClick={() => toggleFavorite()}>
          {isFav ? <FontAwesomeIcon icon={faSolidStar} /> : <FontAwesomeIcon icon={faRegularStar} />}
        </div>
        <div onClick={() => displayDetails(PokeData.data.species.name)}>
          <div className={getBackground()}>
            <div className="number">
              <h2>#0{PokeData.data.id}</h2>
            </div>
            <img src={PokeData.data.sprites.other["official-artwork"].front_default} alt={PokeData.data.species.name} />
          </div>
          <div className="details">
            <h3>{PokeData.data.species.name}</h3>
            <Type typ={PokeData.data.types} />
          </div>
        </div>
      </div>
    </>
  );
}
