const express = require('express');
const router = express.Router();

const customerController = require('../models/user');
const conductorController = require('../models/conductorController');

router.get('/users', customerController.users);
router.post('/insertUsersCliente', customerController.insertUsersCliente);
router.post('/ingresar', customerController.ingresar);
router.post('/ingresarConductor', customerController.ingresarConductor);
router.post('/pedirMovil', customerController.pedirMovil);
router.get('/pedirMovilId/:id', customerController.pedirMovilId);
//router.post('/update/:id', customerController.edit);


//registro de conductor
router.get('/registroconductor', conductorController.registrar);
router.post('/registrarConductor', conductorController.postRegistrar);

module.exports = router;

