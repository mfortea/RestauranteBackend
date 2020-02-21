const mongoose = require('mongoose');

const Cliente = mongoose.model('Cocinero',
  new mongoose.Schema({ nombre: String, apellidos: String, edad:Number, especialidad:String })
);

const Articulo = mongoose.model('Plato',
  new mongoose.Schema({ nombre: String, tipo: String, minutosElaboracion:Number, precio:Number })
);

module.exports = {
  Cocinero: Cocinero,
  Plato: Plato
}