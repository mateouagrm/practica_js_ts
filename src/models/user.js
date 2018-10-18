const controller = {};

controller.users = (req, res) =>{
	req.getConnection((err, conn) =>{
       conn.query('select * from usuario where tipoCliente=si order by id', (err, data) =>{
       	  if (err) {
       	  	 res.json(err);
       	  }else{
            res.status(200).json(data);
       	  }
       });
	});
};

controller.insertUsersCliente = (req, res) =>{
    const userData = {
      id: null,
      ci: 0,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      direccion: 'null',
      foto: 'null',
      email: req.body.email,
      password: req.body.password,
      tipoCliente: 'si',
      tipoConductor: 'no'
     };
   req.getConnection((err, conn) => {
    conn.query('insert into usuario set ?', [userData], (err, data) =>{
      console.log(data);
        if (data && data.insertId) {
        console.log(data);
          res.json({
          	status: 'true',
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

};


module.exports = controller


