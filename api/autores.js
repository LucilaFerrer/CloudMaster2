var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Autor = require('../schemas/autores.js');

router.get('/', function(req, res) {
  Autor.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idAutor = req.body.idAutor;
  Autor.findById(idAutor).exec()
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
  Autor.findOneAndUpdate({nombre: nombre}, {$set:{edad:edad}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var autorNuevo = new Autor({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    edad: req.body.edad,
    libros: req.body.libros,
    premios: req.body.premios,
    genero: req.body.genero,
    resena: req.body.resena,
    fotoUrl: req.body.fotoUrl
  });

  autorNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;
