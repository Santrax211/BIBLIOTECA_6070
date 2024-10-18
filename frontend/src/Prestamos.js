// src/Prestamos.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/images/logo.jpeg';
import './App.css';

function Prestamos() {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/prestamos')
      .then(response => response.json())
      .then(data => setPrestamos(data))
      .catch(error => console.error('Error al obtener la lista de préstamos:', error));
  }, []);

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
            <FontAwesomeIcon icon={faRecordVinyl} id='icon' />
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
        <h1>Lista de Préstamos</h1>
        <table className="table-prestamos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Libro</th>
              <th>Nombre de Usuario</th>
              <th>Fecha Prest.</th>
              <th>Fecha Dev.</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map((prestamo) => (
              <tr key={prestamo.id}>
                <td>{prestamo.id}</td>
                <td>{prestamo.nombreLibro}</td>
                <td>{prestamo.nombreUsuario}</td>
                <td>{new Date(prestamo.fechaPrestamo).toLocaleDateString()}</td>
                <td>{new Date(prestamo.fechaDevolucion).toLocaleDateString()}</td>
                <td>{prestamo.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prestamos;