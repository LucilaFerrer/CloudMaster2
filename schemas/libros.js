var mongoose = require('mongoose');

var libroSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  editorial: String,
  titulo: String,
  precio: Number,
  isbn: Number,
  portada: String,
  fecha_publicacion: Number,
  genero_literario: String,
  autor_id: String
});

module.exports = mongoose.model('Libro', libroSchema, 'Libros');