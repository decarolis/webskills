import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// css
import './styles.css';

const RecruiterMsg = ({ children, welcome, welcomeFunc }) => {
  const [displayFlex, setDisplayFlex] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDisplayFlex({
        visibility: 'visible',
        opacity: '1',
      });
    }, 1000);
  }, []);

  const handleStart = () => {
    welcomeFunc();
  };
  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="Recruiter-msg-cover">
      <div style={displayFlex} className="Recruiter-msg">
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
    </div>
  );
};

export default RecruiterMsg;
