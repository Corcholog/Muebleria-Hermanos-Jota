# Muebleria-Hermanos-Jota

Este proyecto es el desarrollo de un sitio web de **e-commerce** para una mueblería artesanal, como parte del trabajo práctico final de los **Sprints 5 y 6 - NEXUS**.
La aplicación está construida con una arquitectura **cliente-servidor**:
- **Backend:** Node.js + Express (API REST) + MongoDB
- **Frontend:** React (SPA)

---

## 🚀 Sitios Desplegados

Puedes acceder a las versiones desplegadas del proyecto en los siguientes enlaces:

* **Frontend (Cliente):** [https://muebleria-hermanos-jota-sprint5-6.vercel.app/](https://muebleria-hermanos-jota-sprint5-6.vercel.app/)
* **Backend (Servidor):** [https://muebleria-hermanos-jota-e3y4.onrender.com](https://muebleria-hermanos-jota-e3y4.onrender.com)

---

## Integrantes
- Mongelós Ramiro
- Castagnino Lucia
- Loguercio Giorgio Ivan
- Leiva Falcón Matías
- Orue Ramiro Agustin

---

### Herramientas usadas:
- **Frontend:** React, JavaScript, CSS
- **Backend:** Node.js, Express, MongoDB
- **Gestión de dependencias:** npm
- **Control de versiones:** Git + GitHub

---

### Descripción de funcionalidades
Sitio web e-commerce que carga productos dinámicamente desde el backend mediante API REST. Incluye una página de inicio, un catálogo completo y vistas de detalle para cada producto. Además, cuenta con un contador de carrito que se actualiza dinámicamente y se mantiene persistente mientras el usuario navega por el sitio, un formulario de contacto controlado con validación y un middleware en el backend que registra todas las peticiones recibidas.

---

### Estructura del proyecto
- **/backend** → Servidor con Express (API)
- **/client** → Aplicación en React (SPA)

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu máquina.

### 1. Clonar el repositorio

```bash
git clone [https://github.com/Corcholog/Muebleria-Hermanos-Jota.git](https://github.com/Corcholog/Muebleria-Hermanos-Jota.git)
cd Muebleria-Hermanos-Jota
```

### 2. Configurar Variables de Entorno (¡Importante!)
El proyecto necesita archivos .env para funcionar. Estos archivos no se suben al repositorio y deben ser creados localmente, aun así dejamos un .env.example.

Backend:

Navega a la carpeta /backend.

Crea un archivo llamado .env.

Pega el siguiente contenido. 

PORT=3001
MONGODB_URI=mongodb+srv://USUARIO:PASSWORD@tu_cluster.mongodb.net/nombre_db

Frontend:

Navega a la carpeta /client.

Crea un archivo llamado .env.

Pega el siguiente contenido. Esto le dice a React dónde encontrar tu backend local.

REACT_APP_API_URL=http://localhost:3001

### 3. Instalación de Dependencias
Instala las dependencias tanto para el Backend como para el Frontend.

Backend (desde la raíz del proyecto):
```bash
cd backend
npm install
```

Frontend (desde la raíz del proyecto):
```bash
cd client
npm install
```
