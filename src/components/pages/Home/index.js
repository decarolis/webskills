import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

// components
import Select from '../../Select';
import Button from '../../Button';

const Home = () => {
  const [levels] = React.useState(['Easy', 'Normal', 'Difficult', 'Linus']);
  const [level, setLevel] = React.useState('Select Level');
  const navigate = useNavigate();

  console.log(level);

  const handleLevel = (e) => {
    setLevel(e.target.options[e.target.selectedIndex].text);
  };

  const handleStartGame = () => {
    if (level === 'Select Level') {
      return;
    }
    navigate(`/game/${level}`);
  };

  return (
    <div className="Home">
      <h1>Dev Skills</h1>
      <Select value={level} options={levels} handleOnChange={handleLevel} />
      <Button handleOnCick={handleStartGame}>Start</Button>
    </div>
  );
};

export default Home;
