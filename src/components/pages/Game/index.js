/* this is my first application that comes 100% from my mind
 (of course with some searches for the stack oveflow).
 I wasn't so concerned with organizing the code or making comments,
 but with the features and making everything work as I had imagined.*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import ReactGA from 'react-ga';

// img
import html1 from '../../../assets/img/html1.jpg';
import html2 from '../../../assets/img/html2.jpg';
import html3 from '../../../assets/img/html3.jpg';
import css1 from '../../../assets/img/css1.jpg';
import css2 from '../../../assets/img/css2.jpg';
import css3 from '../../../assets/img/css3.jpg';
import git1 from '../../../assets/img/git1.jpg';
import git2 from '../../../assets/img/git2.jpg';
import git3 from '../../../assets/img/git3.jpg';
import js1 from '../../../assets/img/js1.jpg';
import js2 from '../../../assets/img/js2.jpg';
import js3 from '../../../assets/img/js3.jpg';
import sass1 from '../../../assets/img/sass1.jpg';
import sass2 from '../../../assets/img/sass2.jpg';
import sass3 from '../../../assets/img/sass3.jpg';
import node1 from '../../../assets/img/node1.jpg';
import node2 from '../../../assets/img/node2.jpg';
import node3 from '../../../assets/img/node3.jpg';
import mysql1 from '../../../assets/img/mysql1.jpg';
import mysql2 from '../../../assets/img/mysql2.jpg';
import mysql3 from '../../../assets/img/mysql3.jpg';
import mongodb1 from '../../../assets/img/mongodb1.jpg';
import mongodb2 from '../../../assets/img/mongodb2.jpg';
import mongodb3 from '../../../assets/img/mongodb3.jpg';
import react1 from '../../../assets/img/react1.jpg';
import react2 from '../../../assets/img/react2.jpg';
import react3 from '../../../assets/img/react3.jpg';
import ts1 from '../../../assets/img/ts1.jpg';
import ts2 from '../../../assets/img/ts2.jpg';
import ts3 from '../../../assets/img/ts3.jpg';

// components
import Lifes from '../../Lifes';
import TecIcons from '../../TecIcons';
import RecruiterMsg from '../../RecruiterMsg';
import Records from '../../Records';

// css
import './styles.css';

const tecImages = [
  {
    name: TiHtml5,
    nickname: 'TiHtml5',
    title: 'HTML5 +',
    color: '#000000',
    back: '#CC341D',
    radius: '5%',
    recruiter: 2,
    bonus: [5, '+', '#CC341D'],
    img: [html1, html2, html3],
  },
  {
    name: SiCss3,
    nickname: 'SiCss3',
    title: 'CSS3 +',
    color: '#1752a2',
    back: '',
    radius: '5%',
    recruiter: 3,
    bonus: [10, '+', '#1752a2'],
    img: [css1, css2, css3],
  },
  {
    name: SiGit,
    nickname: 'SiGit',
    title: 'Git +',
    color: '#DA3726',
    back: '',
    radius: '',
    recruiter: 3,
    bonus: [15, '+', '#DA3726'],
    img: [git1, git2, git3],
  },
  {
    name: TbBrandJavascript,
    nickname: 'TbBrandJavascript',
    title: 'JavaScript +',
    color: '#000000',
    back: '#E5CE18',
    radius: '5%',
    recruiter: 5,
    bonus: [150, '+', '#E5CE18'],
    img: [js1, js2, js3],
  },
  {
    name: SiSass,
    nickname: 'SiSass',
    title: 'Sass +',
    color: '#B3487E',
    back: '',
    radius: '',
    recruiter: 2,
    bonus: [30, '+', '#B3487E'],
    img: [sass1, sass2, sass3],
  },
  {
    name: SiNodedotjs,
    nickname: 'SiNodedotjs',
    title: 'NodeJs +',
    color: '#ffffff',
    back: '#66A731',
    radius: '5%',
    recruiter: 5,
    bonus: [300, '+', '#66A731'],
    img: [node1, node2, node3],
  },
  {
    name: SiMysql,
    nickname: 'SiMysql',
    title: 'MySQL +',
    color: '#16374F',
    back: '#CC5A21',
    radius: '5%',
    recruiter: 2,
    bonus: [60, '+', '#CC5A21'],
    img: [mysql1, mysql2, mysql3],
  },
  {
    name: SiMongodb,
    nickname: 'SiMongodb',
    title: 'MongoDB +',
    color: '#1CE04D',
    back: '#000000',
    radius: '50%',
    recruiter: 2,
    bonus: [70, '+', '#1CE04D'],
    img: [mongodb1, mongodb2, mongodb3],
  },
  {
    name: SiReact,
    nickname: 'SiReact',
    title: 'React +',
    color: '#4EC4E9',
    back: '',
    radius: '',
    recruiter: 5,
    bonus: [200, '+', '#4EC4E9'],
    img: [react1, react2, react3],
  },
  {
    name: SiTypescript,
    nickname: 'SiTypescript',
    title: 'TypeScript +',
    color: '#265BAD',
    back: '',
    radius: '',
    recruiter: 2,
    bonus: [400, '+', '#265BAD'],
    img: [ts1, ts2, ts3],
  },
];

const recruiterSequence = [
  0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8,
  8, 8, 9, 9, 9,
];

const phrases = {
  bad: [
    'Not bad!',
    'Keep working on it!',
    'You can try again!',
    'Feel what you need to feel and then let it go.',
    'To ease the pain, erase the anger.',
    "Don't give up!",
    'Come on! You can do it again!',
    'Stay strong!',
  ],
  good: [
    "That's good!",
    'Good work!',
    'Keep on trying!',
    'You are a fast learner.',
    "I'm so proud of your effort.",
    'Keep it up!',
    'Keep up the good work.',
    'Good job!',
  ],
  great: [
    'I hope to be as good as you one day.',
    'Your progress is truly inspiring.',
    "You've got your brain in gear today.",
    "That's the right way to do it.",
    "That's really fantastic.",
    'Your level of expertise is impressive.',
    'You just keep getting better at this.',
    "I'm never going to forget this.",
  ],
};

let mounted;

const Game = () => {
  const { level } = useParams();
  const [intervalLevel, setIntervalLevel] = useState(
    level === 'recruiter'
      ? 2000
      : level === 'difficult'
      ? 1000
      : level === 'easy'
      ? 1300
      : 700,
  );
  const [counter, setCounter] = useState(0);
  const [records, SetRecords] = useState(false);
  const [endMsg, setEndMsg] = useState(false);
  const [recruiterMsg, setRecruiterMsg] = useState(
    level === 'recruiter' ? true : false,
  );
  const [counterImg, setCounterImg] = useState(2);
  const [points, setPoints] = useState(0);
  const [bonus, setBonus] = useState([0, '', '']);
  const [tecImage, setTecImage] = useState(
    level === 'recruiter'
      ? tecImages[recruiterSequence[counter]]
      : tecImages[Math.floor(Math.random() * 10)],
  );
  const [imageOccurrence, setImageOccurrence] = React.useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [lifesQt, setLifesQt] = useState(5);
  const [tecIconProps, setTecIconProps] = useState({});

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    // 37
    if (level === 'recruiter' && counter === recruiterSequence.length) {
      setEndMsg(true);
      setCounter(counter + 1);
      setTimeout(() => {
        setBonus([1, phrases.great[Math.floor(Math.random() * 2)]], '#000000');
      }, 1500);
    }
    if (lifesQt === 0) {
      if (counter - 5 <= 5) {
        setTimeout(() => {
          setBonus([1, phrases.bad[Math.floor(Math.random() * 8)]], '#000000');
        }, 1000);
      } else if (counter - 5 <= 50) {
        setTimeout(() => {
          setBonus([1, phrases.good[Math.floor(Math.random() * 8)]], '#000000');
        }, 1000);
      } else {
        setTimeout(() => {
          setBonus(
            [1, phrases.great[Math.floor(Math.random() * 8)]],
            '#000000',
          );
        }, 1000);
      }
      SetRecords(true);
    }
  }, [counter, level, lifesQt]);

  useEffect(() => {
    function handleResize() {
      clearTimeout(mounted);
      mounted = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }, 1000);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function updateDivImg() {
    let xScale = window.innerWidth / 1992;
    let yScale = window.innerHeight / 1332;
    if (window.innerWidth <= 720) {
      yScale = window.innerHeight / 1992;
      xScale = window.innerWidth / 1332;
    }
    if (xScale > yScale) {
      let xDiv = Math.floor(window.innerWidth / 2.715);
      let yDiv = Math.floor(xDiv / 1.49);
      if (window.innerWidth <= 720) {
        xDiv = Math.floor(window.innerWidth / 2.0);
        yDiv = Math.floor(xDiv * 1.49);
      }
      return { width: xDiv + 'px', height: yDiv + 'px' };
    } else {
      let yDiv = Math.floor(window.innerHeight / 2.715);
      let xDiv = Math.floor(yDiv / 0.67);
      if (window.innerWidth <= 720) {
        yDiv = Math.floor(window.innerHeight / 2.0);
        xDiv = Math.floor(yDiv * 0.67);
      }
      return { width: xDiv + 'px', height: yDiv + 'px' };
    }
  }

  useEffect(() => {
    if (level === 'recruiter' || bonus[0] === 1) return; // || level === 'easy'
    const interval = setInterval(() => {
      setTecImage(tecImages[Math.floor(Math.random() * 10)]);
      setBonus([0, '', '']);
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
          Math.random() * (dimensions.height - baseY * 2 - size - 60) + 30,
        )
      ).toString() + 'px';
    const left =
      (
        baseX +
        Math.floor(
          Math.random() * (dimensions.width - baseX * 2 - size - 60) + 30,
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
    setImageOccurrence(prev => [...prev, tecImage]);
    const getOccurrence = () => {
      let count = 0;
      count++; // this time
      imageOccurrence.forEach(v => v === tecImage && count++);
      if (level === 'recruiter') {
        return count === tecImage.recruiter;
      } else {
        return count >= 3 && count % 3 === 0;
      }
    };
    if (getOccurrence()) {
      if (level === 'recruiter') {
        setBonus([2, tecImage.title, tecImage.bonus[2]]);
        setPoints(points + tecImage.bonus[0]);
      } else {
        setBonus([tecImage.bonus[0], tecImage.bonus[1], tecImage.bonus[2]]);
        setPoints(points + tecImage.bonus[0]);
      }
    } else {
      setBonus([0, '', '']);
      setPoints(points + 1);
    }
    setCounterImg(counter % 3);
    setTecIconProps({
      name: tecImage.nickname,
      recruiterCase: tecImage.recruiter,
    });
    let interval;
    setIntervalLevel(Math.floor(intervalLevel * 0.99));
    setCounter(counter + 1);
    setTecImage(
      level === 'recruiter'
        ? tecImages[recruiterSequence[counter]]
        : tecImages[Math.floor(Math.random() * 10)],
    );
    clearInterval(interval);
  };

  const handleRecruiterMsg = () => {
    setRecruiterMsg(false);
  };

  return (
    <div className="Game">
      <header className="Info-bar-top">
        {(window.innerWidth > 720 || level === 'recruiter') && (
          <Link to={'/'} className="Logo">
            <p>Web Skills</p>
          </Link>
        )}
        {level !== 'recruiter' && (
          <>
            <p
              className={bonus[0] ? 'Point-bonus' : 'Point'}
              style={bonus[0] ? { color: bonus[2] } : {}}
            >
              {points}
            </p>
            <Lifes quantity={lifesQt} />
          </>
        )}
      </header>
      {recruiterMsg && (
        <div style={updateDivImg()} className="Back-img">
          <RecruiterMsg welcome={true} welcomeFunc={handleRecruiterMsg}>
            <p>
              Hi Recruiter! Be welcome. My name is André De Carolis and this
              level was developed by me to show in a playful way my journey of
              studies into the universe of web development. Hope you like.
            </p>
          </RecruiterMsg>
        </div>
      )}
      {endMsg && (
        <div style={updateDivImg()} className="Back-img">
          <RecruiterMsg welcome={false} displayClass={{ display: 'block' }}>
            <p>Thank you very much for your time!</p>
            <p>
              Now you know a little bit more about my path, if you want to know
              more about who i am, just visit my profile on{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/decarolis"
              >
                GitHub
              </a>{' '}
              or{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/andr%C3%A9-hungria-machado-de-carolis-adc/"
              >
                Linkedin
              </a>
              .
            </p>
            <p>
              To really play the game, just go back to home and choose one of
              the other levels.
            </p>
          </RecruiterMsg>
        </div>
      )}

      {records && (
        <div style={updateDivImg()} className="Back-img">
          <Records points={points} />
        </div>
      )}
      {!recruiterMsg && !endMsg && !records && (
        <div style={updateDivImg()} className="Back-img">
          <img src={tecImage.img[counterImg]} alt="snippet of code" />
        </div>
      )}
      {!recruiterMsg && !endMsg && !records && (
        <tecImage.name
          className="Tec-image"
          onClick={handlePoints}
          style={createStyledComponent()}
          color={tecImage.color}
        />
      )}
      <div className="Info-bar-bottom"></div>
      <div className="Back-screen">
        <TecIcons iconProps={tecIconProps} recruiter={level === 'recruiter'} />
        <p
          className={
            counter % 2 === 0 && bonus[0] === 1
              ? 'Bonus3'
              : counter % 2 === 0 && bonus[0] > 1
              ? 'Bonus1'
              : ''
          }
          style={{ color: bonus[2] }}
        >{`${bonus[0] > 2 ? bonus[0] : ''}${bonus[1]}`}</p>
        <p
          className={
            counter % 2 === 1 && bonus[0] === 1
              ? 'Bonus3'
              : counter % 2 === 1 && bonus[0] > 1
              ? 'Bonus2'
              : ''
          }
          style={{ color: bonus[2] }}
        >{`${bonus[0] > 2 ? bonus[0] : ''}${bonus[1]}`}</p>
      </div>
    </div>
  );
};

export default Game;
