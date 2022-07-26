import React from 'react';
import { useNavigate } from 'react-router-dom';

// css
import './styles.css';

const RecruiterMsg = ({ children, welcome, welcomeFunc }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    welcomeFunc();
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="Recruiter-msg">
      {children}
      {welcome && (
        <button className="Button-ok" onClick={handleStart}>
          Ok
        </button>
      )}
      {!welcome && (
        <button className="Button-home" onClick={handleHome}>
          Home
        </button>
      )}
    </div>
  );
};

export default RecruiterMsg;
