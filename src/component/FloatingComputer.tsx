// src/component/FloatingComputer.tsx
import React from "react";

const FloatingComputer: React.FC = () => {
  return (
    <svg
      width="150"      /* Cámbialo a 120, 180, 200, etc. según necesites */
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 120"
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
  );
};

export default FloatingComputer;
