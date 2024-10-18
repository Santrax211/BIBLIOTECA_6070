// src/Dashboard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/images/logo.jpeg';
import './App.css';

function Dashboard() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="Logo del Colegio" className="school-logo" />
          <h2>I.E. 6070 Héroes Del Alto Cenepa</h2>
        </div>
        <ul className="sidebar-menu">
            <li>
                <FontAwesomeIcon icon={faHome} id="icon" />
                <span>Inicio</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faBook} id="icon" />
                <span>Préstamos</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faUndo} id="icon" />
                <span>Devoluciones</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faRecordVinyl} id='icon'/>
                <span>Historial</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faSignOutAlt} id="icon" />
                <span>Cerrar Sesión</span>
            </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <h1>Bienvenido Usuario</h1>
        <p>Biblioteca del Colegio Héroes del Alto Cenepa</p>
      </div>
    </div>
  );
}

export default Dashboard;
