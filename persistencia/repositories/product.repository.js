const Product = require('../models/product.model');

function findAll() { 
    return Product.find().sort({ createdAt: -1 }); 
}
function findById(id) { 
    return Product.findById(id); 
}
function create(data) { 
    return Product.create(data); 
}
function update(id, data) { 
    return Product.findByIdAndUpdate(id, data, { new: true, runValidators: true }); 
}
function remove(id) { 
    return Product.findByIdAndDelete(id); 
}

module.exports = { findAll, findById, create, update, remove };