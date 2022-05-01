var mongoose = require('mongoose');

var impuestoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  impuesto: Number
});

module.exports = mongoose.model('Impuesto', impuestoSchema, 'Impuesto');