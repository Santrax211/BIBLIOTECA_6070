// src/Dashboard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
                <Link to="/inicio" className="menu-link">Inicio</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faBook} id="icon" />
                <Link to="/prestamos" className="menu-link">Préstamos</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faUndo} id="icon" />
                <Link to="/devoluciones" className="menu-link">Devoluciones</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faRecordVinyl} id='icon'/>
                <Link to="/historiañ" className="menu-link">Historial</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faSignOutAlt} id="icon" />
                <Link to="/logout" className="menu-link">Cerrar Sesión</Link>
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
