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

const TecIcons = ({ iconProps, recruiter, bonus }) => {
  const [iconOccurrence, setIconOccurrence] = React.useState([]);
  const [iconRecruiterCase, setIconRecruiterCase] = React.useState({});
  const [iconStyle, setIconStyle] = React.useState({});

  React.useEffect(() => {
    if (iconProps.name) {
      setIconOccurrence((prev) => [...prev, iconProps.name]);
      setIconRecruiterCase((prev) => ({
        ...prev,
        [iconProps.name]: iconProps.recruiterCase,
      }));
      setIconStyle((prev) => ({ ...prev, [iconProps.name]: iconProps.style }));
    }
  }, [iconProps]);

  const getOccurrence = (icon, recruiterValue) => {
    let count = 0;
    iconOccurrence.forEach((v) => v === icon && count++);
    if (recruiter && count === recruiterValue) return true;
    return count >= 5; //nao pode ser menor 5
  };

  // React.useEffect(() => {
  //   if (recruiter) {
  //     if (getOccurrence(iconProps.name, iconProps.recruiterCase)) {
  //       bonus(5);
  //     } else {
  //       bonus(0);
  //     }
  //   }
  //   if (getOccurrence(iconProps.name)) {
  //     bonus(5);
  //   } else {
  //     bonus(0);
  //   }
  // });

  return (
    <>
      <TiHtml5
        className={
          getOccurrence('TiHtml5', iconRecruiterCase.TiHtml5) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('TiHtml5', iconRecruiterCase.TiHtml5)
            ? iconStyle.TiHtml5
            : ''
        }
      />
      <SiCss3
        className={
          getOccurrence('SiCss3', iconRecruiterCase.SiCss3) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('SiCss3', iconRecruiterCase.SiCss3)
            ? iconStyle.SiCss3
            : ''
        }
      />
      <SiGit
        className={
          getOccurrence('SiGit', iconRecruiterCase.SiGit) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('SiGit', iconRecruiterCase.SiGit) ? iconStyle.SiGit : ''
        }
      />
      <TbBrandJavascript
        className={
          getOccurrence(
            'TbBrandJavascript',
            iconRecruiterCase.TbBrandJavascript
          )
            ? 'Tec-icon'
            : ''
        }
        style={
          getOccurrence(
            'TbBrandJavascript',
            iconRecruiterCase.TbBrandJavascript
          )
            ? iconStyle.TbBrandJavascript
            : ''
        }
      />
      <SiSass
        className={
          getOccurrence('SiSass', iconRecruiterCase.SiSass) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('SiSass', iconRecruiterCase.SiSass)
            ? iconStyle.SiSass
            : ''
        }
      />
      <SiNodedotjs
        className={
          getOccurrence('SiNodedotjs', iconRecruiterCase.SiNodedotjs)
            ? 'Tec-icon'
            : ''
        }
        style={
          getOccurrence('SiNodedotjs', iconRecruiterCase.SiNodedotjs)
            ? iconStyle.SiNodedotjs
            : ''
        }
      />
      <SiMysql
        className={
          getOccurrence('SiMysql', iconRecruiterCase.SiMysql) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('SiMysql', iconRecruiterCase.SiMysql)
            ? iconStyle.SiMysql
            : ''
        }
      />
      <SiMongodb
        className={
          getOccurrence('SiMongodb', iconRecruiterCase.SiMongodb)
            ? 'Tec-icon'
            : ''
        }
        style={
          getOccurrence('SiMongodb', iconRecruiterCase.SiMongodb)
            ? iconStyle.SiMongodb
            : ''
        }
      />
      <SiReact
        className={
          getOccurrence('SiReact', iconRecruiterCase.SiReact) ? 'Tec-icon' : ''
        }
        style={
          getOccurrence('SiReact', iconRecruiterCase.SiReact)
            ? iconStyle.SiReact
            : ''
        }
      />
      <SiTypescript
        className={
          getOccurrence('SiTypescript', iconRecruiterCase.SiTypescript)
            ? 'Tec-icon'
            : ''
        }
        style={
          getOccurrence('SiTypescript', iconRecruiterCase.SiTypescript)
            ? iconStyle.SiTypescript
            : ''
        }
      />
    </>
  );
};

export default TecIcons;
