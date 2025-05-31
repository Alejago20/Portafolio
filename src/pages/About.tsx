// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from "../component/ParticlesBackground";
import AnimatedText from "../component/AnimatedText";
import WelcomeMessage from "../component/HeroText";
// import Buttones from '../component/Button';
import FloatingComputer from "../component/FloatingComputer";
import "../App.css";

const About: React.FC = () => {
  const [topPosition, setTopPosition] = useState("62%");

  // Actualiza el valor de `top` dependiendo del ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setTopPosition("85%"); // Móviles
      } else {
        setTopPosition("62%"); // Pantallas grandes
      }
    };

    handleResize(); // Ejecutar al montar

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Fondo de partículas */}
      <ParticlesBackground />

      {/* Menú */}
      <DrawerAppBar />

      {/* Contenido de texto */}
      <div
        className="relative mx-auto px-6 pt-24 text-center text-white"
        style={{ maxWidth: "800px", zIndex: 20 }}
      >
        <AnimatedText message="Acerca de mí" />

        <WelcomeMessage
          message="Soy una desarrolladora web apasionada, dedicada y entusiasta, enfocada en crear soluciones digitales que combinan funcionalidad y diseño. Como Tecnóloga en Desarrollo de Software, me esfuerzo por cerrar la brecha entre la tecnología y la experiencia del usuario. ¡Descubre más en mi portafolio!"
        />
      </div>

      {/* Computador flotante con top dinámico */}
      <div
        style={{
          position: "absolute",
          top: topPosition,
          left: "54%",
          transform: "translateX(-50%)",
          zIndex: 10,
          pointerEvents: "none",
          opacity: 0.45,
          filter: "blur(1px)",
          color: "#ffffff",
        }}
      >
        <FloatingComputer />
      </div>
    </div>
  );
};

export default About;
