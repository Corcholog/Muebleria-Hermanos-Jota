const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia a tu modelo de usuarios
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Referencia a tu modelo de productos
                required: true
            },
            quantity: { type: Number, required: true, min: 1 },
            price: { type: Number, required: true } // Guardamos el precio al momento de la compra
        }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pendiente', 'aprobado', 'enviado', 'entregado'],
        default: 'pendiente'
    }
}, {
    timestamps: true // Crea createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Order', orderSchema);