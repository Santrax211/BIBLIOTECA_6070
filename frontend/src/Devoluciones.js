// src/Devoluciones.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/images/logo.jpeg';
import './App.css';

function Devoluciones() {
  const [devoluciones, setDevoluciones] = useState([]);

  useEffect(()=>{
    fetch('https://localhost:5000/api/devoluciones')
        .then(responde => Response.json())
        .then(data => setDevoluciones(data))
        .catch(error => console.error('Error al obtener la lista de devoluciones'), error);
  }, [];)
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
        <h1>Lista de Devoluciones</h1>
        <table className="table-devoluciones">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Préstamo</th>
              <th>Nombre de Usuario</th>
              <th>Fecha Dev.</th>
              <th>Multa</th>
            </tr>
          </thead>
          <tbody>
            {devoluciones.map((devolucion) => (
              <tr key={devolucion.id}>
                <td>{devolucion.id}</td>
                <td>{devolucion.idPrestamo}</td>
                <td>{devolucion.nombreUsuario}</td>
                <td>{new Date(devolucion.fechaDevolucion).toLocaleDateString()}</td>
                <td>{devolucion.multa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Devoluciones;