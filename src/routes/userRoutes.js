const express = require('express');
const router = express.Router();

const customerController = require('../models/user');

router.get('/users', customerController.users);
router.post('/insertUsersCliente', customerController.insertUsersCliente);
router.post('/ingresar', customerController.ingresar);
router.post('/ingresarConductor', customerController.ingresarConductor);
router.post('/pedirMovil', customerController.pedirMovil);
router.get('/pedirMovilId/:id', customerController.pedirMovilId);
//router.post('/update/:id', customerController.edit);


module.exports = router;

