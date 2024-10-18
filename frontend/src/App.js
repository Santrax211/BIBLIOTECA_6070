// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Prestamos from './Prestamos';
import Devoluciones from './Devoluciones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/prestamos' element={<Prestamos />} />
        <Route path='/devoluciones' element={<Devoluciones />} />
      </Routes>
    </Router>
  );
}

export default App;
