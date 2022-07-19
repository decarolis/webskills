import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

//import { useParams } from 'react-router-dom';

// components
import RandomImage from '../../RandomImage';

// css
import './styles.css';

const Game = () => {
  //const { level } = useParams();

  return (
    <div className="Game">
      <header className="Info-game">
        <p className="Counter">0</p>
        <div className="Heart-div">
          <BsFillSuitHeartFill className="Heart" />
          <BsFillSuitHeartFill className="Heart" />
          <BsFillSuitHeartFill className="Heart" />
        </div>
        <p className="Timer">10</p>
      </header>
      <RandomImage />
    </div>
  );
};

export default Game;
