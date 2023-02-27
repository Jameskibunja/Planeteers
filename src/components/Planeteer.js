import React, { useState } from "react";

const Planeteer = ({ planeteer }) => {
  const [showBio, setShowBio] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleClick = () => {
    setShowBio((showBio) => !showBio);
  };

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{showBio ? planeteer.bio : planeteer.quote}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            <p>{currentYear - planeteer.born} years old</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Planeteer;
