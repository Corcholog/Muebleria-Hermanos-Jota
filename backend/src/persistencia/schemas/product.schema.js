const { Schema } = require('mongoose');

const ProductSchema = new Schema({
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
  imagen: { 
    type: String, 
    default: '' 
},
}, { timestamps: true, 
  versionKey: false,    
  toJSON: { virtuals: true },      
  toObject: { virtuals: true }
});

module.exports = ProductSchema;
