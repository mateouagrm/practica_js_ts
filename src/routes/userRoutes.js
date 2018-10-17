const User = require('../models/user');

module.exports = function (app) {
  
  app.get('/users', (req, res) =>{
   User.getUsers((err, data) => {
     res.status(200).json(data);
   });
  });

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
          	msg: 'insertado correctamente',
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

}
