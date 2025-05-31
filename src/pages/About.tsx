// src/pages/About.tsx
import React from "react";
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from "../component/ParticlesBackground";
import AnimatedText from "../component/AnimatedText";
import WelcomeMessage from "../component/HeroText";
// import Buttones from '../component/Button';
import FloatingComputer from "../component/FloatingComputer";
import "../App.css"; // Si aquí están tus estilos globales o configuraciones (Tailwind, etc.)

const About: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{}}
    >
      {/* 1) Fondo de partículas (comenta o descomenta según quieras verlo) */}
      <ParticlesBackground />

      {/* 2) Menú */}
      <DrawerAppBar />

      {/* 3) Contenedor del texto (título + párrafo + botón comentado) */}
      <div
        className="relative mx-auto px-6 pt-24 text-center text-white"
        style={{
          maxWidth: "800px",
          zIndex: 20, /* Muy arriba para que todo lo demás quede detrás */
        }}
      >
        {/* Título animado */}
        <AnimatedText message="Acerca de mí" />

        {/* Párrafo descriptivo */}
        <WelcomeMessage
          message="Soy una desarrolladora web apasionada, dedicada y entusiasta, enfocada en crear soluciones digitales que combinan funcionalidad y diseño. Como Tecnóloga en Desarrollo de Software, me esfuerzo por cerrar la brecha entre la tecnología y la experiencia del usuario. ¡Descubre más en mi portafolio!"
        />

        {/* Botón comentado */}
        {/*
        <div style={{ marginTop: "2rem" }}>
          <Buttones />
        </div>
        */}
      </div>

      {/* 4) Computador flotando: posición absoluta + top + zIndex con estilos inline */}
      <div
        style={{
          position: "absolute",
          top: "62%",               // Ajusta este valor (%) hasta que la laptop quede justo dónde quieres
          left: "50%",              // Centra horizontalmente
          transform: "translateX(-50%)",
          zIndex: 10,               // Detrás del texto (zIndex:20) pero delante de las partículas (zIndex por defecto más bajo)
          pointerEvents: "none",    // Evita que la imagen interfiera con clics
          opacity: 0.45,                // 15% de opacidad
          filter: "blur(1px)",      // Desenfoque ligero para suavizar bordes
          color: "#ffffff",         // El SVG toma este color para stroke y texto (currentColor)
        }}
      >
        <FloatingComputer />
      </div>
    </div>
  );
};

export default About;
