import React, { useState, useEffect } from 'react';
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
  {
    name: TiHtml5,
    color: '#000000',
    back: '#CC341D',
    radius: '5%',
    recruiter: 2,
  },
  { name: SiCss3, color: '#1752a2', back: '', radius: '5%', recruiter: 3 },
  { name: SiGit, color: '#DA3726', back: '', radius: '', recruiter: 3 },
  {
    name: TbBrandJavascript,
    color: '#000000',
    back: '#E5CE18',
    radius: '5%',
    recruiter: 5,
  },
  { name: SiSass, color: '#B3487E', back: '', radius: '', recruiter: 2 },
  {
    name: SiNodedotjs,
    color: '#ffffff',
    back: '#66A731',
    radius: '50%',
    recruiter: 5,
  },
  {
    name: SiMysql,
    color: '#16374F',
    back: '#CC5A21',
    radius: '5%',
    recruiter: 2,
  },
  {
    name: SiMongodb,
    color: '#1CE04D',
    back: '#000000',
    radius: '50%',
    recruiter: 2,
  },
  { name: SiReact, color: '#4EC4E9', back: '', radius: '', recruiter: 5 },
  { name: SiTypescript, color: '#265BAD', back: '', radius: '', recruiter: 2 },
];

const sequence = [
  0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8,
  8, 8, 9, 9, 9,
];

const Game = () => {
  const { level } = useParams();
  const [intervalLevel] = useState(
    level === 'recruiter'
      ? 2000
      : level === 'difficult'
      ? 1000
      : level === 'easy'
      ? 1300
      : 700
  );
  const [counter, setCounter] = useState(0);
  const [points, setPoints] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [tecImage, setTecImage] = useState(
    level === 'recruiter'
      ? tecImages[sequence[counter]]
      : tecImages[Math.floor(Math.random() * 10)]
  );
  const [imageOccurrence, setImageOccurrence] = React.useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [lifesQt, setLifesQt] = useState(3);
  const [tecIconProps, setTecIconProps] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // 37
    if (counter === sequence.length + 1) {
      navigate('/victory');
    }
    if (lifesQt === 0) {
      navigate('/gameover');
    }
  });

  useEffect(() => {
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

  useEffect(() => {
    if (level === 'recruiter') return;
    const interval = setInterval(() => {
      setTecImage(tecImages[Math.floor(Math.random() * 10)]);
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

  const handlePoints = () => {
    setImageOccurrence((prev) => [...prev, tecImage]);
    console.log(imageOccurrence);
    const getOccurrence = () => {
      let count = 0;
      count++; // this time
      imageOccurrence.forEach((v) => v === tecImage && count++);
      if (level === 'recruiter' && count === tecImage.recruiter) return true;
      return count >= 5; //cant be less than max of recruiter mode
    };
    if (getOccurrence()) {
      setBonus(5);
      setPoints(points + 5 + 1);
    } else {
      setBonus(0);
      setPoints(points + 1);
    }
    setTecIconProps({
      name: tecImage.name.name,
      recruiterCase: tecImage.recruiter,
      style: {
        color: tecImage.color,
        background: tecImage.back,
        borderRadius: tecImage.radius,
      },
    });
    let interval;
    setCounter(counter + 1);
    setTecImage(
      level === 'recruiter'
        ? tecImages[sequence[counter]]
        : tecImages[Math.floor(Math.random() * 10)]
    );
    clearInterval(interval);
  };

  console.log(bonus);

  return (
    <div className="Game">
      <header className="Info-bar-top">
        <Link to={'/'} className="Logo">
          Dev Skills
        </Link>
        <p className={bonus && 'Point-bonus'}>{points}</p>
        <Lifes quantity={lifesQt} />
      </header>
      <tecImage.name
        className="Tec-image"
        onClick={handlePoints}
        style={createStyledComponent()}
        color={tecImage.color}
      />
      <div className="Info-bar-bottom"></div>
      <div className="Back-screen">
        <TecIcons
          points={points}
          iconProps={tecIconProps}
          recruiter={level === 'recruiter'}
        />
        <p className={bonus && 'Bonus'}>{`${bonus}+`}</p>
      </div>
    </div>
  );
};

export default Game;
