const express = require('express');
const router = express.Router();

const customerController = require('../models/user');

router.get('/users', customerController.users);
router.post('/insertUsers', customerController.insertUsers);
//router.get('/delete/:id', customerController.delete);
//router.get('/update/:id', customerController.update);
//router.post('/update/:id', customerController.edit);


module.exports = router;




/*const User = require('../models/user');

module.exports = function (app) {
  

  app.post('/insertUsers', (req, res) =>{
     const userData = {
      id: null,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      email: req.body.email,
      password: req.body.password
     };
    
     User.insertUser(userData, (err, data) =>{
     	if (data && data.insertId) {
        console.log(data);
          res.json({
          	status: true,
          	msg: 'insertado correctamente ok',
          	data: data
          })
     	}else{
          res.json({
          	status: false,
          	msg: 'error',
          	data: err
          })
     	}
     });

  });

}*/
