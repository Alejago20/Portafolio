import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home  from '../pages/Home';
import About  from '../pages/About';
import Contacto from "../pages/Contact"
import Servicies from '../pages/Servicies';
import Projects from '../pages/Proyect';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicio" element={<Servicies />} />
            <Route path="/proyecto" element={<Projects/>} />
    </Routes>
  );
};

export default AppRoutes;
