var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Impuesto = require('../schemas/impuestos.js');

router.get('/', function(req, res) {
  Impuesto.find().exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function(req, res) {
  var idImpuesto = req.body.idImpuesto;
  Impuesto.findById(idImpuesto).exec()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var idImpuesto = req.body.id;
  var impuesto = req.body.impuesto;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Impuesto.findByIdAndUpdate({_id: idImpuesto}, {$set:{impuesto:impuesto}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

router.post('/insertar', function(req, res) {
  var ImpuestoNuevo = new Impuesto({
    _id: new mongoose.Types.ObjectId(),
    impuesto: req.body.impuesto,
  });

  ImpuestoNuevo.save()
    .then(
      function(result) {
        res.json(result);
      }
    );
});

module.exports = router;
