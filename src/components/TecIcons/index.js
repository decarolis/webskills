import React from 'react';
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

const TecIcons = () => {
  return (
    <div className="TecIcons">
      <TiHtml5 />
      <SiCss3 />
      <SiReact />
      <SiTypescript />
      <SiMysql />
      <SiGit />
      <SiMongodb />
      <SiNodedotjs />
      <SiSass />
      <TbBrandJavascript />
    </div>
  );
};

export default TecIcons;
