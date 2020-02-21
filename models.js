const mongoose = require('mongoose');

const Cocinero = mongoose.model('Cocinero',
  new mongoose.Schema({ nombre: String, apellidos: String, edad:Number, especialidad:String })
);

const Plato = mongoose.model('Plato',
  new mongoose.Schema({ nombre: String, tipo: String, minutosElaboracion:Number, precio:Number })
);

module.exports = {
  Cocinero: Cocinero,
  Plato: Plato
}