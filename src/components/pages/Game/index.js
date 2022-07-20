import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiHtml5 } from 'react-icons/ti';
import {
  SiCss3,
  SiReact,
  SiTypescript,
  SiMysql,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiSass,
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

// components
import Lifes from '../../Lifes';
import TecIcons from '../../TecIcons';

// css
import './styles.css';

const tecImages = [
  { name: TiHtml5, color: '#000000', back: '#CC341D', radius: '5%' },
  { name: SiCss3, color: '#1752a2', back: '', radius: '' },
  { name: SiGit, color: '#DA3726', back: '', radius: '' },
  { name: TbBrandJavascript, color: '#000000', back: '#E5CE18', radius: '5%' },
  { name: SiSass, color: '#B3487E', back: '', radius: '' },
  { name: SiNodedotjs, color: '#AB0024', back: '', radius: '' },
  { name: SiMysql, color: '#16374F', back: '#CC5A21', radius: '5%' },
  { name: SiMongodb, color: '#ffffff', back: '#000000', radius: '5%' },
  { name: SiReact, color: '#4EC4E9', back: '', radius: '' },
  { name: SiTypescript, color: '#265BAD', back: '', radius: '' },
];

const sequence = [
  0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6,
  7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9,
];

const Game = () => {
  const { level } = useParams();
  const [intervalLevel] = React.useState(
    level === 'linus'
      ? 500
      : level === 'difficult'
      ? 900
      : level === 'normal'
      ? 1200
      : 1500
  );
  const [counter, setCounter] = React.useState(0);
  const [tecImage, setTecImage] = React.useState(tecImages[sequence[counter]]);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [lifesQt, setLifesQt] = useState(3);
  const navigate = useNavigate();

  React.useEffect(() => {
    // 37
    if (counter === sequence.length) {
      navigate('/victory');
    }
    if (lifesQt === 0) {
      navigate('/gameover');
    }
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTecImage(tecImages[sequence[counter]]);
      setCounter(counter + 1);
      setLifesQt(lifesQt - 1);
    }, intervalLevel);
    return () => clearInterval(interval);
  });

  const createStyledComponent = () => {
    const size = Math.floor(Math.random() * (201 - 30)) + 30; // 30 - 100
    const baseY = ((200 - size) / 5) * (dimensions.height / 100);
    const baseX = ((200 - size) / 5) * (dimensions.width / 100);
    const top =
      (
        baseY +
        Math.floor(
          Math.random() * (dimensions.height - baseY * 2 - size - 60) + 30
        )
      ).toString() + 'px';
    const left =
      (
        baseX +
        Math.floor(
          Math.random() * (dimensions.width - baseX * 2 - size - 60) + 30
        )
      ).toString() + 'px';
    const back = tecImage.back;
    const radius = tecImage.radius;
    return {
      position: 'absolute',
      top: top,
      left: left,
      background: back,
      borderRadius: radius,
      fontSize: `${size / 10}rem`,
    };
  };

  const HandlePoints = () => {
    let interval;
    setCounter(counter + 1);
    setTecImage(tecImages[sequence[counter]]);
    clearInterval(interval);
  };

  return (
    <div className="Game">
      <header className="Info-game">
        <p>{counter}</p>
        <TecIcons />
        <Link to={'/'} className="Logo">
          Dev Skills
        </Link>
        <Lifes quantity={lifesQt} />
      </header>
      <tecImage.name
        onClick={HandlePoints}
        style={createStyledComponent()}
        color={tecImage.color}
      />
    </div>
  );
};

export default Game;
