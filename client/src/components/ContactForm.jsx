import React, { useState } from 'react';

function ContactForm() {
    // Estado para manejar los datos del formulario y el mensaje de estado
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Datos del formulario:', formData); // 
    
    setStatusMessage('¡Gracias por tu mensaje! Te contactaremos pronto.'); // 
    
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="form__container">
      <div className="form">
        <div className="contact__info">
          <h3 id="contact-info">Estamos para ayudarte</h3>
          <p className="text-form">
            Queremos que tus muebles reflejen tu estilo. Si tenés dudas, consultas sobre nuestros productos o necesitás asesoramiento, escribinos. Nuestro equipo está listo para acompañarte.
          </p>
          <div className="info">
            <div class="informacion">
                <p>
                    <i class="fa-solid fa-location-dot"></i> 
                        Av. San Juan 2847<br/>
                    C1232AAB — Barrio de San Cristóbal<br/>
                    Ciudad Autónoma de Buenos Aires<br/>
                    Argentina
                </p>
            </div>
            <div class="informacion">
                <p>
                    <p><i class="fa-solid fa-envelope"></i> info@hermanosjota.com.ar</p>
                </p>
            </div>
            <div class="informacion">
                <p><i class="fa-solid fa-phone"></i> +54 11 4567-8900</p>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <form id="contacto-form" onSubmit={handleSubmit}>
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
              />
            </div>

            <div className="input__container">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                placeholder="Escribi tu mensaje..." 
                className="input"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="submit" value="Enviar" id="boton" />

            {statusMessage && <p id="estado" className="ok">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;