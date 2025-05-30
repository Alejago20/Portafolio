// src/component/cards.tsx
import React from 'react';
import  HeroProps from "../types/IHeroText"

const WelcomeMessage: React.FC< HeroProps> = ({message}) => {
  return (
    <div style={{ 
      position: 'fixed', 
      zIndex: 10,   // Asegúrate de que el texto esté por encima del fondo de partículas
      color: 'white', // Color del texto blanco para contrastar con el fondo oscuro
      fontSize: '1.3rem', // Tamaño de fuente grande para visibilidad
      textAlign: 'left',
      top: '40%',
      left: '4%',
      fontWeight: '200',
    fontFamily: 'system-ui',
    }}>
     
    <p>{message} </p> 
    </div>
  );
};

export default WelcomeMessage;
