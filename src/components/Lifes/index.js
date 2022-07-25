import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

// css
import './styles.css';

const Lifes = ({ quantity }) => {
  return (
    <div className="Lifes">
      <BsFillSuitHeartFill className={quantity > 4 ? '' : 'Lost'} />
      <BsFillSuitHeartFill className={quantity > 3 ? '' : 'Lost'} />
      <BsFillSuitHeartFill className={quantity > 2 ? '' : 'Lost'} />
      <BsFillSuitHeartFill className={quantity > 1 ? '' : 'Lost'} />
      <BsFillSuitHeartFill className={quantity > 0 ? '' : 'Lost'} />
    </div>
  );
};

export default Lifes;
