import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="row">
          <div className="footer__column">
            <h4 className="cat__footer">Showroom y taller</h4>
            <p>
              <strong>Hermanos Jota - Casa Taller</strong><br />
              Av. San Juan 2847 <br />
              C1232AAB — Barrio de San Cristóbal<br />
              Ciudad Autónoma de Buenos Aires<br />
              Argentina
            </p>
            <br />
            <p>
              <strong>Horarios:</strong><br />
              Lunes a Viernes: 10:00 - 19:00 <br />
              Sabados: 10:00 - 14:00
            </p>
          </div>

          <div className="footer__column">
            <h4 className="cat__footer">Contacto</h4>
            <ul>
              <li>
                <strong>Sitio web </strong>
                <a href="https://www.hermanosjota.com.ar" target="_blank">
                  www.hermanosjota.com.ar
                </a>
              </li>
              <li>
                <strong>Email </strong>
                <a href="mailto:info@hermanosjota.com.ar">info@hermanosjota.com.ar</a>
              </li>
              <li>
                <strong>Ventas </strong>
                <a href="mailto:ventas@hermanosjota.com.ar">ventas@hermanosjota.com.ar</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="cat__footer">Seguinos</h4>
            <div className="social__links">
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__credits">
          <p>&copy; 2025 Hermanos Jota. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;