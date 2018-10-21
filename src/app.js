const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const mysql = require('mysql');
const myConnection = require('express-myconnection');

var server = require('http').Server(app);

var	port = process.env.PORT || 3000;

const customerRoutes = require('./routes/userRoutes');

const path = require('path');
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

app.use(express.static(path.join(__dirname,'public')));

/*app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'miturista'
}, 'single'));*/

app.use(myConnection(mysql, {
	host: 'sql138.main-hosting.eu.',
	user: 'u868365439_turis',
	password: '123456',
	database: 'u868365439_turis'
}, 'single'));


//routes
app.use('/', customerRoutes);

server.listen( port, () => console.log('Iniciando Express y Socket.IO en localhost:%d', port) );