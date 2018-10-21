const express = require('express');
const router = express.Router();

const customerController = require('../models/user');

router.get('/users', customerController.users);
router.post('/insertUsersCliente', customerController.insertUsersCliente);
router.post('/ingresar', customerController.ingresar);
router.post('/ingresarConductor', customerController.ingresarConductor);
//router.get('/update/:id', customerController.update);
//router.post('/update/:id', customerController.edit);


module.exports = router;

