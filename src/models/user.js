const controller = {};

controller.users = (req, res) =>{
	req.getConnection((err, conn) =>{
       conn.query('select * from usuario where tipoCliente="si" order by id', (err, data) =>{
       	  console.log(data);
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
      nombre: 'null',
      apellido: 'null',
      telefono: 'null',
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

controller.ingresar = (req, res) =>{
    const userData = {
      email: req.body.email,
      password: req.body.password
     };
  req.getConnection((err, conn) => {
    conn.query('select * from usuario where email=? and password=? and tipoCliente="si"', [userData.email,userData.password], (err, data) =>{
       	  console.log(data);
       	  if (err) {
       	  	 res.json(err);
       	  }else{
       	   if (Object.entries(data).length === 0) {
              res.json({
	          	status: 'false',
	          	msg: 'email o contraseña incorrectos'
	          });
       	   }else{
       	   	  res.json({
	          	status: 'true',
	          	msg: 'ok',
	          	data: data
	          })
       	   }
           
       	  }
    });
   });

};

controller.ingresarConductor = (req, res) =>{
    const userData = {
      email: req.body.email,
      password: req.body.password
     };
  req.getConnection((err, conn) => {
    conn.query('select * from usuario where email=? and password=? and tipoConductor="si"', [userData.email,userData.password], (err, data) =>{
       	  console.log(data);
       	  if (err) {
       	  	 res.json(err);
       	  }else{
       	   if (Object.entries(data).length === 0) {
              res.json({
	          	status: 'false',
	          	msg: 'email o contraseña incorrectos'
	          });
       	   }else{
       	   	  res.json({
	          	status: 'true',
	          	msg: 'ok',
	          	data: data
	          })
       	   }
           
       	  }
    });
   });

};


controller.pedirMovil = (req, res) =>{
    const userData = {
      id: null,
      fecha:'0-21-2514',
      hora: '40:30'
      lat_origen: req.body.lat_origen,
      lon_origen: req.body.lon_origen,
      lat_detino: req.body.lat_detino,
      lon_destino: req.body.lon_destino,
      estado: req.body.estado,
      id_cliente: req.body.id_cliente
     };
            res.json({
              status: 'true',
              msg: 'email o contraseña incorrectos ok',
              data:userData
            });
 /* req.getConnection((err, conn) => {
    conn.query('select * from usuario where email=? and password=? and tipoCliente="si"', [userData.email,userData.password], (err, data) =>{
          console.log(data);
          if (err) {
             res.json(err);
          }else{
           if (Object.entries(data).length === 0) {
              res.json({
              status: 'false',
              msg: 'email o contraseña incorrectos'
            });
           }else{
              res.json({
              status: 'true',
              msg: 'ok',
              data: data
            })
           }
           
          }
    });
   });*/

};


module.exports = controller


