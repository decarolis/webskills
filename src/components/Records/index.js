import React from 'react';

// css
import './styles.css';

const Records = () => {
  return (
    <div className="Records">
      <p>Enter your name below to save your score.</p>
      <form>
        <input type="text" />
        <button type="submit">Save</button>
      </form>

      <div className="Table">
        <p className="T-caption">Level: Easy</p>
        <p className="T-left">NOME</p>
        <p className="T-right">SCORE</p>
        <p className="T-left">Name 1</p>
        <p className="T-right">Score 1</p>
        <p className="T-left">Name 2</p>
        <p className="T-right">Score 2</p>
        <p className="T-left">Name 3</p>
        <p className="T-right">Score 3</p>
      </div>
    </div>
  );
};

export default Records;
