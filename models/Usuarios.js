/*'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Requester } = require('cote');

const requester = new Requester({ name: 'nodeapp' });

// crear el esquema
const usuarioSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

// método estáico
usuarioSchema.statics.hashPassword = function(passwordEnClaro) {
  return bcrypt.hash(passwordEnClaro, 7);
}

// método de instancia
usuarioSchema.methods.comparePassword = function(passwordEnClaro) {
  return bcrypt.compare(passwordEnClaro, this.password);
}

usuarioSchema.methods.enviarEmail = async function(asunto, cuerpo) {

  const evento = {
    type: 'enviar-email',

    from: process.env.EMAIL_SERVICE_FROM,
    to: this.email,
    subject: asunto,
    html: cuerpo
  }

  return new Promise(resolve => requester.send(evento, resolve));

}

// crear el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);

// exporto el modelo
module.exports = Usuario */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
class Usuarios {
  // esquema de mongoDB
  static hashPassword(passwordEnClaro) {
    return bcrypt.hash(passwordEnClaro, 7);
  }

  comparationPassword(hashPassword) {
    return bcrypt.compare(hashPassword, this.password);
 
  }
  
  siEstoySiendoHeredado(){
    console.log('soy heredado')
    return 'soy heredado'
  }
}
// const usuarioSchema = mongoose.Schema({email: { type: String, unique: true },password: String});
//const Usuario = mongoose.model('Usuario', usuarioSchema);

const schema = mongoose.Schema({
  email: { type: String, unique: true, index: true },
  password: String,
});



schema.loadClass(Usuarios);

const Usuario = mongoose.model("Usuario", schema);

module.exports = Usuario; 
