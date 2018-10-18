const express = require('express');
const router = express.Router();

const customerController = require('../models/user');

router.get('/users', customerController.users);
router.post('/insertUsers', customerController.insertUsersCliente);
//router.get('/delete/:id', customerController.delete);
//router.get('/update/:id', customerController.update);
//router.post('/update/:id', customerController.edit);


module.exports = router;

