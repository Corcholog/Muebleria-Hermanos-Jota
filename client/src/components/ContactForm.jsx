import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setStatusMessage('');

    // Validaciones mínimas
    if (!formData.nombre.trim()) {
      return setErrorMessage('Por favor, ingresá tu nombre.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return setErrorMessage('Ingresá un email válido.');
    }

    console.log('Datos del formulario:', formData);
    setStatusMessage('¡Gracias por tu mensaje! Te contactaremos pronto.');

    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="form__container">
      <div className="form">
        <div className="contact__info">
          <h3 id="contact-info">Estamos para ayudarte</h3>
          <p className="text-form">
            Queremos que tus muebles reflejen tu estilo. Si tenés dudas o necesitás asesoramiento, escribinos.
          </p>

          <div className="info">
            <div className="informacion">
              <p>
                <i className="fa-solid fa-location-dot"></i>{' '}
                Av. San Juan 2847<br />
                C1232AAB — Barrio de San Cristóbal<br />
                Ciudad Autónoma de Buenos Aires<br />
                Argentina
              </p>
            </div>

            <div className="informacion">
              <p>
                <i className="fa-solid fa-envelope"></i>{' '}
                <a href="mailto:info@hermanosjota.com.ar">info@hermanosjota.com.ar</a>
              </p>
            </div>

            <div className="informacion">
              <p>
                <i className="fa-solid fa-phone"></i> +54 11 4567-8900
              </p>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <form id="contacto-form" onSubmit={handleSubmit} noValidate>
            <h3 id="contact-us">Escribinos</h3>

            <div className="input__container">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre..."
                className="input"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input__container">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ingrese su email..."
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input__container">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribí tu mensaje..."
                className="input"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <input type="submit" value="Enviar" id="boton" />

            {errorMessage && (
              <p id="estado" className="error" aria-live="polite">
                {errorMessage}
              </p>
            )}
            {statusMessage && (
              <p id="estado" className="ok" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;