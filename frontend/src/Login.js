import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import logo from './assets/images/logo.jpeg';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí validamos el usuario y la contraseña
    if (username === 'admin' && password === '1234') {
      // Redirige al Dashboard si la autenticación es exitosa
      window.location.href = '/inicio';
    } else {
      setErrorMessage("Credenciales incorrectas, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {/* Logo de la escuela */}
        <img src={logo} alt="Logo de la escuela" className="school-logo" />

        <h2>Inicio de Sesión</h2>

        {/* Campo de usuario con icono */}
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} className="icon" /> Usuario:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Campo de contraseña con icono */}
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faLock} className="icon" /> Contraseña:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* CAPTCHA (Comentado) */}
        {/* <ReCAPTCHA
          sitekey="6Le-LmUqAAAAADh_iHMnTaIYGdQtDw_kpMyRLpOR"
          onChange={onChangeCaptcha}
        /> */}

        {/* Mensaje de error si no se completa el CAPTCHA */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-btn">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;

