
import React from 'react';
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from '../component/ParticlesBackground';
import "../App.css";
import AnimatedText from "../component/AnimatedText";
import WelcomeMessage from "../component/HeroText";
import Nave from '../component/Nave';


const Home: React.FC = () => {
  return (
    <>

 
    <AnimatedText message='Transformando sueños digitales en realidad' />

    <WelcomeMessage message='Explora cómo transformo ideas audaces en experiencias web que capturan la imaginación. En este sitio, te ofreceré un viaje fascinante a través de mi trayectoria, proyectos impactantes y las tecnologías que domino. ¡Déjate inspirar por la creatividad y la innovación que dan vida a mis obras!'></WelcomeMessage>
 
    <DrawerAppBar />
    <ParticlesBackground/>
    <Nave/>
     

    
    </>
  );
}

export default Home;
