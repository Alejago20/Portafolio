
import React from 'react';
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from '../component/ParticlesBackground';
import AnimatedText from "../component/AnimatedText";

import Formulario from '../component/Formulario';


const Contacto: React.FC = () => {
  return (
    <>
 
    <ParticlesBackground />
    <AnimatedText message='Contacto'/>
    <Formulario></Formulario>
    <DrawerAppBar />
     
    </>
  );
}

export default Contacto;
