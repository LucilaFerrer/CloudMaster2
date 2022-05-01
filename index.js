var path = require("path");
var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb+srv://proyecto1:proyecto1@proyecto1.eoozx.mongodb.net/Proyecto?retryWrites=true&w=majority")

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/autores", require("./api/autores.js"));
app.use("/libros", require("./api/libros.js"));
app.use("/impuestos", require("./api/impuestos.js"));

app.listen(5000, function(){ console.log ("Servidor corriendo en el puerto 5000..."); }); // Levanto el servidor en el puerto 5000...;
