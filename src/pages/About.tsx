import React from 'react';
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from '../component/ParticlesBackground';
import AnimatedText from "../component/AnimatedText";
import WelcomeMessage from "../component/HeroText";
import Buttones from '../component/Button';
import "../App.css";
import "../css/about.css";

const About: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fondo con partículas y menú */}
      <ParticlesBackground />
      <DrawerAppBar />

      {/* Sección "Acerca de mi" */}
      <AnimatedText message="Acerca de mi" />
      <WelcomeMessage message="Soy una desarrolladora web apasionada, dedicada y entusiasta, enfocada en crear soluciones digitales que combinan funcionalidad y diseño. Como Tecnóloga en Desarrollo de Software, me esfuerzo por cerrar la brecha entre la tecnología y la experiencia del usuario. ¡Descubre más en mi portafolio!" />

      {/* Contenedor absoluto para el botón, con top responsive */}
      <div
        className="absolute left-[4%] top-[80%] sm:top-[75%] md:top-[62%]"
      >
        <Buttones />
      </div>
    </div>
  );
};

export default About;
