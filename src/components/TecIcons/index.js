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

const TecIcons = ({ iconProps, recruiter }) => {
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
    if (recruiter) {
      if (count === recruiterValue) return 'Tec-icon';
      return '';
    } else if (count >= 3 && count % 3 === 0) {
      return 'Tec-icon';
    } else if (count >= 3 && count % 3 === 1) {
      return 'Tec-icon';
    } else if (count >= 3 && count % 3 === 2) {
      return '';
    } else {
      return false;
    }

    // {
    //   return count >= 3 && count % 3 === 0 && count % 3 === 1;
    // }
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
          !getOccurrence('TiHtml5', iconRecruiterCase.TiHtml5) && 'Tec-icon2'
        }
      />
      <TiHtml5
        className={getOccurrence('TiHtml5', iconRecruiterCase.TiHtml5)}
        style={
          getOccurrence('TiHtml5', iconRecruiterCase.TiHtml5)
            ? iconStyle.TiHtml5
            : ''
        }
      ></TiHtml5>
      <SiCss3
        className={
          !getOccurrence('SiCss3', iconRecruiterCase.SiCss3) && 'Tec-icon2'
        }
      />
      <SiCss3
        className={getOccurrence('SiCss3', iconRecruiterCase.SiCss3)}
        style={
          getOccurrence('SiCss3', iconRecruiterCase.SiCss3)
            ? iconStyle.SiCss3
            : ''
        }
      />
      <SiGit
        className={
          !getOccurrence('SiGit', iconRecruiterCase.SiGit) && 'Tec-icon2'
        }
      />
      <SiGit
        className={getOccurrence('SiGit', iconRecruiterCase.SiGit)}
        style={
          getOccurrence('SiGit', iconRecruiterCase.SiGit) ? iconStyle.SiGit : ''
        }
      />
      <TbBrandJavascript
        className={
          !getOccurrence(
            'TbBrandJavascript',
            iconRecruiterCase.TbBrandJavascript
          ) && 'Tec-icon2'
        }
      />
      <TbBrandJavascript
        className={getOccurrence(
          'TbBrandJavascript',
          iconRecruiterCase.TbBrandJavascript
        )}
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
          !getOccurrence('SiSass', iconRecruiterCase.SiSass) && 'Tec-icon2'
        }
      />
      <SiSass
        className={getOccurrence('SiSass', iconRecruiterCase.SiSass)}
        style={
          getOccurrence('SiSass', iconRecruiterCase.SiSass)
            ? iconStyle.SiSass
            : ''
        }
      />
      <SiNodedotjs
        className={
          !getOccurrence('SiNodedotjs', iconRecruiterCase.SiNodedotjs) &&
          'Tec-icon2'
        }
      />
      <SiNodedotjs
        className={getOccurrence('SiNodedotjs', iconRecruiterCase.SiNodedotjs)}
        style={
          getOccurrence('SiNodedotjs', iconRecruiterCase.SiNodedotjs)
            ? iconStyle.SiNodedotjs
            : ''
        }
      />
      <SiMysql
        className={
          !getOccurrence('SiMysql', iconRecruiterCase.SiMysql) && 'Tec-icon2'
        }
      />
      <SiMysql
        className={getOccurrence('SiMysql', iconRecruiterCase.SiMysql)}
        style={
          getOccurrence('SiMysql', iconRecruiterCase.SiMysql)
            ? iconStyle.SiMysql
            : ''
        }
      />
      <SiMongodb
        className={
          !getOccurrence('SiMongodb', iconRecruiterCase.SiMongodb) &&
          'Tec-icon2'
        }
      />
      <SiMongodb
        className={getOccurrence('SiMongodb', iconRecruiterCase.SiMongodb)}
        style={
          getOccurrence('SiMongodb', iconRecruiterCase.SiMongodb)
            ? iconStyle.SiMongodb
            : ''
        }
      />
      <SiReact
        className={
          !getOccurrence('SiReact', iconRecruiterCase.SiReact) && 'Tec-icon2'
        }
      />
      <SiReact
        className={getOccurrence('SiReact', iconRecruiterCase.SiReact)}
        style={
          getOccurrence('SiReact', iconRecruiterCase.SiReact)
            ? iconStyle.SiReact
            : ''
        }
      />
      <SiTypescript
        className={
          !getOccurrence('SiTypescript', iconRecruiterCase.SiTypescript) &&
          'Tec-icon2'
        }
      />
      <SiTypescript
        className={getOccurrence(
          'SiTypescript',
          iconRecruiterCase.SiTypescript
        )}
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
