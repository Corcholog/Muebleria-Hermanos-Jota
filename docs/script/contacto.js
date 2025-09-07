const formulario = document.getElementById("contacto-form");
const estado = document.getElementById("estado");

function sendForm(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const elEmailEsValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !email || !mensaje) {
    estado.textContent = "Por favor, complete todos los campos.";
    estado.className = "error";
    return;
  }
  if (!elEmailEsValido.test(email)) {
    estado.textContent = "Email inválido.";
    estado.className = "error";
    return;
  }

  estado.textContent = "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";
  estado.className = "ok";

  formulario.reset();
}

formulario.addEventListener("submit", sendForm);