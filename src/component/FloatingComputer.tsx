// src/component/FloatingComputer.tsx
import React from "react";

const FloatingComputer: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        margin: "2rem auto 0",
        display: "block",
        animation: "float 4s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 200 120"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "66%",
          height: "auto",
          display: "block",
        }}
      >
        {/* Contorno minimalista de la laptop */}
        <rect
          x="10"
          y="10"
          width="180"
          height="100"
          rx="8"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Base de la laptop */}
        <line
          x1="10"
          y1="90"
          x2="190"
          y2="90"
          stroke="currentColor"
          strokeWidth="4"
        />
        {/* Icono de código dentro de la pantalla */}
        <text
          x="100"
          y="60"
          textAnchor="middle"
          fontSize="30"
          fill="currentColor"
        >
          &lt;/&gt;
        </text>
      </svg>

      {/* Animación CSS embebida */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingComputer;
