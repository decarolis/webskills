import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

// css
import './styles.css';

// components
import Select from '../../Select';
import Button from '../../Button';

const Home = () => {
  const [levels] = React.useState([
    `I'm a Recruiter`,
    'Easy',
    'Difficult',
    'Linus Torvalds',
  ]);
  const [level, setLevel] = React.useState('Select Level');
  const [notSelected, setNotSelected] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const handleLevel = e => {
    setLevel(e.target.options[e.target.selectedIndex].text);
  };

  const handleStartGame = () => {
    if (level === 'Select Level') {
      setNotSelected('Not-selected');
      setTimeout(() => {
        setNotSelected('');
      }, 500);
      return;
    }
    navigate(`/${level.split(' ').pop().toLocaleLowerCase()}`);
  };

  return (
    <div className="Home">
      <h1>Web Skills</h1>
      <Select
        ClassNotSelected={notSelected}
        value={level}
        options={levels}
        handleOnChange={handleLevel}
      />
      <Button handleOnCick={handleStartGame}>Start</Button>
    </div>
  );
};

export default Home;
