const controller = {};
var Kairos = require('./TestKairos');

controller.registrar = (req, res, next) => {
  res.render('registrarconductor');
}


controller.postRegistrar = (req, res, next) => {
  let fotoConductor = req.files.foto;  
  fotoConductor.mv(`src/public/img/conductor/${fotoConductor.name}`,err => {
        if(e rr){
          return res.status(500).send({ message : err })
        } 
/*=====================================================
verificamos si el imagen subido es adecuado para kairos
======================================================*/
        let imagen = 'https://www.abc.es/media/estilo/2017/02/08/cara-kwm-U202521250342CmC-620x650@abc.jpg'
        Kairos.detectar_atributo_de_imagen(imagen,(data)=>{
            if (data) {//si la imagen es correcto
/*=====================================================
REGITRO DE CONDUCTOR
======================================================*/
             postRegistrarConductor(req,res,fotoConductor,id_conductor => {
/*=====================================================
REGISTRO DE IMAGEN EN KAIRO
======================================================*/
                Kairos.registrar_imagen(imagen,id_conductor,(e)=>{
                  console.log(e)
                })
/*=====================================================
REGITRO DE AUTOMOVIL
======================================================*/
                let fotoVehiculo = req.files.fotomovil;  
          fotoVehiculo.mv(`src/public/img/vehiculo/${fotoVehiculo.name}`,err => {
            if(err){
                return res.status(500).send({ message : err })
              }
          }
                postRegistrarAuto(req, res, id,fotoVehiculo.name)               
             });
            }else{
              console.log("imagen  incorrecto") 
            }
        })
  
  })
}
/*=====================================================
REGITRO DE CONDUCTOR
======================================================*/
 postRegistrarConductor = (req, res, fotoConductor,callback) => {
      const userData = {
      id: null,
      ci: req.body.ci,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      foto: fotoConductor,
      email: req.body.email,
      password: req.body.ci,
      tipoCliente: 'no',
      tipoConductor: 'si'
     };
      req.getConnection((err, conn) => {
    conn.query('insert into usuario set ?', [userData], (err, data) =>{
        if (data && data.insertId) {
            callback(data.insertId);
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
/*=====================================================
REGITRO DE AUTO
======================================================*/
postRegistrarAuto = (req, res, id,fotoVehiculo) => {
	const autoData = {
			      id: null,
			      placa: req.body.placa,
			      ruat: req.body.ruat,
			      modelo: req.body.modelo,
			      marca: req.body.marca,
			      color: req.body.color,
			      foto: fotoVehiculo,
			      id_conductor: id 
			     };   
      req.getConnection((err, conn) => {
    conn.query('insert into vehiculo set ?', [autoData], (err, data) =>{
      console.log(data);
        if (data && data.insertId) {
        console.log(data);
     	res.json({
          	status: true,
          	msg: 'success',
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



module.exports = controller


