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
  // console.log(idAutor)
  Libro.findOne(idAutor).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var nombre = req.body.nombre;
  var edad = req.body.edad;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Libro.findOneAndUpdate({nombre: nombre}, {$set:{edad:edad}}, {useFindAndModify: false, new: true}, function (err, doc) {
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
