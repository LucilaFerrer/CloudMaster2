var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Libro = require('../schemas/libros.js');

router.get('/', function(req, res) {
  Libro.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idLibro = req.body.idLibro;
  Libro.findById(idLibro).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscarautor', function(req, res) {
  var idAutor = { "autor_id": req.body.idAutor }
  Libro.find(idAutor).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscartitulo', function(req, res) {
  var titulo = { "titulo": new RegExp(req.body.titulo, 'i') }
  console.log(titulo)
  Libro.find(titulo).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/descuento', function(req, res) {
  var identificador = req.body.id;
  var precio = req.body.precio;
  var descuento = req.body.descuento;
  var precio_final = precio - (precio * (descuento / 100)); 
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Libro.findOneAndUpdate({_id: identificador}, {$set:{descuento:descuento,precio_final:precio_final}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var libroNuevo = new Libro({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    edad: req.body.edad,
    libros: req.body.libros,
    premios: req.body.premios,
    genero: req.body.genero,
    resena: req.body.resena,
    fotoUrl: req.body.fotoUrl
  });

  libroNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;
