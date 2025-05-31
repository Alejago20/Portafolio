import React from 'react';

const Nave: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: '2rem', // Aparece en la esquina inferior izquierda
        transform: 'none',
        zIndex: 10,
        animation: 'despegue 3s ease-out forwards',
      }}
    >
      <style>
        {`
          @keyframes despegue {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-150px);
            }
            100% {
              transform: translateY(-300px);
              opacity: 0;
            }
          }
        `}
      </style>

      <svg
        width="80"
        height="120"
        viewBox="0 0 64 128"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '120px', width: 'auto' }}
      >
        {/* Cuerpo de la nave */}
        <path
          d="M32 4 C20 40, 20 80, 32 124 C44 80, 44 40, 32 4"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* Ventana circular */}
        <circle
          cx="32"
          cy="50"
          r="6"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        {/* Aletas laterales */}
        <path
          d="M20 90 L5 105 L20 100 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M44 90 L59 105 L44 100 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        {/* Llama inferior animada */}
        <polygon
          points="28,124 32,140 36,124"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.3;1"
            dur="0.4s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>
  );
};

export default Nave;
