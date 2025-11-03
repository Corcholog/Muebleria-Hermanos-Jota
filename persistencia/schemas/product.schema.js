const { Schema } = require('mongoose');

module.exports = new Schema({
  nombre: { 
    type: String, 
    required: true, 
    trim: true 
},
  descripcion: { 
    type: String, 
    default: '' 
},
  precio: { 
    type: Number, 
    required: true, 
    min: 0 
},
  stock: { 
    type: Number, 
    default: 0, 
    min: 0 
},
  imagenUrl: { 
    type: String, 
    default: '' 
},
}, { timestamps: true });
