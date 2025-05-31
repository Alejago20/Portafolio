import React from 'react';
import HeroProps from '../types/IHeroText';
import { useState, useEffect } from 'react';

const WelcomeMessage: React.FC<HeroProps> = ({ message }) => {
  const [topValue, setTopValue] = useState('30%');

  useEffect(() => {
    const onResize = () => {
      setTopValue(window.innerWidth <= 640 ? '20%' : '30%');
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 10,
        color: 'white',
        fontSize: '1.5rem',
        textAlign: 'left',
        top: topValue,
        left: '2%',
        fontWeight: '300',
        fontFamily: 'system-ui',
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default WelcomeMessage;
