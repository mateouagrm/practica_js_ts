const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

var server = require('http').Server(app);

var	port = process.env.PORT || 3000;

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




//routes
require('./routes/userRoutes')(app);


server.listen( port, () => console.log('Iniciando Express y Socket.IO en localhost:%d', port) );