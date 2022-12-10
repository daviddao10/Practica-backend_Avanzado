'use strict';

// modulo que expota un middleware
module.exports = (req, res, next) => {
  if (!req.session.usuarioLogado) {
    res.redirect('/login');
    return;
  }
  next();
}