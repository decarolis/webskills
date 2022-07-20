import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

// css
import './styles.css';

const Lifes = ({ quantity }) => {
  return (
    <div className="Lifes">
      <BsFillSuitHeartFill color={quantity > 2 ? '#b60c0c' : '#000000'} />
      <BsFillSuitHeartFill color={quantity > 1 ? '#b60c0c' : '#000000'} />
      <BsFillSuitHeartFill color={quantity > 0 ? '#b60c0c' : '#000000'} />
    </div>
  );
};

export default Lifes;
