import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CrearProducto(){
    const [formData, setFormData] = useState({
        nombre: '', 
        descripcion: '', 
        precio: '', 
        imagenUrl: ''
    });

    const [statusMessage, setStatusMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch('', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                nombre: formData.nombre, 
                descripcion: formData.descripcion, 
                precio: Number(formData.precio), 
                imagenUrl: formData.imagenUrl
            })
        });

        if(!response.ok) throw new Error("Error al crear el producto");
        setStatusMessage("Producto creado correctamente");
        setTimeout(() => navigate('/productos'), 1500);
    } catch (err){
        console.log(err);
        setStatusMessage("Ocurrio un problema al crear el producto.");
    }
  };

  return (
    <div className="form__conteiner" >
        <form className="form" onSubmit={handleSubmit}>

            <h2>Crear nuevo producto</h2>

            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>

            <label>Descripción</label>
            <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange}/>

            <label>Precio</label>
            <input type="number" name="precio" value={formData.precio} onChange={handleChange}/>

            <label>Imagen (URL)</label>
            <input type="file" name="imagenUrl" value={formData.imagenUrl} onChange={handleChange}/>

            <button type="button" onClick={agregarDetalle}>+ Agregar detalle</button>

            <button type="submit">Crear producto</button>
            {statusMessage && <p>{statusMessage}</p>}
            
        </form>
    </div>
  );
}

export default CrearProducto;