import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { TiHtml5 } from 'react-icons/ti';
import {
  SiCss3,
  SiReact,
  SiTypescript,
  SiMysql,
  SiGit,
  SiGithub,
  SiAngular,
  SiLess,
  SiSass,
} from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

// components

// css
import './styles.css';

const tecImages = [
  { name: TiHtml5, color: '#000000', back: '#CC341D', radius: '5%' },
  { name: SiCss3, color: '#1752a2', back: '', radius: '' },
  { name: SiReact, color: '#4EC4E9', back: '', radius: '' },
  { name: SiTypescript, color: '#265BAD', back: '', radius: '' },
  { name: SiMysql, color: '#16374F', back: '#CC5A21', radius: '5%' },
  { name: SiGit, color: '#DA3726', back: '', radius: '' },
  { name: SiGithub, color: '#ffffff', back: '#000000', radius: '5%' },
  { name: SiAngular, color: '#AB0024', back: '', radius: '' },
  { name: SiLess, color: '#ffffff', back: '#1E386A', radius: '5%' },
  { name: SiSass, color: '#B3487E', back: '', radius: '' },
  { name: TbBrandJavascript, color: '#000000', back: '#E5CE18', radius: '5%' },
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
  const [tecImage, setTecImage] = React.useState(
    tecImages[Math.floor(Math.random() * 11)]
  );
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
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
      setTecImage(tecImages[Math.floor(Math.random() * 11)]);
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
    setTecImage(tecImages[Math.floor(Math.random() * 11)]);
    clearInterval(interval);
  };

  return (
    <div className="Game">
      <header className="Info-game">
        <Link to={'/'} className="Logo">
          Dev Skills
        </Link>
        <div className="Heart-div">
          <BsFillSuitHeartFill className="Heart" />
          <BsFillSuitHeartFill className="Heart" />
          <BsFillSuitHeartFill className="Heart" />
        </div>
        <p className="Counter">{counter}</p>
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
