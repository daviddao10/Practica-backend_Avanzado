const {Usuario} = require('../models')
const jwt = require('jsonwebtoken');

class LoginController{
    index(req, res, next) {
        res.locals.error = '';
        res.locals.email = '';
        res.render('login');
      }
    
    async post (req,res, next){
      try {

        const {email, password }=req.body 

       

        const usuario = await Usuario.findOne({ email });
       
        if (!usuario || !(await usuario.comparationPassword(password))) {
          res.locals.error = res.__('Invalid credentials');
          res.locals.email = email;
          res.render('login');
          return;
        }
        console.log(usuario)
        usuario.siEstoySiendoHeredado()



      // req.session.usuarioLogado = usuario._id


        //res.redirect('/logiago')

      } catch (err) {
       next(err) 
      }

    }

    async postJwt(req, res, next){

      try {
        const {email, password} = req.body

        const usuario = await Usuario.findOne({email})

        console.log(usuario)
      // usuario.methods.siEstoySiendoHeredado()

        if (!usuario || !(await usuario.comparationPassword(password)))
          {
            res.status(401);
            res.json({error: 'Inavalid credentials'})
            return;
          }
        const token = jwt.sign({_id:usuario._id},'uifwbibuubcuiuicbubcubc', {expiresIn: '2d'})
        
        res.json({token})
      } catch (err) {
        
        next(err)
      }
    }
  }
module.exports= LoginController