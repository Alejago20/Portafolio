import React from 'react';
import { MovingComponent } from 'react-moving-text';
import AboutProps from "../types/IAbout";

const AnimatedText: React.FC<AboutProps> = ({ message }) => {
  return (
    <div
      className="animated-text"
      style={{
        position: 'fixed',
        zIndex: 300,
        color: '#6A6789',
        textAlign: 'center',
        top: '18%',
        left: '5%',
        fontWeight: 500,
        fontFamily: 'system-ui',
        fontSize: '3rem',

        // Responsivo con media queries
        width: '90%',
        maxWidth: '100%',
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .animated-text {
              font-size: 2rem !important;
              top: 12% !important;
            }
          }

          @media (max-width: 480px) {
            .animated-text {
              font-size: 1.6rem !important;
              top: 10% !important;
            }
          }
        `}
      </style>

      <MovingComponent
        type="fadeInFromLeft"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        {message}
      </MovingComponent>
    </div>
  );
};

export default AnimatedText;
