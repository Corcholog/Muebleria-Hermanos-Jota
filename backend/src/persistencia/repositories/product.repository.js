const Product = require('../models/product.model');

function findAll({ limit = 0, skip = 0 } = {}) {
  return Product.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
}
function findById(id) {
  return Product.findById(id).lean();
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