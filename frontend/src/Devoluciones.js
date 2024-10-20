import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.jpeg';
import './App.css';

function Devoluciones() {
    const [devoluciones, setDevoluciones] = useState([]);

    // Efecto para obtener la lista de devoluciones
    useEffect(() => {
        fetch('http://localhost:5000/api/devoluciones')
            .then(response => response.json())
            .then(data => setDevoluciones(data))
            .catch(error => console.error('Error al obtener la lista de devoluciones:', error));
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
                        <FontAwesomeIcon icon={faRecordVinyl} id="icon" />
                        <Link to="/historial" className="menu-link">Historial</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSignOutAlt} id="icon" />
                        <Link to="/logout" className="menu-link">Cerrar Sesión</Link>
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
