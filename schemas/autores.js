var mongoose = require('mongoose');

var autorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  edad: Number,
  libros: String,
  premios: String,
  genero: String,
  resena: String,
  fotoUrl: String
});

module.exports = mongoose.model('Autor', autorSchema, 'Autores');