import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Prestamos from './Prestamos';
import Devoluciones from './Devoluciones';
import Dashboard from './Dashboard'; // Si tienes una página de inicio
import Login from './Login'
import Historial from './Historial';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Dashboard />} />
        <Route path="/prestamos" element={<Prestamos />} />
        <Route path="/devoluciones" element={<Devoluciones />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
