import React, { useState } from "react";
import { getRandomPlaneteer } from "../data/planeteers";

const RandomButton = ({ onAddRandomPlaneteer }) => {
  const [randomPlaneteers, setRandomPlaneteers] = useState([]);

  const handleClick = async () => {
    const randomPlaneteer = getRandomPlaneteer();
    if (!randomPlaneteers.includes(randomPlaneteer)) {
      setRandomPlaneteers([...randomPlaneteers, randomPlaneteer]);
      try {
        const response = await fetch("http://localhost:8003/planeteers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(randomPlaneteer),
        });
        const newPlaneteer = await response.json();
        onAddRandomPlaneteer(newPlaneteer);
      } catch (error) {
        console.error("Error adding random planeteer:", error);
      }
    } else {
      alert(`Planeteer ${randomPlaneteer.name} already on the page!!`);
    }
  };

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
};

export default RandomButton;
