# Muebleria-Hermanos-Jota

Este proyecto es el desarrollo de un sitio web de **e-commerce** para una mueblería artesanal, como parte del trabajo práctico final de los **Sprints 7 y 8 - NEXUS**.

## Integrantes
- Mongelós Ramiro
- Castagnino Lucia
- Loguercio Giorgio Ivan
- Leiva Falcón Matías
- Orue Ramiro Agustin

---

## 🚀 Enlaces a sitios desplegados

Puedes acceder a las versiones desplegadas del proyecto en los siguientes enlaces:

* **Frontend (Cliente):** [https://muebleria-hermanos-jota-sprint5-6.vercel.app/](https://muebleria-hermanos-jota-sprint5-6.vercel.app/)
* **Backend (Servidor):** [https://muebleria-hermanos-jota-e3y4.onrender.com](https://muebleria-hermanos-jota-e3y4.onrender.com)

---

## 🏗️ Descripción de la arquitectura

La aplicación está construida con una arquitectura **cliente-servidor** (MERN Stack):

### Backend (API REST)
- **Tecnologías**: Node.js, Express, MongoDB.
- **Funcionalidad**: Manejo de rutas protegidas, autenticación JWT, operaciones CRUD para productos, y middleware de logging.
- **Despliegue**: Render.

### Frontend (SPA)
- **Tecnologías**: React, CSS (diseño responsivo y personalizado).
- **Funcionalidad**: Consumo de API, manejo de estado global (Context API para Auth y Carrito), navegación con React Router, y componentes reutilizables.
- **Despliegue**: Vercel.

---

## 📖 Instrucciones de uso

### Pre-requisitos
- Node.js instalado (v14 o superior).
- Una base de datos MongoDB (local o Atlas).

### 1. Clonar el repositorio

```bash
git clone https://github.com/Corcholog/Muebleria-Hermanos-Jota.git
cd Muebleria-Hermanos-Jota
```

### 2. Configurar Variables de Entorno

**Backend**:
Crea un archivo `.env` en `/backend` con las siguientes variables:
```
PORT=3001
MONGODB_URI=mongodb+srv://USUARIO:PASSWORD@tu_cluster.mongodb.net/nombre_db
JWT_SECRET=tu_secreto_super_seguro
```

**Frontend**:
Crea un archivo `.env` en `/client` con la URL del API:
```
REACT_APP_API_URL=http://localhost:3001
```

### 3. Instalación de Dependencias

**Backend**:
```bash
cd backend
npm install
```

**Frontend**:
```bash
cd client
npm install
```

### 4. Ejecución

- **Inicia el Servidor**:
  ```bash
  cd backend
  npm run dev
  ```

- **Inicia el Cliente**:
  ```bash
  cd client
  npm start
  ```
