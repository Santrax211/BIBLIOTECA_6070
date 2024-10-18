// src/Login.js
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import "./App.css";
import logo from './assets/images/logo.jpeg';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        console.log("reCAPTCHA Enterprise está lista");
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.grecaptcha) {
      const token = await window.grecaptcha.enterprise.execute('6Le-LmUqAAAAADh_iHMnTaIYGdQtDw_kpMyRLpOR', { action: 'LOGIN' });

      if (token && captchaValid) {
        const loginData = {
          username: username,
          password: password,
          token: token
        };

        fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          //body: JSON.stringify(loginData)
          body: JSON.stringify({username, password})
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Redirigir al dashboard
            navigate('/dashboard');
          } else {
            setErrorMessage("Error en la autenticación. Inténtalo de nuevo.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage("Ocurrió un error en el servidor.");
        });
      } else {
        setErrorMessage("Por favor, completa el CAPTCHA.");
      }
    } else {
      console.error("reCAPTCHA no está disponible.");
      setErrorMessage("Error al cargar reCAPTCHA.");
    }
  };

  const onChangeCaptcha = (value) => {
    if (value) {
      setCaptchaValid(true);
      setErrorMessage("");
    } else {
      setCaptchaValid(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} alt="Logo de la escuela" className="school-logo" />
        <h2>Inicio de Sesión</h2>

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

        <ReCAPTCHA
          sitekey="6Le-LmUqAAAAADh_iHMnTaIYGdQtDw_kpMyRLpOR"
          onChange={onChangeCaptcha}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-btn">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
