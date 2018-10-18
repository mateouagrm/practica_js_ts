const controller = {};

controller.users = (req, res) =>{
	req.getConnection((err, conn) =>{
       conn.query('select * from usuario order by id', (err, data) =>{
       	  if (err) {
       	  	 res.json(err);
       	  }else{
            res.status(200).json(data);
       	  }
       });
	});
};

/*controller.insertUsers = (req, res) =>{
    const userData = {
      id: null,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      email: req.body.email,
      password: req.body.password
     };
   req.getConnection((err, conn) => {
    conn.query('insert into cliente set ?', [userData], (err, data) =>{
      console.log(data);
        if (data && data.insertId) {
        console.log(data);
          res.json({
          	status: 'true',
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

};*/


module.exports = controller


