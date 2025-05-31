// src/component/RotatingRing.tsx
import React from "react";

const RotatingRing: React.FC<{
  size?: number;          // Tamaño del SVG en px (ancho y alto)
  strokeWidth?: number;   // Grosor del trazo del anillo
  color?: string;         // Color del trazo (puede ser "white", "#fff", etc.)
  speed?: number;         // Velocidad en segundos para una vuelta completa
}> = ({
  size = 200,
  strokeWidth = 4,
  color = "#ffffff",
  speed = 10,
}) => {
  // Calculamos el radio y centro del círculo en función del tamaño y del grosor
  const half = size / 2;
  const radius = half - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      style={{
        // este style inline define la animación desde cero (Tailwind no soporta velocidad custom desde JSX)
        animation: `spin ${speed}s linear infinite`,
      }}
    >
      <circle
        cx={half}
        cy={half}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference * 0.75 + " " + circumference * 0.25}
        strokeLinecap="round"
      />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
};

export default RotatingRing;
