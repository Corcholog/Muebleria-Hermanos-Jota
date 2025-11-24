const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true 
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      enum: ['cliente', 'admin'],
      default: 'cliente'
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
