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

const TecIcons = ({ iconProps }) => {
  const [iconName, setIconName] = React.useState([]);
  const [iconStyle, setIconStyle] = React.useState({});

  console.log(iconName);

  React.useEffect(() => {
    if (iconProps.name) {
      setIconName((prev) => [...prev, iconProps.name]);
      setIconStyle((prev) => ({ ...prev, [iconProps.name]: iconProps.style }));
    }
  }, [iconProps]);

  return (
    <div className="TecIcons">
      <TiHtml5 style={iconName.includes('TiHtml5') ? iconStyle.TiHtml5 : ''} />
      <SiCss3 style={iconName.includes('SiCss3') ? iconStyle.SiCss3 : ''} />
      <SiGit style={iconName.includes('SiGit') ? iconStyle.SiGit : ''} />
      <TbBrandJavascript
        style={
          iconName.includes('TbBrandJavascript')
            ? iconStyle.TbBrandJavascript
            : ''
        }
      />
      <SiSass style={iconName.includes('SiSass') ? iconStyle.SiSass : ''} />
      <SiNodedotjs
        style={iconName.includes('SiNodedotjs') ? iconStyle.SiNodedotjs : ''}
      />
      <SiMysql style={iconName.includes('SiMysql') ? iconStyle.SiMysql : ''} />
      <SiMongodb
        style={iconName.includes('SiMongodb') ? iconStyle.SiMongodb : ''}
      />
      <SiReact style={iconName.includes('SiReact') ? iconStyle.SiReact : ''} />
      <SiTypescript
        style={iconName.includes('SiTypescript') ? iconStyle.SiTypescript : ''}
      />
    </div>
  );
};

export default TecIcons;
