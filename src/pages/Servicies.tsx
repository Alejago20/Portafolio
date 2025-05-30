
import React from 'react';
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from '../component/ParticlesBackground';
import "../App.css";

import  Panel from "../component/serivicios"


const Servicies: React.FC = () => {
  return (
    <>
       
    <ParticlesBackground />
 
    <Panel></Panel>
    <DrawerAppBar /> 
   
  
     
    </>
  );
}

export default  Servicies;
