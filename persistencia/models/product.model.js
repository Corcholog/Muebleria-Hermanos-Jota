const mongoose = require('mongoose');
const productSchema = require('../schemas/product.schema');

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
