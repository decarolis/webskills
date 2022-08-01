import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// css
import './styles.css';

const Records = ({ points }) => {
  const [displayFlex, setDisplayFlex] = useState({});
  const [name, setName] = useState('');
  const [scoreRecords, setScoreRecords] = useState([
    ['-', 0],
    ['-', 0],
    ['-', 0],
  ]);
  const [recordAlert, setRecordAlert] = useState(false);
  const [position, setPosition] = useState(3);
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDisplayFlex({
        visibility: 'visible',
        opacity: '1',
      });
    }, 1000);
  }, []);

  useEffect(() => {
    let scores = JSON.parse(localStorage.getItem(level));
    if (scores && points > 0) {
      for (let i = 0; i < 3; i++) {
        if (points > scores[i][1]) {
          scores.splice(i, 0, ['Ghost Player', points]);
          scores.pop();
          setPosition(i);
          setRecordAlert(true);
          break;
        }
      }
      setScoreRecords(scores);
    } else if (points > 0) {
      setScoreRecords((prev) => {
        prev.splice(0, 1, ['Ghost Player', points]);
        return prev;
      });
      setPosition(0);
      setRecordAlert(true);
    }
  }, [level, points]);

  const handleName = (e) => {
    setName(e.target.value);
    setScoreRecords((prev) => {
      prev.splice(position, 1, [e.target.value || 'Ghost Player', points]);
      return prev;
    });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(level, JSON.stringify(scoreRecords));
    setName('');
    setPosition(3);
    setRecordAlert(false);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="Records-cover">
      <div style={displayFlex} className="Records">
        {recordAlert && (
          <>
            <p>
              Congratulations, you got a new record!
              <br />
              Enter your name below to save your score.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                className="Records-input"
                name="name"
                type="text"
                value={name}
                onChange={handleName}
              />
              <button className="Records-submit" type="submit">
                Save
              </button>
            </form>
          </>
        )}
        {!recordAlert && (
          <>
            <p>
              Well done! To keep it fun, just go back to home and choose one of
              the other levels.
            </p>
            <button className="Records-home" onClick={handleHome}>
              Home
            </button>
          </>
        )}
        {/* its not a table becouse of the font */}
        <div className="Table">
          <p className="T-caption">Level: {level}</p>
          <p className="T-left T-name"># NAME</p>
          <p className="T-right">SCORE</p>
          <p className={`T-left ${position === 0 ? 'T-selected' : ''}`}>
            1º {position === 0 ? name : scoreRecords[0][0]}
          </p>
          <p className={`T-right ${position === 0 ? 'T-selected' : ''}`}>
            {scoreRecords[0][1]}
          </p>
          <p className={`T-left ${position === 1 ? 'T-selected' : ''}`}>
            2º {position === 1 ? name : scoreRecords[1][0]}
          </p>
          <p className={`T-right ${position === 1 ? 'T-selected' : ''}`}>
            {scoreRecords[1][1]}
          </p>
          <p className={`T-left ${position === 2 ? 'T-selected' : ''}`}>
            3º {position === 2 ? name : scoreRecords[2][0]}
          </p>
          <p className={`T-right ${position === 2 ? 'T-selected' : ''}`}>
            {scoreRecords[2][1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Records;
