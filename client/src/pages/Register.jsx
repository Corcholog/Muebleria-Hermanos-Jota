import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Crear Cuenta</h2>

        <form className="auth-form">
          <div className="auth-input__wrapper">
            <label className="auth-input__label">Nombre</label>
            <input className="auth-input__field" type="text" placeholder="Tu nombre" />

          </div>

          <div className="auth-input__wrapper">
            <label className="auth-input__label">Email</label>
            <input className="auth-input__field" type="email" placeholder="tu@email.com" />
          </div>

          <div className="auth-input__wrapper">
            <label className="auth-input__label">Contraseña</label>
            <input className="auth-input__field" type="password" placeholder="••••••" />
          </div>

          <button id="boton_auth">Registrarse</button>
        </form>

        <p className="auth-msg">
          ¿Ya tenés cuenta?
          <Link to="/login"> Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
