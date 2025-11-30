import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Iniciar Sesión</h2>

        <form className="auth-form">
          <div className="auth-input__wrapper">
            <label className="auth-input__label">Email</label>
            <input
              className="auth-input__field"
              type="email"
              placeholder="tu@email.com"
            />
          </div>

          <div className="auth-input__wrapper">
            <label className="auth-input__label">Contraseña</label>
            <input
              className="auth-input__field"
              type="password"
              placeholder="••••••"
            />
          </div>

          <button id="boton_auth" type="submit">
            Ingresar
          </button>
        </form>

        <p className="auth-msg">
          ¿No tenés cuenta?
          <Link to="/register"> Registrarse</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
