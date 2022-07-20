import React from 'react';

const Timer = () => {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  });

  return <div>{timer}</div>;
};

export default Timer;
