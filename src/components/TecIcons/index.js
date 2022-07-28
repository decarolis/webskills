import React, { useState, useEffect } from 'react';
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

// css
import './styles.css';

const TecIcons = ({ iconProps, recruiter }) => {
  const [iconOccurrence, setIconOccurrence] = useState([]);
  const [classTecIcon, setClassTecIcon] = useState([]);

  useEffect(() => {
    if (iconProps.name) {
      setIconOccurrence((prev) => [...prev, iconProps.name]);
    }
  }, [iconProps]);

  const getOccurrence = (icon, recruiterValue) => {
    let count = 0;
    iconOccurrence.forEach((v) => v === icon && count++);
    if (recruiter) {
      if (count === recruiterValue) return true;
      return false;
    } else if (count >= 3 && count % 3 === 0) {
      return true;
    } else if (count >= 3 && count % 3 === 1) {
      return true;
    } else if (count >= 3 && count % 3 === 2) {
      return false;
    } else {
      return false;
    }
  };

  const temp = getOccurrence(iconProps.name, iconProps.recruiterCase);

  useEffect(() => {
    if (temp) {
      setClassTecIcon((prev) => ({ ...prev, [iconProps.name]: true }));
    } else {
      setClassTecIcon((prev) => ({ ...prev, [iconProps.name]: false }));
    }
  }, [iconProps, temp]);

  return (
    <>
      <TiHtml5 className={classTecIcon.TiHtml5 ? '' : 'Tec-icon2'} />
      <TiHtml5
        className={classTecIcon.TiHtml5 ? 'Tec-icon' : ''}
        style={{ color: '#000000', background: '#CC341D', borderRadius: '5%' }}
      />
      <SiCss3 className={classTecIcon.SiCss3 ? '' : 'Tec-icon2'} />
      <SiCss3
        className={classTecIcon.SiCss3 ? 'Tec-icon' : ''}
        style={{ color: '#1752a2', background: '', borderRadius: '5%' }}
      />
      <SiGit className={classTecIcon.SiGit ? '' : 'Tec-icon2'} />
      <SiGit
        className={classTecIcon.SiGit ? 'Tec-icon' : ''}
        style={{ color: '#DA3726', background: '', borderRadius: '' }}
      />
      <TbBrandJavascript
        className={classTecIcon.TbBrandJavascript ? '' : 'Tec-icon2'}
      />
      <TbBrandJavascript
        className={classTecIcon.TbBrandJavascript ? 'Tec-icon' : ''}
        style={{ color: '#000000', background: '#E5CE18', borderRadius: '5%' }}
      />
      <SiSass className={classTecIcon.SiSass ? '' : 'Tec-icon2'} />
      <SiSass
        className={classTecIcon.SiSass ? 'Tec-icon' : ''}
        style={{ color: '#B3487E', background: '', borderRadius: '' }}
      />
      <SiNodedotjs className={classTecIcon.SiNodedotjs ? '' : 'Tec-icon2'} />
      <SiNodedotjs
        className={classTecIcon.SiNodedotjs ? 'Tec-icon' : ''}
        style={{ color: '#ffffff', background: '#66A731', borderRadius: '5%' }}
      />
      <SiMysql className={classTecIcon.SiMysql ? '' : 'Tec-icon2'} />
      <SiMysql
        className={classTecIcon.SiMysql ? 'Tec-icon' : ''}
        style={{ color: '#16374F', background: '#CC5A21', borderRadius: '5%' }}
      />
      <SiMongodb className={classTecIcon.SiMongodb ? '' : 'Tec-icon2'} />
      <SiMongodb
        className={classTecIcon.SiMongodb ? 'Tec-icon' : ''}
        style={{ color: '#1CE04D', background: '#000000', borderRadius: '50%' }}
      />
      <SiReact className={classTecIcon.SiReact ? '' : 'Tec-icon2'} />
      <SiReact
        className={classTecIcon.SiReact ? 'Tec-icon' : ''}
        style={{ color: '#4EC4E9', background: '', borderRadius: '' }}
      />
      <SiTypescript className={classTecIcon.SiTypescript ? '' : 'Tec-icon2'} />
      <SiTypescript
        className={classTecIcon.SiTypescript ? 'Tec-icon' : ''}
        style={{ color: '#265BAD', background: '', borderRadius: '' }}
      />
    </>
  );
};

export default TecIcons;
