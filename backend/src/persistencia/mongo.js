const mongoose = require('mongoose');

function connect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Falta MONGODB_URI en .env');
  return mongoose.connect(uri).then(() => {
    console.log('MongoDB conectado');
  });
}

module.exports = { connect };
