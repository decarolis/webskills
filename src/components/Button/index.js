import React from 'react';
import './styles.css';

function Button({ handleOnCick }) {
  return (
    <div className="Button">
      <button onClick={handleOnCick}>Start</button>
    </div>
  );
}

export default Button;
