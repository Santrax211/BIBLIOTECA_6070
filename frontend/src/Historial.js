import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUndo, faSignOutAlt, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import logo from './assets/images/logo.jpeg';
import './App.css';

function Historial() {
    const [historial, setHistorial] = useState([]);

    // Obtener el historial desde el backend
    useEffect(() => {
        fetch('http://localhost:5000/api/historial')
            .then(response => response.json())
            .then(data => setHistorial(data))
            .catch(error => console.error('Error al obtener el historial:', error));
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
                        <Link to="/" className="menu-link">Cerrar Sesión</Link>
                    </li>
                </ul>
            </div>

            {/* Contenido principal */}
            <div className="main-content">
                <h1>Historial de Préstamos y Devoluciones</h1>
                <table className="table-historial">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipo</th> {/* Préstamo o Devolución */}
                            <th>Nombre del Libro</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                            <th>Estado/Multa</th> {/* Estado para préstamos, multa para devoluciones */}
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map((registro, index) => (
                            <tr key={index}>
                                <td>{registro.id}</td>
                                <td>{registro.fechaPrestamo ? 'Préstamo' : 'Devolución'}</td> {/* Identifica si es préstamo o devolución */}
                                <td>{registro.nombreLibro || 'N/A'}</td> {/* Mostrar solo si es préstamo */}
                                <td>{registro.nombreUsuario}</td>
                                <td>{new Date(registro.fechaPrestamo || registro.fechaDevolucion).toLocaleDateString()}</td>
                                <td>{registro.estado || registro.multa || 'N/A'}</td> {/* Mostrar estado o multa */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Historial;
