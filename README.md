# Muebleria-Hermanos-Jota

Este proyecto es el desarrollo de un sitio web de **e-commerce** para una mueblería artesanal, como parte del trabajo práctico final de los **Sprints 3 y 4 - NEXUS**.
La aplicación está construida con una arquitectura **cliente-servidor**:
- **Backend:** Node.js + Express (API REST)  
- **Frontend:** React (SPA) 

---

## Integrantes
- Mongelós Ramiro 
- Castagnino Lucia 
- Loguercio Giorgio Ivan 
- Leiva Falcón Matías
- Orue Ramiro Agustin

---

### Herramentias usadas:
- **Frontend:** React, JavaScript, CSS  
- **Backend:** Node.js, Express  
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

### Instalación y ejecución

#### 1. Clonar el repositorio

a. Entrar al repositorio en GitHub.  
b. Hacer clic en el botón verde **Code** y copiar la URL (HTTPS recomendado).  
c. Abrir la terminal en la carpeta donde quieras clonar el proyecto.  
d. Ejecutar el comando:  

```bash
git clone <URL_DEL_REPO>
```

Ejemplo: `git clone https://github.com/usuario/Muebleria-Hermanos-Jota.git`

e. Entrar a la carpeta recién clonada:

`cd Muebleria-Hermanos-Jota`

#### 2. Instalación de dependencias

Instala las dependencias tanto para el Backend como para el Frontend.

**Backend**

Ejecuta los siguientes comandos en la terminal, estando dentro de la carpeta principal del proyecto (Muebleria-Hermanos-Jota):
```bash
- cd backend
- npm install
```
**Frontend**

Una vez finalizada la instalación del backend, instala las dependencias del cliente:
```bash
- cd ../client
- npm install
```

#### 3. Ejecucion del proyecto

**Levantar el servidor Backend**

Abre una terminal, navega a la carpeta backend y ejecuta:
```bash
 cd backend
 node server.js
```
El backend corre por defecto en: `http://localhost:5000`

**Levantar el cliente Frontend**

Abre una segunda terminal, navega a la carpeta client y ejecuta:
```bash
 cd client
 npm start
```
El frontend corre en: `http://localhost:3000`

---

### Notas

- Es necesario tener instalado **Node.js** y **npm**.
- El frontend depende del backend, por lo que ambos deben estar corriendo al **mismo tiempo**.

